import type { ByteTag, IntTag } from "nbtify";

export interface Block {
  name: `${BlockResource}`;
  states: BlockState;
  version: IntTag;
}

// These should eventually come from NBTify itself, once they're generic there
type StringTag<T extends string = string> = `${T}`;
type DoubleTag<T extends number = number> = T;

export type BlockState<K extends keyof BlockStateNameMap = keyof BlockStateNameMap> = BlockStateNameMap[K];

export interface BlockStateNameMap {
  acacia_button: acacia_button;
  acacia_door: acacia_door;
  acacia_double_slab: acacia_double_slab;
  acacia_fence: acacia_fence;
  acacia_fence_gate: acacia_fence_gate;
  acacia_hanging_sign: acacia_hanging_sign;
  acacia_leaves: acacia_leaves;
  acacia_log: acacia_log;
  acacia_planks: acacia_planks;
  acacia_pressure_plate: acacia_pressure_plate;
  acacia_slab: acacia_slab;
  acacia_stairs: acacia_stairs;
  acacia_standing_sign: acacia_standing_sign;
  acacia_trapdoor: acacia_trapdoor;
  acacia_wall_sign: acacia_wall_sign;
  acacia_wood: acacia_wood;
  activator_rail: activator_rail;
  air: air;
  allow: allow;
  amethyst_block: amethyst_block;
  amethyst_cluster: amethyst_cluster;
  ancient_debris: ancient_debris;
  andesite: andesite;
  andesite_stairs: andesite_stairs;
  anvil: anvil;
  azalea: azalea;
  azalea_leaves: azalea_leaves;
  azalea_leaves_flowered: azalea_leaves_flowered;
  bamboo: bamboo;
  bamboo_block: bamboo_block;
  bamboo_button: bamboo_button;
  bamboo_door: bamboo_door;
  bamboo_double_slab: bamboo_double_slab;
  bamboo_fence: bamboo_fence;
  bamboo_fence_gate: bamboo_fence_gate;
  bamboo_hanging_sign: bamboo_hanging_sign;
  bamboo_mosaic: bamboo_mosaic;
  bamboo_mosaic_double_slab: bamboo_mosaic_double_slab;
  bamboo_mosaic_slab: bamboo_mosaic_slab;
  bamboo_mosaic_stairs: bamboo_mosaic_stairs;
  bamboo_planks: bamboo_planks;
  bamboo_pressure_plate: bamboo_pressure_plate;
  bamboo_sapling: bamboo_sapling;
  bamboo_slab: bamboo_slab;
  bamboo_stairs: bamboo_stairs;
  bamboo_standing_sign: bamboo_standing_sign;
  bamboo_trapdoor: bamboo_trapdoor;
  bamboo_wall_sign: bamboo_wall_sign;
  barrel: barrel;
  barrier: barrier;
  basalt: basalt;
  beacon: beacon;
  bed: bed;
  bedrock: bedrock;
  bee_nest: bee_nest;
  beehive: beehive;
  beetroot: beetroot;
  bell: bell;
  big_dripleaf: big_dripleaf;
  birch_button: birch_button;
  birch_door: birch_door;
  birch_double_slab: birch_double_slab;
  birch_fence: birch_fence;
  birch_fence_gate: birch_fence_gate;
  birch_hanging_sign: birch_hanging_sign;
  birch_leaves: birch_leaves;
  birch_log: birch_log;
  birch_planks: birch_planks;
  birch_pressure_plate: birch_pressure_plate;
  birch_slab: birch_slab;
  birch_stairs: birch_stairs;
  birch_standing_sign: birch_standing_sign;
  birch_trapdoor: birch_trapdoor;
  birch_wall_sign: birch_wall_sign;
  birch_wood: birch_wood;
  black_candle: black_candle;
  black_candle_cake: black_candle_cake;
  black_carpet: black_carpet;
  black_concrete: black_concrete;
  black_concrete_powder: black_concrete_powder;
  black_glazed_terracotta: black_glazed_terracotta;
  black_shulker_box: black_shulker_box;
  black_stained_glass: black_stained_glass;
  black_stained_glass_pane: black_stained_glass_pane;
  black_terracotta: black_terracotta;
  black_wool: black_wool;
  blackstone: blackstone;
  blackstone_double_slab: blackstone_double_slab;
  blackstone_slab: blackstone_slab;
  blackstone_stairs: blackstone_stairs;
  blackstone_wall: blackstone_wall;
  blast_furnace: blast_furnace;
  blue_candle: blue_candle;
  blue_candle_cake: blue_candle_cake;
  blue_carpet: blue_carpet;
  blue_concrete: blue_concrete;
  blue_concrete_powder: blue_concrete_powder;
  blue_glazed_terracotta: blue_glazed_terracotta;
  blue_ice: blue_ice;
  blue_shulker_box: blue_shulker_box;
  blue_stained_glass: blue_stained_glass;
  blue_stained_glass_pane: blue_stained_glass_pane;
  blue_terracotta: blue_terracotta;
  blue_wool: blue_wool;
  bone_block: bone_block;
  bookshelf: bookshelf;
  border_block: border_block;
  brain_coral: brain_coral;
  brewing_stand: brewing_stand;
  brick_block: brick_block;
  brick_stairs: brick_stairs;
  brown_candle: brown_candle;
  brown_candle_cake: brown_candle_cake;
  brown_carpet: brown_carpet;
  brown_concrete: brown_concrete;
  brown_concrete_powder: brown_concrete_powder;
  brown_glazed_terracotta: brown_glazed_terracotta;
  brown_mushroom: brown_mushroom;
  brown_mushroom_block: brown_mushroom_block;
  brown_shulker_box: brown_shulker_box;
  brown_stained_glass: brown_stained_glass;
  brown_stained_glass_pane: brown_stained_glass_pane;
  brown_terracotta: brown_terracotta;
  brown_wool: brown_wool;
  bubble_column: bubble_column;
  bubble_coral: bubble_coral;
  budding_amethyst: budding_amethyst;
  cactus: cactus;
  cake: cake;
  calcite: calcite;
  calibrated_sculk_sensor: calibrated_sculk_sensor;
  camera: camera;
  campfire: campfire;
  candle: candle;
  candle_cake: candle_cake;
  carrots: carrots;
  cartography_table: cartography_table;
  carved_pumpkin: carved_pumpkin;
  cauldron: cauldron;
  cave_vines: cave_vines;
  cave_vines_body_with_berries: cave_vines_body_with_berries;
  cave_vines_head_with_berries: cave_vines_head_with_berries;
  chain: chain;
  chain_command_block: chain_command_block;
  chemical_heat: chemical_heat;
  chemistry_table: chemistry_table;
  cherry_button: cherry_button;
  cherry_door: cherry_door;
  cherry_double_slab: cherry_double_slab;
  cherry_fence: cherry_fence;
  cherry_fence_gate: cherry_fence_gate;
  cherry_hanging_sign: cherry_hanging_sign;
  cherry_leaves: cherry_leaves;
  cherry_log: cherry_log;
  cherry_planks: cherry_planks;
  cherry_pressure_plate: cherry_pressure_plate;
  cherry_sapling: cherry_sapling;
  cherry_slab: cherry_slab;
  cherry_stairs: cherry_stairs;
  cherry_standing_sign: cherry_standing_sign;
  cherry_trapdoor: cherry_trapdoor;
  cherry_wall_sign: cherry_wall_sign;
  cherry_wood: cherry_wood;
  chest: chest;
  chiseled_bookshelf: chiseled_bookshelf;
  chiseled_copper: chiseled_copper;
  chiseled_deepslate: chiseled_deepslate;
  chiseled_nether_bricks: chiseled_nether_bricks;
  chiseled_polished_blackstone: chiseled_polished_blackstone;
  chiseled_tuff: chiseled_tuff;
  chiseled_tuff_bricks: chiseled_tuff_bricks;
  chorus_flower: chorus_flower;
  chorus_plant: chorus_plant;
  clay: clay;
  client_request_placeholder_block: client_request_placeholder_block;
  coal_block: coal_block;
  coal_ore: coal_ore;
  cobbled_deepslate: cobbled_deepslate;
  cobbled_deepslate_double_slab: cobbled_deepslate_double_slab;
  cobbled_deepslate_slab: cobbled_deepslate_slab;
  cobbled_deepslate_stairs: cobbled_deepslate_stairs;
  cobbled_deepslate_wall: cobbled_deepslate_wall;
  cobblestone: cobblestone;
  cobblestone_wall: cobblestone_wall;
  cocoa: cocoa;
  colored_torch_bp: colored_torch_bp;
  colored_torch_rg: colored_torch_rg;
  command_block: command_block;
  composter: composter;
  conduit: conduit;
  copper_block: copper_block;
  copper_bulb: copper_bulb;
  copper_door: copper_door;
  copper_grate: copper_grate;
  copper_ore: copper_ore;
  copper_trapdoor: copper_trapdoor;
  coral_block: coral_block;
  coral_fan: coral_fan;
  coral_fan_dead: coral_fan_dead;
  coral_fan_hang: coral_fan_hang;
  coral_fan_hang2: coral_fan_hang2;
  coral_fan_hang3: coral_fan_hang3;
  cracked_deepslate_bricks: cracked_deepslate_bricks;
  cracked_deepslate_tiles: cracked_deepslate_tiles;
  cracked_nether_bricks: cracked_nether_bricks;
  cracked_polished_blackstone_bricks: cracked_polished_blackstone_bricks;
  crafter: crafter;
  crafting_table: crafting_table;
  crimson_button: crimson_button;
  crimson_door: crimson_door;
  crimson_double_slab: crimson_double_slab;
  crimson_fence: crimson_fence;
  crimson_fence_gate: crimson_fence_gate;
  crimson_fungus: crimson_fungus;
  crimson_hanging_sign: crimson_hanging_sign;
  crimson_hyphae: crimson_hyphae;
  crimson_nylium: crimson_nylium;
  crimson_planks: crimson_planks;
  crimson_pressure_plate: crimson_pressure_plate;
  crimson_roots: crimson_roots;
  crimson_slab: crimson_slab;
  crimson_stairs: crimson_stairs;
  crimson_standing_sign: crimson_standing_sign;
  crimson_stem: crimson_stem;
  crimson_trapdoor: crimson_trapdoor;
  crimson_wall_sign: crimson_wall_sign;
  crying_obsidian: crying_obsidian;
  cut_copper: cut_copper;
  cut_copper_slab: cut_copper_slab;
  cut_copper_stairs: cut_copper_stairs;
  cyan_candle: cyan_candle;
  cyan_candle_cake: cyan_candle_cake;
  cyan_carpet: cyan_carpet;
  cyan_concrete: cyan_concrete;
  cyan_concrete_powder: cyan_concrete_powder;
  cyan_glazed_terracotta: cyan_glazed_terracotta;
  cyan_shulker_box: cyan_shulker_box;
  cyan_stained_glass: cyan_stained_glass;
  cyan_stained_glass_pane: cyan_stained_glass_pane;
  cyan_terracotta: cyan_terracotta;
  cyan_wool: cyan_wool;
  dark_oak_button: dark_oak_button;
  dark_oak_door: dark_oak_door;
  dark_oak_double_slab: dark_oak_double_slab;
  dark_oak_fence: dark_oak_fence;
  dark_oak_fence_gate: dark_oak_fence_gate;
  dark_oak_hanging_sign: dark_oak_hanging_sign;
  dark_oak_leaves: dark_oak_leaves;
  dark_oak_log: dark_oak_log;
  dark_oak_planks: dark_oak_planks;
  dark_oak_pressure_plate: dark_oak_pressure_plate;
  dark_oak_slab: dark_oak_slab;
  dark_oak_stairs: dark_oak_stairs;
  dark_oak_trapdoor: dark_oak_trapdoor;
  dark_oak_wood: dark_oak_wood;
  dark_prismarine_stairs: dark_prismarine_stairs;
  darkoak_standing_sign: darkoak_standing_sign;
  darkoak_wall_sign: darkoak_wall_sign;
  daylight_detector: daylight_detector;
  daylight_detector_inverted: daylight_detector_inverted;
  dead_brain_coral: dead_brain_coral;
  dead_bubble_coral: dead_bubble_coral;
  dead_fire_coral: dead_fire_coral;
  dead_horn_coral: dead_horn_coral;
  dead_tube_coral: dead_tube_coral;
  deadbush: deadbush;
  decorated_pot: decorated_pot;
  deepslate: deepslate;
  deepslate_brick_double_slab: deepslate_brick_double_slab;
  deepslate_brick_slab: deepslate_brick_slab;
  deepslate_brick_stairs: deepslate_brick_stairs;
  deepslate_brick_wall: deepslate_brick_wall;
  deepslate_bricks: deepslate_bricks;
  deepslate_coal_ore: deepslate_coal_ore;
  deepslate_copper_ore: deepslate_copper_ore;
  deepslate_diamond_ore: deepslate_diamond_ore;
  deepslate_emerald_ore: deepslate_emerald_ore;
  deepslate_gold_ore: deepslate_gold_ore;
  deepslate_iron_ore: deepslate_iron_ore;
  deepslate_lapis_ore: deepslate_lapis_ore;
  deepslate_redstone_ore: deepslate_redstone_ore;
  deepslate_tile_double_slab: deepslate_tile_double_slab;
  deepslate_tile_slab: deepslate_tile_slab;
  deepslate_tile_stairs: deepslate_tile_stairs;
  deepslate_tile_wall: deepslate_tile_wall;
  deepslate_tiles: deepslate_tiles;
  deny: deny;
  detector_rail: detector_rail;
  diamond_block: diamond_block;
  diamond_ore: diamond_ore;
  diorite: diorite;
  diorite_stairs: diorite_stairs;
  dirt: dirt;
  dirt_with_roots: dirt_with_roots;
  dispenser: dispenser;
  double_cut_copper_slab: double_cut_copper_slab;
  double_plant: double_plant;
  double_stone_block_slab: double_stone_block_slab;
  double_stone_block_slab2: double_stone_block_slab2;
  double_stone_block_slab3: double_stone_block_slab3;
  double_stone_block_slab4: double_stone_block_slab4;
  dragon_egg: dragon_egg;
  dried_kelp_block: dried_kelp_block;
  dripstone_block: dripstone_block;
  dropper: dropper;
  element_0: element_0;
  element_1: element_1;
  element_10: element_10;
  element_100: element_100;
  element_101: element_101;
  element_102: element_102;
  element_103: element_103;
  element_104: element_104;
  element_105: element_105;
  element_106: element_106;
  element_107: element_107;
  element_108: element_108;
  element_109: element_109;
  element_11: element_11;
  element_110: element_110;
  element_111: element_111;
  element_112: element_112;
  element_113: element_113;
  element_114: element_114;
  element_115: element_115;
  element_116: element_116;
  element_117: element_117;
  element_118: element_118;
  element_12: element_12;
  element_13: element_13;
  element_14: element_14;
  element_15: element_15;
  element_16: element_16;
  element_17: element_17;
  element_18: element_18;
  element_19: element_19;
  element_2: element_2;
  element_20: element_20;
  element_21: element_21;
  element_22: element_22;
  element_23: element_23;
  element_24: element_24;
  element_25: element_25;
  element_26: element_26;
  element_27: element_27;
  element_28: element_28;
  element_29: element_29;
  element_3: element_3;
  element_30: element_30;
  element_31: element_31;
  element_32: element_32;
  element_33: element_33;
  element_34: element_34;
  element_35: element_35;
  element_36: element_36;
  element_37: element_37;
  element_38: element_38;
  element_39: element_39;
  element_4: element_4;
  element_40: element_40;
  element_41: element_41;
  element_42: element_42;
  element_43: element_43;
  element_44: element_44;
  element_45: element_45;
  element_46: element_46;
  element_47: element_47;
  element_48: element_48;
  element_49: element_49;
  element_5: element_5;
  element_50: element_50;
  element_51: element_51;
  element_52: element_52;
  element_53: element_53;
  element_54: element_54;
  element_55: element_55;
  element_56: element_56;
  element_57: element_57;
  element_58: element_58;
  element_59: element_59;
  element_6: element_6;
  element_60: element_60;
  element_61: element_61;
  element_62: element_62;
  element_63: element_63;
  element_64: element_64;
  element_65: element_65;
  element_66: element_66;
  element_67: element_67;
  element_68: element_68;
  element_69: element_69;
  element_7: element_7;
  element_70: element_70;
  element_71: element_71;
  element_72: element_72;
  element_73: element_73;
  element_74: element_74;
  element_75: element_75;
  element_76: element_76;
  element_77: element_77;
  element_78: element_78;
  element_79: element_79;
  element_8: element_8;
  element_80: element_80;
  element_81: element_81;
  element_82: element_82;
  element_83: element_83;
  element_84: element_84;
  element_85: element_85;
  element_86: element_86;
  element_87: element_87;
  element_88: element_88;
  element_89: element_89;
  element_9: element_9;
  element_90: element_90;
  element_91: element_91;
  element_92: element_92;
  element_93: element_93;
  element_94: element_94;
  element_95: element_95;
  element_96: element_96;
  element_97: element_97;
  element_98: element_98;
  element_99: element_99;
  emerald_block: emerald_block;
  emerald_ore: emerald_ore;
  enchanting_table: enchanting_table;
  end_brick_stairs: end_brick_stairs;
  end_bricks: end_bricks;
  end_gateway: end_gateway;
  end_portal: end_portal;
  end_portal_frame: end_portal_frame;
  end_rod: end_rod;
  end_stone: end_stone;
  ender_chest: ender_chest;
  exposed_chiseled_copper: exposed_chiseled_copper;
  exposed_copper: exposed_copper;
  exposed_copper_bulb: exposed_copper_bulb;
  exposed_copper_door: exposed_copper_door;
  exposed_copper_grate: exposed_copper_grate;
  exposed_copper_trapdoor: exposed_copper_trapdoor;
  exposed_cut_copper: exposed_cut_copper;
  exposed_cut_copper_slab: exposed_cut_copper_slab;
  exposed_cut_copper_stairs: exposed_cut_copper_stairs;
  exposed_double_cut_copper_slab: exposed_double_cut_copper_slab;
  farmland: farmland;
  fence_gate: fence_gate;
  fire: fire;
  fire_coral: fire_coral;
  fletching_table: fletching_table;
  flower_pot: flower_pot;
  flowering_azalea: flowering_azalea;
  flowing_lava: flowing_lava;
  flowing_water: flowing_water;
  frame: frame;
  frog_spawn: frog_spawn;
  frosted_ice: frosted_ice;
  furnace: furnace;
  gilded_blackstone: gilded_blackstone;
  glass: glass;
  glass_pane: glass_pane;
  glow_frame: glow_frame;
  glow_lichen: glow_lichen;
  glowingobsidian: glowingobsidian;
  glowstone: glowstone;
  gold_block: gold_block;
  gold_ore: gold_ore;
  golden_rail: golden_rail;
  granite: granite;
  granite_stairs: granite_stairs;
  grass_block: grass_block;
  grass_path: grass_path;
  gravel: gravel;
  gray_candle: gray_candle;
  gray_candle_cake: gray_candle_cake;
  gray_carpet: gray_carpet;
  gray_concrete: gray_concrete;
  gray_concrete_powder: gray_concrete_powder;
  gray_glazed_terracotta: gray_glazed_terracotta;
  gray_shulker_box: gray_shulker_box;
  gray_stained_glass: gray_stained_glass;
  gray_stained_glass_pane: gray_stained_glass_pane;
  gray_terracotta: gray_terracotta;
  gray_wool: gray_wool;
  green_candle: green_candle;
  green_candle_cake: green_candle_cake;
  green_carpet: green_carpet;
  green_concrete: green_concrete;
  green_concrete_powder: green_concrete_powder;
  green_glazed_terracotta: green_glazed_terracotta;
  green_shulker_box: green_shulker_box;
  green_stained_glass: green_stained_glass;
  green_stained_glass_pane: green_stained_glass_pane;
  green_terracotta: green_terracotta;
  green_wool: green_wool;
  grindstone: grindstone;
  hanging_roots: hanging_roots;
  hard_black_stained_glass: hard_black_stained_glass;
  hard_black_stained_glass_pane: hard_black_stained_glass_pane;
  hard_blue_stained_glass: hard_blue_stained_glass;
  hard_blue_stained_glass_pane: hard_blue_stained_glass_pane;
  hard_brown_stained_glass: hard_brown_stained_glass;
  hard_brown_stained_glass_pane: hard_brown_stained_glass_pane;
  hard_cyan_stained_glass: hard_cyan_stained_glass;
  hard_cyan_stained_glass_pane: hard_cyan_stained_glass_pane;
  hard_glass: hard_glass;
  hard_glass_pane: hard_glass_pane;
  hard_gray_stained_glass: hard_gray_stained_glass;
  hard_gray_stained_glass_pane: hard_gray_stained_glass_pane;
  hard_green_stained_glass: hard_green_stained_glass;
  hard_green_stained_glass_pane: hard_green_stained_glass_pane;
  hard_light_blue_stained_glass: hard_light_blue_stained_glass;
  hard_light_blue_stained_glass_pane: hard_light_blue_stained_glass_pane;
  hard_light_gray_stained_glass: hard_light_gray_stained_glass;
  hard_light_gray_stained_glass_pane: hard_light_gray_stained_glass_pane;
  hard_lime_stained_glass: hard_lime_stained_glass;
  hard_lime_stained_glass_pane: hard_lime_stained_glass_pane;
  hard_magenta_stained_glass: hard_magenta_stained_glass;
  hard_magenta_stained_glass_pane: hard_magenta_stained_glass_pane;
  hard_orange_stained_glass: hard_orange_stained_glass;
  hard_orange_stained_glass_pane: hard_orange_stained_glass_pane;
  hard_pink_stained_glass: hard_pink_stained_glass;
  hard_pink_stained_glass_pane: hard_pink_stained_glass_pane;
  hard_purple_stained_glass: hard_purple_stained_glass;
  hard_purple_stained_glass_pane: hard_purple_stained_glass_pane;
  hard_red_stained_glass: hard_red_stained_glass;
  hard_red_stained_glass_pane: hard_red_stained_glass_pane;
  hard_white_stained_glass: hard_white_stained_glass;
  hard_white_stained_glass_pane: hard_white_stained_glass_pane;
  hard_yellow_stained_glass: hard_yellow_stained_glass;
  hard_yellow_stained_glass_pane: hard_yellow_stained_glass_pane;
  hardened_clay: hardened_clay;
  hay_block: hay_block;
  heavy_weighted_pressure_plate: heavy_weighted_pressure_plate;
  honey_block: honey_block;
  honeycomb_block: honeycomb_block;
  hopper: hopper;
  horn_coral: horn_coral;
  ice: ice;
  infested_deepslate: infested_deepslate;
  info_update: info_update;
  info_update2: info_update2;
  invisible_bedrock: invisible_bedrock;
  iron_bars: iron_bars;
  iron_block: iron_block;
  iron_door: iron_door;
  iron_ore: iron_ore;
  iron_trapdoor: iron_trapdoor;
  jigsaw: jigsaw;
  jukebox: jukebox;
  jungle_button: jungle_button;
  jungle_door: jungle_door;
  jungle_double_slab: jungle_double_slab;
  jungle_fence: jungle_fence;
  jungle_fence_gate: jungle_fence_gate;
  jungle_hanging_sign: jungle_hanging_sign;
  jungle_leaves: jungle_leaves;
  jungle_log: jungle_log;
  jungle_planks: jungle_planks;
  jungle_pressure_plate: jungle_pressure_plate;
  jungle_slab: jungle_slab;
  jungle_stairs: jungle_stairs;
  jungle_standing_sign: jungle_standing_sign;
  jungle_trapdoor: jungle_trapdoor;
  jungle_wall_sign: jungle_wall_sign;
  jungle_wood: jungle_wood;
  kelp: kelp;
  ladder: ladder;
  lantern: lantern;
  lapis_block: lapis_block;
  lapis_ore: lapis_ore;
  large_amethyst_bud: large_amethyst_bud;
  lava: lava;
  lectern: lectern;
  lever: lever;
  light_block: light_block;
  light_blue_candle: light_blue_candle;
  light_blue_candle_cake: light_blue_candle_cake;
  light_blue_carpet: light_blue_carpet;
  light_blue_concrete: light_blue_concrete;
  light_blue_concrete_powder: light_blue_concrete_powder;
  light_blue_glazed_terracotta: light_blue_glazed_terracotta;
  light_blue_shulker_box: light_blue_shulker_box;
  light_blue_stained_glass: light_blue_stained_glass;
  light_blue_stained_glass_pane: light_blue_stained_glass_pane;
  light_blue_terracotta: light_blue_terracotta;
  light_blue_wool: light_blue_wool;
  light_gray_candle: light_gray_candle;
  light_gray_candle_cake: light_gray_candle_cake;
  light_gray_carpet: light_gray_carpet;
  light_gray_concrete: light_gray_concrete;
  light_gray_concrete_powder: light_gray_concrete_powder;
  light_gray_shulker_box: light_gray_shulker_box;
  light_gray_stained_glass: light_gray_stained_glass;
  light_gray_stained_glass_pane: light_gray_stained_glass_pane;
  light_gray_terracotta: light_gray_terracotta;
  light_gray_wool: light_gray_wool;
  light_weighted_pressure_plate: light_weighted_pressure_plate;
  lightning_rod: lightning_rod;
  lime_candle: lime_candle;
  lime_candle_cake: lime_candle_cake;
  lime_carpet: lime_carpet;
  lime_concrete: lime_concrete;
  lime_concrete_powder: lime_concrete_powder;
  lime_glazed_terracotta: lime_glazed_terracotta;
  lime_shulker_box: lime_shulker_box;
  lime_stained_glass: lime_stained_glass;
  lime_stained_glass_pane: lime_stained_glass_pane;
  lime_terracotta: lime_terracotta;
  lime_wool: lime_wool;
  lit_blast_furnace: lit_blast_furnace;
  lit_deepslate_redstone_ore: lit_deepslate_redstone_ore;
  lit_furnace: lit_furnace;
  lit_pumpkin: lit_pumpkin;
  lit_redstone_lamp: lit_redstone_lamp;
  lit_redstone_ore: lit_redstone_ore;
  lit_smoker: lit_smoker;
  lodestone: lodestone;
  loom: loom;
  magenta_candle: magenta_candle;
  magenta_candle_cake: magenta_candle_cake;
  magenta_carpet: magenta_carpet;
  magenta_concrete: magenta_concrete;
  magenta_concrete_powder: magenta_concrete_powder;
  magenta_glazed_terracotta: magenta_glazed_terracotta;
  magenta_shulker_box: magenta_shulker_box;
  magenta_stained_glass: magenta_stained_glass;
  magenta_stained_glass_pane: magenta_stained_glass_pane;
  magenta_terracotta: magenta_terracotta;
  magenta_wool: magenta_wool;
  magma: magma;
  mangrove_button: mangrove_button;
  mangrove_door: mangrove_door;
  mangrove_double_slab: mangrove_double_slab;
  mangrove_fence: mangrove_fence;
  mangrove_fence_gate: mangrove_fence_gate;
  mangrove_hanging_sign: mangrove_hanging_sign;
  mangrove_leaves: mangrove_leaves;
  mangrove_log: mangrove_log;
  mangrove_planks: mangrove_planks;
  mangrove_pressure_plate: mangrove_pressure_plate;
  mangrove_propagule: mangrove_propagule;
  mangrove_roots: mangrove_roots;
  mangrove_slab: mangrove_slab;
  mangrove_stairs: mangrove_stairs;
  mangrove_standing_sign: mangrove_standing_sign;
  mangrove_trapdoor: mangrove_trapdoor;
  mangrove_wall_sign: mangrove_wall_sign;
  mangrove_wood: mangrove_wood;
  medium_amethyst_bud: medium_amethyst_bud;
  melon_block: melon_block;
  melon_stem: melon_stem;
  mob_spawner: mob_spawner;
  monster_egg: monster_egg;
  moss_block: moss_block;
  moss_carpet: moss_carpet;
  mossy_cobblestone: mossy_cobblestone;
  mossy_cobblestone_stairs: mossy_cobblestone_stairs;
  mossy_stone_brick_stairs: mossy_stone_brick_stairs;
  moving_block: moving_block;
  mud: mud;
  mud_brick_double_slab: mud_brick_double_slab;
  mud_brick_slab: mud_brick_slab;
  mud_brick_stairs: mud_brick_stairs;
  mud_brick_wall: mud_brick_wall;
  mud_bricks: mud_bricks;
  muddy_mangrove_roots: muddy_mangrove_roots;
  mycelium: mycelium;
  nether_brick: nether_brick;
  nether_brick_fence: nether_brick_fence;
  nether_brick_stairs: nether_brick_stairs;
  nether_gold_ore: nether_gold_ore;
  nether_sprouts: nether_sprouts;
  nether_wart: nether_wart;
  nether_wart_block: nether_wart_block;
  netherite_block: netherite_block;
  netherrack: netherrack;
  netherreactor: netherreactor;
  normal_stone_stairs: normal_stone_stairs;
  noteblock: noteblock;
  oak_double_slab: oak_double_slab;
  oak_fence: oak_fence;
  oak_hanging_sign: oak_hanging_sign;
  oak_leaves: oak_leaves;
  oak_log: oak_log;
  oak_planks: oak_planks;
  oak_slab: oak_slab;
  oak_stairs: oak_stairs;
  oak_wood: oak_wood;
  observer: observer;
  obsidian: obsidian;
  ochre_froglight: ochre_froglight;
  orange_candle: orange_candle;
  orange_candle_cake: orange_candle_cake;
  orange_carpet: orange_carpet;
  orange_concrete: orange_concrete;
  orange_concrete_powder: orange_concrete_powder;
  orange_glazed_terracotta: orange_glazed_terracotta;
  orange_shulker_box: orange_shulker_box;
  orange_stained_glass: orange_stained_glass;
  orange_stained_glass_pane: orange_stained_glass_pane;
  orange_terracotta: orange_terracotta;
  orange_wool: orange_wool;
  oxidized_chiseled_copper: oxidized_chiseled_copper;
  oxidized_copper: oxidized_copper;
  oxidized_copper_bulb: oxidized_copper_bulb;
  oxidized_copper_door: oxidized_copper_door;
  oxidized_copper_grate: oxidized_copper_grate;
  oxidized_copper_trapdoor: oxidized_copper_trapdoor;
  oxidized_cut_copper: oxidized_cut_copper;
  oxidized_cut_copper_slab: oxidized_cut_copper_slab;
  oxidized_cut_copper_stairs: oxidized_cut_copper_stairs;
  oxidized_double_cut_copper_slab: oxidized_double_cut_copper_slab;
  packed_ice: packed_ice;
  packed_mud: packed_mud;
  pearlescent_froglight: pearlescent_froglight;
  pink_candle: pink_candle;
  pink_candle_cake: pink_candle_cake;
  pink_carpet: pink_carpet;
  pink_concrete: pink_concrete;
  pink_concrete_powder: pink_concrete_powder;
  pink_glazed_terracotta: pink_glazed_terracotta;
  pink_petals: pink_petals;
  pink_shulker_box: pink_shulker_box;
  pink_stained_glass: pink_stained_glass;
  pink_stained_glass_pane: pink_stained_glass_pane;
  pink_terracotta: pink_terracotta;
  pink_wool: pink_wool;
  piston: piston;
  piston_arm_collision: piston_arm_collision;
  pitcher_crop: pitcher_crop;
  pitcher_plant: pitcher_plant;
  podzol: podzol;
  pointed_dripstone: pointed_dripstone;
  polished_andesite: polished_andesite;
  polished_andesite_stairs: polished_andesite_stairs;
  polished_basalt: polished_basalt;
  polished_blackstone: polished_blackstone;
  polished_blackstone_brick_double_slab: polished_blackstone_brick_double_slab;
  polished_blackstone_brick_slab: polished_blackstone_brick_slab;
  polished_blackstone_brick_stairs: polished_blackstone_brick_stairs;
  polished_blackstone_brick_wall: polished_blackstone_brick_wall;
  polished_blackstone_bricks: polished_blackstone_bricks;
  polished_blackstone_button: polished_blackstone_button;
  polished_blackstone_double_slab: polished_blackstone_double_slab;
  polished_blackstone_pressure_plate: polished_blackstone_pressure_plate;
  polished_blackstone_slab: polished_blackstone_slab;
  polished_blackstone_stairs: polished_blackstone_stairs;
  polished_blackstone_wall: polished_blackstone_wall;
  polished_deepslate: polished_deepslate;
  polished_deepslate_double_slab: polished_deepslate_double_slab;
  polished_deepslate_slab: polished_deepslate_slab;
  polished_deepslate_stairs: polished_deepslate_stairs;
  polished_deepslate_wall: polished_deepslate_wall;
  polished_diorite: polished_diorite;
  polished_diorite_stairs: polished_diorite_stairs;
  polished_granite: polished_granite;
  polished_granite_stairs: polished_granite_stairs;
  polished_tuff: polished_tuff;
  polished_tuff_double_slab: polished_tuff_double_slab;
  polished_tuff_slab: polished_tuff_slab;
  polished_tuff_stairs: polished_tuff_stairs;
  polished_tuff_wall: polished_tuff_wall;
  portal: portal;
  potatoes: potatoes;
  powder_snow: powder_snow;
  powered_comparator: powered_comparator;
  powered_repeater: powered_repeater;
  prismarine: prismarine;
  prismarine_bricks_stairs: prismarine_bricks_stairs;
  prismarine_stairs: prismarine_stairs;
  pumpkin: pumpkin;
  pumpkin_stem: pumpkin_stem;
  purple_candle: purple_candle;
  purple_candle_cake: purple_candle_cake;
  purple_carpet: purple_carpet;
  purple_concrete: purple_concrete;
  purple_concrete_powder: purple_concrete_powder;
  purple_glazed_terracotta: purple_glazed_terracotta;
  purple_shulker_box: purple_shulker_box;
  purple_stained_glass: purple_stained_glass;
  purple_stained_glass_pane: purple_stained_glass_pane;
  purple_terracotta: purple_terracotta;
  purple_wool: purple_wool;
  purpur_block: purpur_block;
  purpur_stairs: purpur_stairs;
  quartz_block: quartz_block;
  quartz_bricks: quartz_bricks;
  quartz_ore: quartz_ore;
  quartz_stairs: quartz_stairs;
  rail: rail;
  raw_copper_block: raw_copper_block;
  raw_gold_block: raw_gold_block;
  raw_iron_block: raw_iron_block;
  red_candle: red_candle;
  red_candle_cake: red_candle_cake;
  red_carpet: red_carpet;
  red_concrete: red_concrete;
  red_concrete_powder: red_concrete_powder;
  red_flower: red_flower;
  red_glazed_terracotta: red_glazed_terracotta;
  red_mushroom: red_mushroom;
  red_mushroom_block: red_mushroom_block;
  red_nether_brick: red_nether_brick;
  red_nether_brick_stairs: red_nether_brick_stairs;
  red_sandstone: red_sandstone;
  red_sandstone_stairs: red_sandstone_stairs;
  red_shulker_box: red_shulker_box;
  red_stained_glass: red_stained_glass;
  red_stained_glass_pane: red_stained_glass_pane;
  red_terracotta: red_terracotta;
  red_wool: red_wool;
  redstone_block: redstone_block;
  redstone_lamp: redstone_lamp;
  redstone_ore: redstone_ore;
  redstone_torch: redstone_torch;
  redstone_wire: redstone_wire;
  reeds: reeds;
  reinforced_deepslate: reinforced_deepslate;
  repeating_command_block: repeating_command_block;
  reserved6: reserved6;
  respawn_anchor: respawn_anchor;
  sand: sand;
  sandstone: sandstone;
  sandstone_stairs: sandstone_stairs;
  sapling: sapling;
  scaffolding: scaffolding;
  sculk: sculk;
  sculk_catalyst: sculk_catalyst;
  sculk_sensor: sculk_sensor;
  sculk_shrieker: sculk_shrieker;
  sculk_vein: sculk_vein;
  sea_lantern: sea_lantern;
  sea_pickle: sea_pickle;
  seagrass: seagrass;
  shroomlight: shroomlight;
  silver_glazed_terracotta: silver_glazed_terracotta;
  skull: skull;
  slime: slime;
  small_amethyst_bud: small_amethyst_bud;
  small_dripleaf_block: small_dripleaf_block;
  smithing_table: smithing_table;
  smoker: smoker;
  smooth_basalt: smooth_basalt;
  smooth_quartz_stairs: smooth_quartz_stairs;
  smooth_red_sandstone_stairs: smooth_red_sandstone_stairs;
  smooth_sandstone_stairs: smooth_sandstone_stairs;
  smooth_stone: smooth_stone;
  sniffer_egg: sniffer_egg;
  snow: snow;
  snow_layer: snow_layer;
  soul_campfire: soul_campfire;
  soul_fire: soul_fire;
  soul_lantern: soul_lantern;
  soul_sand: soul_sand;
  soul_soil: soul_soil;
  soul_torch: soul_torch;
  sponge: sponge;
  spore_blossom: spore_blossom;
  spruce_button: spruce_button;
  spruce_door: spruce_door;
  spruce_double_slab: spruce_double_slab;
  spruce_fence: spruce_fence;
  spruce_fence_gate: spruce_fence_gate;
  spruce_hanging_sign: spruce_hanging_sign;
  spruce_leaves: spruce_leaves;
  spruce_log: spruce_log;
  spruce_planks: spruce_planks;
  spruce_pressure_plate: spruce_pressure_plate;
  spruce_slab: spruce_slab;
  spruce_stairs: spruce_stairs;
  spruce_standing_sign: spruce_standing_sign;
  spruce_trapdoor: spruce_trapdoor;
  spruce_wall_sign: spruce_wall_sign;
  spruce_wood: spruce_wood;
  standing_banner: standing_banner;
  standing_sign: standing_sign;
  sticky_piston: sticky_piston;
  sticky_piston_arm_collision: sticky_piston_arm_collision;
  stone: stone;
  stone_block_slab: stone_block_slab;
  stone_block_slab2: stone_block_slab2;
  stone_block_slab3: stone_block_slab3;
  stone_block_slab4: stone_block_slab4;
  stone_brick_stairs: stone_brick_stairs;
  stone_button: stone_button;
  stone_pressure_plate: stone_pressure_plate;
  stone_stairs: stone_stairs;
  stonebrick: stonebrick;
  stonecutter: stonecutter;
  stonecutter_block: stonecutter_block;
  stripped_acacia_log: stripped_acacia_log;
  stripped_acacia_wood: stripped_acacia_wood;
  stripped_bamboo_block: stripped_bamboo_block;
  stripped_birch_log: stripped_birch_log;
  stripped_birch_wood: stripped_birch_wood;
  stripped_cherry_log: stripped_cherry_log;
  stripped_cherry_wood: stripped_cherry_wood;
  stripped_crimson_hyphae: stripped_crimson_hyphae;
  stripped_crimson_stem: stripped_crimson_stem;
  stripped_dark_oak_log: stripped_dark_oak_log;
  stripped_dark_oak_wood: stripped_dark_oak_wood;
  stripped_jungle_log: stripped_jungle_log;
  stripped_jungle_wood: stripped_jungle_wood;
  stripped_mangrove_log: stripped_mangrove_log;
  stripped_mangrove_wood: stripped_mangrove_wood;
  stripped_oak_log: stripped_oak_log;
  stripped_oak_wood: stripped_oak_wood;
  stripped_spruce_log: stripped_spruce_log;
  stripped_spruce_wood: stripped_spruce_wood;
  stripped_warped_hyphae: stripped_warped_hyphae;
  stripped_warped_stem: stripped_warped_stem;
  structure_block: structure_block;
  structure_void: structure_void;
  suspicious_gravel: suspicious_gravel;
  suspicious_sand: suspicious_sand;
  sweet_berry_bush: sweet_berry_bush;
  tallgrass: tallgrass;
  target: target;
  tinted_glass: tinted_glass;
  tnt: tnt;
  torch: torch;
  torchflower: torchflower;
  torchflower_crop: torchflower_crop;
  trapdoor: trapdoor;
  trapped_chest: trapped_chest;
  trial_spawner: trial_spawner;
  trip_wire: trip_wire;
  tripwire_hook: tripwire_hook;
  tube_coral: tube_coral;
  tuff: tuff;
  tuff_brick_double_slab: tuff_brick_double_slab;
  tuff_brick_slab: tuff_brick_slab;
  tuff_brick_stairs: tuff_brick_stairs;
  tuff_brick_wall: tuff_brick_wall;
  tuff_bricks: tuff_bricks;
  tuff_double_slab: tuff_double_slab;
  tuff_slab: tuff_slab;
  tuff_stairs: tuff_stairs;
  tuff_wall: tuff_wall;
  turtle_egg: turtle_egg;
  twisting_vines: twisting_vines;
  underwater_torch: underwater_torch;
  undyed_shulker_box: undyed_shulker_box;
  unknown: Unknown;
  unlit_redstone_torch: unlit_redstone_torch;
  unpowered_comparator: unpowered_comparator;
  unpowered_repeater: unpowered_repeater;
  vault: vault;
  verdant_froglight: verdant_froglight;
  vine: vine;
  wall_banner: wall_banner;
  wall_sign: wall_sign;
  warped_button: warped_button;
  warped_door: warped_door;
  warped_double_slab: warped_double_slab;
  warped_fence: warped_fence;
  warped_fence_gate: warped_fence_gate;
  warped_fungus: warped_fungus;
  warped_hanging_sign: warped_hanging_sign;
  warped_hyphae: warped_hyphae;
  warped_nylium: warped_nylium;
  warped_planks: warped_planks;
  warped_pressure_plate: warped_pressure_plate;
  warped_roots: warped_roots;
  warped_slab: warped_slab;
  warped_stairs: warped_stairs;
  warped_standing_sign: warped_standing_sign;
  warped_stem: warped_stem;
  warped_trapdoor: warped_trapdoor;
  warped_wall_sign: warped_wall_sign;
  warped_wart_block: warped_wart_block;
  water: water;
  waterlily: waterlily;
  waxed_chiseled_copper: waxed_chiseled_copper;
  waxed_copper: waxed_copper;
  waxed_copper_bulb: waxed_copper_bulb;
  waxed_copper_door: waxed_copper_door;
  waxed_copper_grate: waxed_copper_grate;
  waxed_copper_trapdoor: waxed_copper_trapdoor;
  waxed_cut_copper: waxed_cut_copper;
  waxed_cut_copper_slab: waxed_cut_copper_slab;
  waxed_cut_copper_stairs: waxed_cut_copper_stairs;
  waxed_double_cut_copper_slab: waxed_double_cut_copper_slab;
  waxed_exposed_chiseled_copper: waxed_exposed_chiseled_copper;
  waxed_exposed_copper: waxed_exposed_copper;
  waxed_exposed_copper_bulb: waxed_exposed_copper_bulb;
  waxed_exposed_copper_door: waxed_exposed_copper_door;
  waxed_exposed_copper_grate: waxed_exposed_copper_grate;
  waxed_exposed_copper_trapdoor: waxed_exposed_copper_trapdoor;
  waxed_exposed_cut_copper: waxed_exposed_cut_copper;
  waxed_exposed_cut_copper_slab: waxed_exposed_cut_copper_slab;
  waxed_exposed_cut_copper_stairs: waxed_exposed_cut_copper_stairs;
  waxed_exposed_double_cut_copper_slab: waxed_exposed_double_cut_copper_slab;
  waxed_oxidized_chiseled_copper: waxed_oxidized_chiseled_copper;
  waxed_oxidized_copper: waxed_oxidized_copper;
  waxed_oxidized_copper_bulb: waxed_oxidized_copper_bulb;
  waxed_oxidized_copper_door: waxed_oxidized_copper_door;
  waxed_oxidized_copper_grate: waxed_oxidized_copper_grate;
  waxed_oxidized_copper_trapdoor: waxed_oxidized_copper_trapdoor;
  waxed_oxidized_cut_copper: waxed_oxidized_cut_copper;
  waxed_oxidized_cut_copper_slab: waxed_oxidized_cut_copper_slab;
  waxed_oxidized_cut_copper_stairs: waxed_oxidized_cut_copper_stairs;
  waxed_oxidized_double_cut_copper_slab: waxed_oxidized_double_cut_copper_slab;
  waxed_weathered_chiseled_copper: waxed_weathered_chiseled_copper;
  waxed_weathered_copper: waxed_weathered_copper;
  waxed_weathered_copper_bulb: waxed_weathered_copper_bulb;
  waxed_weathered_copper_door: waxed_weathered_copper_door;
  waxed_weathered_copper_grate: waxed_weathered_copper_grate;
  waxed_weathered_copper_trapdoor: waxed_weathered_copper_trapdoor;
  waxed_weathered_cut_copper: waxed_weathered_cut_copper;
  waxed_weathered_cut_copper_slab: waxed_weathered_cut_copper_slab;
  waxed_weathered_cut_copper_stairs: waxed_weathered_cut_copper_stairs;
  waxed_weathered_double_cut_copper_slab: waxed_weathered_double_cut_copper_slab;
  weathered_chiseled_copper: weathered_chiseled_copper;
  weathered_copper: weathered_copper;
  weathered_copper_bulb: weathered_copper_bulb;
  weathered_copper_door: weathered_copper_door;
  weathered_copper_grate: weathered_copper_grate;
  weathered_copper_trapdoor: weathered_copper_trapdoor;
  weathered_cut_copper: weathered_cut_copper;
  weathered_cut_copper_slab: weathered_cut_copper_slab;
  weathered_cut_copper_stairs: weathered_cut_copper_stairs;
  weathered_double_cut_copper_slab: weathered_double_cut_copper_slab;
  web: web;
  weeping_vines: weeping_vines;
  wheat: wheat;
  white_candle: white_candle;
  white_candle_cake: white_candle_cake;
  white_carpet: white_carpet;
  white_concrete: white_concrete;
  white_concrete_powder: white_concrete_powder;
  white_glazed_terracotta: white_glazed_terracotta;
  white_shulker_box: white_shulker_box;
  white_stained_glass: white_stained_glass;
  white_stained_glass_pane: white_stained_glass_pane;
  white_terracotta: white_terracotta;
  white_wool: white_wool;
  wither_rose: wither_rose;
  wooden_button: wooden_button;
  wooden_door: wooden_door;
  wooden_pressure_plate: wooden_pressure_plate;
  yellow_candle: yellow_candle;
  yellow_candle_cake: yellow_candle_cake;
  yellow_carpet: yellow_carpet;
  yellow_concrete: yellow_concrete;
  yellow_concrete_powder: yellow_concrete_powder;
  yellow_flower: yellow_flower;
  yellow_glazed_terracotta: yellow_glazed_terracotta;
  yellow_shulker_box: yellow_shulker_box;
  yellow_stained_glass: yellow_stained_glass;
  yellow_stained_glass_pane: yellow_stained_glass_pane;
  yellow_terracotta: yellow_terracotta;
  yellow_wool: yellow_wool;
}

