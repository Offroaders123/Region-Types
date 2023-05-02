import { readFile } from "node:fs/promises";

const ZIP_MAGIC_HEADER = 0x504B0304;

const mcworld = await readFile(new URL("./Hermit Flies.mcworld",import.meta.url));
const gamedata = await readFile(new URL("./GAMEDATA",import.meta.url));
console.log(mcworld);
console.log(gamedata);

console.log(new DataView(mcworld.buffer,0,4).getUint32(0) === ZIP_MAGIC_HEADER);
console.log(new DataView(gamedata.buffer,0,4).getUint32(0));