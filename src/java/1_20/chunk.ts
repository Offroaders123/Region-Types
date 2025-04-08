import type { ByteTag, ShortTag, IntTag, LongTag, StringTag, ByteArrayTag, LongArrayTag } from "nbtify";
import type { BiomeResource } from "./biome.js";
import type { BlockState } from "./block.js";
import type { BlockEntity } from "./block-entity.js";
import type { Entity } from "./entity.js";
import type { Structure, StructureResource } from "./structure.js";
import type { TileTick } from "./tile-tick.js";

export interface Chunk {
  DataVersion: IntTag;
  xPos: IntTag;
  zPos: IntTag;
  yPos: IntTag;
  Status: StringTag;
  LastUpdate: LongTag;
  sections: Section[];
  block_entities: BlockEntity[];
  CarvingMasks: CarvingMasks;
  Heightmaps: Heightmaps;
  Lights: Lights;
  Entities: Entity[];
  fluid_ticks: TileTick[];
  block_ticks: TileTick[];
  InhabitedTime: LongTag;
  PostProcessing: ToBeTicked[];
  structures: Structures;
}

export interface Section {
  Y: ByteTag;
  block_states: {
    palette: BlockState[];
    data?: LongArrayTag;
  };
  biomes: {
    palette: `${BiomeResource}`[];
    data?: LongArrayTag;
  };
  BlockLight: ByteArrayTag;
  SkyLight: ByteArrayTag;
}

export interface CarvingMasks {
  AIR: ByteArrayTag;
  LIQUID: ByteArrayTag;
}

export interface Heightmaps {
  MOTION_BLOCKING: LongArrayTag;
  MOTION_BLOCKING_NO_LEAVES: LongArrayTag;
  OCEAN_FLOOR: LongArrayTag;
  OCEAN_FLOOR_WG: LongArrayTag;
  WORLD_SURFACE: LongArrayTag;
  WORLD_SURFACE_WG: LongArrayTag;
}

export type Lights = ShortTag[][];

export type ToBeTicked = ShortTag[];

export interface Structures {
  References: {
    [K in StructureResource]?: LongArrayTag;
  };
  starts: {
    [K in StructureResource]?: Structure;
  };
}