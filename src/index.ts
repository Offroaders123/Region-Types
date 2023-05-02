export * from "./bedrock/index.js";
export * from "./java/index.js";
export * from "./legacy-console/index.js";

import type { BedrockWorld } from "./bedrock/index.js";
import type { JavaWorld } from "./java/index.js";
import type { LegacyConsoleWorld } from "./legacy-console/index.js";

export type Kind = "bedrock" | "java" | "legacy-console";

export abstract class Chunk {
  abstract readonly kind: Kind;
}

export abstract class Region {
  abstract readonly kind: Kind;
  abstract [Symbol.iterator](): IterableIterator<Chunk>;
}

export abstract class World {
  abstract readonly kind: Kind;
  abstract [Symbol.iterator](): IterableIterator<Region>;

  abstract toBedrock(): Promise<BedrockWorld>;
  abstract toJava(): Promise<JavaWorld>;
  abstract toLegacyConsole(): Promise<LegacyConsoleWorld>;
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