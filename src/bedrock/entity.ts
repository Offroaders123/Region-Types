import type { ByteTag, BooleanTag, ShortTag, IntTag, LongTag, FloatTag, StringTag } from "nbtify";
import type { Block } from "./block.js";
import type { CommandBlockLike } from "./block-entity.js";
import type { DimensionID } from "./dimension.js";
import type { Effect, EffectResource } from "./effect.js";
import type { Item } from "./item.js";
import type { Abilities, GameType } from "./level.js";

export type Entity<K extends keyof EntityNameMap = keyof EntityNameMap> = EntityNameMap[K];

export interface EntityNameMap {
  minecart: Minecart;
  villager: LegacyVillager;
  villager_v2: Villager;
  blaze: Blaze;
  cave_spider: CaveSpider;
  creeper: Creeper;
  elder_guardian: ElderGuardian;
  ender_dragon: EnderDragon;
  enderman: Enderman;
  endermite: Endermite;
  evocation_illager: Evoker;
  ghast: Ghast;
  guardian: Guardian;
  magma_cube: MagmaCube;
  phantom: Phantom;
  piglin: Piglin;
  piglin_brute: PiglinBrute;
  pillager: Pillager;
  ravager: Ravager;
  skeleton: Skeleton;
  slime: Slime;
  silverfish: Sliverfish;
  spider: Spider;
  stray: Stray;
  vex: Vex;
  warden: Warden;
  wither: Wither;
  wither_skeleton: WitherSkeleton;
  zoglin: Zoglin;
  chest_minecart: ChestMinecart;
  command_block_minecart: CommandBlockMinecart;
  hopper_minecart: HopperMinecart;
  tnt_minecart: TNTMinecart;
  tnt: TNT;
  drowned: Drowned;
  husk: Husk;
  vindicator: Vindicator;
  witch: Witch;
  zombie: Zombie;
  zombie_villager: LegacyZombieVillager;
  zombie_villager_v2: ZombieVillager;
  zombie_pigman: ZombifiedPiglin;
  wither_skull: WitherSkull;
  allay: Allay;
  area_effect_cloud: AreaEffectCloud;
  bee: Bee;
  camel: Camel;
  cat: Cat;
  chicken: Chicken;
  cow: Cow;
  donkey: Donkey;
  dolphin: Dolphin;
  egg: Egg;
  item: ItemEntity;
  ender_crystal: EnderCrystal;
  fox: Fox;
  frog: Frog;
  glow_squid: GlowSquid;
  goat: Goat;
  hoglin: Hoglin;
  horse: Horse;
  llama: Llama;
  llama_spit: LlamaSpit;
  mooshroom: Mooshroom;
  mule: Mule;
  ocelot: Ocelot;
  painting: Painting;
  panda: Panda;
  parrot: Parrot;
  pig: Pig;
  polar_bear: PolarBear;
  rabbit: Rabbit;
  sheep: Sheep;
  skeleton_horse: SkeletonHorse;
  squid: Squid;
  sniffer: Sniffer;
  snowball: Snowball;
  strider: Strider;
  trader_llama: TraderLlama;
  turtle: Turtle;
  wolf: Wolf;
  zombie_horse: ZombieHorse;
  armor_stand: ArmorStand;
  bat: Bat;
  tripod_camera: Camera;
  iron_golem: IronGolem;
  npc: NPC;
  player: Player;
  shulker: Shulker;
  shulker_bullet: ShulkerBullet;
  wandering_trader: WanderingTrader;
  axolotl: Axolotl;
  cod: Cod;
  pufferfish: Pufferfish;
  salmon: Salmon;
  tadpole: Tadpole;
  tropicalfish: TropicalFish;
  arrow: Arrow;
  thrown_trident: Trident;
  xp_orb: ExperienceOrb;
  xp_bottle: ExperiencePotion;
  splash_potion: SplashPotion;
  lingering_potion: LingeringPotion;
  ender_pearl: EnderPearl;
  falling_block: FallingBlock;
  fireball: Fireball;
  fireworks_rocket: FireworkRocket;
  fishing_hook: FishingBobber;
  chest_boat: ChestBoat;
  agent: Agent;
  armadillo: Armadillo;
  balloon: Balloon;
  boat: Boat;
  bogged: Bogged;
  breeze: Breeze;
  breeze_wind_charge_projectile: BreezeWindChargeProjectile;
  chalkboard: Chalkboard;
  dragon_fireball: DragonFireball;
  elder_guardian_ghost: ElderGuardianGhost;
  evocation_fang: EvocationFang;
  eye_of_ender_signal: EyeOfEnderSignal;
  firefly: Firefly; // should I omit this?
  ice_bomb: IceBomb;
  leash_knot: LeashKnot;
  lightning_bolt: LightningBolt;
  moving_block: MovingBlock;
  shield: Shield;
  small_fireball: SmallFireball;
  snow_golem: SnowGolem;
  wind_charge_projectile: WindChargeProjectile;
  wither_skull_dangerous: WitherSkullDangerous;
}

export interface Minecart extends EntityLike<EntityResource.minecart> {
  CustomDisplayTile?: BooleanTag;
  DisplayBlock?: Block;
  DisplayOffset?: IntTag;
}

