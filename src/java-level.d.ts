import type { BooleanTag, ByteTag, ShortTag, IntTag, LongTag, FloatTag, DoubleTag, StringTag, CompoundTag, IntArrayTag } from "nbtify";

export type BooleanStringTag = `${boolean}`;

export interface LevelDat extends CompoundTag {
  Data: {
    Difficulty: ByteTag;
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
    GameType: IntTag<0 | 1 | 2 | 3>;
    BorderSafeZone: DoubleTag;
    SpawnAngle: FloatTag;
    LevelName: StringTag;
    Time: LongTag;
    ScheduledEvents: [];
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
    WorldGenSettings: {
      bonus_chest: BooleanTag;
      seed: LongTag;
      generate_features: BooleanTag;
      dimensions: {
        "minecraft:the_nether": {
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
        "minecraft:overworld": {
          type: StringTag;
          generator: {
            type: StringTag;
            settings: {
              features: ByteTag;
              lakes: ByteTag;
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
        "minecraft:the_end": {
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
    };
    rainTime: IntTag;
    DataPacks: {
      Disabled: [];
      Enabled: [StringTag, StringTag];
    };
    DataVersion: IntTag;
    GameRules: {
      forgiveDeadPlayers: BooleanStringTag;
      doInsomnia: BooleanStringTag;
      fallDamage: BooleanStringTag;
      doDaylightCycle: BooleanStringTag;
      spawnRadius: StringTag;
      doWeatherCycle: BooleanStringTag;
      doPatrolSpawning: BooleanStringTag;
      maxCommandChainLength: StringTag;
      universalAnger: BooleanStringTag;
      fireDamage: BooleanStringTag;
      doImmediateRespawn: BooleanStringTag;
      playersSleepingPercentage: StringTag;
      maxEntityCramming: BooleanStringTag;
      doMobSpawning: BooleanStringTag;
      showDeathMessages: BooleanStringTag;
      announceAdvancements: BooleanStringTag;
      disableRaids: BooleanStringTag;
      naturalRegeneration: BooleanStringTag;
      reducedDebugInfo: BooleanStringTag;
      drowningDamage: BooleanStringTag;
      sendCommandFeedback: BooleanStringTag;
      doLimitedCrafting: BooleanStringTag;
      commandBlockOutput: BooleanStringTag;
      doTraderSpawning: BooleanStringTag;
      doFireTick: BooleanStringTag;
      mobGriefing: BooleanStringTag;
      spectatorsGenerateChunks: BooleanStringTag;
      doEntityDrops: BooleanStringTag;
      doTileDrops: BooleanStringTag;
      keepInventory: BooleanStringTag;
      randomTickSpeed: BooleanStringTag;
      freezeDamage: BooleanStringTag;
      doMobLoot: BooleanStringTag;
      disableElytraMovementCheck: BooleanStringTag;
      logAdminCommands: BooleanStringTag;
    };
    DragonFight: {
      PreviouslyKilled: BooleanTag;
      NeedsStateScanning: BooleanTag;
      Gateways: [IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag, IntTag];
      DragonKilled: BooleanTag;
    };
    Player: {
      seenCredits: BooleanTag;
      DeathTime: ShortTag;
      foodTickTimer: IntTag;
      recipeBook: {
        recipes: [StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag];
        isGuiOpen: ByteTag;
        toBeDisplayed: [StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag, StringTag];
        isSmokerGuiOpen: ByteTag;
        isFurnaceFilteringCraftable: ByteTag;
        isFurnaceGuiOpen: ByteTag;
        isBlastingFurnaceFilteringCraftable: ByteTag;
        isBlastingFurnaceGuiOpen: ByteTag;
        isFilteringCraftable: ByteTag;
        isSmokerFilteringCraftable: ByteTag;
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
          ShowIcon: ByteTag;
          ShowParticles: ByteTag;
          Id: ByteTag;
          Duration: IntTag;
          Ambient: ByteTag;
          Amplifier: ByteTag;
        }
      ];
      abilities: {
        walkSpeed: FloatTag;
        instabuild: ByteTag;
        flying: ByteTag;
        flySpeed: FloatTag;
        mayfly: ByteTag;
        invulnerable: ByteTag;
        mayBuild: ByteTag;
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
      Inventory: [
        {
          Slot: ByteTag;
          id: StringTag;
          Count: ByteTag;
        },
        {
          Slot: ByteTag;
          id: StringTag;
          tag: {
            Damage: IntTag;
          };
          Count: ByteTag;
        }
      ];
      Motion: [DoubleTag, DoubleTag, DoubleTag];
      FallDistance: FloatTag;
      DataVersion: IntTag;
      SleepTimer: ShortTag;
      XpP: FloatTag;
      previousPlayerGameType: IntTag;
      Pos: [DoubleTag, DoubleTag, DoubleTag];
      Health: FloatTag;
      HurtTime: ShortTag;
      FallFlying: ByteTag;
      Fire: ShortTag;
      PortalCooldown: IntTag;
      foodExhaustionLevel: FloatTag;
    };
    DifficultyLocked: ByteTag;
    DayTime: LongTag;
    BorderCenterZ: DoubleTag;
    BorderSizeLerpTarget: DoubleTag;
    Version: {
      Id: IntTag;
      Name: StringTag;
      Series: StringTag;
      Snapshot: ByteTag;
    };
    CustomBossEvents: {};
  };
}