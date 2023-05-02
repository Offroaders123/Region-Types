import type { World } from "./World.js";

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