export interface ChestMinecart extends EntityLike<EntityResource.chest_minecart>, InventoryLike<Item[]> {
  // 0-26 slots
}

export interface CommandBlockMinecart extends Omit<EntityLike<EntityResource.command_block_minecart>, "CustomName">, InventoryLike<Item[]>, CommandBlockLike {
  // how many slots again?
  CurrentTickCount: IntTag;
  Ticking: ByteTag; // boolean?
}

export interface HopperMinecart extends EntityLike<EntityResource.hopper_minecart>, InventoryLike<[Item?, Item?, Item?, Item?, Item?]> {
  // 0-4 slots
}

export interface TNTMinecart extends EntityLike<EntityResource.tnt_minecart>, ExplodeLike {}

export interface LegacyVillager extends EntityLike<EntityResource.villager>, MobLike, VillagerLike {}

// The overlap types here for villager trade keys is a bit borked at the moment, maybe they need to be a union type? I feel like one is the old version, and one is the new version. That's just a hunch though. I'll have to dig into some older worlds' data to see what shapes they use there.
export interface Villager extends EntityLike<EntityResource.villager_v2>, MobLike, VillagerLike, AgeableLike, DwellerLike, EconomyTradeTableLike, InventoryLike<Item[]>, Omit<TradeTableLike, "Willing" | "Offers"> {
  // how many slots again?
  HasResupplied: BooleanTag;
  IsInRaid: BooleanTag;
  ReactToBell: ByteTag; // boolean?
}

export interface Blaze extends EntityLike<EntityResource.blaze>, MobLike, MonsterLike {}

export interface CaveSpider extends EntityLike<EntityResource.cave_spider>, MobLike, MonsterLike {}

export interface Creeper extends EntityLike<EntityResource.creeper>, MobLike, MonsterLike, ExplodeLike {}

export interface TNT extends EntityLike<EntityResource.tnt>, ExplodeLike {}

// Same fields as `Guardian`, make a `GuardianLike`?
export interface ElderGuardian extends EntityLike<EntityResource.elder_guardian>, MobLike, MonsterLike, HomeLike, TimerLike {
  Elder: BooleanTag;
}

export interface EnderDragon extends EntityLike<EntityResource.ender_dragon>, MobLike, MonsterLike {}

export interface Enderman extends EntityLike<EntityResource.enderman>, MobLike, MonsterLike {
  carriedBlock?: Block; // I think this is optional
}

export interface Endermite extends EntityLike<EntityResource.endermite>, MobLike, MonsterLike {
  Lifetime: IntTag;
}

export interface Evoker extends EntityLike<EntityResource.evocation_illager>, MobLike, MonsterLike, DwellerLike {}

export interface Ghast extends EntityLike<EntityResource.ghast>, MobLike, MonsterLike {}

// Same fields as `ElderGuardian`, make a `GuardianLike`?
export interface Guardian extends EntityLike<EntityResource.guardian>, MobLike, MonsterLike, HomeLike, TimerLike {
  Elder: BooleanTag;
}

export interface Drowned extends EntityLike<EntityResource.drowned>, MobLike, MonsterLike, HumanoidMonsterLike {}

export interface Husk extends EntityLike<EntityResource.husk>, MobLike, MonsterLike, HumanoidMonsterLike, TimerLike {}

              // VindicationIllager? / `vindication_illager`
export interface Vindicator extends EntityLike<EntityResource.vindicator>, MobLike, MonsterLike, HumanoidMonsterLike, DwellerLike {}

export interface Witch extends EntityLike<EntityResource.witch>, MobLike, MonsterLike, HumanoidMonsterLike, DwellerLike {}

export interface Zombie extends EntityLike<EntityResource.zombie>, MobLike, MonsterLike, HumanoidMonsterLike {}

export interface LegacyZombieVillager extends EntityLike<EntityResource.zombie_villager>, MobLike, MonsterLike, HumanoidMonsterLike {
  SpawnedFromVillage: BooleanTag;
}
// I think these are missing villager traits
export interface ZombieVillager extends EntityLike<EntityResource.zombie_villager_v2>, MobLike, MonsterLike, HumanoidMonsterLike {
  SpawnedFromVillage: BooleanTag;
}

              // Zombie Pigman, kinda
export interface ZombifiedPiglin extends EntityLike<EntityResource.zombie_pigman>, MobLike, MonsterLike, HumanoidMonsterLike {
  Anger: ShortTag;
}

export interface MagmaCube extends EntityLike<EntityResource.magma_cube>, MobLike, MonsterLike {}

export interface Phantom extends EntityLike<EntityResource.phantom>, MobLike, MonsterLike {}

export interface Piglin extends EntityLike<EntityResource.piglin>, MobLike, MonsterLike, TimerLike, InventoryLike<Item[]> {
  // how many slots again?
}

export interface PiglinBrute extends EntityLike<EntityResource.piglin_brute>, MobLike, MonsterLike, HomeLike, TimerLike {}

export interface Pillager extends EntityLike<EntityResource.pillager>, MobLike, MonsterLike, DwellerLike {}

export interface Ravager extends EntityLike<EntityResource.ravager>, MobLike, MonsterLike, DwellerLike, TimerLike {}

export interface Skeleton extends EntityLike<EntityResource.skeleton>, MobLike, MonsterLike, TimerLike {
  ItemInHand: Item; // optional? not totally sure, I haven't seen a skeleton without an item, in Bedrock specifically
}

