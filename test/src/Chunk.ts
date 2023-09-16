import type { Kind } from "./World.js";

export type Chunk = BedrockChunk | JavaChunk | LegacyConsoleChunk;

export interface ChunkLike {
  readonly kind: Kind;
}

export declare class BedrockChunk implements ChunkLike {
  readonly kind = "bedrock";

  /**
   * The version the chunk was written in; Ex: `1.19.20`
  */
  readonly Version: string;
}

export class JavaChunk implements ChunkLike {
  readonly kind = "java";
}

export declare class LegacyConsoleChunk implements ChunkLike {
  readonly kind = "legacy-console";
}