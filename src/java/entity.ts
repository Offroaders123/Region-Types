import type { BooleanTag, ByteTag, ShortTag, IntTag, LongTag, FloatTag, DoubleTag, StringTag, IntArrayTag } from "nbtify";
import type { BlockState, BlockResource } from "./block.js";
import type { MobSpawnerLike } from "./block-entity.js";
import type { DimensionResource } from "./dimension.js";
import type { EffectID } from "./effect.js";
import type { Item } from "./item.js";
import type { RecipeResource } from "./recipe.js";

export type Entity = Player | Boat | ChestBoat | Minecart | ChestMinecart | FurnaceMinecart | TNTMinecart | HopperMinecart | SpawnerMinecart | CommandBlockMinecart | ItemEntity | ExperienceOrb | Arrow | SpectralArrow | Trident;

export interface Player extends MobLike {
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

export interface Boat extends BoatLike {
  id: EntityResource.boat;
}

export interface ChestBoat extends BoatLike, ContainerEntityLike {
  id: EntityResource.chest_boat;
}

export interface BoatLike extends EntityLike {
  Type: BoatType;
}

export type BoatType = "oak" | "spruce" | "birch" | "jungle" | "acacia" | "dark_oak" | "mangrove" | "bamboo";

export interface Minecart extends MinecartLike {
  id: EntityResource.minecart;
}

export interface ChestMinecart extends MinecartLike, ContainerEntityLike {
  id: EntityResource.chest_minecart;
}

export interface FurnaceMinecart extends MinecartLike {
  Fuel: ShortTag;
  id: EntityResource.furnace_minecart;
  PushX: DoubleTag;
  PushZ: DoubleTag;
}

export interface TNTMinecart extends MinecartLike {
  id: EntityResource.tnt_minecart;
  TNTFuse: IntTag;
}

export interface HopperMinecart extends MinecartLike, ContainerEntityLike {
  Enabled: BooleanTag;
  id: EntityResource.hopper_minecart;
  TransferCooldown: IntTag<HopperMinecartTransferCooldown>;
}

export type HopperMinecartTransferCooldown = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface SpawnerMinecart extends MinecartLike, MobSpawnerLike {
  id: EntityResource.spawner_minecart;
}

// Should this inherit from `./block-entity - CommandBlockLike` of some sort? The wiki doesn't do this, and I'm curious if the docs for this don't match the current NBT, since this one is missing some of the Command Block-ish ones.
export interface CommandBlockMinecart extends MinecartLike {
  Command: StringTag;
  id: EntityResource.command_block_minecart;
  LastOutput: StringTag;
  SuccessCount: IntTag;
  TrackOutput: BooleanTag;
}

export interface MinecartLike extends EntityLike {
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

export interface Arrow extends ArrowLike {
  id: EntityResource.arrow;
}

export interface SpectralArrow extends ArrowLike {
  id: EntityResource.spectral_arrow;
}

// How can the potion effect types be optionally added/defined only for tipped arrows? Just with `extends Partial<PotionEffectLike>`?
export interface ArrowLike extends EntityLike, ProjectileLike, PotionEffectLike {
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

export interface ContainerEntityLike {
  Items: Item[]; // `Slot` tag as well, need to add that
  LootTable?: StringTag; // LootTableResource
  LootTableSeed?: LongTag;
}

export interface ProjectileLike {
  HasBeenShot: BooleanTag;
  LeftOwner?: BooleanTag; // `?: TrueTag`
  Owner?: IntArrayTag;
}

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

export interface MobLike extends EntityLike {
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
  entity_display = "minecraft:entity_display",
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