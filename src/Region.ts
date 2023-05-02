import type { Kind } from "./World.js";
import type { Chunk, BedrockChunk, JavaChunk, LegacyConsoleChunk } from "./Chunk.js";

export abstract class Region {
  abstract readonly kind: Kind;
  abstract [Symbol.iterator](): IterableIterator<Chunk>;
}

export declare class BedrockRegion extends Region {
  readonly kind = "bedrock";
  [Symbol.iterator](): IterableIterator<BedrockChunk>;
}

export declare class JavaRegion extends Region {
  readonly kind = "java";
  [Symbol.iterator](): IterableIterator<JavaChunk>;
}

export declare class LegacyConsoleRegion extends Region {
  readonly kind = "legacy-console";
  [Symbol.iterator](): IterableIterator<LegacyConsoleChunk>;
}