import type { Region, BedrockRegion, JavaRegion, LegacyConsoleRegion } from "./Region.js";

export type Kind = "bedrock" | "java" | "legacy-console";

export type World = BedrockWorld | JavaWorld | LegacyConsoleWorld;

export interface WorldLike {
  readonly kind: Kind;
  [Symbol.iterator](): IterableIterator<Region>;

  toBedrock(): Promise<BedrockWorld>;
  toJava(): Promise<JavaWorld>;
  toLegacyConsole(): Promise<LegacyConsoleWorld>;
}

export declare class BedrockWorld implements WorldLike {
  readonly kind: "bedrock";
  [Symbol.iterator](): IterableIterator<BedrockRegion>;

  toBedrock(): Promise<BedrockWorld>;
  toJava(): Promise<JavaWorld>;
  toLegacyConsole(): Promise<LegacyConsoleWorld>;
}

export declare class JavaWorld implements WorldLike {
  readonly kind = "java";
  [Symbol.iterator](): IterableIterator<JavaRegion>;

  toBedrock(): Promise<BedrockWorld>;
  toJava(): Promise<JavaWorld>;
  toLegacyConsole(): Promise<LegacyConsoleWorld>;
}

export declare class LegacyConsoleWorld implements WorldLike {
  readonly kind = "legacy-console";
  [Symbol.iterator](): IterableIterator<LegacyConsoleRegion>;

  toBedrock(): Promise<BedrockWorld>;
  toJava(): Promise<JavaWorld>;
  toLegacyConsole(): Promise<LegacyConsoleWorld>;
}