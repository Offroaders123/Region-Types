export declare type Kind = "bedrock" | "java" | "legacy-console";

export declare abstract class Chunk {
  abstract readonly version: number;
}

export declare class BedrockChunk extends Chunk {
  readonly version: number;
}

export declare abstract class World {
  abstract readonly kind: Kind;

  abstract toBedrock(): Promise<BedrockWorld>;
  abstract toJava(): Promise<JavaWorld>;
  abstract toLegacyConsole(): Promise<LegacyConsoleWorld>;
}

export declare class BedrockWorld extends World {
  readonly kind: "bedrock";

  toBedrock(): Promise<BedrockWorld>;
  toJava(): Promise<JavaWorld>;
  toLegacyConsole(): Promise<LegacyConsoleWorld>;
}

export declare class JavaWorld extends World {
  readonly kind: "java";

  toBedrock(): Promise<BedrockWorld>;
  toJava(): Promise<JavaWorld>;
  toLegacyConsole(): Promise<LegacyConsoleWorld>;
}

export declare class LegacyConsoleWorld extends World {
  readonly kind: "legacy-console";

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