export interface Slime extends EntityLike<EntityResource.slime>, MobLike, MonsterLike {
  Size: ByteTag;
}

export interface Sliverfish extends EntityLike<EntityResource.silverfish>, MobLike, MonsterLike {}

export interface Spider extends EntityLike<EntityResource.spider>, MobLike, MonsterLike {}

export interface Stray extends EntityLike<EntityResource.stray>, MobLike, MonsterLike {}

export interface Vex extends EntityLike<EntityResource.vex>, MobLike, MonsterLike {
  ItemInHand: Item; // optional? same thing as Skeleton, I've never seen one empty-handed
}

export interface Warden extends EntityLike<EntityResource.warden>, MobLike, MonsterLike {
  Nuisances: WardenNuisance[];
  VibrationListener: WardenVibrationListener;
}

export interface WardenNuisance {
  ActorId: LongTag;
  Anger: IntTag;
  Priority: BooleanTag;
}

export interface WardenVibrationListener {
  event: IntTag;
  pending: { // unknown
    distance: FloatTag;
    source: LongTag;
    vibration: IntTag;
    x: IntTag;
    y: IntTag;
    z: IntTag;
  };
  selector: object; // unknown
  ticks: IntTag;
}

export interface Wither extends EntityLike<EntityResource.witch>, MobLike, MonsterLike {
  AirAttack: ByteTag; // bool?
  dyingFrames: IntTag;
  firerate: FloatTag;
  Invul: IntTag;
  lastHealthInterval: IntTag;
  maxHealth: IntTag;
  oldSwellAmount: FloatTag;
  overlayAlpha: FloatTag;
  Phase: IntTag;
  ShieldHealth: IntTag;
  SpawningFrames: IntTag;
  swellAmount: FloatTag;
}

export interface WitherSkeleton extends EntityLike<EntityResource.wither_skeleton>, MobLike, MonsterLike {}

export interface WitherSkull extends EntityLike<EntityResource.wither_skull>, ExplodeLike, ProjectileLike {}

export interface Zoglin extends EntityLike<EntityResource.zoglin>, MobLike, MonsterLike {}

export interface Allay extends EntityLike<EntityResource.allay>, MobLike {
  AllayDuplicationCooldown: LongTag;
  VibrationListener: AllayVibrationListener;
}

export interface AllayVibrationListener {
  event: IntTag; // Probably a union type
  pending: { // unknown
    distance: FloatTag;
    source: LongTag;
    vibration: IntTag;
    x: IntTag;
    y: IntTag;
    z: IntTag;
  };
  selector: {}; // unknown
  ticks: IntTag;
}

export interface AreaEffectCloud extends EntityLike<EntityResource.area_effect_cloud> {
  Duration: IntTag;
  DurationOnUse: IntTag;
  InitialRadius: FloatTag;
  mobEffects: Effect[];
  OwnerID: LongTag;
  ParticleColor: IntTag; // Union? Or color created by HEX code?
  ParticleId: IntTag; // `ParticleID` (resource)? This is not `EffectID`
  PickupCount: IntTag;
  PotionId: ShortTag; // `PotionID`
  Radius: FloatTag;
  RadiusChangeOnPickup: FloatTag;
  RadiusOnUse: FloatTag;
  RadiusPerTick: FloatTag;
  ReapplicationDelay: IntTag;
  SpawnTick: LongTag;
}

export interface Bee extends EntityLike<EntityResource.bee>, MobLike, AgeableLike, BreedableLike, HomeLike, TimerLike {
  properties: {
    "minecraft:has_nectar": BooleanTag;
  };
}

// like `Horse`, should I make a `HorseLike`?
export interface Camel extends EntityLike<EntityResource.camel>, MobLike, AgeableLike, BreedableLike, InventoryLike<Item[]> {
  // is all of `InventoryLike` unused? camels can't have chest inventory items
}

export interface Cat extends EntityLike<EntityResource.cat>, MobLike, AgeableLike, BreedableLike, BreedableLike, DwellerLike {}

export interface Chicken extends EntityLike<EntityResource.chicken>, MobLike, AgeableLike, BreedableLike {
  entries: ChickenEntry[];
}

export interface ChickenEntry {
  SpawnTimer: IntTag;
  StopSpawning: ByteTag; // boolean?
}

export interface Cow extends EntityLike<EntityResource.cow>, MobLike, AgeableLike, BreedableLike {}

// like `Horse`, should I make a `HorseLike`?
export interface Donkey extends EntityLike<EntityResource.donkey>, MobLike, AgeableLike, BreedableLike, InventoryLike<Item[]> {
  // how many slots again?
  Temper: IntTag;
}

export interface Dolphin extends EntityLike<EntityResource.dolphin>, MobLike, AgeableLike, DryingOutTimerLike {
  BribeTime: IntTag;
  DamageTime?: ShortTag;
  TicksRemainingUntilDryOut: IntTag;
}

export interface Egg extends EntityLike<EntityResource.egg>, ProjectileLike {}

export interface ItemEntity extends EntityLike<EntityResource.item> {
  Age: ShortTag;
  Health: ShortTag;
  Item: Item;
  OwnerID?: LongTag;
}

