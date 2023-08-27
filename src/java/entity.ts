import type { BooleanTag, ShortTag, IntTag, FloatTag, DoubleTag, StringTag, CompoundTag, IntArrayTag } from "nbtify";

export interface Entity extends CompoundTag {
  Air: ShortTag;
  CustomName: StringTag;
  CustomNameVisible?: BooleanTag;
  FallDistance: FloatTag;
  Fire: ShortTag;
  Glowing: BooleanTag;
  HasVisualFire: BooleanTag;
  id: EntityResource;
  Invulnerable: BooleanTag;
  Motion: [DoubleTag,DoubleTag,DoubleTag];
  NoGravity: BooleanTag;
  OnGround: BooleanTag;
  Passengers: Entity[];
  PortalCooldown: IntTag;
  Pos: [DoubleTag,DoubleTag,DoubleTag];
  Rotation: [FloatTag,FloatTag];
  Silent?: BooleanTag;
  Tags: Scoreboard[];
  TicksFrozen?: IntTag;
  UUID: IntArrayTag;
  [property: string]: any;
}

export type Scoreboard = any;

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