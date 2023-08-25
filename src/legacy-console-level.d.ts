import type { BooleanTag, ByteTag, IntTag, LongTag, StringTag, CompoundTag } from "nbtify";

export interface LevelDat extends CompoundTag {
  Data: {
    BiomeCentreXChunk: IntTag;
    BiomeScale: IntTag;
    XZSize: IntTag;
    StrongholdEndPortalZ: IntTag;
    StrongholdEndPortalX: IntTag;
    hasStrongholdEndPortal: BooleanTag;
    StrongholdZ: IntTag;
    StrongholdY: IntTag;
    StrongholdX: IntTag;
    HellScale: IntTag;
    SizeOnDisk: LongTag;
    DimensionData: {
      "The End": {
        DragonFight: {
          DragonKilled: BooleanTag;
          PreviouslyKilled: BooleanTag;
          Gateways: [IntTag];
        }
      }
    };
    BiomeCentreZChunk: IntTag;
    newSeaLevel: BooleanTag;
    RandomSeed: LongTag;
    thunderTime: IntTag;
    raining: BooleanTag;
    initialized: BooleanTag;
    version: IntTag;
    ModernEnd: BooleanTag;
    generatorVersion: IntTag;
    LevelName: StringTag;
    Difficulty: ByteTag<0 | 1 | 2 | 3>;
    DataVersion: IntTag;
    hasStronghold: BooleanTag;
    SpawnX: IntTag;
    DayTime: LongTag;
    hasBeenInCreative: BooleanTag;
    thundering: BooleanTag;
    GameType: IntTag;
    Time: LongTag;
    spawnBonusChest: BooleanTag;
    clearWeatherTime: IntTag;
    MapFeatures: BooleanTag;
    SpawnY: IntTag;
    LastPlayed: LongTag;
    allowCommands: BooleanTag;
    hardcore: BooleanTag;
    generatorName: StringTag;
    DifficultyLocked: BooleanTag;
    rainTime: IntTag;
    SpawnZ: IntTag;
  }
}