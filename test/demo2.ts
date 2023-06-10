import { readFile } from "node:fs/promises";
import { readWorld, type BedrockWorld } from "./src/index.js";

// Reads the world save as a single file from the file system.
const buffer: Buffer = await readFile("./Survival-World.mcworld");

// Creates a 'world object' from that world file binary data.
const world: BedrockWorld = await readWorld(buffer);

// Could be neat if you could just use a simple 'for' loop to iterate over all the Regions in the world.
for (const region of world){
  // You could then also go over each chunk in those regions, maybe.
  for (const chunk of region){
    // 'Version' would be referencing one of the chunk's NBT header values. This is already something used by the game.
    console.log(chunk.Version);
  }
}