export interface EnderCrystal extends EntityLike<EntityResource.ender_crystal>, ExplodeLike {
  BlockTargetX?: IntTag;
  BlockTargetY?: IntTag;
  BlockTargetZ?: IntTag;
}

export interface Fox extends EntityLike<EntityResource.fox>, MobLike, AgeableLike, BreedableLike {
  TrustedPlayersAmount: IntTag;
  // Not quite sure how to type this
  "TrustedPlayer${number}": LongTag;
}

export interface Frog extends EntityLike<EntityResource.frog>, MobLike, BreedableLike {}

export interface GlowSquid extends EntityLike<EntityResource.glow_squid>, MobLike {}

export interface Goat extends EntityLike<EntityResource.goat>, MobLike, AgeableLike, BreedableLike, GeneticsLike {
  GoatHornCount: IntTag;
}

export interface Hoglin extends EntityLike<EntityResource.hoglin>, MobLike, AgeableLike, BreedableLike, TimerLike {}

// ~~horse v2 as well~~, wait, those are just the texture names, not the IDs themselves
// like `Donkey`, should I make a `HorseLike`?
export interface Horse extends EntityLike<EntityResource.horse>, MobLike, AgeableLike, BreedableLike, InventoryLike<Item[]> {
  // how many slots again?
  Temper: IntTag;
}

// like `Horse`, should I make a `HorseLike`?
export interface Llama extends EntityLike<EntityResource.llama>, MobLike, AgeableLike, BreedableLike, InventoryLike<Item[]> {
  // how many slots again?
  Temper: IntTag;
}

export interface LlamaSpit extends EntityLike<EntityResource.llama_spit>, ProjectileLike {}

export interface Mooshroom extends EntityLike<EntityResource.mooshroom>, MobLike, AgeableLike, BreedableLike {}

// like `Horse`, should I make a `HorseLike`?
export interface Mule extends EntityLike<EntityResource.mule>, MobLike, AgeableLike, InventoryLike<Item[]> {
  // how many slots again?
  Temper: IntTag;
}

export interface Ocelot extends EntityLike<EntityResource.ocelot>, MobLike, AgeableLike, BreedableLike {}

export interface Painting extends EntityLike<EntityResource.painting> {
  Dir: ByteTag<PaintingDirection>;
  Direction: ByteTag; // unknown what the difference between these two are
  Motive?: StringTag; // `PaintingResource`
}

export type PaintingDirection = 0 | 1 | 2 | 3;

export interface Panda extends EntityLike<EntityResource.panda>, MobLike, AgeableLike, BreedableLike, GeneticsLike, InventoryLike<Item[]> {
  // how many slots again?
}

export interface Parrot extends EntityLike<EntityResource.parrot>, MobLike {}

export interface Pig extends EntityLike<EntityResource.pig>, MobLike, AgeableLike, BreedableLike {}

export interface PolarBear extends EntityLike<EntityResource.polar_bear>, MobLike, AgeableLike {}

export interface Rabbit extends EntityLike<EntityResource.rabbit>, MobLike, AgeableLike, BreedableLike {
  CarrotsEaten: IntTag;
  MoreCarrotTicks: IntTag;
}

export interface Sheep extends EntityLike<EntityResource.sheep>, MobLike, AgeableLike, BreedableLike {}

export interface SkeletonHorse extends EntityLike<EntityResource.skeleton_horse>, MobLike, AgeableLike {}

export interface Squid extends EntityLike<EntityResource.squid>, MobLike {}

export interface Sniffer extends EntityLike<EntityResource.sniffer>, MobLike, AgeableLike, BreedableLike {}

export interface Snowball extends EntityLike<EntityResource.snowball>, ProjectileLike {}

export interface Strider extends EntityLike<EntityResource.strider>, MobLike, AgeableLike, BreedableLike {}

export interface TraderLlama extends EntityLike<EntityResource.trader_llama>, MobLike {}

export interface Turtle extends EntityLike<EntityResource.turtle>, MobLike, AgeableLike, BreedableLike, HomeLike {
  IsPregnant: BooleanTag;
}

export interface Wolf extends EntityLike<EntityResource.wolf>, MobLike, AgeableLike, BreedableLike {
  // v1.20.50
  // properties: {
  //   "minecraft:has_armor": BooleanTag;
  //   "minecraft:is_armorable": BooleanTag;
  // };
}

export interface ZombieHorse extends EntityLike<EntityResource.zombie_horse>, MobLike, AgeableLike {}

export interface ArmorStand extends EntityLike<EntityResource.armor_stand>, MobLike {
  Pose: ArmorStandPose;
}

export interface ArmorStandPose {
  LastSignal: IntTag; // union?
  PoseIndex: IntTag; // union?
}

export interface Bat extends EntityLike<EntityResource.bat>, MobLike {
  BatFlags: BooleanTag;
}

export interface Camera extends EntityLike<EntityResource.tripod_camera>, MobLike {}

export interface IronGolem extends EntityLike<EntityResource.iron_golem>, MobLike, DwellerLike {}

export interface NPC extends EntityLike<EntityResource.npc>, MobLike {
  Actions?: StringTag;
  InteractiveText?: StringTag;
  PlayerSceneMapping?: NPCPlayerSceneMap[];
  RawtextName?: StringTag;
}

