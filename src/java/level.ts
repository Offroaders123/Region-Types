import type { BooleanTag, ByteTag, ShortTag, IntTag, LongTag, FloatTag, DoubleTag, StringTag, CompoundTag, IntArrayTag } from "nbtify";
import type { DimensionResource } from "./dimension.js";
import type { Item } from "./item.js";
import type { RecipeResource } from "./recipe.js";

export interface LevelDat extends CompoundTag {
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
    Player: TempPlayer;
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

export interface WorldGenSettings extends CompoundTag {
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

export interface DataPacks extends CompoundTag {
  Disabled: StringTag[];
  Enabled: StringTag[];
}

export interface GameRules extends CompoundTag {
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

export interface DragonFight extends CompoundTag {
  PreviouslyKilled: BooleanTag;
  NeedsStateScanning: BooleanTag;
  Gateways: Gateways;
  DragonKilled: BooleanTag;
}

export type Gateways = [IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag];

/**
 * This should come from the Entity module eventually.
 * 
 * @deprecated
*/
export interface TempPlayer extends CompoundTag {
  seenCredits: BooleanTag;
  DeathTime: ShortTag;
  foodTickTimer: IntTag;
  recipeBook: {
    recipes: RecipeResource[];
    isGuiOpen: BooleanTag;
    toBeDisplayed: RecipeResource[];
    isSmokerGuiOpen: BooleanTag;
    isFurnaceFilteringCraftable: BooleanTag;
    isFurnaceGuiOpen: BooleanTag;
    isBlastingFurnaceFilteringCraftable: BooleanTag;
    isBlastingFurnaceGuiOpen: BooleanTag;
    isFilteringCraftable: BooleanTag;
    isSmokerFilteringCraftable: BooleanTag;
  };
  XpTotal: IntTag;
  OnGround: BooleanTag;
  AbsorptionAmount: FloatTag;
  playerGameType: IntTag;
  Attributes: [
    {
      Name: StringTag;
      Base: DoubleTag;
    }
  ];
  Invulnerable: BooleanTag;
  SelectedItemSlot: IntTag;
  Brain: {
    memories: {};
  };
  Dimension: StringTag;
  ActiveEffects: [
    {
      ShowIcon: BooleanTag;
      ShowParticles: BooleanTag;
      Id: ByteTag;
      Duration: IntTag;
      Ambient: BooleanTag;
      Amplifier?: ByteTag;
    }
  ];
  abilities: {
    walkSpeed: FloatTag;
    instabuild: BooleanTag;
    flying: BooleanTag;
    flySpeed: FloatTag;
    mayfly: BooleanTag;
    invulnerable: BooleanTag;
    mayBuild: BooleanTag;
  };
  Score: IntTag;
  Rotation: [FloatTag, FloatTag];
  HurtByTimestamp: IntTag;
  foodSaturationLevel: FloatTag;
  Air: ShortTag;
  EnderItems: [];
  XpSeed: IntTag;
  foodLevel: IntTag;
  UUID: IntArrayTag;
  XpLevel: IntTag;
  Inventory: Item[];
  Motion: [DoubleTag, DoubleTag, DoubleTag];
  FallDistance: FloatTag;
  DataVersion: IntTag;
  SleepTimer: ShortTag;
  XpP: FloatTag;
  previousPlayerGameType: IntTag;
  Pos: [DoubleTag, DoubleTag, DoubleTag];
  Health: FloatTag;
  HurtTime: ShortTag;
  FallFlying: BooleanTag;
  Fire: ShortTag;
  PortalCooldown: IntTag;
  foodExhaustionLevel: FloatTag;
}

export interface Version extends CompoundTag {
  Id: IntTag;
  Name: StringTag;
  Series: StringTag;
  Snapshot: BooleanTag;
}

export interface CustomBossEvents extends CompoundTag {
 // Needs types also
}