import type { BooleanTag, ByteTag, ShortTag, IntTag, LongTag, FloatTag, DoubleTag, StringTag, IntArrayTag } from "nbtify";
import type { BlockState, BlockResource } from "./block.js";
import type { BlockEntity, MobSpawnerLike } from "./block-entity.js";
import type { DimensionResource } from "./dimension.js";
import type { Effect, EffectID } from "./effect.js";
import type { Item, ItemResource } from "./item.js";
import type { RecipeResource } from "./recipe.js";

export type Entity<K extends keyof EntityNameMap = keyof EntityNameMap> = EntityNameMap[K];

export interface EntityNameMap {
  player: Player;
  allay: Allay;
  axolotl: Axolotl;
  bat: Bat;
  bee: Bee;
  blaze: Blaze;
  camel: Camel;
  cat: Cat;
  cave_spider: CaveSpider;
  chicken: Chicken;
  cod: Cod;
  cow: Cow;
  creeper: Creeper;
  dolphin: Dolphin;
  donkey: Donkey;
  drowned: Drowned;
  elder_guardian: ElderGuardian;
  ender_dragon: EnderDragon;
  enderman: Enderman;
  endermite: Endermite;
  evoker: Evoker;
  fox: Fox;
  frog: Frog;
  ghast: Ghast;
  giant: Giant;
  glow_squid: GlowSquid;
  goat: Goat;
  guardian: Guardian;
  horse: Horse;
  hoglin: Hoglin;
  husk: Husk;
  illusioner: Illusioner;
  iron_golem: IronGolem;
  llama: Llama;
  magma_cube: MagmaCube;
  mooshroom: Mooshroom;
  mule: Mule;
  ocelot: Ocelot;
  panda: Panda;
  parrot: Parrot;
  phantom: Phantom;
  pig: Pig;
  piglin: Piglin;
  piglin_brute: PiglinBrute;
  pillager: Pillager;
  polar_bear: PolarBear;
  pufferfish: Pufferfish;
  rabbit: Rabbit;
  ravager: Ravager;
  salmon: Salmon;
  sheep: Sheep;
  shulker: Shulker;
  silverfish: Silverfish;
  skeleton: Skeleton;
  skeleton_horse: SkeletonHorse;
  slime: Slime;
  snow_golem: SnowGolem;
  sniffer: Sniffer;
  spider: Spider;
  squid: Squid;
  stray: Stray;
  strider: Strider;
  tadpole: Tadpole;
  trader_llama: TraderLlama;
  tropical_fish: TropicalFish;
  turtle: Turtle;
  vex: Vex;
  villager: Villager;
  vindicator: Vindicator;
  wandering_trader: WanderingTrader;
  warden: Warden;
  witch: Witch;
  wither: Wither;
  wither_skeleton: WitherSkeleton;
  wolf: Wolf;
  zoglin: Zoglin;
  zombie: Zombie;
  zombie_horse: ZombieHorse;
  zombie_villager: ZombieVillager;
  zombified_piglin: ZombifiedPiglin;
  boat: Boat;
  chest_boat: ChestBoat;
  minecart: Minecart;
  chest_minecart: ChestMinecart;
  furnace_minecart: FurnaceMinecart;
  tnt_minecart: TNTMinecart;
  hopper_minecart: HopperMinecart;
  spawner_minecart: SpawnerMinecart;
  command_block_minecart: CommandBlockMinecart;
  item: ItemEntity;
  experience_orb: ExperienceOrb;
  arrow: Arrow;
  spectral_arrow: SpectralArrow;
  trident: Trident;
  snowball: Snowball;
  egg: Egg;
  llama_spit: LlamaSpit;
  ender_pearl: EnderPearl;
  eye_of_ender: EyeOfEnder;
  firework_rocket: FireworkRocket;
  tnt: TNT;
  falling_block: FallingBlock;
  fishing_bobber: FishingBobber;
  lightning_bolt: LightningBolt;
  leash_knot: LeashKnot;
  painting: Painting;
  item_frame: ItemFrame;
  armor_stand: ArmorStand;
  fireball: Fireball;
  wither_skull: WitherSkull;
  dragon_fireball: DragonFireball;
  shulker_bullet: ShulkerBullet;
  end_crystal: EndCrystal;
  evoker_fangs: EvokerFangs;
  marker: Marker;
  item_display: ItemDisplay;
  block_display: BlockDisplay;
  text_display: TextDisplay;
  interaction: Interaction;
}

// Tags for all entities, except the id, CustomName and CustomNameVisible
// Tags for all mobs, except HandItems, ArmorItems, HandDropChances, ArmorDropChances, CanPickUpLoot, PersistenceRequired and Leash
export interface Player extends EntityLike<undefined>, MobLike {
  abilities: Abilities;
  DataVersion: IntTag;
  Dimension: `${DimensionResource}`;
  EnderItems: Item[];
  enteredNetherPosition?: EnteredNetherPosition;
  foodExhaustionLevel: FloatTag;
  foodLevel: IntTag;
  foodSaturationLevel: FloatTag;
  foodTickTimer: IntTag;
  Inventory: Item[];
  LastDeathLocation?: LastDeathLocation;
  playerGameType: IntTag<GameMode>;
  previousPlayerGameType: IntTag<GameMode>;
  recipeBook: RecipeBook;
  RootVehicle?: RootVehicle;
  Score: IntTag;
  seenCredits: BooleanTag;
  SelectedItem?: Item;
  SelectedItemSlot: IntTag;
  // I think this is `minecraft:parrot` only, but I'm curious if you can put any entity on your shoulder in-game
  ShoulderEntityLeft?: Entity<"parrot">;
  ShoulderEntityRight?: Entity<"parrot">;
  SleepTimer: ShortTag;
  SpawnDimension?: `${DimensionResource}`;
  SpawnForced?: BooleanTag;
  SpawnX?: IntTag;
  SpawnY?: IntTag;
  SpawnZ?: IntTag;
  warden_spawn_tracker: WardenSpawnTracker; // Optional? Doesn't specify on the wiki
  XpLevel: IntTag;
  XpP: FloatTag;
  XpSeed: IntTag;
  XpTotal: IntTag;
}

export interface Abilities {
  flying: BooleanTag;
  flySpeed: FloatTag<0.05>; // It says it's always only ever `0.05`, but I feel like it might change for Spectator Mode?
  instabuild: BooleanTag;
  invulnerable: BooleanTag;
  mayBuild: BooleanTag;
  mayfly: BooleanTag;
  walkSpeed: FloatTag<0.1>; // Same here, this apparently always stays the same
}

