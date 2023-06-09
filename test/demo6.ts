import { read, write, NBTData, type FormatOptions, type ShortTag, type IntTag } from "nbtify";

export interface LegacyConsoleChunk {
  FormatVersion: ShortTag;
  X: IntTag;
}

export type LegacyConsoleNBTFormat = typeof LEGACY_CONSOLE_NBT_FORMAT;

export const LEGACY_CONSOLE_NBT_FORMAT = {
  name: "",
  endian: "big",
  compression: "deflate-raw",
  bedrockLevel: null
} as const satisfies FormatOptions;

export type LegacyConsoleChunkData = NBTData<LegacyConsoleChunk,LegacyConsoleNBTFormat>;

export async function readChunk(data: Uint8Array | ArrayBufferLike): Promise<LegacyConsoleChunkData> {
  return read(data,LEGACY_CONSOLE_NBT_FORMAT);
}

export async function writeChunk(data: LegacyConsoleChunkData): Promise<Uint8Array> {
  return write(data);
}