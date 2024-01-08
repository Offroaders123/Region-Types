import type { BooleanTag, ByteTag, ShortTag, IntTag, LongTag, FloatTag, DoubleTag, StringTag, IntArrayTag } from "nbtify";
import type { BlockState, BlockResource } from "./block.js";
import type { BlockEntity, MobSpawnerLike } from "./block-entity.js";
import type { DimensionResource } from "./dimension.js";
import type { EffectID } from "./effect.js";
import type { Item, ItemResource } from "./item.js";
import type { RecipeResource } from "./recipe.js";

export type Entity = Player | Allay | Axolotl | Bat | Bee | Blaze | Camel | Cat | CaveSpider | Chicken | Cod | Cow | Creeper | Dolphin | Donkey | Drowned | ElderGuardian | EnderDragon | Enderman | Endermite | Evoker | Fox | Frog | Ghast | Giant | GlowSquid | Goat | Guardian | Horse | Hoglin | Husk | Illusioner | IronGolem | Llama | MagmaCube | Mooshroom | Mule | Ocelot | Panda | Parrot | Phantom | Pig | Piglin | PiglinBrute | Pillager | PolarBear | Pufferfish | Rabbit | Ravager | Salmon | Sheep | Shulker | Silverfish | Skeleton | SkeletonHorse | Slime | SnowGolem | Sniffer | Spider | Squid | Stray | Strider | Tadpole | TraderLlama | TropicalFish | Turtle | Vex | Villager | Vindicator | WanderingTrader | Warden | Witch | Wither | WitherSkeleton | Wolf | Zoglin | Zombie | ZombieHorse | ZombieVillager | ZombifiedPiglin | Boat | ChestBoat | Minecart | ChestMinecart | FurnaceMinecart | TNTMinecart | HopperMinecart | SpawnerMinecart | CommandBlockMinecart | ItemEntity | ExperienceOrb | Arrow | SpectralArrow | Trident | Snowball | Egg | LlamaSpit | EnderPearl | EyeOfEnder | FireworkRocket | TNT | FallingBlock | FishingBobber | LightningBolt | LeashKnot | Painting | ItemFrame | ArmorStand | Fireball | WitherSkull | DragonFireball | ShulkerBullet | EndCrystal | EvokerFangs | Marker | ItemDisplay | BlockDisplay | TextDisplay | Interaction;

// Tags for all entities, except the id, CustomName and CustomNameVisible
// Tags for all mobs, except HandItems, ArmorItems, HandDropChances, ArmorDropChances, CanPickUpLoot, PersistenceRequired and Leash
export interface Player extends EntityLike, MobLike {
  id: undefined;
  abilities: Abilities;
  DataVersion: IntTag;
  Dimension: DimensionResource;
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
  ShoulderEntityLeft?: Entity;
  ShoulderEntityRight?: Entity;
  SleepTimer: ShortTag;
  SpawnDimension?: DimensionResource;
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
  dimension: DimensionResource;
  pos: IntArrayTag;
}

export type GameMode = 0 | 1 | 2 | 3;