export interface EnteredNetherPosition {
  x: DoubleTag;
  y: DoubleTag;
  z: DoubleTag;
}

export interface LastDeathLocation {
  dimension: `${DimensionResource}`;
  pos: IntArrayTag;
}

export type GameMode = 0 | 1 | 2 | 3;

export interface RecipeBook {
  recipes: `${RecipeResource}`[];
  toBeDisplayed: `${RecipeResource}`[];
  isFilteringCraftable: BooleanTag;
  isGuiOpen: BooleanTag;
  isFurnaceFilteringCraftable: BooleanTag;
  isFurnaceGuiOpen: BooleanTag;
  isBlastingFurnaceFilteringCraftable: BooleanTag;
  isBlastingFurnaceGuiOpen: BooleanTag;
  isSmokerFilteringCraftable: BooleanTag;
  isSmokerGuiOpen: BooleanTag;
}

export interface RootVehicle {
  Attach: IntArrayTag;
  Entity: Entity;
}

export interface WardenSpawnTracker {
  cooldown_ticks: IntTag;
  ticks_since_last_warning: IntTag;
  warning_level: IntTag<WardenWarningLevel>;
}

export type WardenWarningLevel = 0 | 1 | 2 | 3;

export interface Allay extends EntityLike<EntityResource.allay>, MobLike {
  CanDuplicate: BooleanTag;
  DuplicationCooldown: LongTag;
  Inventory: [Item?];
  listener: AllayVibrationListener;
}

export interface AllayVibrationListener {
  distance: IntTag;
  event?: AllayVibrationEvent;
  event_delay: IntTag;
  event_distance: IntTag;
  range: IntTag;
  source: AllayVibrationListenerSource;
}

export interface AllayVibrationEvent {
  distance: IntTag;
  game_event: StringTag; // Resource location of the game event
  pos: [DoubleTag, DoubleTag, DoubleTag]; // `PositionLike<DoubleTag>` maybe? I want to make a regular type for this pattern.
  projectile_owner?: IntArrayTag; // `UUIDLike`
  source?: IntArrayTag; // `UUIDLike`
}

export type AllayVibrationListenerSource = AllayVibrationListenerSourceBlock | AllayVibrationListenerSourceEntity;

export interface AllayVibrationListenerSourceBlock {
  type: "block";
  pos: IntArrayTag; // `IntArrayTag<[number, number, number]>`
}

export interface AllayVibrationListenerSourceEntity {
  type: "entity";
  source_entity: IntArrayTag; // `UUIDLike`
  y_offset: FloatTag;
}

export interface Axolotl extends EntityLike<EntityResource.axolotl>, MobLike, BreedableLike, BucketableLike {
  Variant: IntTag<AxolotlVariant>;
}

export type AxolotlVariant = 0 | 1 | 2 | 3 | 4;

export interface Bat extends EntityLike<EntityResource.bat>, MobLike {
  BatFlags: BooleanTag;
}

export interface Bee extends EntityLike<EntityResource.bee>, MobLike, BreedableLike, AngeredLike {
  CannotEnterHiveTicks: IntTag;
  CropsGrownSincePollination: IntTag;
  FlowerPos: BeePositionLike;
  HasNectar: BooleanTag;
  HasStung: BooleanTag;
  HivePosition: BeePositionLike;
  TicksSincePollination: IntTag;
}

export interface BeePositionLike {
  X: IntTag;
  Y: IntTag;
  Z: IntTag;
}

export interface Blaze extends EntityLike<EntityResource.blaze>, MobLike {}

export interface Camel extends EntityLike<EntityResource.camel>, MobLike, BreedableLike, HorseLike {
  LastPoseTick: LongTag;
}

export interface Cat extends EntityLike<EntityResource.cat>, MobLike, BreedableLike, TameableLike, CollaredLike {
  variant: CatVariant;
}

export type CatVariant = "minecraft:white" | "minecraft:black" | "minecraft:red" | "minecraft:siamese" | "minecraft:british_shorthair" | "minecraft:calico" | "minecraft:persian" | "minecraft:ragdoll" | "minecraft:tabby" | "minecraft:all_black" | "minecraft:jellie";

export interface CaveSpider extends EntityLike<EntityResource.cave_spider>, MobLike {}

export interface Chicken extends EntityLike<EntityResource.chicken>, MobLike, BreedableLike {
  EggLayTime: IntTag;
  IsChickenJockey: BooleanTag;
}

export interface Cod extends EntityLike<EntityResource.cod>, MobLike, BucketableLike {}

export interface Cow extends EntityLike<EntityResource.cow>, MobLike, BreedableLike {}

export interface Creeper extends EntityLike<EntityResource.creeper>, MobLike {
  ExplosionRadius: ByteTag;
  Fuse: ShortTag;
  ignited: BooleanTag;
  powered?: BooleanTag;
}

export interface Dolphin extends EntityLike<EntityResource.dolphin>, MobLike {
  CanFindTreasure: BooleanTag;
  GotFish: BooleanTag;
  TreasurePosX: IntTag;
  TreasurePosY: IntTag;
  TreasurePosZ: IntTag;
}

export interface Donkey extends EntityLike<EntityResource.donkey>, MobLike, BreedableLike, HorseLike {
  ChestedHorse: BooleanTag;
  Items?: Item[]; // only if `!!ChestedHorse`, with slot tag, 2-16
}

export interface Drowned extends EntityLike<EntityResource.drowned>, MobLike, ZombieLike {}

export interface ElderGuardian extends EntityLike<EntityResource.elder_guardian>, MobLike {}

export interface EnderDragon extends EntityLike<EntityResource.ender_dragon>, MobLike {
  DragonPhase: IntTag<EnderDragonPhase>;
}

export type EnderDragonPhase = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Enderman extends EntityLike<EntityResource.enderman>, MobLike, AngeredLike {
  // Another funky block state shape
  carriedBlockState?: {
    Name: `${BlockResource}`;
    Properties?: BlockState;
  };
}

export interface Endermite extends EntityLike<EntityResource.endermite>, MobLike {
  Lifetime: IntTag;
}

export interface Evoker extends EntityLike<EntityResource.evoker>, MobLike, RaidLike {
  SpellTicks: IntTag;
}

export interface Fox extends EntityLike<EntityResource.fox>, MobLike, BreedableLike {
  Crouching: BooleanTag;
  Sitting: BooleanTag;
  Sleeping: BooleanTag;
  Trusted: IntArrayTag[]; // `UUIDLike[]`
  Type: FoxType;
}

