import type { Kind } from "./World.js";

export abstract class Chunk {
  abstract readonly kind: Kind;
}

export declare class BedrockChunk extends Chunk {
  readonly kind = "bedrock";

  /**
   * The version the chunk was written in; Ex: `1.19.20`
  */
  readonly Version: string;
}

export class JavaChunk extends Chunk {
  readonly kind = "java";
}

export declare class LegacyConsoleChunk extends Chunk {
  readonly kind = "legacy-console";
}