export interface RecipeBook {
  recipes: RecipeResource[];
  toBeDisplayed: RecipeResource[];
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

export interface Allay extends EntityLike, MobLike {
  id: EntityResource.allay;
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

export interface Axolotl extends EntityLike, MobLike, BreedableLike, BucketableLike {
  id: EntityResource.axolotl;
  Variant: IntTag<AxolotlVariant>;
}

export type AxolotlVariant = 0 | 1 | 2 | 3 | 4;

export interface Bat extends EntityLike, MobLike {
  id: EntityResource.bat;
  BatFlags: BooleanTag;
}

export interface Bee extends EntityLike, MobLike, BreedableLike, AngeredLike {
  id: EntityResource.bee;
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

export interface Blaze extends EntityLike, MobLike {
  id: EntityResource.blaze;
}

export interface Camel extends EntityLike, MobLike, BreedableLike, HorseLike {
  id: EntityResource.camel;
  LastPoseTick: LongTag;
}

export interface Cat extends EntityLike, MobLike, BreedableLike, TameableLike, CollaredLike {
  id: EntityResource.cat;
  variant: CatVariant;
}

export type CatVariant = "minecraft:white" | "minecraft:black" | "minecraft:red" | "minecraft:siamese" | "minecraft:british_shorthair" | "minecraft:calico" | "minecraft:persian" | "minecraft:ragdoll" | "minecraft:tabby" | "minecraft:all_black" | "minecraft:jellie";

export interface CaveSpider extends EntityLike, MobLike {
  id: EntityResource.cave_spider;
}

export interface Chicken extends EntityLike, MobLike, BreedableLike {
  id: EntityResource.chicken;
  EggLayTime: IntTag;
  IsChickenJockey: BooleanTag;
}

export interface Cod extends EntityLike, MobLike, BucketableLike {
  id: EntityResource.cod;
}

export interface Cow extends EntityLike, MobLike, BreedableLike {
  id: EntityResource.cow;
}

export interface Creeper extends EntityLike, MobLike {
  id: EntityResource.creeper;
  ExplosionRadius: ByteTag;
  Fuse: ShortTag;
  ignited: BooleanTag;
  powered?: BooleanTag;
}

export interface Dolphin extends EntityLike, MobLike {
  id: EntityResource.dolphin;
  CanFindTreasure: BooleanTag;
  GotFish: BooleanTag;
  TreasurePosX: IntTag;
  TreasurePosY: IntTag;
  TreasurePosZ: IntTag;
}

export interface Donkey extends EntityLike, MobLike, BreedableLike, HorseLike {
  id: EntityResource.donkey;
  ChestedHorse: BooleanTag;
  Items?: Item[]; // only if `!!ChestedHorse`, with slot tag, 2-16
}

export interface Drowned extends EntityLike, MobLike, ZombieLike {
  id: EntityResource.drowned;
}

export interface ElderGuardian extends EntityLike, MobLike {
  id: EntityResource.elder_guardian;
}

export interface EnderDragon extends EntityLike, MobLike {
  id: EntityResource.ender_dragon;
  DragonPhase: IntTag<EnderDragonPhase>;
}

export type EnderDragonPhase = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export interface Enderman extends EntityLike, MobLike, AngeredLike {
  id: EntityResource.enderman;
  // Another funky block state shape
  carriedBlockState?: {
    Name: BlockResource;
    Properties?: BlockState;
  };
}

export interface Endermite extends EntityLike, MobLike {
  id: EntityResource.endermite;
  Lifetime: IntTag;
}

export interface Evoker extends EntityLike, MobLike, RaidLike {
  id: EntityResource.evoker;
  SpellTicks: IntTag;
}

export interface Fox extends EntityLike, MobLike, BreedableLike {
  id: EntityResource.fox;
  Crouching: BooleanTag;
  Sitting: BooleanTag;
  Sleeping: BooleanTag;
  Trusted: IntArrayTag[]; // `UUIDLike[]`
  Type: FoxType;
}

// Is this `minecraft:`-prefixed like `CatVariant`?
export type FoxType = "red" | "snow";

export interface Frog extends EntityLike, MobLike, BreedableLike {
  id: EntityResource.frog;
  variant: FrogVariant;
}

export type FrogVariant = "minecraft:temperate" | "minecraft:warm" | "minecraft:cold";

export interface Ghast extends EntityLike, MobLike {
  id: EntityResource.ghast;
  ExplosionPower: ByteTag;
}

export interface Giant extends EntityLike, MobLike {
  id: EntityResource.giant;
}

export interface GlowSquid extends EntityLike, MobLike {
  id: EntityResource.glow_squid;
  DarkTicksRemaining: IntTag;
}

export interface Goat extends EntityLike, MobLike {
  id: EntityResource.goat;
  HasLeftHorn: BooleanTag;
  HasRightHorn: BooleanTag;
  IsScreamingGoat: BooleanTag;
}

export interface Guardian extends EntityLike, MobLike {
  id: EntityResource.guardian;
}

export interface Horse extends EntityLike, MobLike, BreedableLike, HorseLike {
  id: EntityResource.horse;
  ArmorItem?: Item; // Only one of the Horse Armor types, so should be something like `Item<`minecraft:${string}_horse_armor`>`.
  Variant: IntTag<HorseVariant>;
}

export type HorseVariant = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 256 | 257 | 258 | 259 | 260 | 261 | 262 | 512 | 513 | 514 | 515 | 516 | 517 | 518 | 768 | 769 | 770 | 771 | 772 | 773 | 774 | 1024 | 1025 | 1026 | 1027 | 1028 | 1029 | 1030;

export interface Hoglin extends EntityLike, MobLike, BreedableLike, PiglinLike {
  id: EntityResource.hoglin;
  CannotBeHunted: BooleanTag;
}

export interface Husk extends EntityLike, MobLike, ZombieLike {
  id: EntityResource.husk;
}

export interface Illusioner extends EntityLike, MobLike, RaidLike {
  id: EntityResource.illusioner;
  SpellTicks: IntTag;
}

export interface IronGolem extends EntityLike, MobLike, AngeredLike {
  id: EntityResource.iron_golem;
  PlayerCreated: BooleanTag;
}

// I think `HorseLike` could be narrowed a little bit so it can better allow for Llama crossover types.
export interface Llama extends EntityLike, MobLike, BreedableLike {
  id: EntityResource.llama;
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

export interface MagmaCube extends EntityLike, MobLike, SlimeLike {
  id: EntityResource.magma_cube;
}

export interface Mooshroom extends EntityLike, MobLike, BreedableLike {
  id: EntityResource.mooshroom;
  EffectDuration?: IntTag;
  EffectId?: ByteTag<EffectID>;
  Type: MooshroomType;
}

export type MooshroomType = "red" | "brown";

export interface Mule extends EntityLike, MobLike, BreedableLike, HorseLike {
  id: EntityResource.mule;
  ChestedHorse: BooleanTag;
  Items?: Item[]; // only if `!!ChestedHorse`, and slot tag numbered 2-16.
}

export interface Ocelot extends EntityLike, MobLike, BreedableLike {
  id: EntityResource.ocelot;
  Trusting: BooleanTag;
}

export interface Panda extends EntityLike, MobLike, BreedableLike {
  id: EntityResource.panda;
  HiddenGene: PandaGene;
  MainGene: PandaGene;
}

// Are these `minecraft:`-prefixed?
export type PandaGene = "normal" | "lazy" | "worried" | "playful" | "brown" | "weak" | "aggressive";

export interface Parrot extends EntityLike, MobLike, TameableLike {
  id: EntityResource.parrot;
  Variant: IntTag<ParrotVariant>;
}

export type ParrotVariant = 0 | 1 | 2 | 3 | 4;

export interface Phantom extends EntityLike, MobLike {
  id: EntityResource.phantom;
  AX: IntTag;
  AY: IntTag;
  AZ: IntTag;
  Size: IntTag;
}

export interface Pig extends EntityLike, MobLike, BreedableLike, SaddledLike {
  id: EntityResource.pig;
}

export interface Piglin extends EntityLike, MobLike, AngeredLike {
  id: EntityResource.piglin;
  CannotHunt: BooleanTag;
  Inventory: Item[]; // 8 items, with slot tag
  IsBaby?: BooleanTag;
}

export interface PiglinBrute extends EntityLike, MobLike, AngeredLike, PiglinLike {
  id: EntityResource.piglin_brute;
}

export interface Pillager extends EntityLike, MobLike, RaidLike {
  id: EntityResource.pillager;
  Inventory: Item[]; // Currently unused, is it optional?
}

export interface PolarBear extends EntityLike, MobLike, BreedableLike, AngeredLike {
  id: EntityResource.polar_bear;
}

export interface Pufferfish extends EntityLike, MobLike, BucketableLike {
  id: EntityResource.pufferfish;
  PuffState: IntTag<PufferfishPuffState>;
}

export type PufferfishPuffState = 0 | 1 | 2;

export interface Rabbit extends EntityLike, MobLike, BreedableLike {
  id: EntityResource.rabbit;
  MoreCarrotTicks: IntTag;
  RabbitType: IntTag<RabbitType>;
}

export type RabbitType = 0 | 1 | 2 | 3 | 4 | 5 | 99; // `99` is The Killer Bunny, and adding a custom name "Toast" will be the Toast variant.

export interface Ravager extends EntityLike, MobLike, RaidLike {
  id: EntityResource.ravager;
  AttackTick: IntTag;
  RoarTick: IntTag;
  StunTick: IntTag;
}

export interface Salmon extends EntityLike, MobLike, BucketableLike {
  id: EntityResource.salmon;
}

export interface Sheep extends EntityLike, MobLike, BreedableLike {
  id: EntityResource.sheep;
  Color: ByteTag<SheepColor>;
  Sheared: BooleanTag;
}

export type SheepColor = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export interface Shulker extends EntityLike, MobLike {
  id: EntityResource.shulker;
  APX: IntTag;
  APY: IntTag;
  APZ: IntTag;
  AttachFace: ByteTag<ShulkerDirection>;
  Color: ByteTag<ShulkerColor>;
}

export type ShulkerDirection = 0 | 1 | 2 | 3 | 4 | 5;

export type ShulkerColor = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16; // 16 is the default color

export interface Silverfish extends EntityLike, MobLike {
  id: EntityResource.silverfish;
}

export interface Skeleton extends EntityLike, MobLike {
  id: EntityResource.skeleton;
  StrayConversionTime: IntTag;
}

export interface SkeletonHorse extends EntityLike, MobLike, BreedableLike, HorseLike {
  id: EntityResource.skeleton_horse;
  SkeletonTrap: BooleanTag;
  SkeletonTrapTime: IntTag;
}

export interface Slime extends EntityLike, MobLike, SlimeLike {
  id: EntityResource.slime;
}

export interface SnowGolem extends EntityLike, MobLike {
  id: EntityResource.snow_golem;
  Pumpkin: BooleanTag;
}

export interface Sniffer extends EntityLike, MobLike, BreedableLike {
  id: EntityResource.sniffer;
}

export interface Spider extends EntityLike, MobLike {
  id: EntityResource.spider;
}

export interface Squid extends EntityLike, MobLike {
  id: EntityResource.squid;
}

export interface Stray extends EntityLike, MobLike {
  id: EntityResource.stray;
}

export interface Strider extends EntityLike, MobLike, BreedableLike, SaddledLike {
  id: EntityResource.strider;
}

export interface Tadpole extends EntityLike, MobLike, BucketableLike {
  id: EntityResource.tadpole;
  Age: IntTag;
}

// I think `HorseLike` could be narrowed a little bit so it can better allow for Llama crossover types.
export interface TraderLlama extends EntityLike, MobLike, BreedableLike {
  id: EntityResource.trader_llama;
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

export interface TropicalFish extends EntityLike, MobLike, BucketableLike {
  id: EntityResource.tropical_fish;
  Variant: IntTag<TropicalFishVariant>;
}

export type TropicalFishVariant = number; // <https://minecraft.wiki/w/Tropical_Fish#Entity_data>

export interface Turtle extends EntityLike, MobLike, BreedableLike {
  id: EntityResource.turtle;
  HasEgg: BooleanTag;
  HomePosX: IntTag;
  HomePosY: IntTag;
  HomePosZ: IntTag;
  TravelPosX: IntTag;
  TravelPosY: IntTag;
  TravelPosZ: IntTag;
}

export interface Vex extends EntityLike, MobLike {
  id: EntityResource.vex;
  BoundX: IntTag;
  BoundY: IntTag;
  BoundZ: IntTag;
  LifeTicks: IntTag;
}

export interface Villager extends EntityLike, MobLike, VillagerLike, BreedableLike {
  id: EntityResource.villager;
  Inventory: Item[]; // 8 slots, with slot tag.
  LastRestock: LongTag;
  LastGossipDecay: LongTag;
  RestocksToday: IntTag;
  Willing: BooleanTag;
}

export interface Vindicator extends EntityLike, MobLike, RaidLike {
  id: EntityResource.vindicator;
  Johnny?: BooleanTag;
}

export interface WanderingTrader extends EntityLike, MobLike, BreedableLike {
  id: EntityResource.wandering_trader;
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

export interface Warden extends EntityLike, MobLike {
  id: EntityResource.warden;
  anger: WardenAnger;
}

export interface WardenAnger {
  suspects: WardenAngerSuspect[];
}

export interface WardenAngerSuspect {
  anger: IntTag;
  uuid: IntArrayTag; // `UUIDLike`
}

export interface Witch extends EntityLike, MobLike, RaidLike {
  id: EntityResource.witch;
}

export interface Wither extends EntityLike, MobLike {
  id: EntityResource.wither;
  Invul: IntTag;
}

export interface WitherSkeleton extends EntityLike, MobLike {
  id: EntityResource.wither_skeleton;
}

export interface Wolf extends EntityLike, MobLike, BreedableLike, TameableLike, AngeredLike, CollaredLike {
  id: EntityResource.wolf;
  // v1.20.5
  // armor: BooleanTag;
}

export interface Zoglin extends EntityLike, MobLike {
  id: EntityResource.zoglin;
  isBaby?: BooleanTag;
}

export interface Zombie extends EntityLike, MobLike, ZombieLike {
  id: EntityResource.zombie;
}

export interface ZombieHorse extends EntityLike, MobLike, BreedableLike, HorseLike {
  id: EntityResource.zombie_horse;
}

export interface ZombieVillager extends EntityLike, MobLike, VillagerLike, ZombieLike {
  id: EntityResource.zombie_villager;
  ConversionTime: IntTag;
  ConcersionPlayer: IntArrayTag; // `UUIDLike`
}

export interface ZombifiedPiglin extends EntityLike, MobLike, AngeredLike, ZombieLike {
  id: EntityResource.zombified_piglin;
}

export interface Boat extends EntityLike, BoatLike {
  id: EntityResource.boat;
}

export interface ChestBoat extends EntityLike, BoatLike, ContainerEntityLike {
  id: EntityResource.chest_boat;
}

export interface BoatLike {
  Type: BoatType;
}

// Is this `minecraft:`-prefixed like `CatVariant`?
export type BoatType = "oak" | "spruce" | "birch" | "jungle" | "acacia" | "dark_oak" | "mangrove" | "bamboo";

export interface Minecart extends EntityLike, MinecartLike {
  id: EntityResource.minecart;
}

export interface ChestMinecart extends EntityLike, MinecartLike, ContainerEntityLike {
  id: EntityResource.chest_minecart;
}

export interface FurnaceMinecart extends EntityLike, MinecartLike {
  Fuel: ShortTag;
  id: EntityResource.furnace_minecart;
  PushX: DoubleTag;
  PushZ: DoubleTag;
}

export interface TNTMinecart extends EntityLike, MinecartLike {
  id: EntityResource.tnt_minecart;
  TNTFuse: IntTag;
}

export interface HopperMinecart extends EntityLike, MinecartLike, ContainerEntityLike {
  Enabled: BooleanTag;
  id: EntityResource.hopper_minecart;
  TransferCooldown: IntTag<HopperMinecartTransferCooldown>;
}

export type HopperMinecartTransferCooldown = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface SpawnerMinecart extends EntityLike, MinecartLike, MobSpawnerLike {
  id: EntityResource.spawner_minecart;
}

// Should this inherit from `./block-entity - CommandBlockLike` of some sort? The wiki doesn't do this, and I'm curious if the docs for this don't match the current NBT, since this one is missing some of the Command Block-ish ones.
export interface CommandBlockMinecart extends EntityLike, MinecartLike {
  Command: StringTag;
  id: EntityResource.command_block_minecart;
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

export interface ItemEntity extends EntityLike {
  Age: ShortTag;
  Health: ShortTag<ItemHealth>;
  id: EntityResource.item;
  Item: Item;
  Owner?: IntArrayTag;
  PickupDelay: ShortTag;
  Thrower?: IntArrayTag;
}

export type ItemHealth = 0 | 1 | 2 | 3 | 4 | 5;

export interface ExperienceOrb extends EntityLike {
  Age: ShortTag;
  Count: IntTag;
  Health: ShortTag;
  id: EntityResource.experience_orb;
  Value: ShortTag;
}

export interface Arrow extends EntityLike, ArrowLike {
  id: EntityResource.arrow;
}

export interface SpectralArrow extends EntityLike, ArrowLike {
  id: EntityResource.spectral_arrow;
}

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
  Name: BlockResource;
  Properties?: BlockState;
}

export interface Trident extends EntityLike, ArrowLike, ProjectileLike {
  DealtDamage: BooleanTag;
  id: EntityResource.trident;
  // I think the shape of this looks like this, the formatting on the wiki is a bit weird.
  Trident: {
    item: Item; // `minecraft:trident` Item, or `Item<"minecraft:trident">` essentially.
  };
}

export interface Snowball extends EntityLike, ProjectileLike, ThrownItemLike {
  id: EntityResource.snowball;
}

export interface Egg extends EntityLike, ProjectileLike, ThrownItemLike {
  id: EntityResource.egg;
}

export interface LlamaSpit extends EntityLike, ProjectileLike {
  id: EntityResource.llama_spit;
}

export interface EnderPearl extends EntityLike, ProjectileLike, ThrownItemLike {
  id: EntityResource.ender_pearl;
}

export interface EyeOfEnder extends EntityLike, ThrownItemLike {
  id: EntityResource.eye_of_ender;
}

export interface FireworkRocket extends EntityLike, ProjectileLike {
  id: EntityResource.firework_rocket;
  FireworksItem: FireworksItem;
  Life: IntTag;
  LifeTime: IntTag;
  ShotAtAngle: BooleanTag;
}

// Is this an extension/generic of what would be `Item<"minecraft:firework_rocket">`, with additional Firework properties?
export interface FireworksItem {
  Count: ByteTag; // typically one
  id: ItemResource.firework_rocket;
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

export interface TNT extends EntityLike {
  id: EntityResource.tnt;
  // looks like it has changed from one to the other at some point
  Fuse: ShortTag;
  fuse: ShortTag;
  // is this just `BlockState`? This gets confusing where they are nested, seems to be this way multiple other instances as well.
  block_state: {
    Name: BlockResource;
    Properties?: BlockState;
  };
}

export interface FallingBlock extends EntityLike {
  id: EntityResource.falling_block;
  // This is the same weird thing as `TNT`.
  BlockState: {
    Name: BlockResource;
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

export interface FishingBobber extends EntityLike {
  id: EntityResource.fishing_bobber;
}

export interface LightningBolt extends EntityLike {
  id: EntityResource.lightning_bolt;
}

export interface LeashKnot extends EntityLike {
  id: EntityResource.leash_knot;
}

export interface Painting extends EntityLike, HangableLike {
  id: EntityResource.painting;
  variant: StringTag; // `PaintingVariant` union type
}

export interface ItemFrame extends EntityLike, HangableLike {
  id: EntityResource.item_frame;
  Fixed: BooleanTag;
  Invisible: BooleanTag;
  Item?: Item;
  ItemDropChance: FloatTag;
  ItemRotation: ByteTag;
}

// Is `MobLike`, except for `LeftHanded`, `DeathLootTable`, `DeathLootTableSeed`, `NoAI`, `Leash`, `CanPickUpLoot` and `PersistenceRequired`.
export interface ArmorStand extends EntityLike, MobLike {
  id: EntityResource.armor_stand;
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

export interface Fireball extends EntityLike, ProjectileLike, ThrownItemLike, FireballLike {
  id: EntityResource.fireball;
  ExplosionPower: ByteTag;
}

export interface WitherSkull extends EntityLike, ProjectileLike, FireballLike {
  id: EntityResource.wither_skull;
  dangerous: BooleanTag; // might want to be optional <https://minecraft.wiki/w/Wither#cite_ref-11>
}

export interface DragonFireball extends EntityLike, ProjectileLike, FireballLike {
  id: EntityResource.dragon_fireball;
}

export interface ShulkerBullet extends EntityLike, ProjectileLike {
  id: EntityResource.shulker_bullet;
  Steps: IntTag;
  Target: IntArrayTag; // `UUIDLike`, `IntArrayTag<[number, number, number, number]>`
  TXD: DoubleTag;
  TYD: DoubleTag;
  TZD: DoubleTag;
}

export interface EndCrystal extends EntityLike {
  id: EntityResource.end_crystal;
  BeamTarget: EndCrystalBeamTarget;
  ShowBottom: BooleanTag;
}

export interface EndCrystalBeamTarget {
  X: IntTag;
  Y: IntTag;
  Z: IntTag;
}

export interface EvokerFangs extends EntityLike {
  id: EntityResource.evoker_fangs;
  Owner: IntArrayTag; // `UUIDLike`
  Warmup: IntTag;
}

export interface Marker extends EntityLike {
  id: EntityResource.marker;
  data: any; // <https://minecraft.wiki/w/Marker#Entity_data>
}

export interface ItemDisplay extends EntityLike, DisplayLike {
  id: EntityResource.item_display;
  item_display: ItemDisplayModel;
}

export type ItemDisplayModel = "none" | "thirdperson_lefthand" | "thirdperson_righthand" | "firstperson_lefthand" | "firstperson_righthand" | "head" | "gui" | "ground" | "fixed";

export interface BlockDisplay extends EntityLike, DisplayLike {
  id: EntityResource.block_display;
  block_state: BlockState;
}

export interface TextDisplay extends EntityLike, DisplayLike {
  id: EntityResource.text_display;
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

export interface Interaction extends EntityLike {
  id: EntityResource.interaction;
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

export interface Effect {
  Ambient: BooleanTag;
  Amplifier: ByteTag;
  Duration: IntTag;
  HiddenEffect: Effect; // Might be optional?
  Id: EffectID;
  ShowIcon: BooleanTag;
  ShowParticles: BooleanTag;
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

// I should make this generic, for the `id?` property. `ID extends string | undefined`. Then I won't have to define an ID on each entity on it's own, rather `EntityLike` will handle that property. It improves validation for it as well.
export interface EntityLike {
  Air: ShortTag;
  CustomName?: StringTag;
  CustomNameVisible?: BooleanTag;
  FallDistance: FloatTag;
  Fire: ShortTag;
  Glowing: BooleanTag;
  HasVisualFire: BooleanTag;
  id?: EntityResource;
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