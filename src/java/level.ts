import type { BooleanTag, ByteTag, IntTag, LongTag, FloatTag, DoubleTag, StringTag } from "nbtify";
import type { DimensionResource } from "./dimension.js";
import type { Player } from "./entity.js";

export interface LevelDat {
  Data: {
    Difficulty: ByteTag<Difficulty>;
    thunderTime: IntTag;
    BorderSize: DoubleTag;
    LastPlayed: LongTag;
    allowCommands: BooleanTag;
    BorderCenterX: DoubleTag;
    initialized: BooleanTag;
    BorderWarningBlocks: DoubleTag;
    hardcore: BooleanTag;
    version: IntTag;
    ServerBrands: [StringTag];
    SpawnX: IntTag;
    GameType: IntTag<GameType>;
    BorderSafeZone: DoubleTag;
    SpawnAngle: FloatTag;
    LevelName: StringTag;
    Time: LongTag;
    ScheduledEvents: ScheduledEvents;
    clearWeatherTime: IntTag;
    BorderDamagePerBlock: DoubleTag;
    WanderingTraderSpawnDelay: IntTag;
    thundering: BooleanTag;
    WasModded: BooleanTag;
    BorderWarningTime: DoubleTag;
    WanderingTraderSpawnChance: IntTag;
    SpawnY: IntTag;
    SpawnZ: IntTag;
    BorderSizeLerpTime: LongTag;
    raining: BooleanTag;
    WorldGenSettings: WorldGenSettings;
    rainTime: IntTag;
    DataPacks: DataPacks;
    DataVersion: IntTag;
    GameRules: GameRules;
    DragonFight: DragonFight;
    Player: Player;
    DifficultyLocked: BooleanTag;
    DayTime: LongTag;
    BorderCenterZ: DoubleTag;
    BorderSizeLerpTarget: DoubleTag;
    Version: Version;
    CustomBossEvents: CustomBossEvents;
  };
}

export type Difficulty = 0 | 1 | 2 | 3;

export type GameType = 0 | 1 | 2 | 3;

export type ScheduledEvents = [
  // Needs types!
];

export interface WorldGenSettings {
  bonus_chest: BooleanTag;
  seed: LongTag;
  generate_features: BooleanTag;
  dimensions: {
    [DimensionResource.the_nether]: {
      type: StringTag;
      generator: {
        type: StringTag;
        seed: LongTag;
        biome_source: {
          type: StringTag;
          preset: StringTag;
        };
        settings: StringTag;
      };
    };
    [DimensionResource.overworld]: {
      type: StringTag;
      generator: {
        type: StringTag;
        settings: {
          features: BooleanTag;
          lakes: BooleanTag;
          layers: [
            {
              block: StringTag;
              height: IntTag;
            },
            {
              block: StringTag;
              height: IntTag;
            }
          ];
          biome: StringTag;
        };
      };
    };
    [DimensionResource.the_end]: {
      type: StringTag;
      generator: {
        type: StringTag;
        seed: LongTag;
        biome_source: {
          type: StringTag;
          seed: LongTag;
        };
        settings: StringTag;
      };
    };
  };
}

export interface DataPacks {
  Disabled: StringTag[];
  Enabled: StringTag[];
}

export interface GameRules {
  forgiveDeadPlayers: `${boolean}`;
  doInsomnia: `${boolean}`;
  fallDamage: `${boolean}`;
  doDaylightCycle: `${boolean}`;
  spawnRadius: `${number}`;
  doWeatherCycle: `${boolean}`;
  doPatrolSpawning: `${boolean}`;
  maxCommandChainLength: `${number}`;
  universalAnger: `${boolean}`;
  fireDamage: `${boolean}`;
  doImmediateRespawn: `${boolean}`;
  playersSleepingPercentage: `${number}`;
  maxEntityCramming: `${boolean}`;
  doMobSpawning: `${boolean}`;
  showDeathMessages: `${boolean}`;
  announceAdvancements: `${boolean}`;
  disableRaids: `${boolean}`;
  naturalRegeneration: `${boolean}`;
  reducedDebugInfo: `${boolean}`;
  drowningDamage: `${boolean}`;
  sendCommandFeedback: `${boolean}`;
  doLimitedCrafting: `${boolean}`;
  commandBlockOutput: `${boolean}`;
  doTraderSpawning: `${boolean}`;
  doFireTick: `${boolean}`;
  mobGriefing: `${boolean}`;
  spectatorsGenerateChunks: `${boolean}`;
  doEntityDrops: `${boolean}`;
  doTileDrops: `${boolean}`;
  keepInventory: `${boolean}`;
  randomTickSpeed: `${boolean}`;
  freezeDamage: `${boolean}`;
  doMobLoot: `${boolean}`;
  disableElytraMovementCheck: `${boolean}`;
  logAdminCommands: `${boolean}`;
}

export interface DragonFight {
  PreviouslyKilled: BooleanTag;
  NeedsStateScanning: BooleanTag;
  Gateways: Gateways;
  DragonKilled: BooleanTag;
}

export type Gateways = [IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag];

export interface Version {
  Id: IntTag;
  Name: StringTag;
  Series: StringTag;
  Snapshot: BooleanTag;
}

export interface CustomBossEvents {
 // Needs types also
}