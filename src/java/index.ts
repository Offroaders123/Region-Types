import { Chunk, Region, World } from "../index.js";
import type { BedrockWorld } from "../bedrock/index.js";
import type { LegacyConsoleWorld } from "../legacy-console/index.js";

export class JavaChunk extends Chunk {
  readonly kind = "java";
}

export declare class JavaRegion extends Region {
  readonly kind = "java";

  [Symbol.iterator](): IterableIterator<JavaChunk>;
}

export declare class JavaWorld extends World {
  readonly kind = "java";

  [Symbol.iterator](): IterableIterator<JavaRegion>;

  toBedrock(): Promise<BedrockWorld>;
  toJava(): Promise<JavaWorld>;
  toLegacyConsole(): Promise<LegacyConsoleWorld>;
}