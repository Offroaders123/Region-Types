import type { BooleanTag, ByteTag, IntTag, LongTag, FloatTag, StringTag } from "nbtify";

export interface LevelDat {
  BiomeOverride: StringTag;
  CenterMapsToOrigin: BooleanTag;
  ConfirmedPlatformLockedContent: BooleanTag;
  Difficulty: IntTag<Difficulty>;
  FlatWorldLayers: StringTag;
  ForceGameType: BooleanTag;
  GameType: IntTag<GameType>;
  Generator: IntTag<Generator>;
  InventoryVersion: StringTag;
  LANBroadcast: ByteTag;
  LANBroadcastIntent: ByteTag;
  LastPlayed: LongTag;
  LevelName: StringTag;
  LimitedWorldOriginX: IntTag;
  LimitedWorldOriginY: IntTag;
  LimitedWorldOriginZ: IntTag;
  MinimumCompatibleClientVersion: LevelVersion;
  MultiplayerGame: ByteTag;
  MultiplayerGameIntent: ByteTag;
  NetherScale: IntTag;
  NetworkVersion: IntTag;
  Platform: IntTag;
  PlatformBroadcastIntent: IntTag;
  RandomSeed: LongTag;
  SpawnV1Villagers: BooleanTag;
  SpawnX: IntTag;
  SpawnY: IntTag;
  SpawnZ: IntTag;
  StorageVersion: IntTag;
  Time: LongTag;
  WorldVersion: IntTag;
  XBLBroadcastIntent: IntTag;
  abilities: Abilities;
  baseGameVersion: StringTag;
  bonusChestEnabled: BooleanTag;
  bonusChestSpawned: BooleanTag;
  cheatsEnabled: BooleanTag;
  commandblockoutput: BooleanTag;
  commandblocksenabled: BooleanTag;
  commandsEnabled: BooleanTag;
  currentTick: LongTag;
  daylightCycle: IntTag;
  dodaylightcycle: BooleanTag;
  doentitydrops: BooleanTag;
  dofiretick: BooleanTag;
  doimmediaterespawn: BooleanTag;
  doinsomnia: BooleanTag;
  domobloot: BooleanTag;
  domobspawning: BooleanTag;
  dotiledrops: BooleanTag;
  doweathercycle: BooleanTag;
  drowningdamage: BooleanTag;
  eduOffer: IntTag;
  educationFeaturesEnabled: BooleanTag;
  experiments: Experiments;
  falldamage: BooleanTag;
  firedamage: BooleanTag;
  freezedamage: BooleanTag;
  functioncommandlimit: IntTag;
  hasBeenLoadedInCreative: BooleanTag;
  hasLockedBehaviorPack: BooleanTag;
  hasLockedResourcePack: BooleanTag;
  immutableWorld: BooleanTag;
  isCreatedInEditor: BooleanTag;
  isExportedFromEditor: BooleanTag;
  isFromLockedTemplate: BooleanTag;
  isFromWorldTemplate: BooleanTag;
  isRandomSeedAllowed: BooleanTag;
  isSingleUseWorld: BooleanTag;
  isWorldTemplateOptionLocked: BooleanTag;
  keepinventory: BooleanTag;
  lastOpenedWithVersion: LevelVersion;
  lightningLevel: FloatTag;
  lightningTime: IntTag;
  limitedWorldDepth: IntTag;
  limitedWorldWidth: IntTag;
  maxcommandchainlength: IntTag;
  mobgriefing: BooleanTag;
  naturalregeneration: BooleanTag;
  permissionsLevel: IntTag;
  playerPermissionsLevel: IntTag;
  prid: StringTag;
  pvp: BooleanTag;
  rainLevel: FloatTag;
  rainTime: IntTag;
  randomtickspeed: IntTag;
  requiresCopiedPackRemovalCheck: BooleanTag;
  respawnblocksexplode: BooleanTag;
  sendcommandfeedback: BooleanTag;
  serverChunkTickRange: IntTag;
  showbordereffect: BooleanTag;
  showcoordinates: BooleanTag;
  showdeathmessages: BooleanTag;
  showtags: BooleanTag;
  spawnMobs: BooleanTag;
  spawnradius: IntTag;
  startWithMapEnabled: BooleanTag;
  texturePacksRequired: BooleanTag;
  tntexplodes: BooleanTag;
  useMsaGamertagsOnly: BooleanTag;
  worldStartCount: LongTag;
  world_policies: WorldPolicies;
}

export type Difficulty = 0 | 1 | 2 | 3;

export type GameType = 0 | 1 | 2 | 3;

export type Generator = 0 | 1 | 2;

export type LevelVersion = [IntTag, IntTag, IntTag, IntTag, IntTag];

export interface Abilities {
  attackmobs: BooleanTag;
  attackplayers: BooleanTag;
  build: BooleanTag;
  doorsandswitches: BooleanTag;
  flying: BooleanTag;
  flySpeed: FloatTag<0.05>;
  instabuild: BooleanTag;
  invulnerable: BooleanTag;
  lightning: BooleanTag;
  mayfly: BooleanTag;
  mine: BooleanTag;
  mute: BooleanTag;
  noclip: BooleanTag;
  op: BooleanTag;
  opencontainers: BooleanTag;
  // probably needs to be a union of some kind
  permissionsLevel: IntTag;
  playerPermissionsLevel: IntTag;
  teleport: BooleanTag;
  walkSpeed: FloatTag;
  worldBuilder: BooleanTag;
}

export interface Experiments {
  experiments_ever_used: BooleanTag;
  saved_with_toggled_experiments: BooleanTag;
}

export interface WorldPolicies {
  // Not sure what values are present here
}