// Is this `minecraft:`-prefixed like `CatVariant`?
export type FoxType = "red" | "snow";

export interface Frog extends EntityLike<EntityResource.frog>, MobLike, BreedableLike {
  variant: FrogVariant;
}

export type FrogVariant = "minecraft:temperate" | "minecraft:warm" | "minecraft:cold";

export interface Ghast extends EntityLike<EntityResource.ghast>, MobLike {
  ExplosionPower: ByteTag;
}

export interface Giant extends EntityLike<EntityResource.giant>, MobLike {}

export interface GlowSquid extends EntityLike<EntityResource.glow_squid>, MobLike {
  DarkTicksRemaining: IntTag;
}

export interface Goat extends EntityLike<EntityResource.goat>, MobLike {
  HasLeftHorn: BooleanTag;
  HasRightHorn: BooleanTag;
  IsScreamingGoat: BooleanTag;
}

export interface Guardian extends EntityLike<EntityResource.guardian>, MobLike {}

export interface Horse extends EntityLike<EntityResource.horse>, MobLike, BreedableLike, HorseLike {
  ArmorItem?: Item; // Only one of the Horse Armor types, so should be something like `Item<`minecraft:${string}_horse_armor`>`.
  Variant: IntTag<HorseVariant>;
}

export type HorseVariant = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 256 | 257 | 258 | 259 | 260 | 261 | 262 | 512 | 513 | 514 | 515 | 516 | 517 | 518 | 768 | 769 | 770 | 771 | 772 | 773 | 774 | 1024 | 1025 | 1026 | 1027 | 1028 | 1029 | 1030;

export interface Hoglin extends EntityLike<EntityResource.hoglin>, MobLike, BreedableLike, PiglinLike {
  CannotBeHunted: BooleanTag;
}

export interface Husk extends EntityLike<EntityResource.husk>, MobLike, ZombieLike {}

export interface Illusioner extends EntityLike<EntityResource.illusioner>, MobLike, RaidLike {
  SpellTicks: IntTag;
}

export interface IronGolem extends EntityLike<EntityResource.iron_golem>, MobLike, AngeredLike {
  PlayerCreated: BooleanTag;
}

// I think `HorseLike` could be narrowed a little bit so it can better allow for Llama crossover types.
export interface Llama extends EntityLike<EntityResource.llama>, MobLike, BreedableLike {
  Bred: BooleanTag;
  ChestedHorse: BooleanTag;
  DecorItem?: Item; // Typically a Carpet, without the Slot tag.
  EatingHaystack: BooleanTag;
  Items?: Item[]; // Only if `!!ChestedHorse`, with slot tags.
  Owner?: IntArrayTag; // `UUIDLike`
  Variant: IntTag<LlamaVariant>;
  Strength: IntTag<LlamaStrength>;
  Tame: BooleanTag; // `TameableLike` as well? I think the wiki was kind of goofed for this one.
  Temper: IntTag;
}

export type LlamaVariant = 0 | 1 | 2 | 3;

export type LlamaStrength = 1 | 2 | 3 | 4 | 5;

export interface MagmaCube extends EntityLike<EntityResource.magma_cube>, MobLike, SlimeLike {}

export interface Mooshroom extends EntityLike<EntityResource.mooshroom>, MobLike, BreedableLike {
  EffectDuration?: IntTag;
  EffectId?: ByteTag<EffectID>;
  Type: MooshroomType;
}

export type MooshroomType = "red" | "brown";

export interface Mule extends EntityLike<EntityResource.mule>, MobLike, BreedableLike, HorseLike {
  ChestedHorse: BooleanTag;
  Items?: Item[]; // only if `!!ChestedHorse`, and slot tag numbered 2-16.
}

export interface Ocelot extends EntityLike<EntityResource.ocelot>, MobLike, BreedableLike {
  Trusting: BooleanTag;
}

export interface Panda extends EntityLike<EntityResource.panda>, MobLike, BreedableLike {
  HiddenGene: PandaGene;
  MainGene: PandaGene;
}

// Are these `minecraft:`-prefixed?
export type PandaGene = "normal" | "lazy" | "worried" | "playful" | "brown" | "weak" | "aggressive";

export interface Parrot extends EntityLike<EntityResource.parrot>, MobLike, TameableLike {
  Variant: IntTag<ParrotVariant>;
}

export type ParrotVariant = 0 | 1 | 2 | 3 | 4;

export interface Phantom extends EntityLike<EntityResource.phantom>, MobLike {
  AX: IntTag;
  AY: IntTag;
  AZ: IntTag;
  Size: IntTag;
}

export interface Pig extends EntityLike<EntityResource.pig>, MobLike, BreedableLike, SaddledLike {}

export interface Piglin extends EntityLike<EntityResource.piglin>, MobLike, AngeredLike {
  CannotHunt: BooleanTag;
  Inventory: Item[]; // 8 items, with slot tag
  IsBaby?: BooleanTag;
}

export interface PiglinBrute extends EntityLike<EntityResource.piglin_brute>, MobLike, AngeredLike, PiglinLike {}

export interface Pillager extends EntityLike<EntityResource.pillager>, MobLike, RaidLike {
  Inventory: Item[]; // Currently unused, is it optional?
}

export interface PolarBear extends EntityLike<EntityResource.polar_bear>, MobLike, BreedableLike, AngeredLike {}

export interface Pufferfish extends EntityLike<EntityResource.pufferfish>, MobLike, BucketableLike {
  PuffState: IntTag<PufferfishPuffState>;
}

export type PufferfishPuffState = 0 | 1 | 2;

export interface Rabbit extends EntityLike<EntityResource.rabbit>, MobLike, BreedableLike {
  MoreCarrotTicks: IntTag;
  RabbitType: IntTag<RabbitType>;
}

export type RabbitType = 0 | 1 | 2 | 3 | 4 | 5 | 99; // `99` is The Killer Bunny, and adding a custom name "Toast" will be the Toast variant.

export interface Ravager extends EntityLike<EntityResource.ravager>, MobLike, RaidLike {
  AttackTick: IntTag;
  RoarTick: IntTag;
  StunTick: IntTag;
}

export interface Salmon extends EntityLike<EntityResource.salmon>, MobLike, BucketableLike {}

export interface Sheep extends EntityLike<EntityResource.sheep>, MobLike, BreedableLike {
  Color: ByteTag<SheepColor>;
  Sheared: BooleanTag;
}

