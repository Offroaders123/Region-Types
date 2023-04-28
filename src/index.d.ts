export declare type Kind = "bedrock" | "java" | "legacy-console";

export declare abstract class Region {
  abstract [Symbol.iterator](): IterableIterator<Chunk>;
}

export declare class BedrockRegion extends Region {
  [Symbol.iterator](): IterableIterator<BedrockChunk>;
}

export declare class JavaRegion extends Region {
  [Symbol.iterator](): IterableIterator<JavaChunk>;
}

export declare class LegacyConsoleRegion extends Region {
  [Symbol.iterator](): IterableIterator<LegacyConsoleChunk>;
}

export declare abstract class Chunk {}

export declare class BedrockChunk extends Chunk {
  /**
   * The version the chunk was written in; Ex: `1.19.20`
  */
  readonly Version: string;
}

export declare class JavaChunk extends Chunk {}

export declare class LegacyConsoleChunk extends Chunk {}

export declare abstract class World {
  abstract readonly kind: Kind;

  abstract [Symbol.iterator](): IterableIterator<Region>;

  abstract toBedrock(): Promise<BedrockWorld>;
  abstract toJava(): Promise<JavaWorld>;
  abstract toLegacyConsole(): Promise<LegacyConsoleWorld>;
}

export declare class BedrockWorld extends World {
  readonly kind: "bedrock";

  constructor(data?: Uint8Array);

  [Symbol.iterator](): IterableIterator<BedrockRegion>;

  toBedrock(): Promise<BedrockWorld>;
  toJava(): Promise<JavaWorld>;
  toLegacyConsole(): Promise<LegacyConsoleWorld>;
}

export declare class JavaWorld extends World {
  readonly kind: "java";

  constructor(data?: Uint8Array);

  [Symbol.iterator](): IterableIterator<JavaRegion>;

  toBedrock(): Promise<BedrockWorld>;
  toJava(): Promise<JavaWorld>;
  toLegacyConsole(): Promise<LegacyConsoleWorld>;
}

export declare class LegacyConsoleWorld extends World {
  readonly kind: "legacy-console";

  constructor(data?: Uint8Array);

  [Symbol.iterator](): IterableIterator<LegacyConsoleRegion>;

  toBedrock(): Promise<BedrockWorld>;
  toJava(): Promise<JavaWorld>;
  toLegacyConsole(): Promise<LegacyConsoleWorld>;
}

/**
 * Reads the world from the given directory in the file system.
 * Returns a World object which can manipulate properties of the world from a high level.
*/
export declare function openWorld(path: string): Promise<World>;
export declare function openWorld<T extends World = World>(path: string): Promise<T>;

/**
 * Saves a world back to a given directory in the file system.
*/
export declare function saveWorld(path: string, world: World): Promise<void>;