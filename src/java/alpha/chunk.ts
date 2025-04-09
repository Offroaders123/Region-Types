import type { BooleanTag, IntTag, LongTag, ByteArrayTag } from "nbtify";
import type { BlockEntity } from "./block-entity.js";
import type { Entity } from "./entity.js";

export interface Chunk {
  xPos: IntTag;
  zPos: IntTag;
  TerrainPopulated: BooleanTag;
  LastUpdate: LongTag;
  Blocks: ByteArrayTag;
  Data: ByteArrayTag;
  BlockLight: ByteArrayTag;
  SkyLight: ByteArrayTag;
  HeightMap: ByteArrayTag;
  Entities: Entity[];
  TileEntities: BlockEntity[];
}