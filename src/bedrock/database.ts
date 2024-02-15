import type { NBTData, ByteTag, FloatTag, StringTag, LongTag, IntTag, ShortTag, BooleanTag, ByteArrayTag, IntArrayTag } from "nbtify";
import type { BlockEntity } from "./block-entity.js";
import type { DimensionID } from "./dimension.js";
import type { Entity, Player } from "./entity.js";

export type Key = WorldKey | SuffixKeyEntry | ChunkKeyEntry;

export type WorldKey<K extends keyof WorldKeyNameMap = keyof WorldKeyNameMap> = K;

export type WorldValue<K extends keyof WorldKeyNameMap = keyof WorldKeyNameMap> = WorldKeyNameMap[K];

export interface WorldKeyNameMap {
  BiomeData: NBTData<BiomeData>;
  dimension0: NBTData<LegacyDimension0>;
  dimension1: NBTData<LegacyDimension1>;
  mVillages: NBTData<LegacyMVillages>;
  LevelChunkMetaDataDictionary: LevelChunkMetaDataDictionary;
  game_flatworldlayers: GameFlatWorldLayers;
  "PositionTrackDB-LastId": NBTData<PositionTrackDBLastId>;
  "~local_player": NBTData<LocalPlayer>;
  AutonomousEntities: NBTData<AutonomousEntities>;
  Overworld: NBTData<Overworld>;
  Nether: NBTData<Nether>;
  TheEnd: NBTData<TheEnd>;
  mobevents: NBTData<MobEvents>;
  portals: NBTData<Portals>;
  schedulerWT: NBTData<SchedulerWT>;
  scoreboard: NBTData<Scoreboard>;
}

export type SuffixKey<K extends keyof SuffixKeyNameMap = keyof SuffixKeyNameMap> = SuffixKeyEntry<K>;

export interface SuffixKeyEntry<K extends keyof SuffixKeyNameMap = keyof SuffixKeyNameMap> {
  type: K;
  // value: SuffixKeyNameMap[K];
  key: Buffer;
}

export type SuffixValue<K extends keyof SuffixKeyNameMap = keyof SuffixKeyNameMap> = SuffixKeyNameMap[K];

export interface SuffixKeyNameMap {
  actorprefix: ActorPrefix;
  digp: DigP;
  posTrackDB: NBTData<PosTrackDB>;
  player: NBTData<PlayerServerDef>;
  player_server: NBTData<PlayerServer>;
  tickingarea: NBTData<TickingArea>;
  VILLAGE_DWELLERS: NBTData<VillageDwellers>;
  VILLAGE_INFO: NBTData<VillageInfo>;
  VILLAGE_PLAYERS: NBTData<VillagePlayers>;
  VILLAGE_POI: NBTData<VillagePois>;
  map: NBTData<Map>;
}

export type ChunkKey<K extends keyof ChunkKeyNameMap = keyof ChunkKeyNameMap> = ChunkKeyEntry<K>;

export interface ChunkKeyEntry<K extends keyof ChunkKeyNameMap = keyof ChunkKeyNameMap> {
  x: number;
  y: number;
  type: K;
  dimension: DimensionID;
  subchunk: number | null;
  // value: ChunkKeyNameMap[K];
}

export type ChunkValue<K extends keyof ChunkKeyNameMap = keyof ChunkKeyNameMap> = ChunkKeyNameMap[K];

export enum CHUNK_KEY {
  Data3D = 43,
  Version,
  Data2D,
  Data2DLegacy,
  SubChunkPrefix,
  LegacyTerrain,
  BlockEntity,
  Entity,
  PendingTicks,
  LegacyBlockExtraData,
  BiomeState,
  FinalizedState,
  ConversionData,
  BorderBlocks,
  HardcodedSpawners,
  RandomTicks,
  CheckSums,
  GenerationSeed,
  GeneratedPreCavesAndCliffsBlending,
  BlendingBiomeHeight,
  MetaDataHash,
  BlendingData,
  ActorDigestVersion,
  LegacyVersion = 118
}

