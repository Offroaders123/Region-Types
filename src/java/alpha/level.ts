import type { IntTag, LongTag } from "nbtify";
import type { Player } from "./entity.js";

export interface Level {
  Data: {
    LastPlayed: LongTag;
    SizeOnDisk: LongTag;
    RandomSeed: LongTag;
    SpawnX: IntTag;
    SpawnY: IntTag;
    SpawnZ: IntTag;
    Time: LongTag;
    Player: Player;
  };
}