export type SheepColor = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export interface Shulker extends EntityLike<EntityResource.shulker>, MobLike {
  APX: IntTag;
  APY: IntTag;
  APZ: IntTag;
  AttachFace: ByteTag<ShulkerDirection>;
  Color: ByteTag<ShulkerColor>;
}

export type ShulkerDirection = 0 | 1 | 2 | 3 | 4 | 5;

export type ShulkerColor = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16; // 16 is the default color

export interface Silverfish extends EntityLike<EntityResource.silverfish>, MobLike {}

export interface Skeleton extends EntityLike<EntityResource.skeleton>, MobLike {
  StrayConversionTime: IntTag;
}

export interface SkeletonHorse extends EntityLike<EntityResource.skeleton_horse>, MobLike, BreedableLike, HorseLike {
  SkeletonTrap: BooleanTag;
  SkeletonTrapTime: IntTag;
}

export interface Slime extends EntityLike<EntityResource.slime>, MobLike, SlimeLike {}

export interface SnowGolem extends EntityLike<EntityResource.snow_golem>, MobLike {
  Pumpkin: BooleanTag;
}

export interface Sniffer extends EntityLike<EntityResource.sniffer>, MobLike, BreedableLike {}

export interface Spider extends EntityLike<EntityResource.spider>, MobLike {}

export interface Squid extends EntityLike<EntityResource.squid>, MobLike {}

export interface Stray extends EntityLike<EntityResource.stray>, MobLike {}

export interface Strider extends EntityLike<EntityResource.strider>, MobLike, BreedableLike, SaddledLike {}

export interface Tadpole extends EntityLike<EntityResource.tadpole>, MobLike, BucketableLike {
  Age: IntTag;
}

// I think `HorseLike` could be narrowed a little bit so it can better allow for Llama crossover types.
export interface TraderLlama extends EntityLike<EntityResource.trader_llama>, MobLike, BreedableLike {
  Bred: BooleanTag;
  ChestedHorse: BooleanTag;
  DecorItem?: Item; // Typically a Carpet, without the Slot tag.
  DespawnDelay: IntTag; // Unique to Trader Llamas
  EatingHaystack: BooleanTag;
  Items?: Item[]; // Only if `!!ChestedHorse`, with slot tags.
  Owner?: IntArrayTag; // `UUIDLike`
  Variant: IntTag<LlamaVariant>;
  Strength: IntTag<LlamaStrength>;
  Tame: BooleanTag; // `TameableLike` as well? I think the wiki was kind of goofed for this one.
  Temper: IntTag;
}

export interface TropicalFish extends EntityLike<EntityResource.tropical_fish>, MobLike, BucketableLike {
  Variant: IntTag<TropicalFishVariant>;
}

export type TropicalFishVariant = number; // <https://minecraft.wiki/w/Tropical_Fish#Entity_data>

export interface Turtle extends EntityLike<EntityResource.turtle>, MobLike, BreedableLike {
  HasEgg: BooleanTag;
  HomePosX: IntTag;
  HomePosY: IntTag;
  HomePosZ: IntTag;
  TravelPosX: IntTag;
  TravelPosY: IntTag;
  TravelPosZ: IntTag;
}

export interface Vex extends EntityLike<EntityResource.vex>, MobLike {
  BoundX: IntTag;
  BoundY: IntTag;
  BoundZ: IntTag;
  LifeTicks: IntTag;
}

export interface Villager extends EntityLike<EntityResource.villager>, MobLike, VillagerLike, BreedableLike {
  Inventory: Item[]; // 8 slots, with slot tag.
  LastRestock: LongTag;
  LastGossipDecay: LongTag;
  RestocksToday: IntTag;
  Willing: BooleanTag;
}

export interface Vindicator extends EntityLike<EntityResource.vindicator>, MobLike, RaidLike {
  Johnny?: BooleanTag;
}

export interface WanderingTrader extends EntityLike<EntityResource.wandering_trader>, MobLike, BreedableLike {
  DespawnDelay: IntTag;
  Inventory: Item[]; // 8 slots, with slot tag, unused
  Offers?: WanderingTraderOffers;
  WanderTarget: WanderTarget;
}

export interface WanderingTraderOffers {
  Recipes: TradeOptionLike[];
}

// Could be generalized to `Position` also.
export interface WanderTarget {
  X: IntTag;
  Y: IntTag;
  Z: IntTag;
}

export interface Warden extends EntityLike<EntityResource.warden>, MobLike {
  anger: WardenAnger;
}

export interface WardenAnger {
  suspects: WardenAngerSuspect[];
}

export interface WardenAngerSuspect {
  anger: IntTag;
  uuid: IntArrayTag; // `UUIDLike`
}

export interface Witch extends EntityLike<EntityResource.witch>, MobLike, RaidLike {}

export interface Wither extends EntityLike<EntityResource.wither>, MobLike {
  Invul: IntTag;
}

export interface WitherSkeleton extends EntityLike<EntityResource.wither_skeleton>, MobLike {}

export interface Wolf extends EntityLike<EntityResource.wolf>, MobLike, BreedableLike, TameableLike, AngeredLike, CollaredLike {
  // v1.20.5
  // armor: BooleanTag;
}

export interface Zoglin extends EntityLike<EntityResource.zoglin>, MobLike {
  isBaby?: BooleanTag;
}

export interface Zombie extends EntityLike<EntityResource.zombie>, MobLike, ZombieLike {}

export interface ZombieHorse extends EntityLike<EntityResource.zombie_horse>, MobLike, BreedableLike, HorseLike {}

export interface ZombieVillager extends EntityLike<EntityResource.zombie_villager>, MobLike, VillagerLike, ZombieLike {
  ConversionTime: IntTag;
  ConcersionPlayer: IntArrayTag; // `UUIDLike`
}

export interface ZombifiedPiglin extends EntityLike<EntityResource.zombified_piglin>, MobLike, AngeredLike, ZombieLike {}

export interface Boat extends EntityLike<EntityResource.boat>, BoatLike {}

export interface ChestBoat extends EntityLike<EntityResource.chest_boat>, BoatLike, ContainerEntityLike {}

export interface BoatLike {
  Type: BoatType;
}

// Is this `minecraft:`-prefixed like `CatVariant`?
export type BoatType = "oak" | "spruce" | "birch" | "jungle" | "acacia" | "dark_oak" | "mangrove" | "bamboo";