export interface ChunkKeyNameMap {
  Data3D: Data3D;
  Version: Version;
  Data2D: Data2D;
  Data2DLegacy: Data2DLegacy;
  SubChunkPrefix: SubChunkPrefix;
  LegacyTerrain: LegacyTerrain;
  BlockEntity: BlockEntities;
  Entity: Entities;
  PendingTicks: PendingTicks;
  LegacyBlockExtraData: LegacyBlockExtraData;
  BiomeState: BiomeState;
  FinalizedState: FinalizedState;
  ConversionData: ConversionData;
  BorderBlocks: BorderBlocks;
  HardcodedSpawners: HardcodedSpawners;
  RandomTicks: RandomTicks;
  CheckSums: CheckSums;
  GenerationSeed: GenerationSeed;
  GeneratedPreCavesAndCliffsBlending: GeneratedPreCavesAndCliffsBlending;
  BlendingBiomeHeight: BlendingBiomeHeight;
  MetaDataHash: MetaDataHash;
  BlendingData: BlendingData;
  ActorDigestVersion: ActorDigestVersion;
  LegacyVersion: LegacyVersion;
}

export type Value = WorldValue | SuffixValue | ChunkValue;

// WorldKey

export interface AutonomousEntities {
  AutonomousEntityList: Entity[]; // approximated, guessing this is entity. I've only ever seen it empty
}

export interface BiomeData {
  list: BiomeDataList[];
}

export interface BiomeDataList {
  id: ByteTag; // numerical biome ID, likely a resource from Region-Types
  snowAccumulation: FloatTag;
}

export type GameFlatWorldLayers = Buffer;

export interface LevelChunkMetaDataDictionary {
  count: number;
  entries: LevelChunkMetaDataDictionaryEntry[];
}

export interface LevelChunkMetaDataDictionaryEntry {
  key: Buffer; // temporary, I'm not sure how this is supposed to be parsed nicely
  tag: NBTData<LevelChunkMetaDataDictionaryTag>;
}

export interface LevelChunkMetaDataDictionaryTag {
  BiomeBaseGameVersion: StringTag;
  DimensionName: DimensionName;
  GenerationSeed: LongTag;
  GeneratorType: IntTag; // could be a union instead? `1` appears to be the regular setting.
  LastSavedBaseGameVersion?: StringTag;
  LastSavedDimensionHeightRange?: DimensionHeightRange;
  OriginalBaseGameVersion: StringTag;
  OriginalDimensionHeightRange: DimensionHeightRange;
  // Why are these `ShortTag`s? The values look like booleans! dangit Mojang.
  // and I think these are unique to the Overworld, at the moment at least.
  Overworld1_18HeightExtended?: ShortTag;
  UnderwaterLavaLakeFixed?: ShortTag;
  WorldGenBelowZeroFixed?: ShortTag;
}

export type DimensionName = "Overworld" | "Nether" | "TheEnd";

export interface DimensionHeightRange {
  max: ShortTag;
  min: ShortTag;
}

export type LocalPlayer = Player;

export interface MobEvents {
  events_enabled: BooleanTag;
  "minecraft:ender_dragon_event": BooleanTag;
  "minecraft:pillager_patrols_event": BooleanTag;
  "minecraft:wandering_trader_event": BooleanTag;
}

export interface Overworld {
  // [name: string]: never; // untyped atm
}

export interface SchedulerWT {
  daysSinceLastWTSpawn: IntTag;
  isSpawningWT: BooleanTag; // most likely boolean?
  nextWTSpawnCheckTick: LongTag;
}

export interface Scoreboard {
  Criteria: object[];
  DisplayObjectives: ScoreboardDisplayObjective[];
  Entries: ScoreboardEntry[];
  Objectives: ScoreboardObjective[];
  LastUniqueId: LongTag;
}

export interface ScoreboardDisplayObjective {
  Name: StringTag;
  ObjectiveName: StringTag; // the internal name of the objective displayed; Resource ID of some sort?
  SortOrder?: ByteTag<ScoreboardDisplayObjectiveSortOrder>; // seems to be optional; 'if not specified'
}

export type ScoreboardDisplayObjectiveSortOrder = 0 | 1;

export interface ScoreboardEntry {
  IdentityType: ByteTag<ScoreboardEntryType>;
  EntityId?: LongTag;
  PlayerId?: LongTag;
  ScoreboardId: LongTag;
}

export type ScoreboardEntryType = 1 | 2;

