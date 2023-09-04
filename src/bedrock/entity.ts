export type Entity = EntityLike; // Temporary placeholder

export interface EntityLike {}

export type EntityResource = typeof EntityResource[keyof typeof EntityResource];

export const EntityResource = {
  item: "minecraft:item",
  xp_orb: "minecraft:xp_orb",
  tnt: "minecraft:tnt",
  falling_block: "minecraft:falling_block",
  moving_block: "minecraft:moving_block",
  armor_stand: "minecraft:armor_stand",
  xp_bottle: "minecraft:xp_bottle",
  eye_of_ender_signal: "minecraft:eye_of_ender_signal",
  ender_crystal: "minecraft:ender_crystal",
  fireworks_rocket: "minecraft:fireworks_rocket",
  thrown_trident: "minecraft:thrown_trident",
  shulker_bullet: "minecraft:shulker_bullet",
  fishing_hook: "minecraft:fishing_hook",
  dragon_fireball: "minecraft:dragon_fireball",
  arrow: "minecraft:arrow",
  snowball: "minecraft:snowball",
  egg: "minecraft:egg",
  painting: "minecraft:painting",
  minecart: "minecraft:minecart",
  fireball: "minecraft:fireball",
  splash_potion: "minecraft:splash_potion",
  ender_pearl: "minecraft:ender_pearl",
  leash_knot: "minecraft:leash_knot",
  wither_skull: "minecraft:wither_skull",
  boat: "minecraft:boat",
  wither_skull_dangerous: "minecraft:wither_skull_dangerous",
  lightning_bolt: "minecraft:lightning_bolt",
  small_fireball: "minecraft:small_fireball",
  area_effect_cloud: "minecraft:area_effect_cloud",
  hopper_minecart: "minecraft:hopper_minecart",
  tnt_minecart: "minecraft:tnt_minecart",
  chest_minecart: "minecraft:chest_minecart",
  command_block_minecart: "minecraft:command_block_minecart",
  lingering_potion: "minecraft:lingering_potion",
  llama_spit: "minecraft:llama_spit",
  evocation_fang: "minecraft:evocation_fang",
  ice_bomb: "minecraft:ice_bomb",
  balloon: "minecraft:balloon",
  chest_boat: "minecraft:chest_boat",
  zombie: "minecraft:zombie",
  creeper: "minecraft:creeper",
  skeleton: "minecraft:skeleton",
  spider: "minecraft:spider",
  zombie_pigman: "minecraft:zombie_pigman",
  slime: "minecraft:slime",
  enderman: "minecraft:enderman",
  silverfish: "minecraft:silverfish",
  cave_spider: "minecraft:cave_spider",
  ghast: "minecraft:ghast",
  magma_cube: "minecraft:magma_cube",
  blaze: "minecraft:blaze",
  zombie_villager: "minecraft:zombie_villager",
  witch: "minecraft:witch",
  stray: "minecraft:stray",
  husk: "minecraft:husk",
  wither_skeleton: "minecraft:wither_skeleton",
  guardian: "minecraft:guardian",
  elder_guardian: "minecraft:elder_guardian",
  wither: "minecraft:wither",
  ender_dragon: "minecraft:ender_dragon",
  shulker: "minecraft:shulker",
  endermite: "minecraft:endermite",
  vindicator: "minecraft:vindicator",
  phantom: "minecraft:phantom",
  ravager: "minecraft:ravager",
  evocation_illager: "minecraft:evocation_illager",
  vex: "minecraft:vex",
  drowned: "minecraft:drowned",
  pillager: "minecraft:pillager",
  zombie_villager_v2: "minecraft:zombie_villager_v2",
  piglin: "minecraft:piglin",
  hoglin: "minecraft:hoglin",
  zoglin: "minecraft:zoglin",
  piglin_brute: "minecraft:piglin_brute",
  warden: "minecraft:warden",
  chicken: "minecraft:chicken",
  cow: "minecraft:cow",
  pig: "minecraft:pig",
  sheep: "minecraft:sheep",
  wolf: "minecraft:wolf",
  villager: "minecraft:villager",
  mooshroom: "minecraft:mooshroom",
  squid: "minecraft:squid",
  rabbit: "minecraft:rabbit",
  bat: "minecraft:bat",
  iron_golem: "minecraft:iron_golem",
  snow_golem: "minecraft:snow_golem",
  ocelot: "minecraft:ocelot",
  horse: "minecraft:horse",
  donkey: "minecraft:donkey",
  mule: "minecraft:mule",
  skeleton_horse: "minecraft:skeleton_horse",
  zombie_horse: "minecraft:zombie_horse",
  polar_bear: "minecraft:polar_bear",
  llama: "minecraft:llama",
  parrot: "minecraft:parrot",
  dolphin: "minecraft:dolphin",
  turtle: "minecraft:turtle",
  cat: "minecraft:cat",
  pufferfish: "minecraft:pufferfish",
  salmon: "minecraft:salmon",
  tropicalfish: "minecraft:tropicalfish",
  cod: "minecraft:cod",
  panda: "minecraft:panda",
  villager_v2: "minecraft:villager_v2",
  wandering_trader: "minecraft:wandering_trader",
  fox: "minecraft:fox",
  bee: "minecraft:bee",
  strider: "minecraft:strider",
  goat: "minecraft:goat",
  frog: "minecraft:frog",
  tadpole: "minecraft:tadpole",
  allay: "minecraft:allay",
  player: "minecraft:player",
  shield: "minecraft:shield",
  elder_guardian_ghost: "minecraft:elder_guardian_ghost",
  npc: "minecraft:npc",
  agent: "minecraft:agent",
  tripod_camera: "minecraft:tripod_camera",
  chalkboard: "minecraft:chalkboard"
} as const;