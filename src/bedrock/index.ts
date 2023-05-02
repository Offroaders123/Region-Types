import { Region, Chunk, World } from "../index.js";
import type { JavaWorld } from "../java/index.js";
import type { LegacyConsoleWorld } from "../legacy-console/index.js";

export declare class BedrockChunk extends Chunk {
  readonly kind = "bedrock";

  /**
   * The version the chunk was written in; Ex: `1.19.20`
  */
  readonly Version: string;
}

export declare class BedrockRegion extends Region {
  readonly kind = "bedrock";

  [Symbol.iterator](): IterableIterator<BedrockChunk>;
}

export declare class BedrockWorld extends World {
  readonly kind: "bedrock";

  [Symbol.iterator](): IterableIterator<BedrockRegion>;

  toBedrock(): Promise<BedrockWorld>;
  toJava(): Promise<JavaWorld>;
  toLegacyConsole(): Promise<LegacyConsoleWorld>;
}