export interface Minecart extends EntityLike<EntityResource.minecart>, MinecartLike {}

export interface ChestMinecart extends EntityLike<EntityResource.chest_minecart>, MinecartLike, ContainerEntityLike {}

export interface FurnaceMinecart extends EntityLike<EntityResource.furnace_minecart>, MinecartLike {
  Fuel: ShortTag;
  PushX: DoubleTag;
  PushZ: DoubleTag;
}

export interface TNTMinecart extends EntityLike<EntityResource.tnt_minecart>, MinecartLike {
  TNTFuse: IntTag;
}

export interface HopperMinecart extends EntityLike<EntityResource.hopper_minecart>, MinecartLike, ContainerEntityLike {
  Enabled: BooleanTag;
  TransferCooldown: IntTag<HopperMinecartTransferCooldown>;
}

export type HopperMinecartTransferCooldown = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface SpawnerMinecart extends EntityLike<EntityResource.spawner_minecart>, MinecartLike, MobSpawnerLike {}

// Should this inherit from `./block-entity - CommandBlockLike` of some sort? The wiki doesn't do this, and I'm curious if the docs for this don't match the current NBT, since this one is missing some of the Command Block-ish ones.
export interface CommandBlockMinecart extends EntityLike<EntityResource.command_block_minecart>, MinecartLike {
  Command: StringTag;
  LastOutput: StringTag;
  SuccessCount: IntTag;
  TrackOutput: BooleanTag;
}

export interface MinecartLike {
  CustomDisplayTile?: BooleanTag;
  DisplayOffset?: IntTag;
  DisplayState?: MinecartDisplayState;
}

export interface MinecartDisplayState {
  Name: BlockResource;
  Properties: BlockState;
}

export interface ItemEntity extends EntityLike<EntityResource.item> {
  Age: ShortTag;
  Health: ShortTag<ItemHealth>;
  Item: Item;
  Owner?: IntArrayTag;
  PickupDelay: ShortTag;
  Thrower?: IntArrayTag;
}

export type ItemHealth = 0 | 1 | 2 | 3 | 4 | 5;

export interface ExperienceOrb extends EntityLike<EntityResource.experience_orb> {
  Age: ShortTag;
  Count: IntTag;
  Health: ShortTag;
  Value: ShortTag;
}

export interface Arrow extends EntityLike<EntityResource.arrow>, ArrowLike {}

export interface SpectralArrow extends EntityLike<EntityResource.spectral_arrow>, ArrowLike {}

// How can the potion effect types be optionally added/defined only for tipped arrows? Just with `extends Partial<PotionEffectLike>`?
export interface ArrowLike extends ProjectileLike, PotionEffectLike {
  crit: BooleanTag;
  damage: DoubleTag;
  inBlockState?: ArrowBlockState;
  inGround: BooleanTag;
  life: ShortTag;
  pickup: ByteTag<ArrowPickup>;
  PierceLevel: ByteTag;
  shake: ByteTag;
  ShotFromCrossbow: BooleanTag;
  SoundEvent: StringTag; // I don't think this is a SoundResource actually?
}

export type ArrowPickup = 0 | 1 | 2;

export interface ArrowBlockState {
  Name: `${BlockResource}`;
  Properties?: BlockState;
}

export interface Trident extends EntityLike<EntityResource.trident>, ArrowLike, ProjectileLike {
  DealtDamage: BooleanTag;
  // I think the shape of this looks like this, the formatting on the wiki is a bit weird.
  Trident: {
    item: Item; // `minecraft:trident` Item, or `Item<"minecraft:trident">` essentially.
  };
}

export interface Snowball extends EntityLike<EntityResource.snowball>, ProjectileLike, ThrownItemLike {}

export interface Egg extends EntityLike<EntityResource.egg>, ProjectileLike, ThrownItemLike {}

export interface LlamaSpit extends EntityLike<EntityResource.llama_spit>, ProjectileLike {}

export interface EnderPearl extends EntityLike<EntityResource.ender_pearl>, ProjectileLike, ThrownItemLike {}

export interface EyeOfEnder extends EntityLike<EntityResource.eye_of_ender>, ThrownItemLike {}

export interface FireworkRocket extends EntityLike<EntityResource.firework_rocket>, ProjectileLike {
  FireworksItem: FireworksItem;
  Life: IntTag;
  LifeTime: IntTag;
  ShotAtAngle: BooleanTag;
}

// Is this an extension/generic of what would be `Item<"minecraft:firework_rocket">`, with additional Firework properties?
export interface FireworksItem {
  Count: ByteTag; // typically one
  id: `${ItemResource.firework_rocket}`;
  tag: {
    Fireworks: { // optional? I don't think so, but the wiki wording is a little off.
      Explosions: FireworkExplosion[];
      Flight: ByteTag; // flight duration
    };
  };
}

export interface FireworkExplosion {
  Colors: IntArrayTag;
  FadeColors: IntArrayTag;
  Flicker?: BooleanTag;
  Trail?: BooleanTag;
  Type: ByteTag<FireworkShape>;
}

export type FireworkShape = 0 | 1 | 2 | 3 | 4;

export interface TNT extends EntityLike<EntityResource.tnt> {
  // looks like it has changed from one to the other at some point
  Fuse: ShortTag;
  fuse: ShortTag;
  // is this just `BlockState`? This gets confusing where they are nested, seems to be this way multiple other instances as well.
  block_state: {
    Name: `${BlockResource}`;
    Properties?: BlockState;
  };
}

export interface FallingBlock extends EntityLike<EntityResource.falling_block> {
  // This is the same weird thing as `TNT`.
  BlockState: {
    Name: `${BlockResource}`;
    Properties?: BlockState;
  };
  CancelDrop: BooleanTag;
  DropItem: BooleanTag;
  FallHurtAmount: FloatTag;
  FallHurtMax: IntTag;
  HurtEntities: BooleanTag;
  TileEntityData?: BlockEntity; // I'm pretty sure this is `BlockEntity`, but the wiki doesn't specifically mention it.
  Time: IntTag;
}

export interface FishingBobber extends EntityLike<EntityResource.fishing_bobber> {}

export interface LightningBolt extends EntityLike<EntityResource.lightning_bolt> {}

export interface LeashKnot extends EntityLike<EntityResource.leash_knot> {}

export interface Painting extends EntityLike<EntityResource.painting>, HangableLike {
  variant: StringTag; // `PaintingVariant` union type
}