export interface NPCPlayerSceneMap {
  PlayerID: LongTag;
  SceneName: StringTag;
}

export interface Player extends EntityLike<EntityResource.player>, MobLike, AbilitiesLike {
  AgentID?: LongTag;
  DimensionId: IntTag<DimensionID>;
  EnchantmentSeed: IntTag;
  EnderChestInventory: Item[]; // 0-26, with slot tag
  fogCommandStack: StringTag[]; // `FogResource`? I think the fogs can be player-made though, like scoreboards? Maybe not,..
  format_version: StringTag;
  HasSeenCredits: BooleanTag;
  Inventory: Item[]; // 0-35, with slot tag
  LeftShoulderRiderID?: LongTag;
  MapIndex: IntTag;
  PlayerGameMode: IntTag<GameType>;
  PlayerLevel: IntTag;
  PlayerLevelProgress: FloatTag;
  PlayerUIItems: Item[]; // unknown
  recipe_unlocking: PlayerRecipeUnlocking;
  RideID?: LongTag;
  RightShoulderRiderID?: LongTag;
  SelectedContainerId: IntTag; // optional?* I don't think so, but I don't fully know what this is for, so I'm gonna leave it for now
  SelectedInventorySlot: IntTag; // 0-8? I don't remember the hotbar number indices, might be wrong there
  Sleeping: BooleanTag;
  SleepTimer: ShortTag;
  Sneaking: BooleanTag;
  SpawnBlockPositionX: IntTag;
  SpawnBlockPositionY: IntTag;
  SpawnBlockPositionZ: IntTag;
  SpawnDimension: IntTag<DimensionID>;
  SpawnX: IntTag;
  SpawnY: IntTag;
  SpawnZ: IntTag;
  TimeSinceRest: IntTag;
  WardenThreatDecreaseTimer: IntTag;
  WardenThreatLevel: IntTag<WardenThreatLevel>;
  WardenThreatLevelIncreaseCooldown: IntTag;
}

export interface PlayerRecipeUnlocking {
  unlocked_recipes: StringTag[]; // `Item["id"]`, or rather actually, `RecipeResource`
  used_contexts: IntTag; // maybe a union type of different crafting interface types
}

export type WardenThreatLevel = 0 | 1 | 2 | 3 | 4;

export interface Shulker extends EntityLike<EntityResource.shulker>, MobLike {}

export interface ShulkerBullet extends EntityLike<EntityResource.shulker_bullet>, MobLike, ProjectileLike {}

export interface WanderingTrader extends EntityLike<EntityResource.wandering_trader>, MobLike, EconomyTradeTableLike, TimerLike {
  // This is essentially the same as `Chicken`, it can be abstracted into it's own type
  entries: WanderingTraderEntry[];
}

export interface WanderingTraderEntry {
  SpawnTimer: IntTag;
  StopSpawning: ByteTag; // boolean?
}

export interface Axolotl extends EntityLike<EntityResource.axolotl>, MobLike, AgeableLike, BreedableLike, DryingOutTimerLike {
  DamageTime?: ShortTag;
  TicksRemainingUntilDryOut: IntTag;
}

export interface Cod extends EntityLike<EntityResource.cod>, MobLike {}

export interface Pufferfish extends EntityLike<EntityResource.pufferfish>, MobLike, TimerLike {}

export interface Salmon extends EntityLike<EntityResource.salmon>, MobLike {}

export interface Tadpole extends EntityLike<EntityResource.tadpole>, MobLike, AgeableLike {}

export interface TropicalFish extends EntityLike<EntityResource.tropicalfish>, MobLike {}

export interface Arrow extends EntityLike<EntityResource.arrow>, ProjectileLike, ArrowLike {
  auxValue: ByteTag<ArrowType>;
  enchantFlame: ByteTag<0 | 1>;
  enchantInfinity: ByteTag<0 | 1>;
  enchantPower: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  enchantPunch: ByteTag<0 | 1 | 2>;
  mobEffects: Effect[];
}

export type ArrowType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42;

export interface Trident extends EntityLike<EntityResource.thrown_trident>, ArrowLike, ProjectileLike {
  favoredSlot: IntTag; // union range of hotbar slots? or can it be any slot technically?
  Trident: Item; // `Item<"trident">`
}

export interface ExperienceOrb extends EntityLike<EntityResource.xp_bottle>, ThrowableLike {
  Age: ShortTag;
  "experience value": IntTag;
}

export interface ExperiencePotion extends EntityLike<EntityResource.xp_bottle>, ThrowableLike, ProjectileLike {}

export interface SplashPotion extends EntityLike<EntityResource.splash_potion>, ThrowableLike, ProjectileLike {
  PotionId: ShortTag<EffectResource>;
}
// `PotionLike`? ^^vv^^vv this is `Thrown Potion` from the wiki
export interface LingeringPotion extends EntityLike<EntityResource.lingering_potion>, ThrowableLike, ProjectileLike {
  PotionId: ShortTag<EffectResource>;
}

export interface EnderPearl extends EntityLike<EntityResource.ender_pearl>, ThrowableLike, ProjectileLike {}

export interface FallingBlock extends EntityLike<EntityResource.falling_block> {
  FallingBlock: Block;
  Time: ByteTag;
}

