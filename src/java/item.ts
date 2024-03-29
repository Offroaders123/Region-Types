import type { ByteTag, IntTag } from "nbtify";

export interface Item {
  Slot: ByteTag;
  id: `${ItemResource}`;
  tag?: {
    Damage: IntTag;
  };
  Count: ByteTag;
}

export enum ItemResource {
  acacia_boat = "minecraft:acacia_boat",
  amethyst_shard = "minecraft:amethyst_shard",
  apple = "minecraft:apple",
  armor_stand = "minecraft:armor_stand",
  arrow = "minecraft:arrow",
  axolotl_bucket = "minecraft:axolotl_bucket",
  axolotl_spawn_egg = "minecraft:axolotl_spawn_egg",
  baked_potato = "minecraft:baked_potato",
  bat_spawn_egg = "minecraft:bat_spawn_egg",
  bee_spawn_egg = "minecraft:bee_spawn_egg",
  beef = "minecraft:beef",
  beetroot = "minecraft:beetroot",
  beetroot_seeds = "minecraft:beetroot_seeds",
  beetroot_soup = "minecraft:beetroot_soup",
  birch_boat = "minecraft:birch_boat",
  black_dye = "minecraft:black_dye",
  blaze_powder = "minecraft:blaze_powder",
  blaze_rod = "minecraft:blaze_rod",
  blaze_spawn_egg = "minecraft:blaze_spawn_egg",
  blue_dye = "minecraft:blue_dye",
  bone = "minecraft:bone",
  bone_meal = "minecraft:bone_meal",
  book = "minecraft:book",
  bow = "minecraft:bow",
  bowl = "minecraft:bowl",
  bread = "minecraft:bread",
  brick = "minecraft:brick",
  brown_dye = "minecraft:brown_dye",
  bucket = "minecraft:bucket",
  bundle = "minecraft:bundle",
  carrot = "minecraft:carrot",
  carrot_on_a_stick = "minecraft:carrot_on_a_stick",
  cat_spawn_egg = "minecraft:cat_spawn_egg",
  cave_spider_spawn_egg = "minecraft:cave_spider_spawn_egg",
  chainmail_boots = "minecraft:chainmail_boots",
  chainmail_chestplate = "minecraft:chainmail_chestplate",
  chainmail_helmet = "minecraft:chainmail_helmet",
  chainmail_leggings = "minecraft:chainmail_leggings",
  charcoal = "minecraft:charcoal",
  chest_minecart = "minecraft:chest_minecart",
  chicken = "minecraft:chicken",
  chicken_spawn_egg = "minecraft:chicken_spawn_egg",
  chorus_fruit = "minecraft:chorus_fruit",
  clay_ball = "minecraft:clay_ball",
  clock = "minecraft:clock",
  coal = "minecraft:coal",
  cocoa_beans = "minecraft:cocoa_beans",
  cod = "minecraft:cod",
  cod_bucket = "minecraft:cod_bucket",
  cod_spawn_egg = "minecraft:cod_spawn_egg",
  command_block_minecart = "minecraft:command_block_minecart",
  compass = "minecraft:compass",
  cooked_beef = "minecraft:cooked_beef",
  cooked_chicken = "minecraft:cooked_chicken",
  cooked_cod = "minecraft:cooked_cod",
  cooked_mutton = "minecraft:cooked_mutton",
  cooked_porkchop = "minecraft:cooked_porkchop",
  cooked_rabbit = "minecraft:cooked_rabbit",
  cooked_salmon = "minecraft:cooked_salmon",
  cookie = "minecraft:cookie",
  copper_ingot = "minecraft:copper_ingot",
  cow_spawn_egg = "minecraft:cow_spawn_egg",
  creeper_banner_pattern = "minecraft:creeper_banner_pattern",
  creeper_spawn_egg = "minecraft:creeper_spawn_egg",
  crossbow = "minecraft:crossbow",
  cyan_dye = "minecraft:cyan_dye",
  dark_oak_boat = "minecraft:dark_oak_boat",
  debug_stick = "minecraft:debug_stick",
  diamond = "minecraft:diamond",
  diamond_axe = "minecraft:diamond_axe",
  diamond_boots = "minecraft:diamond_boots",
  diamond_chestplate = "minecraft:diamond_chestplate",
  diamond_helmet = "minecraft:diamond_helmet",
  diamond_hoe = "minecraft:diamond_hoe",
  diamond_horse_armor = "minecraft:diamond_horse_armor",
  diamond_leggings = "minecraft:diamond_leggings",
  diamond_pickaxe = "minecraft:diamond_pickaxe",
  diamond_shovel = "minecraft:diamond_shovel",
  diamond_sword = "minecraft:diamond_sword",
  dolphin_spawn_egg = "minecraft:dolphin_spawn_egg",
  donkey_spawn_egg = "minecraft:donkey_spawn_egg",
  dragon_breath = "minecraft:dragon_breath",
  dried_kelp = "minecraft:dried_kelp",
  drowned_spawn_egg = "minecraft:drowned_spawn_egg",
  egg = "minecraft:egg",
  elder_guardian_spawn_egg = "minecraft:elder_guardian_spawn_egg",
  elytra = "minecraft:elytra",
  emerald = "minecraft:emerald",
  enchanted_book = "minecraft:enchanted_book",
  enchanted_golden_apple = "minecraft:enchanted_golden_apple",
  end_crystal = "minecraft:end_crystal",
  ender_eye = "minecraft:ender_eye",
  ender_pearl = "minecraft:ender_pearl",
  enderman_spawn_egg = "minecraft:enderman_spawn_egg",
  endermite_spawn_egg = "minecraft:endermite_spawn_egg",
  evoker_spawn_egg = "minecraft:evoker_spawn_egg",
  experience_bottle = "minecraft:experience_bottle",
  feather = "minecraft:feather",
  fermented_spider_eye = "minecraft:fermented_spider_eye",
  filled_map = "minecraft:filled_map",
  fire_charge = "minecraft:fire_charge",
  firework_rocket = "minecraft:firework_rocket",
  firework_star = "minecraft:firework_star",
  fishing_rod = "minecraft:fishing_rod",
  flint = "minecraft:flint",
  flint_and_steel = "minecraft:flint_and_steel",
  flower_banner_pattern = "minecraft:flower_banner_pattern",
  fox_spawn_egg = "minecraft:fox_spawn_egg",
  furnace_minecart = "minecraft:furnace_minecart",
  ghast_spawn_egg = "minecraft:ghast_spawn_egg",
  ghast_tear = "minecraft:ghast_tear",
  glass_bottle = "minecraft:glass_bottle",
  glistering_melon_slice = "minecraft:glistering_melon_slice",
  globe_banner_pattern = "minecraft:globe_banner_pattern",
  glow_berries = "minecraft:glow_berries",
  glow_ink_sac = "minecraft:glow_ink_sac",
  glow_item_frame = "minecraft:glow_item_frame",
  glow_squid_spawn_egg = "minecraft:glow_squid_spawn_egg",
  glowstone_dust = "minecraft:glowstone_dust",
  goat_spawn_egg = "minecraft:goat_spawn_egg",
  gold_ingot = "minecraft:gold_ingot",
  gold_nugget = "minecraft:gold_nugget",
  golden_apple = "minecraft:golden_apple",
  golden_axe = "minecraft:golden_axe",
  golden_boots = "minecraft:golden_boots",
  golden_carrot = "minecraft:golden_carrot",
  golden_chestplate = "minecraft:golden_chestplate",
  golden_helmet = "minecraft:golden_helmet",
  golden_hoe = "minecraft:golden_hoe",
  golden_horse_armor = "minecraft:golden_horse_armor",
  golden_leggings = "minecraft:golden_leggings",
  golden_pickaxe = "minecraft:golden_pickaxe",
  golden_shovel = "minecraft:golden_shovel",
  golden_sword = "minecraft:golden_sword",
  gray_dye = "minecraft:gray_dye",
  green_dye = "minecraft:green_dye",
  guardian_spawn_egg = "minecraft:guardian_spawn_egg",
  gunpowder = "minecraft:gunpowder",
  heart_of_the_sea = "minecraft:heart_of_the_sea",
  hoglin_spawn_egg = "minecraft:hoglin_spawn_egg",
  honey_bottle = "minecraft:honey_bottle",
  honeycomb = "minecraft:honeycomb",
  hopper_minecart = "minecraft:hopper_minecart",
  horse_spawn_egg = "minecraft:horse_spawn_egg",
  husk_spawn_egg = "minecraft:husk_spawn_egg",
  ink_sac = "minecraft:ink_sac",
  iron_axe = "minecraft:iron_axe",
  iron_boots = "minecraft:iron_boots",
  iron_chestplate = "minecraft:iron_chestplate",
  iron_helmet = "minecraft:iron_helmet",
  iron_hoe = "minecraft:iron_hoe",
  iron_horse_armor = "minecraft:iron_horse_armor",
  iron_ingot = "minecraft:iron_ingot",
  iron_leggings = "minecraft:iron_leggings",
  iron_nugget = "minecraft:iron_nugget",
  iron_pickaxe = "minecraft:iron_pickaxe",
  iron_shovel = "minecraft:iron_shovel",
  iron_sword = "minecraft:iron_sword",
  item_frame = "minecraft:item_frame",
  jungle_boat = "minecraft:jungle_boat",
  knowledge_book = "minecraft:knowledge_book",
  lapis_lazuli = "minecraft:lapis_lazuli",
  lava_bucket = "minecraft:lava_bucket",
  lead = "minecraft:lead",
  leather = "minecraft:leather",
  leather_boots = "minecraft:leather_boots",
  leather_chestplate = "minecraft:leather_chestplate",
  leather_helmet = "minecraft:leather_helmet",
  leather_horse_armor = "minecraft:leather_horse_armor",
  leather_leggings = "minecraft:leather_leggings",
  light_blue_dye = "minecraft:light_blue_dye",
  light_gray_dye = "minecraft:light_gray_dye",
  lime_dye = "minecraft:lime_dye",
  lingering_potion = "minecraft:lingering_potion",
  llama_spawn_egg = "minecraft:llama_spawn_egg",
  magenta_dye = "minecraft:magenta_dye",
  magma_cream = "minecraft:magma_cream",
  magma_cube_spawn_egg = "minecraft:magma_cube_spawn_egg",
  map = "minecraft:map",
  melon_seeds = "minecraft:melon_seeds",
  melon_slice = "minecraft:melon_slice",
  milk_bucket = "minecraft:milk_bucket",
  minecart = "minecraft:minecart",
  mojang_banner_pattern = "minecraft:mojang_banner_pattern",
  mooshroom_spawn_egg = "minecraft:mooshroom_spawn_egg",
  mule_spawn_egg = "minecraft:mule_spawn_egg",
  mushroom_stew = "minecraft:mushroom_stew",
  music_disc_5 = "minecraft:music_disc_5",
  music_disc_11 = "minecraft:music_disc_11",
  music_disc_13 = "minecraft:music_disc_13",
  music_disc_blocks = "minecraft:music_disc_blocks",
  music_disc_cat = "minecraft:music_disc_cat",
  music_disc_chirp = "minecraft:music_disc_chirp",
  music_disc_far = "minecraft:music_disc_far",
  music_disc_mall = "minecraft:music_disc_mall",
  music_disc_mellohi = "minecraft:music_disc_mellohi",
  music_disc_otherside = "minecraft:music_disc_otherside",
  music_disc_pigstep = "minecraft:music_disc_pigstep",
  music_disc_relic = "minecraft:music_disc_relic",
  music_disc_stal = "minecraft:music_disc_stal",
  music_disc_strad = "minecraft:music_disc_strad",
  music_disc_wait = "minecraft:music_disc_wait",
  music_disc_ward = "minecraft:music_disc_ward",
  mutton = "minecraft:mutton",
  name_tag = "minecraft:name_tag",
  nautilus_shell = "minecraft:nautilus_shell",
  nether_brick = "minecraft:nether_brick",
  nether_star = "minecraft:nether_star",
  netherite_axe = "minecraft:netherite_axe",
  netherite_boots = "minecraft:netherite_boots",
  netherite_chestplate = "minecraft:netherite_chestplate",
  netherite_helmet = "minecraft:netherite_helmet",
  netherite_hoe = "minecraft:netherite_hoe",
  netherite_ingot = "minecraft:netherite_ingot",
  netherite_leggings = "minecraft:netherite_leggings",
  netherite_pickaxe = "minecraft:netherite_pickaxe",
  netherite_scrap = "minecraft:netherite_scrap",
  netherite_shovel = "minecraft:netherite_shovel",
  netherite_sword = "minecraft:netherite_sword",
  oak_boat = "minecraft:oak_boat",
  ocelot_spawn_egg = "minecraft:ocelot_spawn_egg",
  orange_dye = "minecraft:orange_dye",
  painting = "minecraft:painting",
  panda_spawn_egg = "minecraft:panda_spawn_egg",
  paper = "minecraft:paper",
  parrot_spawn_egg = "minecraft:parrot_spawn_egg",
  phantom_membrane = "minecraft:phantom_membrane",
  phantom_spawn_egg = "minecraft:phantom_spawn_egg",
  pig_spawn_egg = "minecraft:pig_spawn_egg",
  piglin_brute_spawn_egg = "minecraft:piglin_brute_spawn_egg",
  piglin_spawn_egg = "minecraft:piglin_spawn_egg",
  pillager_spawn_egg = "minecraft:pillager_spawn_egg",
  pink_dye = "minecraft:pink_dye",
  poisonous_potato = "minecraft:poisonous_potato",
  polar_bear_spawn_egg = "minecraft:polar_bear_spawn_egg",
  popped_chorus_fruit = "minecraft:popped_chorus_fruit",
  porkchop = "minecraft:porkchop",
  potato = "minecraft:potato",
  potion = "minecraft:potion",
  powder_snow_bucket = "minecraft:powder_snow_bucket",
  prismarine_crystals = "minecraft:prismarine_crystals",
  prismarine_shard = "minecraft:prismarine_shard",
  pufferfish = "minecraft:pufferfish",
  pufferfish_bucket = "minecraft:pufferfish_bucket",
  pufferfish_spawn_egg = "minecraft:pufferfish_spawn_egg",
  pumpkin_pie = "minecraft:pumpkin_pie",
  pumpkin_seeds = "minecraft:pumpkin_seeds",
  purple_dye = "minecraft:purple_dye",
  quartz = "minecraft:quartz",
  rabbit = "minecraft:rabbit",
  rabbit_foot = "minecraft:rabbit_foot",
  rabbit_hide = "minecraft:rabbit_hide",
  rabbit_spawn_egg = "minecraft:rabbit_spawn_egg",
  rabbit_stew = "minecraft:rabbit_stew",
  ravager_spawn_egg = "minecraft:ravager_spawn_egg",
  raw_copper = "minecraft:raw_copper",
  raw_gold = "minecraft:raw_gold",
  raw_iron = "minecraft:raw_iron",
  red_dye = "minecraft:red_dye",
  redstone = "minecraft:redstone",
  rotten_flesh = "minecraft:rotten_flesh",
  saddle = "minecraft:saddle",
  salmon = "minecraft:salmon",
  salmon_bucket = "minecraft:salmon_bucket",
  salmon_spawn_egg = "minecraft:salmon_spawn_egg",
  scute = "minecraft:scute",
  shears = "minecraft:shears",
  sheep_spawn_egg = "minecraft:sheep_spawn_egg",
  shield = "minecraft:shield",
  shulker_shell = "minecraft:shulker_shell",
  shulker_spawn_egg = "minecraft:shulker_spawn_egg",
  silverfish_spawn_egg = "minecraft:silverfish_spawn_egg",
  skeleton_horse_spawn_egg = "minecraft:skeleton_horse_spawn_egg",
  skeleton_spawn_egg = "minecraft:skeleton_spawn_egg",
  skull_banner_pattern = "minecraft:skull_banner_pattern",
  slime_ball = "minecraft:slime_ball",
  slime_spawn_egg = "minecraft:slime_spawn_egg",
  snowball = "minecraft:snowball",
  spectral_arrow = "minecraft:spectral_arrow",
  spider_eye = "minecraft:spider_eye",
  spider_spawn_egg = "minecraft:spider_spawn_egg",
  splash_potion = "minecraft:splash_potion",
  spruce_boat = "minecraft:spruce_boat",
  spyglass = "minecraft:spyglass",
  squid_spawn_egg = "minecraft:squid_spawn_egg",
  stick = "minecraft:stick",
  stone_axe = "minecraft:stone_axe",
  stone_hoe = "minecraft:stone_hoe",
  stone_pickaxe = "minecraft:stone_pickaxe",
  stone_shovel = "minecraft:stone_shovel",
  stone_sword = "minecraft:stone_sword",
  stray_spawn_egg = "minecraft:stray_spawn_egg",
  strider_spawn_egg = "minecraft:strider_spawn_egg",
  string = "minecraft:string",
  sugar = "minecraft:sugar",
  suspicious_stew = "minecraft:suspicious_stew",
  sweet_berries = "minecraft:sweet_berries",
  tipped_arrow = "minecraft:tipped_arrow",
  tnt_minecart = "minecraft:tnt_minecart",
  totem_of_undying = "minecraft:totem_of_undying",
  trader_llama_spawn_egg = "minecraft:trader_llama_spawn_egg",
  trident = "minecraft:trident",
  tropical_fish = "minecraft:tropical_fish",
  tropical_fish_bucket = "minecraft:tropical_fish_bucket",
  tropical_fish_spawn_egg = "minecraft:tropical_fish_spawn_egg",
  turtle_helmet = "minecraft:turtle_helmet",
  turtle_spawn_egg = "minecraft:turtle_spawn_egg",
  vex_spawn_egg = "minecraft:vex_spawn_egg",
  villager_spawn_egg = "minecraft:villager_spawn_egg",
  vindicator_spawn_egg = "minecraft:vindicator_spawn_egg",
  wandering_trader_spawn_egg = "minecraft:wandering_trader_spawn_egg",
  warped_fungus_on_a_stick = "minecraft:warped_fungus_on_a_stick",
  water_bucket = "minecraft:water_bucket",
  wheat = "minecraft:wheat",
  wheat_seeds = "minecraft:wheat_seeds",
  white_dye = "minecraft:white_dye",
  witch_spawn_egg = "minecraft:witch_spawn_egg",
  wither_skeleton_spawn_egg = "minecraft:wither_skeleton_spawn_egg",
  wolf_spawn_egg = "minecraft:wolf_spawn_egg",
  wooden_axe = "minecraft:wooden_axe",
  wooden_hoe = "minecraft:wooden_hoe",
  wooden_pickaxe = "minecraft:wooden_pickaxe",
  wooden_shovel = "minecraft:wooden_shovel",
  wooden_sword = "minecraft:wooden_sword",
  writable_book = "minecraft:writable_book",
  written_book = "minecraft:written_book",
  yellow_dye = "minecraft:yellow_dye",
  zoglin_spawn_egg = "minecraft:zoglin_spawn_egg",
  zombie_horse_spawn_egg = "minecraft:zombie_horse_spawn_egg",
  zombie_spawn_egg = "minecraft:zombie_spawn_egg",
  zombie_villager_spawn_egg = "minecraft:zombie_villager_spawn_egg",
  zombified_piglin_spawn_egg = "minecraft:zombified_piglin_spawn_egg",
  tadpole_bucket = "minecraft:tadpole_bucket",
  disc_fragment_5 = "minecraft:disc_fragment_5",
  echo_shard = "minecraft:echo_shard",
  goat_horn = "minecraft:goat_horn",
  mangrove_boat = "minecraft:mangrove_boat",
  recovery_compass = "minecraft:recovery_compass",
  allay_spawn_egg = "minecraft:allay_spawn_egg",
  frog_spawn_egg = "minecraft:frog_spawn_egg",
  tadpole_spawn_egg = "minecraft:tadpole_spawn_egg",
  warden_spawn_egg = "minecraft:warden_spawn_egg",
  oak_chest_boat = "minecraft:oak_chest_boat",
  spruce_chest_boat = "minecraft:spruce_chest_boat",
  birch_chest_boat = "minecraft:birch_chest_boat",
  jungle_chest_boat = "minecraft:jungle_chest_boat",
  acacia_chest_boat = "minecraft:acacia_chest_boat",
  dark_oak_chest_boat = "minecraft:dark_oak_chest_boat",
  mangrove_chest_boat = "minecraft:mangrove_chest_boat",
  nether_wart = "minecraft:nether_wart",
  piglin_banner_pattern = "minecraft:piglin_banner_pattern",
  ender_dragon_spawn_egg = "minecraft:ender_dragon_spawn_egg",
  iron_golem_spawn_egg = "minecraft:iron_golem_spawn_egg",
  snow_golem_spawn_egg = "minecraft:snow_golem_spawn_egg",
  wither_spawn_egg = "minecraft:wither_spawn_egg",
  brush = "minecraft:brush",
  pitcher_pod = "minecraft:pitcher_pod",
  angler_pottery_sherd = "minecraft:angler_pottery_sherd",
  archer_pottery_sherd = "minecraft:archer_pottery_sherd",
  arms_up_pottery_sherd = "minecraft:arms_up_pottery_sherd",
  blade_pottery_sherd = "minecraft:blade_pottery_sherd",
  brewer_pottery_sherd = "minecraft:brewer_pottery_sherd",
  burn_pottery_sherd = "minecraft:burn_pottery_sherd",
  danger_pottery_sherd = "minecraft:danger_pottery_sherd",
  explorer_pottery_sherd = "minecraft:explorer_pottery_sherd",
  friend_pottery_sherd = "minecraft:friend_pottery_sherd",
  heart_pottery_sherd = "minecraft:heart_pottery_sherd",
  heartbreak_pottery_sherd = "minecraft:heartbreak_pottery_sherd",
  howl_pottery_sherd = "minecraft:howl_pottery_sherd",
  miner_pottery_sherd = "minecraft:miner_pottery_sherd",
  mourner_pottery_sherd = "minecraft:mourner_pottery_sherd",
  plenty_pottery_sherd = "minecraft:plenty_pottery_sherd",
  prize_pottery_sherd = "minecraft:prize_pottery_sherd",
  sheaf_pottery_sherd = "minecraft:sheaf_pottery_sherd",
  shelter_pottery_sherd = "minecraft:shelter_pottery_sherd",
  skull_pottery_sherd = "minecraft:skull_pottery_sherd",
  snort_pottery_sherd = "minecraft:snort_pottery_sherd",
  netherite_upgrade_smithing_template = "minecraft:netherite_upgrade_smithing_template",
  coast_armor_trim_smithing_template = "minecraft:coast_armor_trim_smithing_template",
  dune_armor_trim_smithing_template = "minecraft:dune_armor_trim_smithing_template",
  eye_armor_trim_smithing_template = "minecraft:eye_armor_trim_smithing_template",
  host_armor_trim_smithing_template = "minecraft:host_armor_trim_smithing_template",
  raiser_armor_trim_smithing_template = "minecraft:raiser_armor_trim_smithing_template",
  rib_armor_trim_smithing_template = "minecraft:rib_armor_trim_smithing_template",
  sentry_armor_trim_smithing_template = "minecraft:sentry_armor_trim_smithing_template",
  shaper_armor_trim_smithing_template = "minecraft:shaper_armor_trim_smithing_template",
  silence_armor_trim_smithing_template = "minecraft:silence_armor_trim_smithing_template",
  snout_armor_trim_smithing_template = "minecraft:snout_armor_trim_smithing_template",
  spire_armor_trim_smithing_template = "minecraft:spire_armor_trim_smithing_template",
  tide_armor_trim_smithing_template = "minecraft:tide_armor_trim_smithing_template",
  vex_armor_trim_smithing_template = "minecraft:vex_armor_trim_smithing_template",
  ward_armor_trim_smithing_template = "minecraft:ward_armor_trim_smithing_template",
  wayfinder_armor_trim_smithing_template = "minecraft:wayfinder_armor_trim_smithing_template",
  wild_armor_trim_smithing_template = "minecraft:wild_armor_trim_smithing_template",
  camel_spawn_egg = "minecraft:camel_spawn_egg",
  sniffer_spawn_egg = "minecraft:sniffer_spawn_egg",
  torchflower_seeds = "minecraft:torchflower_seeds"
}