import { readFile } from "node:fs/promises";
import JSZip from "jszip";

const archive = await readFile(new URL("./Hermit Flies.mcworld",import.meta.url));
const zip = new JSZip();
const files = await zip.loadAsync(archive);

for (const file of Object.values(files.files)){
  console.log(file.name);
}