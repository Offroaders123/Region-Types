import { read, write } from "nbtify";

import type { Format, ShortTag, IntTag } from "nbtify";

export interface LegacyConsoleChunk {
  FormatVersion: ShortTag;
  X: IntTag;
}

export const LEGACY_CONSOLE_NBT_FORMAT = {
  rootName: "",
  endian: "big",
  compression: "deflate-raw",
  bedrockLevel: null
} as const satisfies Format;

export async function readChunk(data: Uint8Array | ArrayBufferLike): Promise<LegacyConsoleChunk> {
  const { data: chunk } = await read<LegacyConsoleChunk>(data,LEGACY_CONSOLE_NBT_FORMAT);
  return chunk;
}

export async function writeChunk(data: LegacyConsoleChunk): Promise<Uint8Array> {
  return write(data,LEGACY_CONSOLE_NBT_FORMAT);
}