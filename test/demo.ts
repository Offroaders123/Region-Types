import { openWorld, saveWorld, type JavaWorld } from "./src/index.js";

const javaWorld = await openWorld<JavaWorld>("~/.minecraft/saves/Solo-Survival/");
console.log(javaWorld.kind);

const bedrockWorld = await javaWorld.toBedrock();
console.log(bedrockWorld.kind);

await saveWorld("~/Desktop/",bedrockWorld);