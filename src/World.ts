import type { Region, BedrockRegion, JavaRegion, LegacyConsoleRegion } from "./Region.js";

export type Kind = "bedrock" | "java" | "legacy-console";

export abstract class World {
  abstract readonly kind: Kind;
  abstract [Symbol.iterator](): IterableIterator<Region>;

  abstract toBedrock(): Promise<BedrockWorld>;
  abstract toJava(): Promise<JavaWorld>;
  abstract toLegacyConsole(): Promise<LegacyConsoleWorld>;
}

export declare class BedrockWorld extends World {
  readonly kind: "bedrock";
  [Symbol.iterator](): IterableIterator<BedrockRegion>;

  toBedrock(): Promise<BedrockWorld>;
  toJava(): Promise<JavaWorld>;
  toLegacyConsole(): Promise<LegacyConsoleWorld>;
}

export declare class JavaWorld extends World {
  readonly kind = "java";
  [Symbol.iterator](): IterableIterator<JavaRegion>;

  toBedrock(): Promise<BedrockWorld>;
  toJava(): Promise<JavaWorld>;
  toLegacyConsole(): Promise<LegacyConsoleWorld>;
}

export declare class LegacyConsoleWorld extends World {
  readonly kind = "legacy-console";
  [Symbol.iterator](): IterableIterator<LegacyConsoleRegion>;

  toBedrock(): Promise<BedrockWorld>;
  toJava(): Promise<JavaWorld>;
  toLegacyConsole(): Promise<LegacyConsoleWorld>;
}

/**
 * Reads a world from a single source file, like `.zip` or `.mcworld`.
*/
export declare function readWorld<T extends World = World>(file: Uint8Array | ArrayBufferLike): Promise<T>;
export declare function readWorld(file: Uint8Array | ArrayBufferLike): Promise<World>;

/**
 * Reads the world from the given directory in the file system.
 * Returns a World object which can manipulate properties of the world from a high level.
*/
export declare function openWorld<T extends World = World>(path: string): Promise<T>;
export declare function openWorld(path: string): Promise<World>;

/**
 * Saves a world back to a given directory in the file system.
*/
export declare function saveWorld(path: string, world: World): Promise<void>;