export interface ScoreboardObjective {
  Criteria: "dummy";
  DisplayName: StringTag;
  Name: StringTag; // internal name of this objective; maybe resource ID? This might be user-defined actually, though
  Scores: ScoreboardObjectiveScore[];
}

export interface ScoreboardObjectiveScore {
  Score: IntTag;
  ScoreboardId: LongTag;
}

// ChunkKey

export type Data3D = Buffer;
export type Version = number;
export type Data2D = Buffer;
export type Data2DLegacy = Buffer;
export type SubChunkPrefix = Buffer;
export type LegacyTerrain = Buffer;

export type BlockEntities = NBTData<BlockEntity>[];

export type Entities = NBTData<Entity>[];

export type PendingTicks = NBTData<PendingTick>[];

export interface PendingTick {
  // [name: string]: never; // untyped atm
}

export interface LegacyBlockExtraData {
  entries: number;
  entriesKey: number;
  value: number;
}

export type BiomeState = Buffer; // NBT?
export type FinalizedState = number;
export type ConversionData = Buffer; // NBT?
export type BorderBlocks = Buffer; // NBT?
export type HardcodedSpawners = Buffer; // NBT?

export type RandomTicks = NBTData<RandomTick>[];

export interface RandomTick {
  // [name: string]: never; // untyped atm
}

export type CheckSums = Buffer;
export type GenerationSeed = Buffer;
export type GeneratedPreCavesAndCliffsBlending = boolean;
export type BlendingBiomeHeight = Buffer;
export type MetaDataHash = Buffer;
export type BlendingData = Buffer;
export type ActorDigestVersion = number;
export type LegacyVersion = number;

// SuffixKey

export interface ActorPrefix {
  // [name: string]: never; // untyped atm
}

export type DigP = Buffer;

export interface VillageDwellers {
  Dwellers: VillageDweller[];
}

export interface VillageDweller {
  actors: VillageDwellerActor[];
}

export interface VillageDwellerActor {
  ID: LongTag;
  last_saved_pos: VillageDwellerActorPos;
  TS: LongTag;
}

export type VillageDwellerActorPos = [IntTag, IntTag, IntTag];

export interface VillageInfo {
  BDTime: LongTag;
  GDTime: LongTag;
  Initialized: BooleanTag; // maybe boolean?
  MTick: LongTag;
  PDTick: LongTag;
  RX0: IntTag;
  RX1: IntTag;
  RY0: IntTag;
  RY1: IntTag;
  RZ0: IntTag;
  RZ1: IntTag;
  Tick: LongTag;
  Version: ByteTag;
  X0: IntTag;
  X1: IntTag;
  Y0: IntTag;
  Y1: IntTag;
  Z0: IntTag;
  Z1: IntTag;
}

export interface VillagePlayers {
  Players: Player[]; // approximated, maybe `Player[]`, but I nor the wiki know for sure
}

export interface VillagePois {
  POI: VillagePoi[];
}

export interface VillagePoi {
  instances: VillagePoiInstance[];
  VillagerID: LongTag;
}

export interface VillagePoiInstance {
  Capacity: LongTag;
  InitEvent: StringTag; // some kind of resource?
  Name: StringTag; // resource?
  OwnerCount: LongTag;
  Radius: FloatTag;
  Skip: BooleanTag; // maybe boolean?
  SoundEvent: StringTag; // resource?
  Type: IntTag; // some kind of union type?
  UseAABB: BooleanTag; // boolean?
  Weight: LongTag;
  X: IntTag;
  Y: IntTag;
  Z: IntTag;
}

export interface Map {
  colors: ByteArrayTag;
  decorations: object[];
  dimension: ByteTag<DimensionID>;
  fullyExplored: BooleanTag;
  height: ShortTag;
  mapId: LongTag;
  mapLocked: BooleanTag;
  parentMapId: LongTag;
  scale: ByteTag<MapScale>; // ~~might be a union of only a few values~~
  unlimitedTracking: BooleanTag;
  width: ShortTag;
  xCenter: IntTag;
  zCenter: IntTag;
}

export type MapScale = 0 | 1 | 2 | 3 | 4; // this is approximated, there are 5 levels of maps, looks like? The DB can account for this as well, there were 5 entries for a single map in the world, all with the same reference `parentMapId`.