export interface Fireball extends EntityLike<EntityResource.fireball>, ExplodeLike, ProjectileLike {
  Direction: [X: FloatTag, Y: FloatTag, Z: FloatTag];
  inGround: ByteTag; // boolean?
  power: [X: FloatTag, Y: FloatTag, Z: FloatTag];
}

export interface FireworkRocket extends EntityLike<EntityResource.fireworks_rocket> {
  // I feel like this is missing metadata about what kind of firework shape it is, I should demo this
  Life: IntTag;
  LifeTime: IntTag;
}

export interface FishingBobber extends EntityLike<EntityResource.fishing_hook>, ProjectileLike {}

export interface ChestBoat extends EntityLike<EntityResource.chest_boat>, InventoryLike<Item[]> {
  // 0-26 slots
}

// export interface Agent {}

// export interface Armadillo {}

// export interface Balloon {}

// export interface Boat {}

// export interface Bogged {}

// export interface Breeze {}

// export interface BreezeWindChargeProjectile {}

// export interface Chalkboard {}

// export interface DragonFireball {}

// export interface ElderGuardianGhost {}

// export interface EvocationFang {}

// export interface EyeOfEnderSignal {}

// should I omit this?
// export interface Firefly {}

// export interface IceBomb {}

// export interface LeashKnot {}

// export interface LightningBolt {}

// export interface MovingBlock {}

// export interface Shield {}

// export interface SmallFireball {}

// export interface SnowGolem {}

// export interface WindChargeProjectile {}

// export interface WitherSkullDangerous {}

export interface VillagerLike {
  Willing: BooleanTag;
}

export interface MonsterLike {
  SpawnedByNight: BooleanTag;
}

export interface HumanoidMonsterLike {
  ItemInHand?: Item; // double-check this is correct, once `Item` is implemented
}

export interface MobLike {
  ActiveEffects?: Effect[];
  Air: ShortTag;
  Armor: [Item, Item, Item, Item]; // these actually appear to not be optional, and they are just Air items by default when there is no value
  AttackTime: ShortTag;
  Attributes: Attribute[];
  BodyRot?: FloatTag;
  boundX: IntTag;
  boundY: IntTag;
  boundZ: IntTag;
  canPickupItems: BooleanTag;
  Dead: BooleanTag;
  DeathTime: ShortTag;
  hasBoundOrigin: BooleanTag;
  hasSetCanPickupItems: BooleanTag; // if `canPickupItems` was set by the game
  HurtTime: ShortTag;
  LeasherID: LongTag;
  limitedLife: LongTag;
  Mainhand: [Item]; // I don't think this one is optional, and it defaults to Air if nothing is being held.
  NaturalSpawn: BooleanTag;
  Offhand: [Item]; // Same as the `Mainhand`
  persistingOffers?: PersistingOffers;
  persistingRiches?: IntTag;
  Surface: BooleanTag;
  TargetCaptainID?: LongTag;
  TargetID: LongTag; // optional I think? the wiki doesn't say* Not totally sure but I think not, looks like it's set to -1 otherwise.
  TradeExperience?: IntTag;
  TraderTier?: IntTag; // union? 'trade tier of this trader entity'. Maybe it's just a value though.
  WantsToBeJockey?: ByteTag; // guessing it's a boolean
}

export interface Attribute {
  Base: FloatTag;
  Current: FloatTag;
  DefaultMax: FloatTag;
  DefaultMin: FloatTag;
  Max: FloatTag;
  Min: FloatTag;
  Modifiers?: AttributeModifier[];
  Name: StringTag; // `AttributeResource`
  TemporalBuffs: TemporalBuff[];
}

export interface AttributeModifier {
  Amount: FloatTag;
  Name: StringTag; // `ModifierResource`
  Operand: IntTag;
  Operation: IntTag;
  UUIDLeast: LongTag;
  UUIDMost: LongTag;
}

export interface TemporalBuff {
  Amount: FloatTag;
  Duration: IntTag;
  LifeTime: IntTag;
  Type: IntTag; // probably a union, not documented
}

export interface PersistingOffers {} // not documented

export interface AbilitiesLike {
  abilities: Abilities;
}

export interface ArrowLike {
  isCreative: BooleanTag;
  OwnerID: LongTag;
  player: BooleanTag;
}

export interface ProjectileLike {
  TargetID: LongTag;
  StuckToBlockPos: [X: IntTag, Y: IntTag, Z: IntTag];
  CollisionPos: [X: FloatTag, Y: FloatTag, Z: FloatTag];
}

export interface ThrowableLike {
  inGround: BooleanTag; // boolean?
  OwnerID: LongTag;
  shake: BooleanTag; // boolean?
}

export interface AgeableLike {
  Age: IntTag;
}

export interface BreedableLike {
  InLove: IntTag;
  LoveCause: LongTag;
  BreedCooldown: IntTag;
}

export interface DryingOutTimerLike {
  CompleteTick: LongTag;
  State: IntTag<0 | 1>; // is a boolean, but Bedrock be Bedrock
}

export interface HomeLike {
  HomePos: [X: FloatTag, Y: FloatTag, Z: FloatTag];
  HomeDimensionId: IntTag<DimensionID>;
}

