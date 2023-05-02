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