export interface ItemFrame extends EntityLike<EntityResource.item_frame>, HangableLike {
  Fixed: BooleanTag;
  Invisible: BooleanTag;
  Item?: Item;
  ItemDropChance: FloatTag;
  ItemRotation: ByteTag;
}

// Is `MobLike`, except for `LeftHanded`, `DeathLootTable`, `DeathLootTableSeed`, `NoAI`, `Leash`, `CanPickUpLoot` and `PersistenceRequired`.
export interface ArmorStand extends EntityLike<EntityResource.armor_stand>, MobLike {
  DisabledSlots: IntTag;
  Invisible: BooleanTag;
  Marker?: BooleanTag;
  NoBasePlate: BooleanTag;
  Pose: ArmorStandPose;
  ShowArms: BooleanTag;
  Small: BooleanTag;
}

export interface ArmorStandPose {
  Body: ArmorStandPoseEntry;
  Head: ArmorStandPoseEntry;
  LeftArm: ArmorStandPoseEntry;
  LeftLeg: ArmorStandPoseEntry;
  RightArm: ArmorStandPoseEntry;
  RightLeg: ArmorStandPoseEntry;
}

export type ArmorStandPoseEntry = [FloatTag, FloatTag, FloatTag];

export interface Fireball extends EntityLike<EntityResource.fireball>, ProjectileLike, ThrownItemLike, FireballLike {
  ExplosionPower: ByteTag;
}

export interface WitherSkull extends EntityLike<EntityResource.wither_skull>, ProjectileLike, FireballLike {
  dangerous: BooleanTag; // might want to be optional <https://minecraft.wiki/w/Wither#cite_ref-11>
}

export interface DragonFireball extends EntityLike<EntityResource.dragon_fireball>, ProjectileLike, FireballLike {}

export interface ShulkerBullet extends EntityLike<EntityResource.shulker_bullet>, ProjectileLike {
  Steps: IntTag;
  Target: IntArrayTag; // `UUIDLike`, `IntArrayTag<[number, number, number, number]>`
  TXD: DoubleTag;
  TYD: DoubleTag;
  TZD: DoubleTag;
}

export interface EndCrystal extends EntityLike<EntityResource.end_crystal> {
  BeamTarget: EndCrystalBeamTarget;
  ShowBottom: BooleanTag;
}

export interface EndCrystalBeamTarget {
  X: IntTag;
  Y: IntTag;
  Z: IntTag;
}

export interface EvokerFangs extends EntityLike<EntityResource.evoker_fangs> {
  Owner: IntArrayTag; // `UUIDLike`
  Warmup: IntTag;
}

export interface Marker extends EntityLike<EntityResource.marker> {
  data: any; // <https://minecraft.wiki/w/Marker#Entity_data>
}

export interface ItemDisplay extends EntityLike<EntityResource.item_display>, DisplayLike {
  item_display: ItemDisplayModel;
}

export type ItemDisplayModel = "none" | "thirdperson_lefthand" | "thirdperson_righthand" | "firstperson_lefthand" | "firstperson_righthand" | "head" | "gui" | "ground" | "fixed";

export interface BlockDisplay extends EntityLike<EntityResource.block_display>, DisplayLike {
  block_state: BlockState;
}

export interface TextDisplay extends EntityLike<EntityResource.text_display>, DisplayLike {
  alignment: TextDisplayAlignment;
  background: IntTag;
  default_background: BooleanTag;
  line_width: IntTag;
  see_through: BooleanTag;
  shadow: BooleanTag;
  text: StringTag; // raw JSON text <https://minecraft.wiki/w/Raw_JSON_text_format>
  text_opacity: ByteTag;
}

export type TextDisplayAlignment = "center" | "left" | "right";

export interface Interaction extends EntityLike<EntityResource.interaction> {
  width: FloatTag;
  height: FloatTag;
  response: BooleanTag;
  attack: InteractionEvent;
  interaction: InteractionEvent;
}

export interface InteractionEvent {
  player: IntArrayTag; // `UUIDLike`
  timestamp: LongTag;
}

export interface ContainerEntityLike {
  Items: Item[]; // `Slot` tag as well, need to add that
  LootTable?: StringTag; // LootTableResource
  LootTableSeed?: LongTag;
}

export interface ProjectileLike {
  HasBeenShot: BooleanTag;
  LeftOwner?: BooleanTag; // `?: TrueTag`
  Owner?: IntArrayTag; // `IntArrayTag<[number, number, number, number]>`
}

// should this be generic?
export interface ThrownItemLike {
  Item?: Item;
}

export interface HangableLike {
  Facing: ByteTag<HangableFacing>;
  TileX: IntTag;
  TileY: IntTag;
  TileZ: IntTag;
}

export type HangableFacing = 0 | 1 | 2 | 3 | 4 | 5;

export interface FireballLike {
  power: FireballPower;
}

export type FireballPower = [DoubleTag, DoubleTag, DoubleTag];

export interface DisplayLike {
  billboard: DisplayBillboard;
  brightness: DisplayBrightness;
  glow_color_override: IntTag;
  height: FloatTag;
  width: FloatTag;
  interpolation_duration: IntTag;
  teleport_duration: IntTag;
  start_interpolation: IntTag;
  shadow_radius: FloatTag;
  shadow_strength: FloatTag;
  view_range: FloatTag;
  transformation: DisplayTransformation;
}

export type DisplayBillboard = "fixed" | "vertical" | "horizontal" | "center";

export interface DisplayBrightness {
  block: IntTag<DisplayBrightnessLevel>;
  sky: IntTag<DisplayBrightnessLevel>;
}

export type DisplayBrightnessLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export type DisplayTransformation = DisplayTransformationMatrix | DisplayTransformationDecomposed;

export type DisplayTransformationMatrix = [FloatTag, FloatTag, FloatTag, FloatTag, FloatTag, FloatTag, FloatTag, FloatTag, FloatTag, FloatTag, FloatTag, FloatTag, FloatTag, FloatTag, FloatTag, FloatTag];

export interface DisplayTransformationDecomposed {
  left_rotation: DisplayRotation;
  translation: DisplayTranslation;
  right_rotation: DisplayRotation;
  scale: DisplayScale;
}

export type DisplayRotation = DisplayRotationQuaternion | DisplayRotationAxisAngle;

export type DisplayRotationQuaternion = [FloatTag, FloatTag, FloatTag, FloatTag];

export interface DisplayRotationAxisAngle {
  angle: FloatTag;
  axis: DisplayRotationAxis;
}

