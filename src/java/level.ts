import type { BooleanTag, ByteTag, IntTag, LongTag, DoubleTag, StringTag, IntArrayTag } from "nbtify";
import type { DimensionID } from "./dimension.js";
import type { Player } from "./entity.js";

export interface LevelDat {
  Data: {
    allowCommands: BooleanTag;
    BorderCenterX: DoubleTag;
    BorderCenterY: DoubleTag;
    BorderDamagePerBlock: DoubleTag;
    BorderSize: DoubleTag;
    BorderSafeZone: DoubleTag;
    BorderSizeLerpTarget: DoubleTag;
    BorderSizeLerpTime: LongTag;
    BorderWarningBlocks: DoubleTag;
    BorderWarningTime: DoubleTag;
    clearWeatherTime: IntTag;
    CustomBossEvents: CustomBossEvents;
    DataPacks: DataPacks;
    DataVersion: IntTag;
    DayTime: LongTag;
    Difficulty: ByteTag<Difficulty>;
    DifficultyLocked: BooleanTag;
    DimensionData: DimensionData;
    GameRules: GameRules;
    WorldGenSettings: WorldGenSettings;
    GameType: IntTag<GameType>;
    generatorName: GeneratorName;
    generatorOptions: {}; // `GeneratorOptions`
    generatorVersion: IntTag;
    hardcore: BooleanTag;
    initialized: BooleanTag;
    LastPlayed: LongTag;
    LevelName: StringTag;
    MapFeatures: BooleanTag;
    Player: Player;
    raining: BooleanTag;
    rainTime: IntTag;
    RandomSeed: LongTag;
    SizeOnDisk: LongTag;
    SpawnX: IntTag;
    SpawnY: IntTag;
    SpawnZ: IntTag;
    thundering: BooleanTag;
    thunderTime: IntTag;
    Time: LongTag;
    version: IntTag;
    Version: Version;
    WanderingTraderId: IntArrayTag;
    WanderingTraderSpawnChance: IntTag;
    WanderingTraderSpawnDelay: IntTag;
    WasModded: BooleanTag;
  };
}

export type CustomBossEvents = {
  [CustomBossBarResource in StringTag]: CustomBossEvent;
};

export interface CustomBossEvent {
  Players: IntArrayTag[];
  Color: BossBarColor;
  CreateWorldFog: BooleanTag;
  DarkenScreen: BooleanTag;
  Max: IntTag;
  Value: IntTag;
  Name: StringTag; // JSON text component?
  Overlay: BossBarOverlay;
  PlayBossMusic: BooleanTag;
  Visible: BooleanTag;
}

export type BossBarColor = "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "42" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "light_purple" | "yellow" | "white" | "minecoin_gold" | "material_quartz" | "material_iron" | "material_netherite" | "material_redstone" | "material_copper" | "material_gold" | "material_emerald" | "material_diamond" | "material_lapis" | "material_amethyst";

export type BossBarOverlay = "progress" | "notched_6" | "notched_10" | "notched_12" | "notched_20";

export interface DataPacks {
  Disabled: StringTag[];
  Enabled: StringTag[];
}

export type Difficulty = 0 | 1 | 2 | 3;

export interface DimensionData {
  [DimensionID.the_end]: {
    DragonFight?: DragonFight;
  };
}

export interface DragonFight {
  ExitPortalLocation: ExitPortalLocation;
  Gateways: IntTag[]; // 0 - 19
  DragonKilled: BooleanTag;
  DragonUUIDLeast: LongTag;
  DragonUUIDMost: LongTag;
  PreviouslyKilled: BooleanTag;
}

export interface ExitPortalLocation {
  X: ByteTag;
  Y: ByteTag;
  Z: ByteTag;
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

export interface WorldGenSettings {
  bonus_chest: BooleanTag;
  seed: LongTag;
  generate_features: BooleanTag;
  dimensions: {}; // `WorldGenDimensions`
}

export type GameType = 0 | 1 | 2 | 3;

export type GeneratorName = "default" | "flat" | "largeBiomes" | "amplified" | "buffet" | "debug_all_block_states" | "default_1_1" | "customized";

export interface Version {
  Id: IntTag;
  Name: StringTag;
  Series: StringTag;
  Snapshot: BooleanTag;
}