export interface Portals {
  data: {
    PortalRecords: PortalRecord[];
  };
}

export interface PortalRecord {
  DimId: IntTag<DimensionID>;
  Span: ByteTag;
  TpX: IntTag;
  TpY: IntTag;
  TpZ: IntTag;
  Xa: ByteTag;
  Za: ByteTag;
}

export interface Nether {
  data: {
    LimboEntities: Entity[]; // `Entity[]`? approximated, only ever seen empty
  };
}

export interface TheEnd {
  data: {
    DragonFight: DragonFight;
    LimboEntities: Entity[]; // approximated
  };
}

export interface DragonFight {
  DragonFightVersion: ByteTag;
  DragonKilled: BooleanTag;
  DragonSpawned: BooleanTag;
  DragonUUID: LongTag;
  ExitPortalLocation: [IntTag, IntTag, IntTag];
  Gateways: IntTag[]; // Maybe tuple of 20x`IntTag`? Not sure how this works exactly
  IsRespawning: BooleanTag;
  PreviouslyKilled: BooleanTag;
}

export interface TickingArea {
  Dimension: IntTag<DimensionID>;
  IsCircle: BooleanTag;
  MaxX: IntTag;
  MaxZ: IntTag;
  MinX: IntTag;
  MinZ: IntTag;
  Name: StringTag;
  Preload: BooleanTag;
}

export interface PosTrackDB {
  dim: IntTag<DimensionID>;
  id: StringTag;
  pos: [IntTag, IntTag, IntTag];
  status: ByteTag; // `BooleanTag`?
  version: ByteTag; // same here
}

export interface PositionTrackDBLastId {
  id: StringTag;
  version: ByteTag;
}

export interface PlayerServerDef {
  MsaId: StringTag;
  PlatformOfflineId?: StringTag;
  PlatformOnlineId?: StringTag;
  SelfSignedId: StringTag;
  ServerId: StringTag;
}

// `Player` I'm pretty sure essentially, there might be more keys for server players than the plain `LocalPlayer` though.
export type PlayerServer = Player;

export interface LegacyDimension0 {
  mansion: {
    structures?: Structure[];
  };
  mineshaft: {
    structures?: Structure[];
  };
  oceans: {
    structures?: Structure[];
  };
  stronghold: {
    structures?: Structure[];
  };
  village: {
    structures?: Structure[];
  };
}

export interface LegacyDimension1 {
  bridge: {
    structures?: Structure[];
  };
}

export interface Structure {
  BB: IntArrayTag;
  Children: StructureChildren[];
  ChunkX: IntTag;
  ChunkZ: IntTag;
  ID: IntTag; // union, or unique? I think maybe union of structure piece variants; should be unique to each 'structure' if made into a union type.
  iscreated?: BooleanTag; // likely boolean hehe, maybe optional? *might be only for Ocean Monument
  Valid?: BooleanTag; // villages
}

export interface StructureChildren {
  Abandoned?: BooleanTag; // villages
  Entrances?: [IntArrayTag, IntArrayTag, IntArrayTag]; // mineshaft
  BB: IntArrayTag;
  CA?: IntTag; // villages
  CB?: IntTag; // villages
  CC?: IntTag; // villages
  CD?: IntTag; // villages
  Chest?: BooleanTag; // villages; bridge (fortress)
  D?: IntTag; // mineshaft
  Desert?: BooleanTag; // villages
  HPos?: IntTag; // villages
  ID: IntTag;
  Num?: IntTag; // mineshaft
  Mob?: BooleanTag; // bridge (fortress)
  hps?: ByteTag; // mineshaft
  hr?: ByteTag; // mineshaft
  sc?: ByteTag; // mineshaft
  Savannah?: BooleanTag; // villages
  Seed?: IntTag; // bridge (fortress)
  Taiga?: BooleanTag; // villages
  Terrace?: BooleanTag; // villages
  tf?: ByteTag; // mineshaft
  VCount?: IntTag; // villages
  gendepth: IntTag;
  orientation: IntTag; // union of 4 cardinal directions? `255 (-1) | 0 | 1 | 2 | 3`
}

export interface LegacyMVillages {
  data: {
    Tick: IntTag;
    Villages: object[];
  };
}