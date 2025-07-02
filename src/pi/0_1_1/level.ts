import type { IntTag, LongTag, StringTag } from "nbtify";
import type { Entity, Player } from "./entity.js";
import type { TileEntity } from "./tile-entity.js";

export interface LevelDat {
  GameType: IntTag<GameMode>;
  LastPlayed: LongTag;
  LevelName: StringTag;
  Platform: IntTag; // might be an enum of values; likely the same case for Bedrock types too, since this is PE essentially
  Player: Player;
  RandomSeed: LongTag;
  SizeOnDisk: LongTag;
  SpawnX: IntTag;
  SpawnY: IntTag;
  SpawnZ: IntTag;
  StorageVersion: IntTag<3>; // always 3?
  Time: LongTag;
  dayCycleStopTime: LongTag;
  spawnMobs: IntTag<0 | 1>;
}

export type GameMode = 0 | 1;

export interface EntityDat {
  Entities: Entity[];
  TileEntities: TileEntity[];
}