export type DisplayRotationAxis = [FloatTag, FloatTag, FloatTag];

export type DisplayTranslation = [FloatTag, FloatTag, FloatTag];

export type DisplayScale = [FloatTag, FloatTag, FloatTag];

export interface PotionEffectLike {
  custom_potion_effects: PotionEffectEntry[];
  Potion: StringTag; // not fully fleshed out <https://minecraft.wiki/w/Arrow#Data_values>, <https://minecraft.wiki/w/Potion#Item_data>
  CustomPotionColor: IntTag;
  Color: IntTag; // specific to Arrows..?
}

export interface PotionEffectEntry {
  id: IntTag<EffectID>;
  amplifier?: ByteTag;
  duration?: IntTag;
  ambient?: BooleanTag;
  show_particles?: BooleanTag;
  show_icon: BooleanTag; // also optional?
}

export interface MobLike {
  AbsorptionAmount: FloatTag;
  ActiveEffects: Effect[];
  ArmorDropChances: ArmorDropChances;
  ArmorItems: ArmorItems;
  Attributes: Attribute[];
  Brain: {
    memories: {}; // `Memories`
  };
  CanPickUpLoot: BooleanTag;
  DeathLootTable?: StringTag; // `LootTableResource`
  DeathLootTableSeed?: LongTag;
  DeathTime: ShortTag;
  FallFlying: ByteTag;
  Health: FloatTag;
  HurtByTimestamp: IntTag;
  HurtTime: ShortTag;
  HandDropChances: HandDropChances;
  HandItems: HandItems;
  Leash?: Leash;
  LeftHanded: BooleanTag;
  NoAI: BooleanTag;
  PersistenceRequired: BooleanTag;
  SleepingX: IntTag;
  SleepingY: IntTag;
  SleepingZ: IntTag;
  Team?: StringTag; // `ScoreboardTeam` ?
}

export interface BreedableLike {
  Age: IntTag;
  ForcedAge: IntTag;
  InLove: IntTag;
  LoveCause: IntArrayTag; // `UUIDLike`
}

export interface BucketableLike {
  FromBucket: BooleanTag;
}

export interface TameableLike {
  Owner?: IntArrayTag; // `UUIDLike`
  Sitting: BooleanTag;
}

export interface CollaredLike {
  CollarColor: ByteTag<CollarColor>;
}

export type CollarColor = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export interface SaddledLike {
  Saddle: BooleanTag;
}

export interface AngeredLike {
  AngerTime: IntTag;
  AngryAt: IntArrayTag; // `UUIDLike`
}

export interface HorseLike {
  Bred: BooleanTag;
  EatingHaystack: BooleanTag;
  Owner?: IntArrayTag; // `UUIDLike`
  SaddleItem?: Item; // `Item<"minecraft:saddle">`
  Tame: BooleanTag;
  Temper: IntTag;
}

export interface VillagerLike {
  Gossips: VillagerGossip[];
  Offers?: VillagerOffers; // "Is generated when the trading menu is opened for the first time.", optional?
  VillagerData: VillagerData;
  Xp: IntTag;
}

export interface VillagerGossip {
  Value: IntTag;
  Target: IntArrayTag; // `UUIDLike`
  Type: VillagerGossipType;
}

export type VillagerGossipType = "major_negative" | "minor_negative" | "major_positive" | "minor_positive" | "trading";

export interface VillagerOffers {
  Recipes: VillagerTradeOption[];
}

export interface TradeOptionLike {
  buy: Item;
  buyB?: Item;
  maxUses: IntTag;
  rewardExp: BooleanTag;
  sell: Item;
  uses: IntTag;
}

export interface VillagerTradeOption extends TradeOptionLike {
  demand: IntTag;
  priceMultiplier: FloatTag;
  specialPrice: IntTag;
  xp: IntTag;
}

export interface VillagerData {
  level: IntTag<VillagerLevel>;
  profession: VillagerProfession;
  type: VillagerType;
}

export type VillagerLevel = 1 | 2 | 3 | 4 | 5;

export type VillagerProfession = "minecraft:armorer" | "minecraft:butcher" | "minecraft:cartographer" | "minecraft:cleric" | "minecraft:farmer" | "minecraft:fisherman" | "minecraft:fletcher" | "minecraft:leatherworker" | "minecraft:librarian" | "minecraft:nitwit" | "minecraft:none" | "minecraft:mason" | "minecraft:shepherd" | "minecraft:toolsmith" | "minecraft:weaponsmith";

export type VillagerType = "minecraft:desert" | "minecraft:jungle" | "minecraft:plains" | "minecraft:savanna" | "minecraft:snow" | "minecraft:swamp" | "minecraft:taiga";

export interface ZombieLike {
  CanBreakDoors: BooleanTag;
  DrownedConversionTime: IntTag;
  InWaterTime: IntTag;
  IsBaby?: BooleanTag;
}

export interface PiglinLike {
  IsImmuneToZombification: BooleanTag;
  TimeInOverworld: IntTag;
}

export interface SlimeLike {
  Size: IntTag<SlimeSize>;
  wasOnGround: BooleanTag;
}

export type SlimeSize = 0 | 1 | 3; // not a mistake, weird I know lol; allows for larger values, these are the natural ones though.

export interface RaidLike {
  CanJoinRaid: BooleanTag;
  PatrolLeader: BooleanTag;
  Patrolling: BooleanTag;
  PatrolTarget: RaidPatrolTarget; // This can be made generic to a `Position` kind of thing.
  RaidId: IntTag;
  Wave: IntTag; // union of values? probably a min/max for each difficulty I'd assume?
}

export interface RaidPatrolTarget {
  X: IntTag;
  Y: IntTag;
  Z: IntTag;
}

export type ArmorDropChances = [FloatTag,FloatTag,FloatTag,FloatTag];

export type ArmorItems = [Item,Item,Item,Item];

export interface Attribute {
  Base: DoubleTag;
  Modifiers: Modifier[];
  Name: StringTag; // `AttributeResource` ?
}

export interface Modifier {
  Amount: DoubleTag;
  Name: StringTag; // `ModifierResource` ?
  Operation: IntTag<ModifierOperation>;
  UUID: IntArrayTag;
}

export type ModifierOperation = 0 | 1 | 2;

export type HandDropChances = [FloatTag,FloatTag];

export type HandItems = [Item,Item];

export type Leash = IntArrayTag | { X: IntTag; Y: IntTag; Z: IntTag; };

