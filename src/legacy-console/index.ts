import { Chunk, Region, World } from "../index.js";
import type { BedrockWorld } from "../bedrock/index.js";
import type { JavaWorld } from "../java/index.js";

export declare class LegacyConsoleChunk extends Chunk {
  readonly kind = "legacy-console";
}

export declare class LegacyConsoleRegion extends Region {
  readonly kind = "legacy-console";

  [Symbol.iterator](): IterableIterator<LegacyConsoleChunk>;
}

export declare class LegacyConsoleWorld extends World {
  readonly kind = "legacy-console";

  [Symbol.iterator](): IterableIterator<LegacyConsoleRegion>;

  toBedrock(): Promise<BedrockWorld>;
  toJava(): Promise<JavaWorld>;
  toLegacyConsole(): Promise<LegacyConsoleWorld>;
}