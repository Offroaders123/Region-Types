import type { ByteTag, ShortTag, IntTag, LongTag, StringTag, ByteArrayTag } from "nbtify";
import type { BlockEntity } from "./block-entity.js";
import type { Entity } from "./entity.js";

export interface Level {
  Environment: Environment;
  Map: Map;
  TileEntities: BlockEntity[];
  About: About;
  Entities: Entity[];
}

export interface Environment {
  SurroundingGroundHeight: ShortTag;
  TimeOfDay: ShortTag;
  CloudHeight: ShortTag;
  CloudColor: IntTag;
  SkyBrightness: ByteTag;
  SkyColor: IntTag;
  FogColor: IntTag;
  SurroundingWaterHeight: ShortTag;
  SurroundingGroundType: ByteTag;
  SurroundingWaterType: ByteTag;
}

export interface Map {
  Blocks: ByteArrayTag;
  Length: ShortTag;
  Height: ShortTag;
  Data: ByteArrayTag;
  Width: ShortTag;
  Spawn: [ShortTag, ShortTag, ShortTag];
}

export interface About {
  Author: StringTag;
  CreatedOn: LongTag;
  Name: StringTag;
}