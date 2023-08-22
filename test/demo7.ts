export type World = BedrockWorld | JavaWorld;

export interface BedrockWorld {
  "level.dat": File;
  "levelname.txt": File;
  "world_icon.jpeg": File;
}

export interface JavaWorld {
  "icon.png": File;
  "level.dat": File;
}

export function readWorld<T extends World>(world: Uint8Array | ArrayBufferLike | File[]): T {
  const files: Record<string, File> = getWorldFileEntries(world);

  const levelDat = files["level.dat"];
}

export declare function getWorldFileEntries(world: Uint8Array | ArrayBufferLike | File[]): Record<string, File>;