export interface acacia_button {
  button_pressed_bit: IntTag<0 | 1>;
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface acacia_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface acacia_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface acacia_fence {}

export interface acacia_fence_gate {
  direction: ByteTag<0 | 1 | 2 | 3>;
  in_wall_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
}

export interface acacia_hanging_sign {
  attached_bit: ByteTag<0 | 1>;
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  hanging: ByteTag<0 | 1>;
}

export interface acacia_leaves {
  persistent_bit: ByteTag<0 | 1>;
  update_bit: ByteTag<0 | 1>;
}

export interface acacia_log {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface acacia_planks {}

export interface acacia_pressure_plate {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface acacia_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface acacia_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface acacia_standing_sign {
  ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface acacia_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface acacia_wall_sign {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface acacia_wood {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface activator_rail {
  rail_data_bit: IntTag<0 | 1>;
  rail_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface air {}

export interface allow {}

export interface amethyst_block {}

export interface amethyst_cluster {
  "minecraft:block_face": StringTag<"down" | "up" | "north" | "south" | "west" | "east">;
}

export interface ancient_debris {}

export interface andesite {}

export interface andesite_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface anvil {
  damage: StringTag<"undamaged" | "slightly_damaged" | "very_damaged" | "broken">;
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface azalea {}

export interface azalea_leaves {
  persistent_bit: ByteTag<0 | 1>;
  update_bit: ByteTag<0 | 1>;
}

export interface azalea_leaves_flowered {
  persistent_bit: ByteTag<0 | 1>;
  update_bit: ByteTag<0 | 1>;
}

export interface bamboo {
  age_bit: DoubleTag<0 | 1>;
  bamboo_leaf_size: StringTag<"no_leaves" | "small_leaves" | "large_leaves">;
  bamboo_stalk_thickness: StringTag<"thin" | "thick">;
}

export interface bamboo_block {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface bamboo_button {
  button_pressed_bit: IntTag<0 | 1>;
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface bamboo_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface bamboo_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface bamboo_fence {}

export interface bamboo_fence_gate {
  direction: ByteTag<0 | 1 | 2 | 3>;
  in_wall_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
}

export interface bamboo_hanging_sign {
  attached_bit: ByteTag<0 | 1>;
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  hanging: ByteTag<0 | 1>;
}

export interface bamboo_mosaic {}

export interface bamboo_mosaic_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface bamboo_mosaic_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface bamboo_mosaic_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface bamboo_planks {}

export interface bamboo_pressure_plate {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface bamboo_sapling {
  age_bit: DoubleTag<0 | 1>;
  sapling_type: StringTag<"oak" | "spruce" | "birch" | "jungle" | "acacia" | "dark_oak">;
}

export interface bamboo_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface bamboo_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface bamboo_standing_sign {
  ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface bamboo_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface bamboo_wall_sign {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface barrel {
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  open_bit: ByteTag<0 | 1>;
}

export interface barrier {}

export interface basalt {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface beacon {}

export interface bed {
  direction: ByteTag<0 | 1 | 2 | 3>;
  head_piece_bit: ByteTag<0 | 1>;
  occupied_bit: ByteTag<0 | 1>;
}

export interface bedrock {
  infiniburn_bit: ByteTag<0 | 1>;
}

export interface bee_nest {
  direction: IntTag<0 | 1 | 2 | 3>;
  honey_level: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface beehive {
  direction: IntTag<0 | 1 | 2 | 3>;
  honey_level: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface beetroot {
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface bell {
  attachment: ByteTag<0 | 0 | 0 | 0>;
  direction: ByteTag<0 | 1 | 2 | 3>;
  toggle_bit: ByteTag<0 | 1>;
}

export interface big_dripleaf {
  big_dripleaf_head: DoubleTag<0 | 1>;
  big_dripleaf_tilt: StringTag<"none" | "unstable" | "partial_tilt" | "full_tilt">;
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface birch_button {
  button_pressed_bit: IntTag<0 | 1>;
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface birch_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface birch_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface birch_fence {}

export interface birch_fence_gate {
  direction: ByteTag<0 | 1 | 2 | 3>;
  in_wall_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
}

export interface birch_hanging_sign {
  attached_bit: ByteTag<0 | 1>;
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  hanging: ByteTag<0 | 1>;
}

export interface birch_leaves {
  persistent_bit: ByteTag<0 | 1>;
  update_bit: ByteTag<0 | 1>;
}

export interface birch_log {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface birch_planks {}

export interface birch_pressure_plate {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface birch_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface birch_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface birch_standing_sign {
  ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface birch_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface birch_wall_sign {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface birch_wood {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface black_candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface black_candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface black_carpet {}

export interface black_concrete {}

export interface black_concrete_powder {}

export interface black_glazed_terracotta {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface black_shulker_box {}

export interface black_stained_glass {}

export interface black_stained_glass_pane {}

export interface black_terracotta {}

export interface black_wool {}

export interface blackstone {}

export interface blackstone_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface blackstone_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface blackstone_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface blackstone_wall {
  wall_connection_type_east: ByteTag<0 | 0 | 0>;
  wall_connection_type_north: ByteTag<0 | 0 | 0>;
  wall_connection_type_south: ByteTag<0 | 0 | 0>;
  wall_connection_type_west: ByteTag<0 | 0 | 0>;
  wall_post_bit: ByteTag<0 | 1>;
}

export interface blast_furnace {
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface blue_candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface blue_candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface blue_carpet {}

export interface blue_concrete {}

export interface blue_concrete_powder {}

export interface blue_glazed_terracotta {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface blue_ice {}

export interface blue_shulker_box {}

export interface blue_stained_glass {}

export interface blue_stained_glass_pane {}

export interface blue_terracotta {}

export interface blue_wool {}

export interface bone_block {
  deprecated: DoubleTag<0 | 1 | 2 | 3>;
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface bookshelf {}

export interface border_block {
  wall_connection_type_east: ByteTag<0 | 0 | 0>;
  wall_connection_type_north: ByteTag<0 | 0 | 0>;
  wall_connection_type_south: ByteTag<0 | 0 | 0>;
  wall_connection_type_west: ByteTag<0 | 0 | 0>;
  wall_post_bit: ByteTag<0 | 1>;
}

export interface brain_coral {}

export interface brewing_stand {
  brewing_stand_slot_a_bit: ByteTag<0 | 1>;
  brewing_stand_slot_b_bit: ByteTag<0 | 1>;
  brewing_stand_slot_c_bit: ByteTag<0 | 1>;
}

export interface brick_block {}

export interface brick_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface brown_candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface brown_candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface brown_carpet {}

export interface brown_concrete {}

export interface brown_concrete_powder {}

export interface brown_glazed_terracotta {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface brown_mushroom {}

export interface brown_mushroom_block {
  huge_mushroom_bits: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface brown_shulker_box {}

export interface brown_stained_glass {}

export interface brown_stained_glass_pane {}

export interface brown_terracotta {}

export interface brown_wool {}

export interface bubble_column {
  drag_down: ByteTag<0 | 1>;
}

export interface bubble_coral {}

export interface budding_amethyst {}

export interface cactus {
  age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface cake {
  bite_counter: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6>;
}

export interface calcite {}

export interface calibrated_sculk_sensor {
  "minecraft:cardinal_direction": IntTag<0 | 0 | 0 | 0>;
  sculk_sensor_phase: IntTag<0 | 1 | 2>;
}

export interface camera {}

export interface campfire {
  extinguished: DoubleTag<0 | 1>;
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface carrots {
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface cartography_table {}

export interface carved_pumpkin {
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface cauldron {
  cauldron_liquid: IntTag<0 | 0 | 0>;
  fill_level: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6>;
}

export interface cave_vines {
  growing_plant_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
}

export interface cave_vines_body_with_berries {
  growing_plant_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
}

export interface cave_vines_head_with_berries {
  growing_plant_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
}

export interface chain {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface chain_command_block {
  conditional_bit: IntTag<0 | 1>;
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface chemical_heat {}

export interface chemistry_table {
  chemistry_table_type: IntTag<0 | 0 | 0 | 0>;
  direction: IntTag<0 | 1 | 2 | 3>;
}

export interface cherry_button {
  button_pressed_bit: IntTag<0 | 1>;
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface cherry_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface cherry_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface cherry_fence {}

export interface cherry_fence_gate {
  direction: ByteTag<0 | 1 | 2 | 3>;
  in_wall_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
}

export interface cherry_hanging_sign {
  attached_bit: ByteTag<0 | 1>;
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  hanging: ByteTag<0 | 1>;
}

export interface cherry_leaves {
  persistent_bit: ByteTag<0 | 1>;
  update_bit: ByteTag<0 | 1>;
}

export interface cherry_log {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface cherry_planks {}

export interface cherry_pressure_plate {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface cherry_sapling {
  age_bit: ByteTag<0 | 1>;
}

export interface cherry_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface cherry_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface cherry_standing_sign {
  ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface cherry_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface cherry_wall_sign {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface cherry_wood {
  pillar_axis: ByteTag<0 | 0 | 0>;
  stripped_bit: ByteTag<0 | 1>;
}

export interface chest {
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface chiseled_bookshelf {
  books_stored: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63>;
  direction: IntTag<0 | 1 | 2 | 3>;
}

export interface chiseled_copper {}

export interface chiseled_deepslate {}

export interface chiseled_nether_bricks {}

export interface chiseled_polished_blackstone {}

export interface chiseled_tuff {}

export interface chiseled_tuff_bricks {}

export interface chorus_flower {
  age: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface chorus_plant {}

export interface clay {}

export interface client_request_placeholder_block {}

export interface coal_block {}

export interface coal_ore {}

export interface cobbled_deepslate {}

export interface cobbled_deepslate_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface cobbled_deepslate_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface cobbled_deepslate_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface cobbled_deepslate_wall {
  wall_connection_type_east: ByteTag<0 | 0 | 0>;
  wall_connection_type_north: ByteTag<0 | 0 | 0>;
  wall_connection_type_south: ByteTag<0 | 0 | 0>;
  wall_connection_type_west: ByteTag<0 | 0 | 0>;
  wall_post_bit: ByteTag<0 | 1>;
}

export interface cobblestone {}

export interface cobblestone_wall {
  wall_block_type: ByteTag<0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0>;
  wall_connection_type_east: ByteTag<0 | 0 | 0>;
  wall_connection_type_north: ByteTag<0 | 0 | 0>;
  wall_connection_type_south: ByteTag<0 | 0 | 0>;
  wall_connection_type_west: ByteTag<0 | 0 | 0>;
  wall_post_bit: ByteTag<0 | 1>;
}

export interface cocoa {
  age: IntTag<0 | 1 | 2>;
  direction: IntTag<0 | 1 | 2 | 3>;
}

export interface colored_torch_bp {
  color_bit: DoubleTag<0 | 1>;
  torch_facing_direction: StringTag<"unknown" | "west" | "east" | "north" | "south" | "top">;
}

export interface colored_torch_rg {
  color_bit: DoubleTag<0 | 1>;
  torch_facing_direction: StringTag<"unknown" | "west" | "east" | "north" | "south" | "top">;
}

export interface command_block {
  conditional_bit: IntTag<0 | 1>;
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface composter {
  composter_fill_level: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>;
}

export interface conduit {}

export interface copper_block {}

export interface copper_bulb {
  lit: ByteTag<0 | 1>;
  powered_bit: ByteTag<0 | 1>;
}

export interface copper_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface copper_grate {}

export interface copper_ore {}

export interface copper_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface coral_block {
  coral_color: ByteTag<0 | 0 | 0 | 0 | 0>;
  dead_bit: ByteTag<0 | 1>;
}

export interface coral_fan {
  coral_color: IntTag<0 | 0 | 0 | 0 | 0>;
  coral_fan_direction: IntTag<0 | 1>;
}

export interface coral_fan_dead {
  coral_color: IntTag<0 | 0 | 0 | 0 | 0>;
  coral_fan_direction: IntTag<0 | 1>;
}

export interface coral_fan_hang {
  coral_direction: ByteTag<0 | 1 | 2 | 3>;
  coral_hang_type_bit: ByteTag<0 | 1>;
  dead_bit: ByteTag<0 | 1>;
}

export interface coral_fan_hang2 {
  coral_direction: ByteTag<0 | 1 | 2 | 3>;
  coral_hang_type_bit: ByteTag<0 | 1>;
  dead_bit: ByteTag<0 | 1>;
}

export interface coral_fan_hang3 {
  coral_direction: ByteTag<0 | 1 | 2 | 3>;
  coral_hang_type_bit: ByteTag<0 | 1>;
  dead_bit: ByteTag<0 | 1>;
}

export interface cracked_deepslate_bricks {}

export interface cracked_deepslate_tiles {}

export interface cracked_nether_bricks {}

export interface cracked_polished_blackstone_bricks {}

export interface crafter {
  crafting: ByteTag<0 | 1>;
  orientation: ByteTag<0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0>;
  triggered_bit: ByteTag<0 | 1>;
}

export interface crafting_table {}

export interface crimson_button {
  button_pressed_bit: IntTag<0 | 1>;
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface crimson_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface crimson_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface crimson_fence {}

export interface crimson_fence_gate {
  direction: ByteTag<0 | 1 | 2 | 3>;
  in_wall_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
}

export interface crimson_fungus {}

export interface crimson_hanging_sign {
  attached_bit: ByteTag<0 | 1>;
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  hanging: ByteTag<0 | 1>;
}

export interface crimson_hyphae {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface crimson_nylium {}

export interface crimson_planks {}

export interface crimson_pressure_plate {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface crimson_roots {}

export interface crimson_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface crimson_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface crimson_standing_sign {
  ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface crimson_stem {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface crimson_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface crimson_wall_sign {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface crying_obsidian {}

export interface cut_copper {}

export interface cut_copper_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface cut_copper_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface cyan_candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface cyan_candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface cyan_carpet {}

export interface cyan_concrete {}

export interface cyan_concrete_powder {}

export interface cyan_glazed_terracotta {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface cyan_shulker_box {}

export interface cyan_stained_glass {}

export interface cyan_stained_glass_pane {}

export interface cyan_terracotta {}

export interface cyan_wool {}

export interface dark_oak_button {
  button_pressed_bit: IntTag<0 | 1>;
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface dark_oak_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface dark_oak_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface dark_oak_fence {}

export interface dark_oak_fence_gate {
  direction: ByteTag<0 | 1 | 2 | 3>;
  in_wall_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
}

export interface dark_oak_hanging_sign {
  attached_bit: ByteTag<0 | 1>;
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  hanging: ByteTag<0 | 1>;
}

export interface dark_oak_leaves {
  persistent_bit: ByteTag<0 | 1>;
  update_bit: ByteTag<0 | 1>;
}

export interface dark_oak_log {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface dark_oak_planks {}

export interface dark_oak_pressure_plate {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface dark_oak_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface dark_oak_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface dark_oak_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface dark_oak_wood {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface dark_prismarine_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface darkoak_standing_sign {
  ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface darkoak_wall_sign {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface daylight_detector {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface daylight_detector_inverted {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface dead_brain_coral {}

export interface dead_bubble_coral {}

export interface dead_fire_coral {}

export interface dead_horn_coral {}

export interface dead_tube_coral {}

export interface deadbush {}

export interface decorated_pot {
  direction: IntTag<0 | 1 | 2 | 3>;
}

export interface deepslate {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface deepslate_brick_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface deepslate_brick_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface deepslate_brick_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface deepslate_brick_wall {
  wall_connection_type_east: ByteTag<0 | 0 | 0>;
  wall_connection_type_north: ByteTag<0 | 0 | 0>;
  wall_connection_type_south: ByteTag<0 | 0 | 0>;
  wall_connection_type_west: ByteTag<0 | 0 | 0>;
  wall_post_bit: ByteTag<0 | 1>;
}

export interface deepslate_bricks {}

export interface deepslate_coal_ore {}

export interface deepslate_copper_ore {}

export interface deepslate_diamond_ore {}

export interface deepslate_emerald_ore {}

export interface deepslate_gold_ore {}

export interface deepslate_iron_ore {}

export interface deepslate_lapis_ore {}

export interface deepslate_redstone_ore {}

export interface deepslate_tile_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface deepslate_tile_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface deepslate_tile_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface deepslate_tile_wall {
  wall_connection_type_east: ByteTag<0 | 0 | 0>;
  wall_connection_type_north: ByteTag<0 | 0 | 0>;
  wall_connection_type_south: ByteTag<0 | 0 | 0>;
  wall_connection_type_west: ByteTag<0 | 0 | 0>;
  wall_post_bit: ByteTag<0 | 1>;
}

export interface deepslate_tiles {}

export interface deny {}

export interface detector_rail {
  rail_data_bit: IntTag<0 | 1>;
  rail_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface diamond_block {}

export interface diamond_ore {}

export interface diorite {}

export interface diorite_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface dirt {
  dirt_type: StringTag<"normal" | "coarse">;
}

export interface dirt_with_roots {}

export interface dispenser {
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  triggered_bit: ByteTag<0 | 1>;
}

export interface double_cut_copper_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface double_plant {
  double_plant_type: ByteTag<0 | 0 | 0 | 0 | 0 | 0>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface double_stone_block_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
  stone_slab_type: StringTag<"smooth_stone" | "sandstone" | "wood" | "cobblestone" | "brick" | "stone_brick" | "quartz" | "nether_brick">;
}

export interface double_stone_block_slab2 {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
  stone_slab_type_2: StringTag<"red_sandstone" | "purpur" | "prismarine_rough" | "prismarine_dark" | "prismarine_brick" | "mossy_cobblestone" | "smooth_sandstone" | "red_nether_brick">;
}

export interface double_stone_block_slab3 {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
  stone_slab_type_3: StringTag<"end_stone_brick" | "smooth_red_sandstone" | "polished_andesite" | "andesite" | "diorite" | "polished_diorite" | "granite" | "polished_granite">;
}

export interface double_stone_block_slab4 {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
  stone_slab_type_4: StringTag<"mossy_stone_brick" | "smooth_quartz" | "stone" | "cut_sandstone" | "cut_red_sandstone">;
}

export interface dragon_egg {}

export interface dried_kelp_block {}

export interface dripstone_block {}

export interface dropper {
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  triggered_bit: ByteTag<0 | 1>;
}

export interface element_0 {}

export interface element_1 {}

export interface element_10 {}

export interface element_100 {}

export interface element_101 {}

export interface element_102 {}

export interface element_103 {}

export interface element_104 {}

export interface element_105 {}

export interface element_106 {}

export interface element_107 {}

export interface element_108 {}

export interface element_109 {}

export interface element_11 {}

export interface element_110 {}

export interface element_111 {}

export interface element_112 {}

export interface element_113 {}

export interface element_114 {}

export interface element_115 {}

export interface element_116 {}

export interface element_117 {}

export interface element_118 {}

export interface element_12 {}

export interface element_13 {}

export interface element_14 {}

export interface element_15 {}

export interface element_16 {}

export interface element_17 {}

export interface element_18 {}

export interface element_19 {}

export interface element_2 {}

export interface element_20 {}

export interface element_21 {}

export interface element_22 {}

export interface element_23 {}

export interface element_24 {}

export interface element_25 {}

export interface element_26 {}

export interface element_27 {}

export interface element_28 {}

export interface element_29 {}

export interface element_3 {}

export interface element_30 {}

export interface element_31 {}

export interface element_32 {}

export interface element_33 {}

export interface element_34 {}

export interface element_35 {}

export interface element_36 {}

export interface element_37 {}

export interface element_38 {}

export interface element_39 {}

export interface element_4 {}

export interface element_40 {}

export interface element_41 {}

export interface element_42 {}

export interface element_43 {}

export interface element_44 {}

export interface element_45 {}

export interface element_46 {}

export interface element_47 {}

export interface element_48 {}

export interface element_49 {}

export interface element_5 {}

export interface element_50 {}

export interface element_51 {}

export interface element_52 {}

export interface element_53 {}

export interface element_54 {}

export interface element_55 {}

export interface element_56 {}

export interface element_57 {}

export interface element_58 {}

export interface element_59 {}

export interface element_6 {}

export interface element_60 {}

export interface element_61 {}

export interface element_62 {}

export interface element_63 {}

export interface element_64 {}

export interface element_65 {}

export interface element_66 {}

export interface element_67 {}

export interface element_68 {}

export interface element_69 {}

export interface element_7 {}

export interface element_70 {}

export interface element_71 {}

export interface element_72 {}

export interface element_73 {}

export interface element_74 {}

export interface element_75 {}

export interface element_76 {}

export interface element_77 {}

export interface element_78 {}

export interface element_79 {}

export interface element_8 {}

export interface element_80 {}

export interface element_81 {}

export interface element_82 {}

export interface element_83 {}

export interface element_84 {}

export interface element_85 {}

export interface element_86 {}

export interface element_87 {}

export interface element_88 {}

export interface element_89 {}

export interface element_9 {}

export interface element_90 {}

export interface element_91 {}

export interface element_92 {}

export interface element_93 {}

export interface element_94 {}

export interface element_95 {}

export interface element_96 {}

export interface element_97 {}

export interface element_98 {}

export interface element_99 {}

export interface emerald_block {}

export interface emerald_ore {}

export interface enchanting_table {}

export interface end_brick_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface end_bricks {}

export interface end_gateway {}

export interface end_portal {}

export interface end_portal_frame {
  end_portal_eye_bit: DoubleTag<0 | 1>;
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface end_rod {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface end_stone {}

export interface ender_chest {
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface exposed_chiseled_copper {}

export interface exposed_copper {}

export interface exposed_copper_bulb {
  lit: ByteTag<0 | 1>;
  powered_bit: ByteTag<0 | 1>;
}

export interface exposed_copper_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface exposed_copper_grate {}

export interface exposed_copper_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface exposed_cut_copper {}

export interface exposed_cut_copper_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface exposed_cut_copper_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface exposed_double_cut_copper_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface farmland {
  moisturized_amount: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface fence_gate {
  direction: ByteTag<0 | 1 | 2 | 3>;
  in_wall_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
}

export interface fire {
  age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface fire_coral {}

export interface fletching_table {}

export interface flower_pot {
  update_bit: ByteTag<0 | 1>;
}

export interface flowering_azalea {}

export interface flowing_lava {
  liquid_depth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface flowing_water {
  liquid_depth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface frame {
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  item_frame_map_bit: ByteTag<0 | 1>;
  item_frame_photo_bit: ByteTag<0 | 1>;
}

export interface frog_spawn {}

export interface frosted_ice {
  age: IntTag<0 | 1 | 2 | 3>;
}

export interface furnace {
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface gilded_blackstone {}

export interface glass {}

export interface glass_pane {}

export interface glow_frame {
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  item_frame_map_bit: ByteTag<0 | 1>;
  item_frame_photo_bit: ByteTag<0 | 1>;
}

export interface glow_lichen {
  multi_face_direction_bits: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63>;
}

export interface glowingobsidian {}

export interface glowstone {}

export interface gold_block {}

export interface gold_ore {}

export interface golden_rail {
  rail_data_bit: IntTag<0 | 1>;
  rail_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface granite {}

export interface granite_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface grass_block {}

export interface grass_path {}

export interface gravel {}

export interface gray_candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface gray_candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface gray_carpet {}

export interface gray_concrete {}

export interface gray_concrete_powder {}

export interface gray_glazed_terracotta {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface gray_shulker_box {}

export interface gray_stained_glass {}

export interface gray_stained_glass_pane {}

export interface gray_terracotta {}

export interface gray_wool {}

export interface green_candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface green_candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface green_carpet {}

export interface green_concrete {}

export interface green_concrete_powder {}

export interface green_glazed_terracotta {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface green_shulker_box {}

export interface green_stained_glass {}

export interface green_stained_glass_pane {}

export interface green_terracotta {}

export interface green_wool {}

export interface grindstone {
  attachment: IntTag<0 | 0 | 0 | 0>;
  direction: IntTag<0 | 1 | 2 | 3>;
}

export interface hanging_roots {}

export interface hard_black_stained_glass {}

export interface hard_black_stained_glass_pane {}

export interface hard_blue_stained_glass {}

export interface hard_blue_stained_glass_pane {}

export interface hard_brown_stained_glass {}

export interface hard_brown_stained_glass_pane {}

export interface hard_cyan_stained_glass {}

export interface hard_cyan_stained_glass_pane {}

export interface hard_glass {}

export interface hard_glass_pane {}

export interface hard_gray_stained_glass {}

export interface hard_gray_stained_glass_pane {}

export interface hard_green_stained_glass {}

export interface hard_green_stained_glass_pane {}

export interface hard_light_blue_stained_glass {}

export interface hard_light_blue_stained_glass_pane {}

export interface hard_light_gray_stained_glass {}

export interface hard_light_gray_stained_glass_pane {}

export interface hard_lime_stained_glass {}

export interface hard_lime_stained_glass_pane {}

export interface hard_magenta_stained_glass {}

export interface hard_magenta_stained_glass_pane {}

export interface hard_orange_stained_glass {}

export interface hard_orange_stained_glass_pane {}

export interface hard_pink_stained_glass {}

export interface hard_pink_stained_glass_pane {}

export interface hard_purple_stained_glass {}

export interface hard_purple_stained_glass_pane {}

export interface hard_red_stained_glass {}

export interface hard_red_stained_glass_pane {}

export interface hard_white_stained_glass {}

export interface hard_white_stained_glass_pane {}

export interface hard_yellow_stained_glass {}

export interface hard_yellow_stained_glass_pane {}

export interface hardened_clay {}

export interface hay_block {
  deprecated: DoubleTag<0 | 1 | 2 | 3>;
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface heavy_weighted_pressure_plate {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface honey_block {}

export interface honeycomb_block {}

export interface hopper {
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  toggle_bit: ByteTag<0 | 1>;
}

export interface horn_coral {}

export interface ice {}

export interface infested_deepslate {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface info_update {}

export interface info_update2 {}

export interface invisible_bedrock {}

export interface iron_bars {}

export interface iron_block {}

export interface iron_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface iron_ore {}

export interface iron_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface jigsaw {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  rotation: IntTag<0 | 1 | 2 | 3>;
}

export interface jukebox {}

export interface jungle_button {
  button_pressed_bit: IntTag<0 | 1>;
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface jungle_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface jungle_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface jungle_fence {}

export interface jungle_fence_gate {
  direction: ByteTag<0 | 1 | 2 | 3>;
  in_wall_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
}

export interface jungle_hanging_sign {
  attached_bit: ByteTag<0 | 1>;
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  hanging: ByteTag<0 | 1>;
}

export interface jungle_leaves {
  persistent_bit: ByteTag<0 | 1>;
  update_bit: ByteTag<0 | 1>;
}

export interface jungle_log {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface jungle_planks {}

export interface jungle_pressure_plate {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface jungle_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface jungle_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface jungle_standing_sign {
  ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface jungle_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface jungle_wall_sign {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface jungle_wood {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface kelp {
  kelp_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
}

export interface ladder {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface lantern {
  hanging: ByteTag<0 | 1>;
}

export interface lapis_block {}

export interface lapis_ore {}

export interface large_amethyst_bud {
  "minecraft:block_face": StringTag<"down" | "up" | "north" | "south" | "west" | "east">;
}

export interface lava {
  liquid_depth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface lectern {
  "minecraft:cardinal_direction": ByteTag<0 | 0 | 0 | 0>;
  powered_bit: ByteTag<0 | 1>;
}

export interface lever {
  lever_direction: ByteTag<0 | 0 | 0 | 0 | 0 | 0 | 0 | 0>;
  open_bit: ByteTag<0 | 1>;
}

export interface light_block {
  block_light_level: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface light_blue_candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface light_blue_candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface light_blue_carpet {}

export interface light_blue_concrete {}

export interface light_blue_concrete_powder {}

export interface light_blue_glazed_terracotta {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface light_blue_shulker_box {}

export interface light_blue_stained_glass {}

export interface light_blue_stained_glass_pane {}

export interface light_blue_terracotta {}

export interface light_blue_wool {}

export interface light_gray_candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface light_gray_candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface light_gray_carpet {}

export interface light_gray_concrete {}

export interface light_gray_concrete_powder {}

export interface light_gray_shulker_box {}

export interface light_gray_stained_glass {}

export interface light_gray_stained_glass_pane {}

export interface light_gray_terracotta {}

export interface light_gray_wool {}

export interface light_weighted_pressure_plate {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface lightning_rod {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface lime_candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface lime_candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface lime_carpet {}

export interface lime_concrete {}

export interface lime_concrete_powder {}

export interface lime_glazed_terracotta {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface lime_shulker_box {}

export interface lime_stained_glass {}

export interface lime_stained_glass_pane {}

export interface lime_terracotta {}

export interface lime_wool {}

export interface lit_blast_furnace {
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface lit_deepslate_redstone_ore {}

export interface lit_furnace {
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface lit_pumpkin {
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface lit_redstone_lamp {}

export interface lit_redstone_ore {}

export interface lit_smoker {
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface lodestone {}

export interface loom {
  direction: IntTag<0 | 1 | 2 | 3>;
}

export interface magenta_candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface magenta_candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface magenta_carpet {}

export interface magenta_concrete {}

export interface magenta_concrete_powder {}

export interface magenta_glazed_terracotta {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface magenta_shulker_box {}

export interface magenta_stained_glass {}

export interface magenta_stained_glass_pane {}

export interface magenta_terracotta {}

export interface magenta_wool {}

export interface magma {}

export interface mangrove_button {
  button_pressed_bit: IntTag<0 | 1>;
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface mangrove_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface mangrove_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface mangrove_fence {}

export interface mangrove_fence_gate {
  direction: ByteTag<0 | 1 | 2 | 3>;
  in_wall_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
}

export interface mangrove_hanging_sign {
  attached_bit: ByteTag<0 | 1>;
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  hanging: ByteTag<0 | 1>;
}

export interface mangrove_leaves {
  persistent_bit: ByteTag<0 | 1>;
  update_bit: ByteTag<0 | 1>;
}

export interface mangrove_log {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface mangrove_planks {}

export interface mangrove_pressure_plate {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface mangrove_propagule {
  hanging: IntTag<0 | 1>;
  propagule_stage: IntTag<0 | 1 | 2 | 3 | 4>;
}

export interface mangrove_roots {}

export interface mangrove_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface mangrove_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface mangrove_standing_sign {
  ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface mangrove_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface mangrove_wall_sign {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface mangrove_wood {
  pillar_axis: ByteTag<0 | 0 | 0>;
  stripped_bit: ByteTag<0 | 1>;
}

export interface medium_amethyst_bud {
  "minecraft:block_face": StringTag<"down" | "up" | "north" | "south" | "west" | "east">;
}

export interface melon_block {}

export interface melon_stem {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface mob_spawner {}

export interface monster_egg {
  monster_egg_stone_type: StringTag<"stone" | "cobblestone" | "stone_brick" | "mossy_stone_brick" | "cracked_stone_brick" | "chiseled_stone_brick">;
}

export interface moss_block {}

export interface moss_carpet {}

export interface mossy_cobblestone {}

export interface mossy_cobblestone_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface mossy_stone_brick_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface moving_block {}

export interface mud {}

export interface mud_brick_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface mud_brick_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface mud_brick_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface mud_brick_wall {
  wall_connection_type_east: ByteTag<0 | 0 | 0>;
  wall_connection_type_north: ByteTag<0 | 0 | 0>;
  wall_connection_type_south: ByteTag<0 | 0 | 0>;
  wall_connection_type_west: ByteTag<0 | 0 | 0>;
  wall_post_bit: ByteTag<0 | 1>;
}

export interface mud_bricks {}

export interface muddy_mangrove_roots {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface mycelium {}

export interface nether_brick {}

export interface nether_brick_fence {}

export interface nether_brick_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface nether_gold_ore {}

export interface nether_sprouts {}

export interface nether_wart {
  age: IntTag<0 | 1 | 2 | 3>;
}

export interface nether_wart_block {}

export interface netherite_block {}

export interface netherrack {}

export interface netherreactor {}

export interface normal_stone_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface noteblock {}

export interface oak_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface oak_fence {}

export interface oak_hanging_sign {
  attached_bit: ByteTag<0 | 1>;
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  hanging: ByteTag<0 | 1>;
}

export interface oak_leaves {
  persistent_bit: ByteTag<0 | 1>;
  update_bit: ByteTag<0 | 1>;
}

export interface oak_log {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface oak_planks {}

export interface oak_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface oak_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface oak_wood {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface observer {
  "minecraft:facing_direction": ByteTag<0 | 0 | 0 | 0 | 0 | 0>;
  powered_bit: ByteTag<0 | 1>;
}

export interface obsidian {}

export interface ochre_froglight {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface orange_candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface orange_candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface orange_carpet {}

export interface orange_concrete {}

export interface orange_concrete_powder {}

export interface orange_glazed_terracotta {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface orange_shulker_box {}

export interface orange_stained_glass {}

export interface orange_stained_glass_pane {}

export interface orange_terracotta {}

export interface orange_wool {}

export interface oxidized_chiseled_copper {}

export interface oxidized_copper {}

export interface oxidized_copper_bulb {
  lit: ByteTag<0 | 1>;
  powered_bit: ByteTag<0 | 1>;
}

export interface oxidized_copper_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface oxidized_copper_grate {}

export interface oxidized_copper_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface oxidized_cut_copper {}

export interface oxidized_cut_copper_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface oxidized_cut_copper_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface oxidized_double_cut_copper_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface packed_ice {}

export interface packed_mud {}

export interface pearlescent_froglight {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface pink_candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface pink_candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface pink_carpet {}

export interface pink_concrete {}

export interface pink_concrete_powder {}

export interface pink_glazed_terracotta {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface pink_petals {
  growth: DoubleTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface pink_shulker_box {}

export interface pink_stained_glass {}

export interface pink_stained_glass_pane {}

export interface pink_terracotta {}

export interface pink_wool {}

export interface piston {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface piston_arm_collision {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface pitcher_crop {
  growth: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface pitcher_plant {
  upper_block_bit: ByteTag<0 | 1>;
}

export interface podzol {}

export interface pointed_dripstone {
  dripstone_thickness: ByteTag<0 | 0 | 0 | 0 | 0>;
  hanging: ByteTag<0 | 1>;
}

export interface polished_andesite {}

export interface polished_andesite_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface polished_basalt {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface polished_blackstone {}

export interface polished_blackstone_brick_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface polished_blackstone_brick_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface polished_blackstone_brick_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface polished_blackstone_brick_wall {
  wall_connection_type_east: ByteTag<0 | 0 | 0>;
  wall_connection_type_north: ByteTag<0 | 0 | 0>;
  wall_connection_type_south: ByteTag<0 | 0 | 0>;
  wall_connection_type_west: ByteTag<0 | 0 | 0>;
  wall_post_bit: ByteTag<0 | 1>;
}

export interface polished_blackstone_bricks {}

export interface polished_blackstone_button {
  button_pressed_bit: IntTag<0 | 1>;
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface polished_blackstone_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface polished_blackstone_pressure_plate {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface polished_blackstone_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface polished_blackstone_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface polished_blackstone_wall {
  wall_connection_type_east: ByteTag<0 | 0 | 0>;
  wall_connection_type_north: ByteTag<0 | 0 | 0>;
  wall_connection_type_south: ByteTag<0 | 0 | 0>;
  wall_connection_type_west: ByteTag<0 | 0 | 0>;
  wall_post_bit: ByteTag<0 | 1>;
}

export interface polished_deepslate {}

export interface polished_deepslate_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface polished_deepslate_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface polished_deepslate_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface polished_deepslate_wall {
  wall_connection_type_east: ByteTag<0 | 0 | 0>;
  wall_connection_type_north: ByteTag<0 | 0 | 0>;
  wall_connection_type_south: ByteTag<0 | 0 | 0>;
  wall_connection_type_west: ByteTag<0 | 0 | 0>;
  wall_post_bit: ByteTag<0 | 1>;
}

export interface polished_diorite {}

export interface polished_diorite_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface polished_granite {}

export interface polished_granite_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface polished_tuff {}

export interface polished_tuff_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface polished_tuff_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface polished_tuff_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface polished_tuff_wall {
  wall_connection_type_east: ByteTag<0 | 0 | 0>;
  wall_connection_type_north: ByteTag<0 | 0 | 0>;
  wall_connection_type_south: ByteTag<0 | 0 | 0>;
  wall_connection_type_west: ByteTag<0 | 0 | 0>;
  wall_post_bit: ByteTag<0 | 1>;
}

export interface portal {
  portal_axis: StringTag<"unknown" | "x" | "z">;
}

export interface potatoes {
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface powder_snow {}

export interface powered_comparator {
  "minecraft:cardinal_direction": ByteTag<0 | 0 | 0 | 0>;
  output_lit_bit: ByteTag<0 | 1>;
  output_subtract_bit: ByteTag<0 | 1>;
}

export interface powered_repeater {
  "minecraft:cardinal_direction": IntTag<0 | 0 | 0 | 0>;
  repeater_delay: IntTag<0 | 1 | 2 | 3>;
}

export interface prismarine {
  prismarine_block_type: StringTag<"default" | "dark" | "bricks">;
}

export interface prismarine_bricks_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface prismarine_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface pumpkin {
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface pumpkin_stem {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface purple_candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface purple_candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface purple_carpet {}

export interface purple_concrete {}

export interface purple_concrete_powder {}

export interface purple_glazed_terracotta {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface purple_shulker_box {}

export interface purple_stained_glass {}

export interface purple_stained_glass_pane {}

export interface purple_terracotta {}

export interface purple_wool {}

export interface purpur_block {
  chisel_type: StringTag<"default" | "chiseled" | "lines" | "smooth">;
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface purpur_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface quartz_block {
  chisel_type: StringTag<"default" | "chiseled" | "lines" | "smooth">;
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface quartz_bricks {}

export interface quartz_ore {}

export interface quartz_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface rail {
  rail_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>;
}

export interface raw_copper_block {}

export interface raw_gold_block {}

export interface raw_iron_block {}

export interface red_candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface red_candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface red_carpet {}

export interface red_concrete {}

export interface red_concrete_powder {}

export interface red_flower {
  flower_type: StringTag<"poppy" | "orchid" | "allium" | "houstonia" | "tulip_red" | "tulip_orange" | "tulip_white" | "tulip_pink" | "oxeye" | "cornflower" | "lily_of_the_valley">;
}

export interface red_glazed_terracotta {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface red_mushroom {}

export interface red_mushroom_block {
  huge_mushroom_bits: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface red_nether_brick {}

export interface red_nether_brick_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface red_sandstone {
  sand_stone_type: StringTag<"default" | "heiroglyphs" | "cut" | "smooth">;
}

export interface red_sandstone_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface red_shulker_box {}

export interface red_stained_glass {}

export interface red_stained_glass_pane {}

export interface red_terracotta {}

export interface red_wool {}

export interface redstone_block {}

export interface redstone_lamp {}

export interface redstone_ore {}

export interface redstone_torch {
  torch_facing_direction: StringTag<"unknown" | "west" | "east" | "north" | "south" | "top">;
}

export interface redstone_wire {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface reeds {
  age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface reinforced_deepslate {}

export interface repeating_command_block {
  conditional_bit: IntTag<0 | 1>;
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface reserved6 {}

export interface respawn_anchor {
  respawn_anchor_charge: IntTag<0 | 1 | 2 | 3 | 4>;
}

export interface sand {
  sand_type: StringTag<"normal" | "red">;
}

export interface sandstone {
  sand_stone_type: StringTag<"default" | "heiroglyphs" | "cut" | "smooth">;
}

export interface sandstone_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface sapling {
  age_bit: DoubleTag<0 | 1>;
  sapling_type: StringTag<"oak" | "spruce" | "birch" | "jungle" | "acacia" | "dark_oak">;
}

export interface scaffolding {
  stability: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  stability_check: ByteTag<0 | 1>;
}

export interface sculk {}

export interface sculk_catalyst {
  bloom: ByteTag<0 | 1>;
}

export interface sculk_sensor {
  sculk_sensor_phase: IntTag<0 | 1 | 2>;
}

export interface sculk_shrieker {
  active: ByteTag<0 | 1>;
  can_summon: ByteTag<0 | 1>;
}

export interface sculk_vein {
  multi_face_direction_bits: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63>;
}

export interface sea_lantern {}

export interface sea_pickle {
  cluster_count: ByteTag<0 | 1 | 2 | 3>;
  dead_bit: ByteTag<0 | 1>;
}

export interface seagrass {
  sea_grass_type: StringTag<"default" | "double_top" | "double_bot">;
}

export interface shroomlight {}

export interface silver_glazed_terracotta {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface skull {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface slime {}

export interface small_amethyst_bud {
  "minecraft:block_face": StringTag<"down" | "up" | "north" | "south" | "west" | "east">;
}

export interface small_dripleaf_block {
  "minecraft:cardinal_direction": ByteTag<0 | 0 | 0 | 0>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface smithing_table {}

export interface smoker {
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface smooth_basalt {}

export interface smooth_quartz_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface smooth_red_sandstone_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface smooth_sandstone_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface smooth_stone {}

export interface sniffer_egg {
  cracked_state: StringTag<"no_cracks" | "cracked" | "max_cracked">;
}

export interface snow {}

export interface snow_layer {
  covered_bit: IntTag<0 | 1>;
  height: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface soul_campfire {
  extinguished: DoubleTag<0 | 1>;
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface soul_fire {
  age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface soul_lantern {
  hanging: ByteTag<0 | 1>;
}

export interface soul_sand {}

export interface soul_soil {}

export interface soul_torch {
  torch_facing_direction: StringTag<"unknown" | "west" | "east" | "north" | "south" | "top">;
}

export interface sponge {
  sponge_type: StringTag<"dry" | "wet">;
}

export interface spore_blossom {}

export interface spruce_button {
  button_pressed_bit: IntTag<0 | 1>;
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface spruce_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface spruce_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface spruce_fence {}

export interface spruce_fence_gate {
  direction: ByteTag<0 | 1 | 2 | 3>;
  in_wall_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
}

export interface spruce_hanging_sign {
  attached_bit: ByteTag<0 | 1>;
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  hanging: ByteTag<0 | 1>;
}

export interface spruce_leaves {
  persistent_bit: ByteTag<0 | 1>;
  update_bit: ByteTag<0 | 1>;
}

export interface spruce_log {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface spruce_planks {}

export interface spruce_pressure_plate {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface spruce_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface spruce_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface spruce_standing_sign {
  ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface spruce_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface spruce_wall_sign {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface spruce_wood {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface standing_banner {
  ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface standing_sign {
  ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface sticky_piston {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface sticky_piston_arm_collision {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface stone {}

export interface stone_block_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
  stone_slab_type: StringTag<"smooth_stone" | "sandstone" | "wood" | "cobblestone" | "brick" | "stone_brick" | "quartz" | "nether_brick">;
}

export interface stone_block_slab2 {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
  stone_slab_type_2: StringTag<"red_sandstone" | "purpur" | "prismarine_rough" | "prismarine_dark" | "prismarine_brick" | "mossy_cobblestone" | "smooth_sandstone" | "red_nether_brick">;
}

export interface stone_block_slab3 {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
  stone_slab_type_3: StringTag<"end_stone_brick" | "smooth_red_sandstone" | "polished_andesite" | "andesite" | "diorite" | "polished_diorite" | "granite" | "polished_granite">;
}

export interface stone_block_slab4 {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
  stone_slab_type_4: StringTag<"mossy_stone_brick" | "smooth_quartz" | "stone" | "cut_sandstone" | "cut_red_sandstone">;
}

export interface stone_brick_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface stone_button {
  button_pressed_bit: IntTag<0 | 1>;
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface stone_pressure_plate {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface stone_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface stonebrick {
  stone_brick_type: StringTag<"default" | "mossy" | "cracked" | "chiseled" | "smooth">;
}

export interface stonecutter {}

export interface stonecutter_block {
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface stripped_acacia_log {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_acacia_wood {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_bamboo_block {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_birch_log {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_birch_wood {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_cherry_log {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_cherry_wood {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_crimson_hyphae {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_crimson_stem {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_dark_oak_log {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_dark_oak_wood {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_jungle_log {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_jungle_wood {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_mangrove_log {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_mangrove_wood {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_oak_log {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_oak_wood {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_spruce_log {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_spruce_wood {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_warped_hyphae {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface stripped_warped_stem {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface structure_block {
  structure_block_type: StringTag<"data" | "save" | "load" | "corner" | "invalid" | "export">;
}

export interface structure_void {
  structure_void_type: StringTag<"void" | "air">;
}

export interface suspicious_gravel {
  brushed_progress: ByteTag<0 | 1 | 2 | 3>;
  hanging: ByteTag<0 | 1>;
}

export interface suspicious_sand {
  brushed_progress: ByteTag<0 | 1 | 2 | 3>;
  hanging: ByteTag<0 | 1>;
}

export interface sweet_berry_bush {
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface tallgrass {
  tall_grass_type: StringTag<"default" | "tall" | "fern" | "snow">;
}

export interface target {}

export interface tinted_glass {}

export interface tnt {
  allow_underwater_bit: ByteTag<0 | 1>;
  explode_bit: ByteTag<0 | 1>;
}

export interface torch {
  torch_facing_direction: StringTag<"unknown" | "west" | "east" | "north" | "south" | "top">;
}

export interface torchflower {}

export interface torchflower_crop {
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface trapped_chest {
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface trial_spawner {
  trial_spawner_state: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface trip_wire {
  attached_bit: ByteTag<0 | 1>;
  disarmed_bit: ByteTag<0 | 1>;
  powered_bit: ByteTag<0 | 1>;
  suspended_bit: ByteTag<0 | 1>;
}

export interface tripwire_hook {
  attached_bit: ByteTag<0 | 1>;
  direction: ByteTag<0 | 1 | 2 | 3>;
  powered_bit: ByteTag<0 | 1>;
}

export interface tube_coral {}

export interface tuff {}

export interface tuff_brick_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface tuff_brick_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface tuff_brick_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface tuff_brick_wall {
  wall_connection_type_east: ByteTag<0 | 0 | 0>;
  wall_connection_type_north: ByteTag<0 | 0 | 0>;
  wall_connection_type_south: ByteTag<0 | 0 | 0>;
  wall_connection_type_west: ByteTag<0 | 0 | 0>;
  wall_post_bit: ByteTag<0 | 1>;
}

export interface tuff_bricks {}

export interface tuff_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface tuff_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface tuff_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface tuff_wall {
  wall_connection_type_east: ByteTag<0 | 0 | 0>;
  wall_connection_type_north: ByteTag<0 | 0 | 0>;
  wall_connection_type_south: ByteTag<0 | 0 | 0>;
  wall_connection_type_west: ByteTag<0 | 0 | 0>;
  wall_post_bit: ByteTag<0 | 1>;
}

export interface turtle_egg {
  cracked_state: StringTag<"no_cracks" | "cracked" | "max_cracked">;
  turtle_egg_count: StringTag<"one_egg" | "two_egg" | "three_egg" | "four_egg">;
}

export interface twisting_vines {
  twisting_vines_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
}

export interface underwater_torch {
  torch_facing_direction: StringTag<"unknown" | "west" | "east" | "north" | "south" | "top">;
}

export interface undyed_shulker_box {}

export interface Unknown {}

export interface unlit_redstone_torch {
  torch_facing_direction: StringTag<"unknown" | "west" | "east" | "north" | "south" | "top">;
}

export interface unpowered_comparator {
  "minecraft:cardinal_direction": ByteTag<0 | 0 | 0 | 0>;
  output_lit_bit: ByteTag<0 | 1>;
  output_subtract_bit: ByteTag<0 | 1>;
}

export interface unpowered_repeater {
  "minecraft:cardinal_direction": IntTag<0 | 0 | 0 | 0>;
  repeater_delay: IntTag<0 | 1 | 2 | 3>;
}

export interface vault {
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  vault_state: StringTag<"inactive" | "active" | "unlocking" | "ejecting">;
}

export interface verdant_froglight {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface vine {
  vine_direction_bits: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface wall_banner {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface wall_sign {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface warped_button {
  button_pressed_bit: IntTag<0 | 1>;
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface warped_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface warped_double_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface warped_fence {}

export interface warped_fence_gate {
  direction: ByteTag<0 | 1 | 2 | 3>;
  in_wall_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
}

export interface warped_fungus {}

export interface warped_hanging_sign {
  attached_bit: ByteTag<0 | 1>;
  facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
  ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  hanging: ByteTag<0 | 1>;
}

export interface warped_hyphae {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface warped_nylium {}

export interface warped_planks {}

export interface warped_pressure_plate {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface warped_roots {}

export interface warped_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface warped_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface warped_standing_sign {
  ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface warped_stem {
  pillar_axis: StringTag<"y" | "x" | "z">;
}

export interface warped_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface warped_wall_sign {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface warped_wart_block {}

export interface water {
  liquid_depth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface waterlily {}

export interface waxed_chiseled_copper {}

export interface waxed_copper {}

export interface waxed_copper_bulb {
  lit: ByteTag<0 | 1>;
  powered_bit: ByteTag<0 | 1>;
}

export interface waxed_copper_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface waxed_copper_grate {}

export interface waxed_copper_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface waxed_cut_copper {}

export interface waxed_cut_copper_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface waxed_cut_copper_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface waxed_double_cut_copper_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface waxed_exposed_chiseled_copper {}

export interface waxed_exposed_copper {}

export interface waxed_exposed_copper_bulb {
  lit: ByteTag<0 | 1>;
  powered_bit: ByteTag<0 | 1>;
}

export interface waxed_exposed_copper_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface waxed_exposed_copper_grate {}

export interface waxed_exposed_copper_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface waxed_exposed_cut_copper {}

export interface waxed_exposed_cut_copper_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface waxed_exposed_cut_copper_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface waxed_exposed_double_cut_copper_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface waxed_oxidized_chiseled_copper {}

export interface waxed_oxidized_copper {}

export interface waxed_oxidized_copper_bulb {
  lit: ByteTag<0 | 1>;
  powered_bit: ByteTag<0 | 1>;
}

export interface waxed_oxidized_copper_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface waxed_oxidized_copper_grate {}

export interface waxed_oxidized_copper_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface waxed_oxidized_cut_copper {}

export interface waxed_oxidized_cut_copper_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface waxed_oxidized_cut_copper_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface waxed_oxidized_double_cut_copper_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface waxed_weathered_chiseled_copper {}

export interface waxed_weathered_copper {}

export interface waxed_weathered_copper_bulb {
  lit: ByteTag<0 | 1>;
  powered_bit: ByteTag<0 | 1>;
}

export interface waxed_weathered_copper_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface waxed_weathered_copper_grate {}

export interface waxed_weathered_copper_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface waxed_weathered_cut_copper {}

export interface waxed_weathered_cut_copper_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface waxed_weathered_cut_copper_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface waxed_weathered_double_cut_copper_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface weathered_chiseled_copper {}

export interface weathered_copper {}

export interface weathered_copper_bulb {
  lit: ByteTag<0 | 1>;
  powered_bit: ByteTag<0 | 1>;
}

export interface weathered_copper_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface weathered_copper_grate {}

export interface weathered_copper_trapdoor {
  direction: ByteTag<0 | 1 | 2 | 3>;
  open_bit: ByteTag<0 | 1>;
  upside_down_bit: ByteTag<0 | 1>;
}

export interface weathered_cut_copper {}

export interface weathered_cut_copper_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface weathered_cut_copper_stairs {
  upside_down_bit: IntTag<0 | 1>;
  weirdo_direction: IntTag<0 | 1 | 2 | 3>;
}

export interface weathered_double_cut_copper_slab {
  "minecraft:vertical_half": StringTag<"bottom" | "top">;
}

export interface web {}

export interface weeping_vines {
  weeping_vines_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
}

export interface wheat {
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface white_candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface white_candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface white_carpet {}

export interface white_concrete {}

export interface white_concrete_powder {}

export interface white_glazed_terracotta {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface white_shulker_box {}

export interface white_stained_glass {}

export interface white_stained_glass_pane {}

export interface white_terracotta {}

export interface white_wool {}

export interface wither_rose {}

export interface wooden_button {
  button_pressed_bit: IntTag<0 | 1>;
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface wooden_door {
  direction: ByteTag<0 | 1 | 2 | 3>;
  door_hinge_bit: ByteTag<0 | 1>;
  open_bit: ByteTag<0 | 1>;
  upper_block_bit: ByteTag<0 | 1>;
}

export interface wooden_pressure_plate {
  redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface yellow_candle {
  candles: ByteTag<0 | 1 | 2 | 3>;
  lit: ByteTag<0 | 1>;
}

export interface yellow_candle_cake {
  lit: ByteTag<0 | 1>;
}

export interface yellow_carpet {}

export interface yellow_concrete {}

export interface yellow_concrete_powder {}

export interface yellow_flower {}

export interface yellow_glazed_terracotta {
  facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface yellow_shulker_box {}

export interface yellow_stained_glass {}

export interface yellow_stained_glass_pane {}

export interface yellow_terracotta {}

export interface yellow_wool {}

export enum BlockResource {
  air = "minecraft:air",
  stone = "minecraft:stone",
  grass = "minecraft:grass",
  dirt = "minecraft:dirt",
  cobblestone = "minecraft:cobblestone",
  planks = "minecraft:planks",
  sapling = "minecraft:sapling",
  bedrock = "minecraft:bedrock",
  flowing_water = "minecraft:flowing_water",
  water = "minecraft:water",
  flowing_lava = "minecraft:flowing_lava",
  lava = "minecraft:lava",
  sand = "minecraft:sand",
  gravel = "minecraft:gravel",
  gold_ore = "minecraft:gold_ore",
  iron_ore = "minecraft:iron_ore",
  coal_ore = "minecraft:coal_ore",
  log = "minecraft:log",
  leaves = "minecraft:leaves",
  sponge = "minecraft:sponge",
  glass = "minecraft:glass",
  lapis_ore = "minecraft:lapis_ore",
  lapis_block = "minecraft:lapis_block",
  dispenser = "minecraft:dispenser",
  sandstone = "minecraft:sandstone",
  noteblock = "minecraft:noteblock",
  bed = "minecraft:bed",
  golden_rail = "minecraft:golden_rail",
  detector_rail = "minecraft:detector_rail",
  sticky_piston = "minecraft:sticky_piston",
  web = "minecraft:web",
  tallgrass = "minecraft:tallgrass",
  deadbush = "minecraft:deadbush",
  piston = "minecraft:piston",
  pistonarmcollision = "minecraft:pistonarmcollision",
  wool = "minecraft:wool",
  element_0 = "minecraft:element_0",
  yellow_flower = "minecraft:yellow_flower",
  red_flower = "minecraft:red_flower",
  brown_mushroom = "minecraft:brown_mushroom",
  red_mushroom = "minecraft:red_mushroom",
  gold_block = "minecraft:gold_block",
  iron_block = "minecraft:iron_block",
  double_stone_slab = "minecraft:double_stone_slab",
  stone_slab = "minecraft:stone_slab",
  brick_block = "minecraft:brick_block",
  tnt = "minecraft:tnt",
  bookshelf = "minecraft:bookshelf",
  mossy_cobblestone = "minecraft:mossy_cobblestone",
  obsidian = "minecraft:obsidian",
  torch = "minecraft:torch",
  fire = "minecraft:fire",
  mob_spawner = "minecraft:mob_spawner",
  oak_stairs = "minecraft:oak_stairs",
  chest = "minecraft:chest",
  redstone_wire = "minecraft:redstone_wire",
  diamond_ore = "minecraft:diamond_ore",
  diamond_block = "minecraft:diamond_block",
  crafting_table = "minecraft:crafting_table",
  wheat = "minecraft:wheat",
  farmland = "minecraft:farmland",
  furnace = "minecraft:furnace",
  lit_furnace = "minecraft:lit_furnace",
  standing_sign = "minecraft:standing_sign",
  wooden_door = "minecraft:wooden_door",
  ladder = "minecraft:ladder",
  rail = "minecraft:rail",
  stone_stairs = "minecraft:stone_stairs",
  wall_sign = "minecraft:wall_sign",
  lever = "minecraft:lever",
  stone_pressure_plate = "minecraft:stone_pressure_plate",
  iron_door = "minecraft:iron_door",
  wooden_pressure_plate = "minecraft:wooden_pressure_plate",
  redstone_ore = "minecraft:redstone_ore",
  lit_redstone_ore = "minecraft:lit_redstone_ore",
  unlit_redstone_torch = "minecraft:unlit_redstone_torch",
  redstone_torch = "minecraft:redstone_torch",
  stone_button = "minecraft:stone_button",
  snow_layer = "minecraft:snow_layer",
  ice = "minecraft:ice",
  snow = "minecraft:snow",
  cactus = "minecraft:cactus",
  clay = "minecraft:clay",
  reeds = "minecraft:reeds",
  jukebox = "minecraft:jukebox",
  fence = "minecraft:fence",
  pumpkin = "minecraft:pumpkin",
  netherrack = "minecraft:netherrack",
  soul_sand = "minecraft:soul_sand",
  glowstone = "minecraft:glowstone",
  portal = "minecraft:portal",
  lit_pumpkin = "minecraft:lit_pumpkin",
  cake = "minecraft:cake",
  unpowered_repeater = "minecraft:unpowered_repeater",
  powered_repeater = "minecraft:powered_repeater",
  invisibleBedrock = "minecraft:invisibleBedrock",
  trapdoor = "minecraft:trapdoor",
  monster_egg = "minecraft:monster_egg",
  stonebrick = "minecraft:stonebrick",
  brown_mushroom_block = "minecraft:brown_mushroom_block",
  red_mushroom_block = "minecraft:red_mushroom_block",
  iron_bars = "minecraft:iron_bars",
  glass_pane = "minecraft:glass_pane",
  melon_block = "minecraft:melon_block",
  pumpkin_stem = "minecraft:pumpkin_stem",
  melon_stem = "minecraft:melon_stem",
  vine = "minecraft:vine",
  fence_gate = "minecraft:fence_gate",
  brick_stairs = "minecraft:brick_stairs",
  stone_brick_stairs = "minecraft:stone_brick_stairs",
  mycelium = "minecraft:mycelium",
  waterlily = "minecraft:waterlily",
  nether_brick = "minecraft:nether_brick",
  nether_brick_fence = "minecraft:nether_brick_fence",
  nether_brick_stairs = "minecraft:nether_brick_stairs",
  nether_wart = "minecraft:nether_wart",
  enchanting_table = "minecraft:enchanting_table",
  brewing_stand = "minecraft:brewing_stand",
  cauldron = "minecraft:cauldron",
  end_portal = "minecraft:end_portal",
  end_portal_frame = "minecraft:end_portal_frame",
  end_stone = "minecraft:end_stone",
  dragon_egg = "minecraft:dragon_egg",
  redstone_lamp = "minecraft:redstone_lamp",
  lit_redstone_lamp = "minecraft:lit_redstone_lamp",
  dropper = "minecraft:dropper",
  activator_rail = "minecraft:activator_rail",
  cocoa = "minecraft:cocoa",
  sandstone_stairs = "minecraft:sandstone_stairs",
  emerald_ore = "minecraft:emerald_ore",
  ender_chest = "minecraft:ender_chest",
  tripwire_hook = "minecraft:tripwire_hook",
  tripwire = "minecraft:tripwire",
  emerald_block = "minecraft:emerald_block",
  spruce_stairs = "minecraft:spruce_stairs",
  birch_stairs = "minecraft:birch_stairs",
  jungle_stairs = "minecraft:jungle_stairs",
  command_block = "minecraft:command_block",
  beacon = "minecraft:beacon",
  cobblestone_wall = "minecraft:cobblestone_wall",
  flower_pot = "minecraft:flower_pot",
  carrots = "minecraft:carrots",
  potatoes = "minecraft:potatoes",
  wooden_button = "minecraft:wooden_button",
  skull = "minecraft:skull",
  anvil = "minecraft:anvil",
  trapped_chest = "minecraft:trapped_chest",
  light_weighted_pressure_plate = "minecraft:light_weighted_pressure_plate",
  heavy_weighted_pressure_plate = "minecraft:heavy_weighted_pressure_plate",
  unpowered_comparator = "minecraft:unpowered_comparator",
  powered_comparator = "minecraft:powered_comparator",
  daylight_detector = "minecraft:daylight_detector",
  redstone_block = "minecraft:redstone_block",
  quartz_ore = "minecraft:quartz_ore",
  hopper = "minecraft:hopper",
  quartz_block = "minecraft:quartz_block",
  quartz_stairs = "minecraft:quartz_stairs",
  double_wooden_slab = "minecraft:double_wooden_slab",
  wooden_slab = "minecraft:wooden_slab",
  stained_hardened_clay = "minecraft:stained_hardened_clay",
  stained_glass_pane = "minecraft:stained_glass_pane",
  leaves2 = "minecraft:leaves2",
  log2 = "minecraft:log2",
  acacia_stairs = "minecraft:acacia_stairs",
  dark_oak_stairs = "minecraft:dark_oak_stairs",
  slime = "minecraft:slime",
  iron_trapdoor = "minecraft:iron_trapdoor",
  prismarine = "minecraft:prismarine",
  sealantern = "minecraft:sealantern",
  hay_block = "minecraft:hay_block",
  carpet = "minecraft:carpet",
  hardened_clay = "minecraft:hardened_clay",
  coal_block = "minecraft:coal_block",
  packed_ice = "minecraft:packed_ice",
  double_plant = "minecraft:double_plant",
  standing_banner = "minecraft:standing_banner",
  wall_banner = "minecraft:wall_banner",
  daylight_detector_inverted = "minecraft:daylight_detector_inverted",
  red_sandstone = "minecraft:red_sandstone",
  red_sandstone_stairs = "minecraft:red_sandstone_stairs",
  double_stone_slab2 = "minecraft:double_stone_slab2",
  stone_slab2 = "minecraft:stone_slab2",
  spruce_fence_gate = "minecraft:spruce_fence_gate",
  birch_fence_gate = "minecraft:birch_fence_gate",
  jungle_fence_gate = "minecraft:jungle_fence_gate",
  dark_oak_fence_gate = "minecraft:dark_oak_fence_gate",
  acacia_fence_gate = "minecraft:acacia_fence_gate",
  repeating_command_block = "minecraft:repeating_command_block",
  chain_command_block = "minecraft:chain_command_block",
  hard_glass_pane = "minecraft:hard_glass_pane",
  hard_stained_glass_pane = "minecraft:hard_stained_glass_pane",
  chemical_heat = "minecraft:chemical_heat",
  spruce_door = "minecraft:spruce_door",
  birch_door = "minecraft:birch_door",
  jungle_door = "minecraft:jungle_door",
  acacia_door = "minecraft:acacia_door",
  dark_oak_door = "minecraft:dark_oak_door",
  grass_path = "minecraft:grass_path",
  frame = "minecraft:frame",
  chorus_flower = "minecraft:chorus_flower",
  purpur_block = "minecraft:purpur_block",
  colored_torch_rg = "minecraft:colored_torch_rg",
  purpur_stairs = "minecraft:purpur_stairs",
  colored_torch_bp = "minecraft:colored_torch_bp",
  undyed_shulker_box = "minecraft:undyed_shulker_box",
  end_bricks = "minecraft:end_bricks",
  frosted_ice = "minecraft:frosted_ice",
  end_rod = "minecraft:end_rod",
  end_gateway = "minecraft:end_gateway",
  allow = "minecraft:allow",
  deny = "minecraft:deny",
  border_block = "minecraft:border_block",
  magma = "minecraft:magma",
  nether_wart_block = "minecraft:nether_wart_block",
  red_nether_brick = "minecraft:red_nether_brick",
  bone_block = "minecraft:bone_block",
  structure_void = "minecraft:structure_void",
  shulker_box = "minecraft:shulker_box",
  purple_glazed_terracotta = "minecraft:purple_glazed_terracotta",
  white_glazed_terracotta = "minecraft:white_glazed_terracotta",
  orange_glazed_terracotta = "minecraft:orange_glazed_terracotta",
  magenta_glazed_terracotta = "minecraft:magenta_glazed_terracotta",
  light_blue_glazed_terracotta = "minecraft:light_blue_glazed_terracotta",
  yellow_glazed_terracotta = "minecraft:yellow_glazed_terracotta",
  lime_glazed_terracotta = "minecraft:lime_glazed_terracotta",
  pink_glazed_terracotta = "minecraft:pink_glazed_terracotta",
  gray_glazed_terracotta = "minecraft:gray_glazed_terracotta",
  silver_glazed_terracotta = "minecraft:silver_glazed_terracotta",
  cyan_glazed_terracotta = "minecraft:cyan_glazed_terracotta",
  chalkboard = "minecraft:chalkboard",
  blue_glazed_terracotta = "minecraft:blue_glazed_terracotta",
  brown_glazed_terracotta = "minecraft:brown_glazed_terracotta",
  green_glazed_terracotta = "minecraft:green_glazed_terracotta",
  red_glazed_terracotta = "minecraft:red_glazed_terracotta",
  black_glazed_terracotta = "minecraft:black_glazed_terracotta",
  concrete = "minecraft:concrete",
  concrete_powder = "minecraft:concrete_powder",
  chemistry_table = "minecraft:chemistry_table",
  underwater_torch = "minecraft:underwater_torch",
  chorus_plant = "minecraft:chorus_plant",
  stained_glass = "minecraft:stained_glass",
  camera = "minecraft:camera",
  podzol = "minecraft:podzol",
  beetroot = "minecraft:beetroot",
  stonecutter = "minecraft:stonecutter",
  glowingobsidian = "minecraft:glowingobsidian",
  netherreactor = "minecraft:netherreactor",
  info_update = "minecraft:info_update",
  info_update2 = "minecraft:info_update2",
  movingBlock = "minecraft:movingBlock",
  observer = "minecraft:observer",
  structure_block = "minecraft:structure_block",
  hard_glass = "minecraft:hard_glass",
  hard_stained_glass = "minecraft:hard_stained_glass",
  reserved6 = "minecraft:reserved6",
  prismarine_stairs = "minecraft:prismarine_stairs",
  dark_prismarine_stairs = "minecraft:dark_prismarine_stairs",
  prismarine_bricks_stairs = "minecraft:prismarine_bricks_stairs",
  stripped_spruce_log = "minecraft:stripped_spruce_log",
  stripped_birch_log = "minecraft:stripped_birch_log",
  stripped_jungle_log = "minecraft:stripped_jungle_log",
  stripped_acacia_log = "minecraft:stripped_acacia_log",
  stripped_dark_oak_log = "minecraft:stripped_dark_oak_log",
  stripped_oak_log = "minecraft:stripped_oak_log",
  blue_ice = "minecraft:blue_ice",
  element_1 = "minecraft:element_1",
  element_2 = "minecraft:element_2",
  element_3 = "minecraft:element_3",
  element_4 = "minecraft:element_4",
  element_5 = "minecraft:element_5",
  element_6 = "minecraft:element_6",
  element_7 = "minecraft:element_7",
  element_8 = "minecraft:element_8",
  element_9 = "minecraft:element_9",
  element_10 = "minecraft:element_10",
  element_11 = "minecraft:element_11",
  element_12 = "minecraft:element_12",
  element_13 = "minecraft:element_13",
  element_14 = "minecraft:element_14",
  element_15 = "minecraft:element_15",
  element_16 = "minecraft:element_16",
  element_17 = "minecraft:element_17",
  element_18 = "minecraft:element_18",
  element_19 = "minecraft:element_19",
  element_20 = "minecraft:element_20",
  element_21 = "minecraft:element_21",
  element_22 = "minecraft:element_22",
  element_23 = "minecraft:element_23",
  element_24 = "minecraft:element_24",
  element_25 = "minecraft:element_25",
  element_26 = "minecraft:element_26",
  element_27 = "minecraft:element_27",
  element_28 = "minecraft:element_28",
  element_29 = "minecraft:element_29",
  element_30 = "minecraft:element_30",
  element_31 = "minecraft:element_31",
  element_32 = "minecraft:element_32",
  element_33 = "minecraft:element_33",
  element_34 = "minecraft:element_34",
  element_35 = "minecraft:element_35",
  element_36 = "minecraft:element_36",
  element_37 = "minecraft:element_37",
  element_38 = "minecraft:element_38",
  element_39 = "minecraft:element_39",
  element_40 = "minecraft:element_40",
  element_41 = "minecraft:element_41",
  element_42 = "minecraft:element_42",
  element_43 = "minecraft:element_43",
  element_44 = "minecraft:element_44",
  element_45 = "minecraft:element_45",
  element_46 = "minecraft:element_46",
  element_47 = "minecraft:element_47",
  element_48 = "minecraft:element_48",
  element_49 = "minecraft:element_49",
  element_50 = "minecraft:element_50",
  element_51 = "minecraft:element_51",
  element_52 = "minecraft:element_52",
  element_53 = "minecraft:element_53",
  element_54 = "minecraft:element_54",
  element_55 = "minecraft:element_55",
  element_56 = "minecraft:element_56",
  element_57 = "minecraft:element_57",
  element_58 = "minecraft:element_58",
  element_59 = "minecraft:element_59",
  element_60 = "minecraft:element_60",
  element_61 = "minecraft:element_61",
  element_62 = "minecraft:element_62",
  element_63 = "minecraft:element_63",
  element_64 = "minecraft:element_64",
  element_65 = "minecraft:element_65",
  element_66 = "minecraft:element_66",
  element_67 = "minecraft:element_67",
  element_68 = "minecraft:element_68",
  element_69 = "minecraft:element_69",
  element_70 = "minecraft:element_70",
  element_71 = "minecraft:element_71",
  element_72 = "minecraft:element_72",
  element_73 = "minecraft:element_73",
  element_74 = "minecraft:element_74",
  element_75 = "minecraft:element_75",
  element_76 = "minecraft:element_76",
  element_77 = "minecraft:element_77",
  element_78 = "minecraft:element_78",
  element_79 = "minecraft:element_79",
  element_80 = "minecraft:element_80",
  element_81 = "minecraft:element_81",
  element_82 = "minecraft:element_82",
  element_83 = "minecraft:element_83",
  element_84 = "minecraft:element_84",
  element_85 = "minecraft:element_85",
  element_86 = "minecraft:element_86",
  element_87 = "minecraft:element_87",
  element_88 = "minecraft:element_88",
  element_89 = "minecraft:element_89",
  element_90 = "minecraft:element_90",
  element_91 = "minecraft:element_91",
  element_92 = "minecraft:element_92",
  element_93 = "minecraft:element_93",
  element_94 = "minecraft:element_94",
  element_95 = "minecraft:element_95",
  element_96 = "minecraft:element_96",
  element_97 = "minecraft:element_97",
  element_98 = "minecraft:element_98",
  element_99 = "minecraft:element_99",
  element_100 = "minecraft:element_100",
  element_101 = "minecraft:element_101",
  element_102 = "minecraft:element_102",
  element_103 = "minecraft:element_103",
  element_104 = "minecraft:element_104",
  element_105 = "minecraft:element_105",
  element_106 = "minecraft:element_106",
  element_107 = "minecraft:element_107",
  element_108 = "minecraft:element_108",
  element_109 = "minecraft:element_109",
  element_110 = "minecraft:element_110",
  element_111 = "minecraft:element_111",
  element_112 = "minecraft:element_112",
  element_113 = "minecraft:element_113",
  element_114 = "minecraft:element_114",
  element_115 = "minecraft:element_115",
  element_116 = "minecraft:element_116",
  element_117 = "minecraft:element_117",
  element_118 = "minecraft:element_118",
  seagrass = "minecraft:seagrass",
  coral = "minecraft:coral",
  coral_block = "minecraft:coral_block",
  coral_fan = "minecraft:coral_fan",
  coral_fan_dead = "minecraft:coral_fan_dead",
  coral_fan_hang = "minecraft:coral_fan_hang",
  coral_fan_hang2 = "minecraft:coral_fan_hang2",
  coral_fan_hang3 = "minecraft:coral_fan_hang3",
  kelp = "minecraft:kelp",
  dried_kelp_block = "minecraft:dried_kelp_block",
  acacia_button = "minecraft:acacia_button",
  birch_button = "minecraft:birch_button",
  dark_oak_button = "minecraft:dark_oak_button",
  jungle_button = "minecraft:jungle_button",
  spruce_button = "minecraft:spruce_button",
  acacia_trapdoor = "minecraft:acacia_trapdoor",
  birch_trapdoor = "minecraft:birch_trapdoor",
  dark_oak_trapdoor = "minecraft:dark_oak_trapdoor",
  jungle_trapdoor = "minecraft:jungle_trapdoor",
  spruce_trapdoor = "minecraft:spruce_trapdoor",
  acacia_pressure_plate = "minecraft:acacia_pressure_plate",
  birch_pressure_plate = "minecraft:birch_pressure_plate",
  dark_oak_pressure_plate = "minecraft:dark_oak_pressure_plate",
  jungle_pressure_plate = "minecraft:jungle_pressure_plate",
  spruce_pressure_plate = "minecraft:spruce_pressure_plate",
  carved_pumpkin = "minecraft:carved_pumpkin",
  sea_pickle = "minecraft:sea_pickle",
  conduit = "minecraft:conduit",
  turtle_egg = "minecraft:turtle_egg",
  bubble_column = "minecraft:bubble_column",
  barrier = "minecraft:barrier",
  stone_slab3 = "minecraft:stone_slab3",
  bamboo = "minecraft:bamboo",
  bamboo_sapling = "minecraft:bamboo_sapling",
  scaffolding = "minecraft:scaffolding",
  stone_slab4 = "minecraft:stone_slab4",
  double_stone_slab3 = "minecraft:double_stone_slab3",
  double_stone_slab4 = "minecraft:double_stone_slab4",
  granite_stairs = "minecraft:granite_stairs",
  diorite_stairs = "minecraft:diorite_stairs",
  andesite_stairs = "minecraft:andesite_stairs",
  polished_granite_stairs = "minecraft:polished_granite_stairs",
  polished_diorite_stairs = "minecraft:polished_diorite_stairs",
  polished_andesite_stairs = "minecraft:polished_andesite_stairs",
  mossy_stone_brick_stairs = "minecraft:mossy_stone_brick_stairs",
  smooth_red_sandstone_stairs = "minecraft:smooth_red_sandstone_stairs",
  smooth_sandstone_stairs = "minecraft:smooth_sandstone_stairs",
  end_brick_stairs = "minecraft:end_brick_stairs",
  mossy_cobblestone_stairs = "minecraft:mossy_cobblestone_stairs",
  normal_stone_stairs = "minecraft:normal_stone_stairs",
  spruce_standing_sign = "minecraft:spruce_standing_sign",
  spruce_wall_sign = "minecraft:spruce_wall_sign",
  smooth_stone = "minecraft:smooth_stone",
  red_nether_brick_stairs = "minecraft:red_nether_brick_stairs",
  smooth_quartz_stairs = "minecraft:smooth_quartz_stairs",
  birch_standing_sign = "minecraft:birch_standing_sign",
  birch_wall_sign = "minecraft:birch_wall_sign",
  jungle_standing_sign = "minecraft:jungle_standing_sign",
  jungle_wall_sign = "minecraft:jungle_wall_sign",
  acacia_standing_sign = "minecraft:acacia_standing_sign",
  acacia_wall_sign = "minecraft:acacia_wall_sign",
  darkoak_standing_sign = "minecraft:darkoak_standing_sign",
  darkoak_wall_sign = "minecraft:darkoak_wall_sign",
  lectern = "minecraft:lectern",
  grindstone = "minecraft:grindstone",
  blast_furnace = "minecraft:blast_furnace",
  stonecutter_block = "minecraft:stonecutter_block",
  smoker = "minecraft:smoker",
  lit_smoker = "minecraft:lit_smoker",
  cartography_table = "minecraft:cartography_table",
  fletching_table = "minecraft:fletching_table",
  smithing_table = "minecraft:smithing_table",
  barrel = "minecraft:barrel",
  loom = "minecraft:loom",
  bell = "minecraft:bell",
  sweet_berry_bush = "minecraft:sweet_berry_bush",
  lantern = "minecraft:lantern",
  campfire = "minecraft:campfire",
  lava_cauldron = "minecraft:lava_cauldron",
  jigsaw = "minecraft:jigsaw",
  wood = "minecraft:wood",
  composter = "minecraft:composter",
  lit_blast_furnace = "minecraft:lit_blast_furnace",
  light_block = "minecraft:light_block",
  wither_rose = "minecraft:wither_rose",
  stickypistonarmcollision = "minecraft:stickypistonarmcollision",
  bee_nest = "minecraft:bee_nest",
  beehive = "minecraft:beehive",
  honey_block = "minecraft:honey_block",
  honeycomb_block = "minecraft:honeycomb_block",
  lodestone = "minecraft:lodestone",
  crimson_roots = "minecraft:crimson_roots",
  warped_roots = "minecraft:warped_roots",
  crimson_stem = "minecraft:crimson_stem",
  warped_stem = "minecraft:warped_stem",
  warped_wart_block = "minecraft:warped_wart_block",
  crimson_fungus = "minecraft:crimson_fungus",
  warped_fungus = "minecraft:warped_fungus",
  shroomlight = "minecraft:shroomlight",
  weeping_vines = "minecraft:weeping_vines",
  crimson_nylium = "minecraft:crimson_nylium",
  warped_nylium = "minecraft:warped_nylium",
  basalt = "minecraft:basalt",
  polished_basalt = "minecraft:polished_basalt",
  soul_soil = "minecraft:soul_soil",
  soul_fire = "minecraft:soul_fire",
  nether_sprouts = "minecraft:nether_sprouts",
  target = "minecraft:target",
  stripped_crimson_stem = "minecraft:stripped_crimson_stem",
  stripped_warped_stem = "minecraft:stripped_warped_stem",
  crimson_planks = "minecraft:crimson_planks",
  warped_planks = "minecraft:warped_planks",
  crimson_door = "minecraft:crimson_door",
  warped_door = "minecraft:warped_door",
  crimson_trapdoor = "minecraft:crimson_trapdoor",
  warped_trapdoor = "minecraft:warped_trapdoor",
  crimson_standing_sign = "minecraft:crimson_standing_sign",
  warped_standing_sign = "minecraft:warped_standing_sign",
  crimson_wall_sign = "minecraft:crimson_wall_sign",
  warped_wall_sign = "minecraft:warped_wall_sign",
  crimson_stairs = "minecraft:crimson_stairs",
  warped_stairs = "minecraft:warped_stairs",
  crimson_fence = "minecraft:crimson_fence",
  warped_fence = "minecraft:warped_fence",
  crimson_fence_gate = "minecraft:crimson_fence_gate",
  warped_fence_gate = "minecraft:warped_fence_gate",
  crimson_button = "minecraft:crimson_button",
  warped_button = "minecraft:warped_button",
  crimson_pressure_plate = "minecraft:crimson_pressure_plate",
  warped_pressure_plate = "minecraft:warped_pressure_plate",
  crimson_slab = "minecraft:crimson_slab",
  warped_slab = "minecraft:warped_slab",
  crimson_double_slab = "minecraft:crimson_double_slab",
  warped_double_slab = "minecraft:warped_double_slab",
  soul_torch = "minecraft:soul_torch",
  soul_lantern = "minecraft:soul_lantern",
  netherite_block = "minecraft:netherite_block",
  ancient_debris = "minecraft:ancient_debris",
  respawn_anchor = "minecraft:respawn_anchor",
  blackstone = "minecraft:blackstone",
  polished_blackstone_bricks = "minecraft:polished_blackstone_bricks",
  polished_blackstone_brick_stairs = "minecraft:polished_blackstone_brick_stairs",
  blackstone_stairs = "minecraft:blackstone_stairs",
  blackstone_wall = "minecraft:blackstone_wall",
  polished_blackstone_brick_wall = "minecraft:polished_blackstone_brick_wall",
  chiseled_polished_blackstone = "minecraft:chiseled_polished_blackstone",
  cracked_polished_blackstone_bricks = "minecraft:cracked_polished_blackstone_bricks",
  gilded_blackstone = "minecraft:gilded_blackstone",
  blackstone_slab = "minecraft:blackstone_slab",
  blackstone_double_slab = "minecraft:blackstone_double_slab",
  polished_blackstone_brick_slab = "minecraft:polished_blackstone_brick_slab",
  polished_blackstone_brick_double_slab = "minecraft:polished_blackstone_brick_double_slab",
  chain = "minecraft:chain",
  twisting_vines = "minecraft:twisting_vines",
  nether_gold_ore = "minecraft:nether_gold_ore",
  crying_obsidian = "minecraft:crying_obsidian",
  soul_campfire = "minecraft:soul_campfire",
  polished_blackstone = "minecraft:polished_blackstone",
  polished_blackstone_stairs = "minecraft:polished_blackstone_stairs",
  polished_blackstone_slab = "minecraft:polished_blackstone_slab",
  polished_blackstone_double_slab = "minecraft:polished_blackstone_double_slab",
  polished_blackstone_pressure_plate = "minecraft:polished_blackstone_pressure_plate",
  polished_blackstone_button = "minecraft:polished_blackstone_button",
  polished_blackstone_wall = "minecraft:polished_blackstone_wall",
  warped_hyphae = "minecraft:warped_hyphae",
  crimson_hyphae = "minecraft:crimson_hyphae",
  stripped_crimson_hyphae = "minecraft:stripped_crimson_hyphae",
  stripped_warped_hyphae = "minecraft:stripped_warped_hyphae",
  chiseled_nether_bricks = "minecraft:chiseled_nether_bricks",
  cracked_nether_bricks = "minecraft:cracked_nether_bricks",
  quartz_bricks = "minecraft:quartz_bricks",
  unknown = "minecraft:unknown",
  powder_snow = "minecraft:powder_snow",
  sculk_sensor = "minecraft:sculk_sensor",
  pointed_dripstone = "minecraft:pointed_dripstone",
  copper_ore = "minecraft:copper_ore",
  lightning_rod = "minecraft:lightning_rod",
  dripstone_block = "minecraft:dripstone_block",
  dirt_with_roots = "minecraft:dirt_with_roots",
  hanging_roots = "minecraft:hanging_roots",
  moss_block = "minecraft:moss_block",
  spore_blossom = "minecraft:spore_blossom",
  cave_vines = "minecraft:cave_vines",
  big_dripleaf = "minecraft:big_dripleaf",
  azalea_leaves = "minecraft:azalea_leaves",
  azalea_leaves_flowered = "minecraft:azalea_leaves_flowered",
  calcite = "minecraft:calcite",
  amethyst_block = "minecraft:amethyst_block",
  budding_amethyst = "minecraft:budding_amethyst",
  amethyst_cluster = "minecraft:amethyst_cluster",
  large_amethyst_bud = "minecraft:large_amethyst_bud",
  medium_amethyst_bud = "minecraft:medium_amethyst_bud",
  small_amethyst_bud = "minecraft:small_amethyst_bud",
  tuff = "minecraft:tuff",
  tinted_glass = "minecraft:tinted_glass",
  moss_carpet = "minecraft:moss_carpet",
  small_dripleaf_block = "minecraft:small_dripleaf_block",
  azalea = "minecraft:azalea",
  flowering_azalea = "minecraft:flowering_azalea",
  glow_frame = "minecraft:glow_frame",
  copper_block = "minecraft:copper_block",
  exposed_copper = "minecraft:exposed_copper",
  weathered_copper = "minecraft:weathered_copper",
  oxidized_copper = "minecraft:oxidized_copper",
  waxed_copper = "minecraft:waxed_copper",
  waxed_exposed_copper = "minecraft:waxed_exposed_copper",
  waxed_weathered_copper = "minecraft:waxed_weathered_copper",
  cut_copper = "minecraft:cut_copper",
  exposed_cut_copper = "minecraft:exposed_cut_copper",
  weathered_cut_copper = "minecraft:weathered_cut_copper",
  oxidized_cut_copper = "minecraft:oxidized_cut_copper",
  waxed_cut_copper = "minecraft:waxed_cut_copper",
  waxed_exposed_cut_copper = "minecraft:waxed_exposed_cut_copper",
  waxed_weathered_cut_copper = "minecraft:waxed_weathered_cut_copper",
  cut_copper_stairs = "minecraft:cut_copper_stairs",
  exposed_cut_copper_stairs = "minecraft:exposed_cut_copper_stairs",
  weathered_cut_copper_stairs = "minecraft:weathered_cut_copper_stairs",
  oxidized_cut_copper_stairs = "minecraft:oxidized_cut_copper_stairs",
  waxed_cut_copper_stairs = "minecraft:waxed_cut_copper_stairs",
  waxed_exposed_cut_copper_stairs = "minecraft:waxed_exposed_cut_copper_stairs",
  waxed_weathered_cut_copper_stairs = "minecraft:waxed_weathered_cut_copper_stairs",
  cut_copper_slab = "minecraft:cut_copper_slab",
  exposed_cut_copper_slab = "minecraft:exposed_cut_copper_slab",
  weathered_cut_copper_slab = "minecraft:weathered_cut_copper_slab",
  oxidized_cut_copper_slab = "minecraft:oxidized_cut_copper_slab",
  waxed_cut_copper_slab = "minecraft:waxed_cut_copper_slab",
  waxed_exposed_cut_copper_slab = "minecraft:waxed_exposed_cut_copper_slab",
  waxed_weathered_cut_copper_slab = "minecraft:waxed_weathered_cut_copper_slab",
  double_cut_copper_slab = "minecraft:double_cut_copper_slab",
  exposed_double_cut_copper_slab = "minecraft:exposed_double_cut_copper_slab",
  weathered_double_cut_copper_slab = "minecraft:weathered_double_cut_copper_slab",
  oxidized_double_cut_copper_slab = "minecraft:oxidized_double_cut_copper_slab",
  waxed_double_cut_copper_slab = "minecraft:waxed_double_cut_copper_slab",
  waxed_exposed_double_cut_copper_slab = "minecraft:waxed_exposed_double_cut_copper_slab",
  waxed_weathered_double_cut_copper_slab = "minecraft:waxed_weathered_double_cut_copper_slab",
  cave_vines_body_with_berries = "minecraft:cave_vines_body_with_berries",
  cave_vines_head_with_berries = "minecraft:cave_vines_head_with_berries",
  smooth_basalt = "minecraft:smooth_basalt",
  deepslate = "minecraft:deepslate",
  cobbled_deepslate = "minecraft:cobbled_deepslate",
  cobbled_deepslate_slab = "minecraft:cobbled_deepslate_slab",
  cobbled_deepslate_stairs = "minecraft:cobbled_deepslate_stairs",
  cobbled_deepslate_wall = "minecraft:cobbled_deepslate_wall",
  polished_deepslate = "minecraft:polished_deepslate",
  polished_deepslate_slab = "minecraft:polished_deepslate_slab",
  polished_deepslate_stairs = "minecraft:polished_deepslate_stairs",
  polished_deepslate_wall = "minecraft:polished_deepslate_wall",
  deepslate_tiles = "minecraft:deepslate_tiles",
  deepslate_tile_slab = "minecraft:deepslate_tile_slab",
  deepslate_tile_stairs = "minecraft:deepslate_tile_stairs",
  deepslate_tile_wall = "minecraft:deepslate_tile_wall",
  deepslate_bricks = "minecraft:deepslate_bricks",
  deepslate_brick_slab = "minecraft:deepslate_brick_slab",
  deepslate_brick_stairs = "minecraft:deepslate_brick_stairs",
  deepslate_brick_wall = "minecraft:deepslate_brick_wall",
  chiseled_deepslate = "minecraft:chiseled_deepslate",
  cobbled_deepslate_double_slab = "minecraft:cobbled_deepslate_double_slab",
  polished_deepslate_double_slab = "minecraft:polished_deepslate_double_slab",
  deepslate_tile_double_slab = "minecraft:deepslate_tile_double_slab",
  deepslate_brick_double_slab = "minecraft:deepslate_brick_double_slab",
  deepslate_lapis_ore = "minecraft:deepslate_lapis_ore",
  deepslate_iron_ore = "minecraft:deepslate_iron_ore",
  deepslate_gold_ore = "minecraft:deepslate_gold_ore",
  deepslate_redstone_ore = "minecraft:deepslate_redstone_ore",
  lit_deepslate_redstone_ore = "minecraft:lit_deepslate_redstone_ore",
  deepslate_diamond_ore = "minecraft:deepslate_diamond_ore",
  deepslate_coal_ore = "minecraft:deepslate_coal_ore",
  deepslate_emerald_ore = "minecraft:deepslate_emerald_ore",
  deepslate_copper_ore = "minecraft:deepslate_copper_ore",
  cracked_deepslate_tiles = "minecraft:cracked_deepslate_tiles",
  cracked_deepslate_bricks = "minecraft:cracked_deepslate_bricks",
  glow_lichen = "minecraft:glow_lichen",
  candle = "minecraft:candle",
  white_candle = "minecraft:white_candle",
  orange_candle = "minecraft:orange_candle",
  magenta_candle = "minecraft:magenta_candle",
  light_blue_candle = "minecraft:light_blue_candle",
  yellow_candle = "minecraft:yellow_candle",
  lime_candle = "minecraft:lime_candle",
  pink_candle = "minecraft:pink_candle",
  gray_candle = "minecraft:gray_candle",
  light_gray_candle = "minecraft:light_gray_candle",
  cyan_candle = "minecraft:cyan_candle",
  purple_candle = "minecraft:purple_candle",
  blue_candle = "minecraft:blue_candle",
  brown_candle = "minecraft:brown_candle",
  green_candle = "minecraft:green_candle",
  red_candle = "minecraft:red_candle",
  black_candle = "minecraft:black_candle",
  candle_cake = "minecraft:candle_cake",
  white_candle_cake = "minecraft:white_candle_cake",
  orange_candle_cake = "minecraft:orange_candle_cake",
  magenta_candle_cake = "minecraft:magenta_candle_cake",
  light_blue_candle_cake = "minecraft:light_blue_candle_cake",
  yellow_candle_cake = "minecraft:yellow_candle_cake",
  lime_candle_cake = "minecraft:lime_candle_cake",
  pink_candle_cake = "minecraft:pink_candle_cake",
  gray_candle_cake = "minecraft:gray_candle_cake",
  light_gray_candle_cake = "minecraft:light_gray_candle_cake",
  cyan_candle_cake = "minecraft:cyan_candle_cake",
  purple_candle_cake = "minecraft:purple_candle_cake",
  blue_candle_cake = "minecraft:blue_candle_cake",
  brown_candle_cake = "minecraft:brown_candle_cake",
  green_candle_cake = "minecraft:green_candle_cake",
  red_candle_cake = "minecraft:red_candle_cake",
  black_candle_cake = "minecraft:black_candle_cake",
  waxed_oxidized_copper = "minecraft:waxed_oxidized_copper",
  waxed_oxidized_cut_copper = "minecraft:waxed_oxidized_cut_copper",
  waxed_oxidized_cut_copper_stairs = "minecraft:waxed_oxidized_cut_copper_stairs",
  waxed_oxidized_cut_copper_slab = "minecraft:waxed_oxidized_cut_copper_slab",
  waxed_oxidized_double_cut_copper_slab = "minecraft:waxed_oxidized_double_cut_copper_slab",
  raw_iron_block = "minecraft:raw_iron_block",
  raw_copper_block = "minecraft:raw_copper_block",
  raw_gold_block = "minecraft:raw_gold_block",
  infested_deepslate = "minecraft:infested_deepslate",
  sculk = "minecraft:sculk",
  sculk_vein = "minecraft:sculk_vein",
  sculk_catalyst = "minecraft:sculk_catalyst",
  sculk_shrieker = "minecraft:sculk_shrieker",
  client_request_placeholder_block = "minecraft:client_request_placeholder_block",
  mysterious_frame = "minecraft:mysterious_frame",
  mysterious_frame_slot = "minecraft:mysterious_frame_slot",
  frog_spawn = "minecraft:frog_spawn",
  pearlescent_froglight = "minecraft:pearlescent_froglight",
  verdant_froglight = "minecraft:verdant_froglight",
  ochre_froglight = "minecraft:ochre_froglight",
  chiseled_bookshelf = "minecraft:chiseled_bookshelf",
  suspicious_sand = "minecraft:suspicious_sand",
  suspicious_gravel = "minecraft:suspicious_gravel",
  decorated_pot = "minecraft:decorated_pot",
  compound_creator = "minecraft:compound_creator",
  element_constructor = "minecraft:element_constructor",
  lab_table = "minecraft:lab_table",
  material_reducer = "minecraft:material_reducer"
}