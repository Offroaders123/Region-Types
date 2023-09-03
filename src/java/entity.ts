import type { BooleanTag, ByteTag, ShortTag, IntTag, LongTag, FloatTag, DoubleTag, StringTag, IntArrayTag } from "nbtify";
import type { EffectID } from "./effect.js";
import type { Item } from "./item.js";

export type Entity = Player; // Temporary, will be filled with individual Entity interfaces.

export interface Player extends MobLike {
  abolities: Abilities;
  DataVersion: IntTag;
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

export type EntityResource = typeof EntityResource[keyof typeof EntityResource];

export const EntityResource = {
  axolotl: "minecraft:axolotl",
  bat: "minecraft:bat",
  bee: "minecraft:bee",
  blaze: "minecraft:blaze",
  camel: "minecraft:camel",
  cat: "minecraft:cat",
  cave_spider: "minecraft:cave_spider",
  chicken: "minecraft:chicken",
  cod: "minecraft:cod",
  cow: "minecraft:cow",
  creeper: "minecraft:creeper",
  dolphin: "minecraft:dolphin",
  donkey: "minecraft:donkey",
  drowned: "minecraft:drowned",
  elder_guardian: "minecraft:elder_guardian",
  ender_dragon: "minecraft:ender_dragon",
  enderman: "minecraft:enderman",
  endermite: "minecraft:endermite",
  evoker: "minecraft:evoker",
  fox: "minecraft:fox",
  ghast: "minecraft:ghast",
  giant: "minecraft:giant",
  glow_squid: "minecraft:glow_squid",
  goat: "minecraft:goat",
  guardian: "minecraft:guardian",
  hoglin: "minecraft:hoglin",
  horse: "minecraft:horse",
  husk: "minecraft:husk",
  illusioner: "minecraft:illusioner",
  iron_golem: "minecraft:iron_golem",
  llama: "minecraft:llama",
  magma_cube: "minecraft:magma_cube",
  mooshroom: "minecraft:mooshroom",
  mule: "minecraft:mule",
  ocelot: "minecraft:ocelot",
  panda: "minecraft:panda",
  parrot: "minecraft:parrot",
  phantom: "minecraft:phantom",
  pig: "minecraft:pig",
  piglin: "minecraft:piglin",
  piglin_brute: "minecraft:piglin_brute",
  pillager: "minecraft:pillager",
  polar_bear: "minecraft:polar_bear",
  pufferfish: "minecraft:pufferfish",
  rabbit: "minecraft:rabbit",
  ravager: "minecraft:ravager",
  salmon: "minecraft:salmon",
  sheep: "minecraft:sheep",
  shulker: "minecraft:shulker",
  silverfish: "minecraft:silverfish",
  sniffer: "minecraft:sniffer",
  skeleton: "minecraft:skeleton",
  skeleton_horse: "minecraft:skeleton_horse",
  slime: "minecraft:slime",
  snow_golem: "minecraft:snow_golem",
  spider: "minecraft:spider",
  squid: "minecraft:squid",
  stray: "minecraft:stray",
  strider: "minecraft:strider",
  trader_llama: "minecraft:trader_llama",
  tropical_fish: "minecraft:tropical_fish",
  turtle: "minecraft:turtle",
  vex: "minecraft:vex",
  villager: "minecraft:villager",
  vindicator: "minecraft:vindicator",
  wandering_trader: "minecraft:wandering_trader",
  witch: "minecraft:witch",
  wither: "minecraft:wither",
  wither_skeleton: "minecraft:wither_skeleton",
  wolf: "minecraft:wolf",
  zoglin: "minecraft:zoglin",
  zombie: "minecraft:zombie",
  zombie_horse: "minecraft:zombie_horse",
  zombie_villager: "minecraft:zombie_villager",
  zombified_piglin: "minecraft:zombified_piglin",
  allay: "minecraft:allay",
  frog: "minecraft:frog",
  tadpole: "minecraft:tadpole",
  warden: "minecraft:warden",
  area_effect_cloud: "minecraft:area_effect_cloud",
  armor_stand: "minecraft:armor_stand",
  end_crystal: "minecraft:end_crystal",
  evoker_fangs: "minecraft:evoker_fangs",
  fishing_bobber: "minecraft:fishing_bobber",
  item_frame: "minecraft:item_frame",
  leash_knot: "minecraft:leash_knot",
  lightning_bolt: "minecraft:lightning_bolt",
  marker: "minecraft:marker",
  interaction: "minecraft:interaction",
  block_display: "minecraft:block_display",
  entity_display: "minecraft:entity_display",
  item_display: "minecraft:item_display",
  painting: "minecraft:painting",
  arrow: "minecraft:arrow",
  dragon_fireball: "minecraft:dragon_fireball",
  egg: "minecraft:egg",
  ender_pearl: "minecraft:ender_pearl",
  experience_bottle: "minecraft:experience_bottle",
  eye_of_ender: "minecraft:eye_of_ender",
  fireball: "minecraft:fireball",
  firework_rocket: "minecraft:firework_rocket",
  llama_spit: "minecraft:llama_spit",
  potion: "minecraft:potion",
  shulker_bullet: "minecraft:shulker_bullet",
  small_fireball: "minecraft:small_fireball",
  snowball: "minecraft:snowball",
  spectral_arrow: "minecraft:spectral_arrow",
  trident: "minecraft:trident",
  wither_skull: "minecraft:wither_skull",
  boat: "minecraft:boat",
  chest_boat: "minecraft:chest_boat",
  chest_minecart: "minecraft:chest_minecart",
  command_block_minecart: "minecraft:command_block_minecart",
  furnace_minecart: "minecraft:furnace_minecart",
  hopper_minecart: "minecraft:hopper_minecart",
  minecart: "minecraft:minecart",
  spawner_minecart: "minecraft:spawner_minecart",
  tnt_minecart: "minecraft:tnt_minecart",
  falling_block: "minecraft:falling_block",
  tnt: "minecraft:tnt",
  experience_orb: "minecraft:experience_orb",
  item: "minecraft:item"
} as const;