export interface InventoryLike<Items extends (Item | undefined)[]> {
  ChestItems: Items; // with slot tag
  InventoryVersion: StringTag;
  LootTable?: StringTag; // optional like JE?
  LootTableSeed?: IntTag; // optional like JE?
}

export interface TimerLike {
  TimeStamp: LongTag;
  HasExecuted: ByteTag; // boolean?
  CountTime: IntTag; // deprecated..
}

export interface DwellerLike {
  DwellingUniqueID: StringTag;
  RewardPlayersOnFirstFounding: ByteTag; // boolean?
  PreferredProfession: StringTag; // hmm? *lol, didn't mean for that to be a pun hahaha*
}

export interface EconomyTradeTableLike {
  Riches: IntTag;
  Offers?: TradeOffer[];
  ConvertedFromVillagerV1?: BooleanTag;
  TradeTablePath?: StringTag;
  LowTierCuredDiscount?: IntTag;
  HighTierCuredDiscount?: IntTag;
  NearbyCuredDiscount?: IntTag;
  NearbyCuredDiscountTimeStamp?: IntTag;
}

export interface TradeOffer {
  Recipes: TradeRecipe[];
  TierExpRequirements: TradeOfferExpTier[];
}

export interface TradeRecipe {
  buyA: Item;
  buyB?: Item;
  sell: Item;
  tier: IntTag; // union?
  uses: IntTag;
  maxUses: IntTag;
  traderExp: IntTag;
  rewardExp: BooleanTag;
  demand: IntTag;
  buyCountA: IntTag;
  buyCountB: IntTag;
  priceMultiplierA: FloatTag;
  priceMultiplierB: FloatTag;
}

export interface TradeOfferExpTier {
  // This would be a type `[`${number}`]`
  "<tier_level_num>": IntTag;
}

export interface TradeTableLike {
  sizeOfTradeFirstTimeVector: IntTag;
  FirstTimeTrade?: IntTag;
  TradeTier: IntTag;
  Riches: IntTag;
  Willing: ByteTag; // boolean?
  Offers?: object[]; // unknown
}

export interface ExplodeLike {
  // optional..?
  Fuse?: ByteTag;
  IsFuseLit?: ByteTag;
  AllowUnderwater: ByteTag;
}

export interface GeneticsLike {
  GeneArray: GeneticsGene[];
}

export interface GeneticsGene {
  // I think these possible could be typed as unions, is for Goat & friends' breeding types
  HiddenAllele: IntTag;
  MainAllele: IntTag;
}

export interface EntityLike<EntityID extends string> {
  Chested: BooleanTag;
  Color: ByteTag;
  Color2: ByteTag;
  CustomName?: StringTag;
  CustomNameVisible?: BooleanTag;
  definitions: StringTag[]; // needs more type info, I think this is a `DefinitionResource` kind of thing
  FallDistance: FloatTag;
  Fire: ShortTag;
  identifier: `${EntityID}`;
  internalComponents: EntityInternalComponents;
  Invulnerable: BooleanTag;
  IsAngry: BooleanTag;
  IsAutonomous: BooleanTag;
  IsBaby: BooleanTag;
  IsEating: BooleanTag;
  IsGliding: BooleanTag;
  IsGlobal: BooleanTag;
  IsIllagerCaptain: BooleanTag;
  IsOrphaned: BooleanTag;
  IsOutOfControl: BooleanTag;
  IsRoaring: BooleanTag;
  IsScared: BooleanTag;
  IsStunned: BooleanTag;
  IsSwimming: BooleanTag;
  IsTamed: BooleanTag;
  IsTrusting: BooleanTag;
  LastDimensionId?: IntTag<DimensionID>;
  LinksTag?: EntityLinksTag;
  LootDropped: BooleanTag;
  MarkVariant: IntTag;
  Motion?: [dX: FloatTag, dY: FloatTag, dZ: FloatTag];
  OnGround: BooleanTag;
  OwnerNew: LongTag;
  Persistent: BooleanTag;
  PortalCooldown: IntTag;
  Pos: [X: FloatTag, Y: FloatTag, Z: FloatTag];
  Rotation: [yaw: FloatTag, pitch: FloatTag];
  Saddled: BooleanTag;
  Sheared: BooleanTag;
  ShowBottom: BooleanTag;
  Sitting: BooleanTag;
  SkinID: IntTag;
  Strength: IntTag;
  StrengthMax: IntTag;
  Tags: StringTag[]; // Scoreboard tags
  UniqueID: LongTag;
  Variant: IntTag;
}

export interface EntityInternalComponents {
  EntityStorageKeyComponent: EntityStorageKeyComponent;
}

export interface EntityStorageKeyComponent {
  StorageKey: StringTag; // This is a reference to the entity's Actor storage key.
}

export interface EntityLinksTag {
  entityId: LongTag;
  LinkID: IntTag;
}

