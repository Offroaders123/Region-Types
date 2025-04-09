import type { BooleanTag, IntTag, LongTag, ByteArrayTag } from "nbtify";

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