export interface EntityLike<EntityID extends string | undefined> {
  Air: ShortTag;
  CustomName?: StringTag;
  CustomNameVisible?: BooleanTag;
  FallDistance: FloatTag;
  Fire: ShortTag;
  Glowing: BooleanTag;
  HasVisualFire: BooleanTag;
  id: EntityID extends string ? `${EntityID}` : EntityID;
  Invulnerable: BooleanTag;
  Motion: EntityMotion;
  NoGravity: BooleanTag;
  OnGround: BooleanTag;
  Passengers: Entity[];
  PortalCooldown: IntTag;
  Pos: EntityPos;
  Rotation: EntityRotation;
  Silent?: BooleanTag;
  Tags: ScoreboardTag[];
  TicksFrozen?: IntTag;
  UUID: IntArrayTag;
}

export type EntityMotion = [DoubleTag,DoubleTag,DoubleTag];

export type EntityPos = [DoubleTag,DoubleTag,DoubleTag];

export type EntityRotation = [FloatTag,FloatTag];

export type ScoreboardTag = string;

export enum EntityResource {
  axolotl = "minecraft:axolotl",
  bat = "minecraft:bat",
  bee = "minecraft:bee",
  blaze = "minecraft:blaze",
  camel = "minecraft:camel",
  cat = "minecraft:cat",
  cave_spider = "minecraft:cave_spider",
  chicken = "minecraft:chicken",
  cod = "minecraft:cod",
  cow = "minecraft:cow",
  creeper = "minecraft:creeper",
  dolphin = "minecraft:dolphin",
  donkey = "minecraft:donkey",
  drowned = "minecraft:drowned",
  elder_guardian = "minecraft:elder_guardian",
  ender_dragon = "minecraft:ender_dragon",
  enderman = "minecraft:enderman",
  endermite = "minecraft:endermite",
  evoker = "minecraft:evoker",
  fox = "minecraft:fox",
  ghast = "minecraft:ghast",
  giant = "minecraft:giant",
  glow_squid = "minecraft:glow_squid",
  goat = "minecraft:goat",
  guardian = "minecraft:guardian",
  hoglin = "minecraft:hoglin",
  horse = "minecraft:horse",
  husk = "minecraft:husk",
  illusioner = "minecraft:illusioner",
  iron_golem = "minecraft:iron_golem",
  llama = "minecraft:llama",
  magma_cube = "minecraft:magma_cube",
  mooshroom = "minecraft:mooshroom",
  mule = "minecraft:mule",
  ocelot = "minecraft:ocelot",
  panda = "minecraft:panda",
  parrot = "minecraft:parrot",
  phantom = "minecraft:phantom",
  pig = "minecraft:pig",
  piglin = "minecraft:piglin",
  piglin_brute = "minecraft:piglin_brute",
  pillager = "minecraft:pillager",
  player = "minecraft:player",
  polar_bear = "minecraft:polar_bear",
  pufferfish = "minecraft:pufferfish",
  rabbit = "minecraft:rabbit",
  ravager = "minecraft:ravager",
  salmon = "minecraft:salmon",
  sheep = "minecraft:sheep",
  shulker = "minecraft:shulker",
  silverfish = "minecraft:silverfish",
  sniffer = "minecraft:sniffer",
  skeleton = "minecraft:skeleton",
  skeleton_horse = "minecraft:skeleton_horse",
  slime = "minecraft:slime",
  snow_golem = "minecraft:snow_golem",
  spider = "minecraft:spider",
  squid = "minecraft:squid",
  stray = "minecraft:stray",
  strider = "minecraft:strider",
  trader_llama = "minecraft:trader_llama",
  tropical_fish = "minecraft:tropical_fish",
  turtle = "minecraft:turtle",
  vex = "minecraft:vex",
  villager = "minecraft:villager",
  vindicator = "minecraft:vindicator",
  wandering_trader = "minecraft:wandering_trader",
  witch = "minecraft:witch",
  wither = "minecraft:wither",
  wither_skeleton = "minecraft:wither_skeleton",
  wolf = "minecraft:wolf",
  zoglin = "minecraft:zoglin",
  zombie = "minecraft:zombie",
  zombie_horse = "minecraft:zombie_horse",
  zombie_villager = "minecraft:zombie_villager",
  zombified_piglin = "minecraft:zombified_piglin",
  allay = "minecraft:allay",
  frog = "minecraft:frog",
  tadpole = "minecraft:tadpole",
  warden = "minecraft:warden",
  area_effect_cloud = "minecraft:area_effect_cloud",
  armor_stand = "minecraft:armor_stand",
  end_crystal = "minecraft:end_crystal",
  evoker_fangs = "minecraft:evoker_fangs",
  fishing_bobber = "minecraft:fishing_bobber",
  item_frame = "minecraft:item_frame",
  leash_knot = "minecraft:leash_knot",
  lightning_bolt = "minecraft:lightning_bolt",
  marker = "minecraft:marker",
  interaction = "minecraft:interaction",
  block_display = "minecraft:block_display",
  text_display = "minecraft:text_display",
  item_display = "minecraft:item_display",
  painting = "minecraft:painting",
  arrow = "minecraft:arrow",
  dragon_fireball = "minecraft:dragon_fireball",
  egg = "minecraft:egg",
  ender_pearl = "minecraft:ender_pearl",
  experience_bottle = "minecraft:experience_bottle",
  eye_of_ender = "minecraft:eye_of_ender",
  fireball = "minecraft:fireball",
  firework_rocket = "minecraft:firework_rocket",
  llama_spit = "minecraft:llama_spit",
  potion = "minecraft:potion",
  shulker_bullet = "minecraft:shulker_bullet",
  small_fireball = "minecraft:small_fireball",
  snowball = "minecraft:snowball",
  spectral_arrow = "minecraft:spectral_arrow",
  trident = "minecraft:trident",
  wither_skull = "minecraft:wither_skull",
  boat = "minecraft:boat",
  chest_boat = "minecraft:chest_boat",
  chest_minecart = "minecraft:chest_minecart",
  command_block_minecart = "minecraft:command_block_minecart",
  furnace_minecart = "minecraft:furnace_minecart",
  hopper_minecart = "minecraft:hopper_minecart",
  minecart = "minecraft:minecart",
  spawner_minecart = "minecraft:spawner_minecart",
  tnt_minecart = "minecraft:tnt_minecart",
  falling_block = "minecraft:falling_block",
  tnt = "minecraft:tnt",
  experience_orb = "minecraft:experience_orb",
  item = "minecraft:item"
}