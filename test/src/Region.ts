import type { Kind } from "./World.js";
import type { Chunk, BedrockChunk, JavaChunk, LegacyConsoleChunk } from "./Chunk.js";

export type Region = BedrockRegion | JavaRegion | LegacyConsoleRegion;

export interface RegionLike {
  readonly kind: Kind;
  [Symbol.iterator](): IterableIterator<Chunk>;
}

export declare class BedrockRegion implements RegionLike {
  readonly kind = "bedrock";
  [Symbol.iterator](): IterableIterator<BedrockChunk>;
}

export declare class JavaRegion implements RegionLike {
  readonly kind = "java";
  [Symbol.iterator](): IterableIterator<JavaChunk>;
}

export declare class LegacyConsoleRegion implements RegionLike {
  readonly kind = "legacy-console";
  [Symbol.iterator](): IterableIterator<LegacyConsoleChunk>;
}