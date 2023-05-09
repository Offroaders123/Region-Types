import type { Chunk, Region, World } from "../src/index.js";

declare const chunk: Chunk;

if (chunk.kind === "bedrock"){
  chunk.Version;
}

declare const region: Region;

if (region.kind === "java"){
  region; // JavaRegion
}

declare const world: World;

if (world.kind === "legacy-console"){
  world; // LegacyConsoleWorld
}