export enum EntityResource {
  item = "minecraft:item",
  xp_orb = "minecraft:xp_orb",
  tnt = "minecraft:tnt",
  falling_block = "minecraft:falling_block",
  moving_block = "minecraft:moving_block",
  armor_stand = "minecraft:armor_stand",
  xp_bottle = "minecraft:xp_bottle",
  eye_of_ender_signal = "minecraft:eye_of_ender_signal",
  ender_crystal = "minecraft:ender_crystal",
  fireworks_rocket = "minecraft:fireworks_rocket",
  thrown_trident = "minecraft:thrown_trident",
  shulker_bullet = "minecraft:shulker_bullet",
  fishing_hook = "minecraft:fishing_hook",
  dragon_fireball = "minecraft:dragon_fireball",
  arrow = "minecraft:arrow",
  snowball = "minecraft:snowball",
  egg = "minecraft:egg",
  painting = "minecraft:painting",
  minecart = "minecraft:minecart",
  fireball = "minecraft:fireball",
  splash_potion = "minecraft:splash_potion",
  ender_pearl = "minecraft:ender_pearl",
  leash_knot = "minecraft:leash_knot",
  wither_skull = "minecraft:wither_skull",
  boat = "minecraft:boat",
  wither_skull_dangerous = "minecraft:wither_skull_dangerous",
  lightning_bolt = "minecraft:lightning_bolt",
  small_fireball = "minecraft:small_fireball",
  area_effect_cloud = "minecraft:area_effect_cloud",
  hopper_minecart = "minecraft:hopper_minecart",
  tnt_minecart = "minecraft:tnt_minecart",
  chest_minecart = "minecraft:chest_minecart",
  command_block_minecart = "minecraft:command_block_minecart",
  lingering_potion = "minecraft:lingering_potion",
  llama_spit = "minecraft:llama_spit",
  evocation_fang = "minecraft:evocation_fang",
  ice_bomb = "minecraft:ice_bomb",
  balloon = "minecraft:balloon",
  chest_boat = "minecraft:chest_boat",
  zombie = "minecraft:zombie",
  creeper = "minecraft:creeper",
  skeleton = "minecraft:skeleton",
  spider = "minecraft:spider",
  zombie_pigman = "minecraft:zombie_pigman",
  slime = "minecraft:slime",
  enderman = "minecraft:enderman",
  silverfish = "minecraft:silverfish",
  cave_spider = "minecraft:cave_spider",
  ghast = "minecraft:ghast",
  magma_cube = "minecraft:magma_cube",
  blaze = "minecraft:blaze",
  zombie_villager = "minecraft:zombie_villager",
  witch = "minecraft:witch",
  stray = "minecraft:stray",
  husk = "minecraft:husk",
  wither_skeleton = "minecraft:wither_skeleton",
  guardian = "minecraft:guardian",
  elder_guardian = "minecraft:elder_guardian",
  wither = "minecraft:wither",
  ender_dragon = "minecraft:ender_dragon",
  shulker = "minecraft:shulker",
  endermite = "minecraft:endermite",
  vindicator = "minecraft:vindicator",
  phantom = "minecraft:phantom",
  ravager = "minecraft:ravager",
  evocation_illager = "minecraft:evocation_illager",
  vex = "minecraft:vex",
  drowned = "minecraft:drowned",
  pillager = "minecraft:pillager",
  zombie_villager_v2 = "minecraft:zombie_villager_v2",
  piglin = "minecraft:piglin",
  hoglin = "minecraft:hoglin",
  zoglin = "minecraft:zoglin",
  piglin_brute = "minecraft:piglin_brute",
  warden = "minecraft:warden",
  chicken = "minecraft:chicken",
  cow = "minecraft:cow",
  pig = "minecraft:pig",
  sheep = "minecraft:sheep",
  wolf = "minecraft:wolf",
  villager = "minecraft:villager",
  mooshroom = "minecraft:mooshroom",
  squid = "minecraft:squid",
  glow_squid = "minecraft:glow_squid",
  rabbit = "minecraft:rabbit",
  bat = "minecraft:bat",
  iron_golem = "minecraft:iron_golem",
  snow_golem = "minecraft:snow_golem",
  ocelot = "minecraft:ocelot",
  horse = "minecraft:horse",
  donkey = "minecraft:donkey",
  mule = "minecraft:mule",
  skeleton_horse = "minecraft:skeleton_horse",
  zombie_horse = "minecraft:zombie_horse",
  polar_bear = "minecraft:polar_bear",
  llama = "minecraft:llama",
  trader_llama = "minecraft:trader_llama",
  parrot = "minecraft:parrot",
  dolphin = "minecraft:dolphin",
  turtle = "minecraft:turtle",
  cat = "minecraft:cat",
  pufferfish = "minecraft:pufferfish",
  salmon = "minecraft:salmon",
  tropicalfish = "minecraft:tropicalfish",
  cod = "minecraft:cod",
  panda = "minecraft:panda",
  villager_v2 = "minecraft:villager_v2",
  wandering_trader = "minecraft:wandering_trader",
  fox = "minecraft:fox",
  bee = "minecraft:bee",
  strider = "minecraft:strider",
  goat = "minecraft:goat",
  axolotl = "minecraft:axolotl",
  frog = "minecraft:frog",
  tadpole = "minecraft:tadpole",
  allay = "minecraft:allay",
  player = "minecraft:player",
  shield = "minecraft:shield",
  elder_guardian_ghost = "minecraft:elder_guardian_ghost",
  npc = "minecraft:npc",
  agent = "minecraft:agent",
  tripod_camera = "minecraft:tripod_camera",
  chalkboard = "minecraft:chalkboard",
  sniffer = "minecraft:sniffer",
  camel = "minecraft:camel"
}