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
  acacia_button: {
    button_pressed_bit: IntTag<0 | 1>;
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  acacia_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  acacia_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  acacia_fence: {};
  acacia_fence_gate: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    in_wall_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
  };
  acacia_hanging_sign: {
    attached_bit: ByteTag<0 | 1>;
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
    hanging: ByteTag<0 | 1>;
  };
  acacia_leaves: {
    persistent_bit: ByteTag<0 | 1>;
    update_bit: ByteTag<0 | 1>;
  };
  acacia_log: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  acacia_planks: {};
  acacia_pressure_plate: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  acacia_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  acacia_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  acacia_standing_sign: {
    ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  acacia_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  acacia_wall_sign: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  acacia_wood: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  activator_rail: {
    rail_data_bit: IntTag<0 | 1>;
    rail_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  air: {};
  allow: {};
  amethyst_block: {};
  amethyst_cluster: {
    "minecraft:block_face": StringTag<"down" | "up" | "north" | "south" | "west" | "east">;
  };
  ancient_debris: {};
  andesite: {};
  andesite_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  anvil: {
    damage: StringTag<"undamaged" | "slightly_damaged" | "very_damaged" | "broken">;
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  azalea: {};
  azalea_leaves: {
    persistent_bit: ByteTag<0 | 1>;
    update_bit: ByteTag<0 | 1>;
  };
  azalea_leaves_flowered: {
    persistent_bit: ByteTag<0 | 1>;
    update_bit: ByteTag<0 | 1>;
  };
  bamboo: {
    age_bit: DoubleTag<0 | 1>;
    bamboo_leaf_size: StringTag<"no_leaves" | "small_leaves" | "large_leaves">;
    bamboo_stalk_thickness: StringTag<"thin" | "thick">;
  };
  bamboo_block: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  bamboo_button: {
    button_pressed_bit: IntTag<0 | 1>;
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  bamboo_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  bamboo_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  bamboo_fence: {};
  bamboo_fence_gate: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    in_wall_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
  };
  bamboo_hanging_sign: {
    attached_bit: ByteTag<0 | 1>;
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
    hanging: ByteTag<0 | 1>;
  };
  bamboo_mosaic: {};
  bamboo_mosaic_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  bamboo_mosaic_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  bamboo_mosaic_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  bamboo_planks: {};
  bamboo_pressure_plate: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  bamboo_sapling: {
    age_bit: DoubleTag<0 | 1>;
    sapling_type: StringTag<"oak" | "spruce" | "birch" | "jungle" | "acacia" | "dark_oak">;
  };
  bamboo_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  bamboo_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  bamboo_standing_sign: {
    ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  bamboo_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  bamboo_wall_sign: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  barrel: {
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    open_bit: ByteTag<0 | 1>;
  };
  barrier: {};
  basalt: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  beacon: {};
  bed: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    head_piece_bit: ByteTag<0 | 1>;
    occupied_bit: ByteTag<0 | 1>;
  };
  bedrock: {
    infiniburn_bit: ByteTag<0 | 1>;
  };
  bee_nest: {
    direction: IntTag<0 | 1 | 2 | 3>;
    honey_level: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  beehive: {
    direction: IntTag<0 | 1 | 2 | 3>;
    honey_level: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  beetroot: {
    growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  };
  bell: {
    attachment: ByteTag<0 | 0 | 0 | 0>;
    direction: ByteTag<0 | 1 | 2 | 3>;
    toggle_bit: ByteTag<0 | 1>;
  };
  big_dripleaf: {
    big_dripleaf_head: DoubleTag<0 | 1>;
    big_dripleaf_tilt: StringTag<"none" | "unstable" | "partial_tilt" | "full_tilt">;
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  birch_button: {
    button_pressed_bit: IntTag<0 | 1>;
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  birch_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  birch_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  birch_fence: {};
  birch_fence_gate: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    in_wall_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
  };
  birch_hanging_sign: {
    attached_bit: ByteTag<0 | 1>;
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
    hanging: ByteTag<0 | 1>;
  };
  birch_leaves: {
    persistent_bit: ByteTag<0 | 1>;
    update_bit: ByteTag<0 | 1>;
  };
  birch_log: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  birch_planks: {};
  birch_pressure_plate: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  birch_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  birch_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  birch_standing_sign: {
    ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  birch_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  birch_wall_sign: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  birch_wood: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  black_candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  black_candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  black_carpet: {};
  black_concrete: {};
  black_concrete_powder: {};
  black_glazed_terracotta: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  black_shulker_box: {};
  black_stained_glass: {};
  black_stained_glass_pane: {};
  black_terracotta: {};
  black_wool: {};
  blackstone: {};
  blackstone_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  blackstone_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  blackstone_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  blackstone_wall: {
    wall_connection_type_east: ByteTag<0 | 0 | 0>;
    wall_connection_type_north: ByteTag<0 | 0 | 0>;
    wall_connection_type_south: ByteTag<0 | 0 | 0>;
    wall_connection_type_west: ByteTag<0 | 0 | 0>;
    wall_post_bit: ByteTag<0 | 1>;
  };
  blast_furnace: {
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  blue_candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  blue_candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  blue_carpet: {};
  blue_concrete: {};
  blue_concrete_powder: {};
  blue_glazed_terracotta: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  blue_ice: {};
  blue_shulker_box: {};
  blue_stained_glass: {};
  blue_stained_glass_pane: {};
  blue_terracotta: {};
  blue_wool: {};
  bone_block: {
    deprecated: DoubleTag<0 | 1 | 2 | 3>;
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  bookshelf: {};
  border_block: {
    wall_connection_type_east: ByteTag<0 | 0 | 0>;
    wall_connection_type_north: ByteTag<0 | 0 | 0>;
    wall_connection_type_south: ByteTag<0 | 0 | 0>;
    wall_connection_type_west: ByteTag<0 | 0 | 0>;
    wall_post_bit: ByteTag<0 | 1>;
  };
  brain_coral: {};
  brewing_stand: {
    brewing_stand_slot_a_bit: ByteTag<0 | 1>;
    brewing_stand_slot_b_bit: ByteTag<0 | 1>;
    brewing_stand_slot_c_bit: ByteTag<0 | 1>;
  };
  brick_block: {};
  brick_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  brown_candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  brown_candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  brown_carpet: {};
  brown_concrete: {};
  brown_concrete_powder: {};
  brown_glazed_terracotta: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  brown_mushroom: {};
  brown_mushroom_block: {
    huge_mushroom_bits: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  brown_shulker_box: {};
  brown_stained_glass: {};
  brown_stained_glass_pane: {};
  brown_terracotta: {};
  brown_wool: {};
  bubble_column: {
    drag_down: ByteTag<0 | 1>;
  };
  bubble_coral: {};
  budding_amethyst: {};
  cactus: {
    age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  cake: {
    bite_counter: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6>;
  };
  calcite: {};
  calibrated_sculk_sensor: {
    "minecraft:cardinal_direction": IntTag<0 | 0 | 0 | 0>;
    sculk_sensor_phase: IntTag<0 | 1 | 2>;
  };
  camera: {};
  campfire: {
    extinguished: DoubleTag<0 | 1>;
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  carrots: {
    growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  };
  cartography_table: {};
  carved_pumpkin: {
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  cauldron: {
    cauldron_liquid: IntTag<0 | 0 | 0>;
    fill_level: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6>;
  };
  cave_vines: {
    growing_plant_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
  };
  cave_vines_body_with_berries: {
    growing_plant_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
  };
  cave_vines_head_with_berries: {
    growing_plant_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
  };
  chain: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  chain_command_block: {
    conditional_bit: IntTag<0 | 1>;
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  chemical_heat: {};
  chemistry_table: {
    chemistry_table_type: IntTag<0 | 0 | 0 | 0>;
    direction: IntTag<0 | 1 | 2 | 3>;
  };
  cherry_button: {
    button_pressed_bit: IntTag<0 | 1>;
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  cherry_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  cherry_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  cherry_fence: {};
  cherry_fence_gate: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    in_wall_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
  };
  cherry_hanging_sign: {
    attached_bit: ByteTag<0 | 1>;
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
    hanging: ByteTag<0 | 1>;
  };
  cherry_leaves: {
    persistent_bit: ByteTag<0 | 1>;
    update_bit: ByteTag<0 | 1>;
  };
  cherry_log: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  cherry_planks: {};
  cherry_pressure_plate: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  cherry_sapling: {
    age_bit: ByteTag<0 | 1>;
  };
  cherry_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  cherry_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  cherry_standing_sign: {
    ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  cherry_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  cherry_wall_sign: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  cherry_wood: {
    pillar_axis: ByteTag<0 | 0 | 0>;
    stripped_bit: ByteTag<0 | 1>;
  };
  chest: {
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  chiseled_bookshelf: {
    books_stored: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63>;
    direction: IntTag<0 | 1 | 2 | 3>;
  };
  chiseled_copper: {};
  chiseled_deepslate: {};
  chiseled_nether_bricks: {};
  chiseled_polished_blackstone: {};
  chiseled_tuff: {};
  chiseled_tuff_bricks: {};
  chorus_flower: {
    age: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  chorus_plant: {};
  clay: {};
  client_request_placeholder_block: {};
  coal_block: {};
  coal_ore: {};
  cobbled_deepslate: {};
  cobbled_deepslate_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  cobbled_deepslate_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  cobbled_deepslate_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  cobbled_deepslate_wall: {
    wall_connection_type_east: ByteTag<0 | 0 | 0>;
    wall_connection_type_north: ByteTag<0 | 0 | 0>;
    wall_connection_type_south: ByteTag<0 | 0 | 0>;
    wall_connection_type_west: ByteTag<0 | 0 | 0>;
    wall_post_bit: ByteTag<0 | 1>;
  };
  cobblestone: {};
  cobblestone_wall: {
    wall_block_type: ByteTag<0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0>;
    wall_connection_type_east: ByteTag<0 | 0 | 0>;
    wall_connection_type_north: ByteTag<0 | 0 | 0>;
    wall_connection_type_south: ByteTag<0 | 0 | 0>;
    wall_connection_type_west: ByteTag<0 | 0 | 0>;
    wall_post_bit: ByteTag<0 | 1>;
  };
  cocoa: {
    age: IntTag<0 | 1 | 2>;
    direction: IntTag<0 | 1 | 2 | 3>;
  };
  colored_torch_bp: {
    color_bit: DoubleTag<0 | 1>;
    torch_facing_direction: StringTag<"unknown" | "west" | "east" | "north" | "south" | "top">;
  };
  colored_torch_rg: {
    color_bit: DoubleTag<0 | 1>;
    torch_facing_direction: StringTag<"unknown" | "west" | "east" | "north" | "south" | "top">;
  };
  command_block: {
    conditional_bit: IntTag<0 | 1>;
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  composter: {
    composter_fill_level: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>;
  };
  conduit: {};
  copper_block: {};
  copper_bulb: {
    lit: ByteTag<0 | 1>;
    powered_bit: ByteTag<0 | 1>;
  };
  copper_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  copper_grate: {};
  copper_ore: {};
  copper_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  coral_block: {
    coral_color: ByteTag<0 | 0 | 0 | 0 | 0>;
    dead_bit: ByteTag<0 | 1>;
  };
  coral_fan: {
    coral_color: IntTag<0 | 0 | 0 | 0 | 0>;
    coral_fan_direction: IntTag<0 | 1>;
  };
  coral_fan_dead: {
    coral_color: IntTag<0 | 0 | 0 | 0 | 0>;
    coral_fan_direction: IntTag<0 | 1>;
  };
  coral_fan_hang: {
    coral_direction: ByteTag<0 | 1 | 2 | 3>;
    coral_hang_type_bit: ByteTag<0 | 1>;
    dead_bit: ByteTag<0 | 1>;
  };
  coral_fan_hang2: {
    coral_direction: ByteTag<0 | 1 | 2 | 3>;
    coral_hang_type_bit: ByteTag<0 | 1>;
    dead_bit: ByteTag<0 | 1>;
  };
  coral_fan_hang3: {
    coral_direction: ByteTag<0 | 1 | 2 | 3>;
    coral_hang_type_bit: ByteTag<0 | 1>;
    dead_bit: ByteTag<0 | 1>;
  };
  cracked_deepslate_bricks: {};
  cracked_deepslate_tiles: {};
  cracked_nether_bricks: {};
  cracked_polished_blackstone_bricks: {};
  crafter: {
    crafting: ByteTag<0 | 1>;
    orientation: ByteTag<0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0>;
    triggered_bit: ByteTag<0 | 1>;
  };
  crafting_table: {};
  crimson_button: {
    button_pressed_bit: IntTag<0 | 1>;
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  crimson_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  crimson_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  crimson_fence: {};
  crimson_fence_gate: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    in_wall_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
  };
  crimson_fungus: {};
  crimson_hanging_sign: {
    attached_bit: ByteTag<0 | 1>;
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
    hanging: ByteTag<0 | 1>;
  };
  crimson_hyphae: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  crimson_nylium: {};
  crimson_planks: {};
  crimson_pressure_plate: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  crimson_roots: {};
  crimson_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  crimson_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  crimson_standing_sign: {
    ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  crimson_stem: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  crimson_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  crimson_wall_sign: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  crying_obsidian: {};
  cut_copper: {};
  cut_copper_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  cut_copper_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  cyan_candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  cyan_candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  cyan_carpet: {};
  cyan_concrete: {};
  cyan_concrete_powder: {};
  cyan_glazed_terracotta: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  cyan_shulker_box: {};
  cyan_stained_glass: {};
  cyan_stained_glass_pane: {};
  cyan_terracotta: {};
  cyan_wool: {};
  dark_oak_button: {
    button_pressed_bit: IntTag<0 | 1>;
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  dark_oak_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  dark_oak_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  dark_oak_fence: {};
  dark_oak_fence_gate: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    in_wall_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
  };
  dark_oak_hanging_sign: {
    attached_bit: ByteTag<0 | 1>;
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
    hanging: ByteTag<0 | 1>;
  };
  dark_oak_leaves: {
    persistent_bit: ByteTag<0 | 1>;
    update_bit: ByteTag<0 | 1>;
  };
  dark_oak_log: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  dark_oak_planks: {};
  dark_oak_pressure_plate: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  dark_oak_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  dark_oak_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  dark_oak_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  dark_oak_wood: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  dark_prismarine_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  darkoak_standing_sign: {
    ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  darkoak_wall_sign: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  daylight_detector: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  daylight_detector_inverted: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  dead_brain_coral: {};
  dead_bubble_coral: {};
  dead_fire_coral: {};
  dead_horn_coral: {};
  dead_tube_coral: {};
  deadbush: {};
  decorated_pot: {
    direction: IntTag<0 | 1 | 2 | 3>;
  };
  deepslate: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  deepslate_brick_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  deepslate_brick_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  deepslate_brick_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  deepslate_brick_wall: {
    wall_connection_type_east: ByteTag<0 | 0 | 0>;
    wall_connection_type_north: ByteTag<0 | 0 | 0>;
    wall_connection_type_south: ByteTag<0 | 0 | 0>;
    wall_connection_type_west: ByteTag<0 | 0 | 0>;
    wall_post_bit: ByteTag<0 | 1>;
  };
  deepslate_bricks: {};
  deepslate_coal_ore: {};
  deepslate_copper_ore: {};
  deepslate_diamond_ore: {};
  deepslate_emerald_ore: {};
  deepslate_gold_ore: {};
  deepslate_iron_ore: {};
  deepslate_lapis_ore: {};
  deepslate_redstone_ore: {};
  deepslate_tile_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  deepslate_tile_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  deepslate_tile_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  deepslate_tile_wall: {
    wall_connection_type_east: ByteTag<0 | 0 | 0>;
    wall_connection_type_north: ByteTag<0 | 0 | 0>;
    wall_connection_type_south: ByteTag<0 | 0 | 0>;
    wall_connection_type_west: ByteTag<0 | 0 | 0>;
    wall_post_bit: ByteTag<0 | 1>;
  };
  deepslate_tiles: {};
  deny: {};
  detector_rail: {
    rail_data_bit: IntTag<0 | 1>;
    rail_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  diamond_block: {};
  diamond_ore: {};
  diorite: {};
  diorite_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  dirt: {
    dirt_type: StringTag<"normal" | "coarse">;
  };
  dirt_with_roots: {};
  dispenser: {
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    triggered_bit: ByteTag<0 | 1>;
  };
  double_cut_copper_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  double_plant: {
    double_plant_type: ByteTag<0 | 0 | 0 | 0 | 0 | 0>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  double_stone_block_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
    stone_slab_type: StringTag<"smooth_stone" | "sandstone" | "wood" | "cobblestone" | "brick" | "stone_brick" | "quartz" | "nether_brick">;
  };
  double_stone_block_slab2: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
    stone_slab_type_2: StringTag<"red_sandstone" | "purpur" | "prismarine_rough" | "prismarine_dark" | "prismarine_brick" | "mossy_cobblestone" | "smooth_sandstone" | "red_nether_brick">;
  };
  double_stone_block_slab3: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
    stone_slab_type_3: StringTag<"end_stone_brick" | "smooth_red_sandstone" | "polished_andesite" | "andesite" | "diorite" | "polished_diorite" | "granite" | "polished_granite">;
  };
  double_stone_block_slab4: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
    stone_slab_type_4: StringTag<"mossy_stone_brick" | "smooth_quartz" | "stone" | "cut_sandstone" | "cut_red_sandstone">;
  };
  dragon_egg: {};
  dried_kelp_block: {};
  dripstone_block: {};
  dropper: {
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    triggered_bit: ByteTag<0 | 1>;
  };
  element_0: {};
  element_1: {};
  element_10: {};
  element_100: {};
  element_101: {};
  element_102: {};
  element_103: {};
  element_104: {};
  element_105: {};
  element_106: {};
  element_107: {};
  element_108: {};
  element_109: {};
  element_11: {};
  element_110: {};
  element_111: {};
  element_112: {};
  element_113: {};
  element_114: {};
  element_115: {};
  element_116: {};
  element_117: {};
  element_118: {};
  element_12: {};
  element_13: {};
  element_14: {};
  element_15: {};
  element_16: {};
  element_17: {};
  element_18: {};
  element_19: {};
  element_2: {};
  element_20: {};
  element_21: {};
  element_22: {};
  element_23: {};
  element_24: {};
  element_25: {};
  element_26: {};
  element_27: {};
  element_28: {};
  element_29: {};
  element_3: {};
  element_30: {};
  element_31: {};
  element_32: {};
  element_33: {};
  element_34: {};
  element_35: {};
  element_36: {};
  element_37: {};
  element_38: {};
  element_39: {};
  element_4: {};
  element_40: {};
  element_41: {};
  element_42: {};
  element_43: {};
  element_44: {};
  element_45: {};
  element_46: {};
  element_47: {};
  element_48: {};
  element_49: {};
  element_5: {};
  element_50: {};
  element_51: {};
  element_52: {};
  element_53: {};
  element_54: {};
  element_55: {};
  element_56: {};
  element_57: {};
  element_58: {};
  element_59: {};
  element_6: {};
  element_60: {};
  element_61: {};
  element_62: {};
  element_63: {};
  element_64: {};
  element_65: {};
  element_66: {};
  element_67: {};
  element_68: {};
  element_69: {};
  element_7: {};
  element_70: {};
  element_71: {};
  element_72: {};
  element_73: {};
  element_74: {};
  element_75: {};
  element_76: {};
  element_77: {};
  element_78: {};
  element_79: {};
  element_8: {};
  element_80: {};
  element_81: {};
  element_82: {};
  element_83: {};
  element_84: {};
  element_85: {};
  element_86: {};
  element_87: {};
  element_88: {};
  element_89: {};
  element_9: {};
  element_90: {};
  element_91: {};
  element_92: {};
  element_93: {};
  element_94: {};
  element_95: {};
  element_96: {};
  element_97: {};
  element_98: {};
  element_99: {};
  emerald_block: {};
  emerald_ore: {};
  enchanting_table: {};
  end_brick_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  end_bricks: {};
  end_gateway: {};
  end_portal: {};
  end_portal_frame: {
    end_portal_eye_bit: DoubleTag<0 | 1>;
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  end_rod: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  end_stone: {};
  ender_chest: {
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  exposed_chiseled_copper: {};
  exposed_copper: {};
  exposed_copper_bulb: {
    lit: ByteTag<0 | 1>;
    powered_bit: ByteTag<0 | 1>;
  };
  exposed_copper_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  exposed_copper_grate: {};
  exposed_copper_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  exposed_cut_copper: {};
  exposed_cut_copper_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  exposed_cut_copper_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  exposed_double_cut_copper_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  farmland: {
    moisturized_amount: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  };
  fence_gate: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    in_wall_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
  };
  fire: {
    age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  fire_coral: {};
  fletching_table: {};
  flower_pot: {
    update_bit: ByteTag<0 | 1>;
  };
  flowering_azalea: {};
  flowing_lava: {
    liquid_depth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  flowing_water: {
    liquid_depth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  frame: {
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    item_frame_map_bit: ByteTag<0 | 1>;
    item_frame_photo_bit: ByteTag<0 | 1>;
  };
  frog_spawn: {};
  frosted_ice: {
    age: IntTag<0 | 1 | 2 | 3>;
  };
  furnace: {
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  gilded_blackstone: {};
  glass: {};
  glass_pane: {};
  glow_frame: {
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    item_frame_map_bit: ByteTag<0 | 1>;
    item_frame_photo_bit: ByteTag<0 | 1>;
  };
  glow_lichen: {
    multi_face_direction_bits: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63>;
  };
  glowingobsidian: {};
  glowstone: {};
  gold_block: {};
  gold_ore: {};
  golden_rail: {
    rail_data_bit: IntTag<0 | 1>;
    rail_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  granite: {};
  granite_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  grass_block: {};
  grass_path: {};
  gravel: {};
  gray_candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  gray_candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  gray_carpet: {};
  gray_concrete: {};
  gray_concrete_powder: {};
  gray_glazed_terracotta: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  gray_shulker_box: {};
  gray_stained_glass: {};
  gray_stained_glass_pane: {};
  gray_terracotta: {};
  gray_wool: {};
  green_candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  green_candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  green_carpet: {};
  green_concrete: {};
  green_concrete_powder: {};
  green_glazed_terracotta: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  green_shulker_box: {};
  green_stained_glass: {};
  green_stained_glass_pane: {};
  green_terracotta: {};
  green_wool: {};
  grindstone: {
    attachment: IntTag<0 | 0 | 0 | 0>;
    direction: IntTag<0 | 1 | 2 | 3>;
  };
  hanging_roots: {};
  hard_black_stained_glass: {};
  hard_black_stained_glass_pane: {};
  hard_blue_stained_glass: {};
  hard_blue_stained_glass_pane: {};
  hard_brown_stained_glass: {};
  hard_brown_stained_glass_pane: {};
  hard_cyan_stained_glass: {};
  hard_cyan_stained_glass_pane: {};
  hard_glass: {};
  hard_glass_pane: {};
  hard_gray_stained_glass: {};
  hard_gray_stained_glass_pane: {};
  hard_green_stained_glass: {};
  hard_green_stained_glass_pane: {};
  hard_light_blue_stained_glass: {};
  hard_light_blue_stained_glass_pane: {};
  hard_light_gray_stained_glass: {};
  hard_light_gray_stained_glass_pane: {};
  hard_lime_stained_glass: {};
  hard_lime_stained_glass_pane: {};
  hard_magenta_stained_glass: {};
  hard_magenta_stained_glass_pane: {};
  hard_orange_stained_glass: {};
  hard_orange_stained_glass_pane: {};
  hard_pink_stained_glass: {};
  hard_pink_stained_glass_pane: {};
  hard_purple_stained_glass: {};
  hard_purple_stained_glass_pane: {};
  hard_red_stained_glass: {};
  hard_red_stained_glass_pane: {};
  hard_white_stained_glass: {};
  hard_white_stained_glass_pane: {};
  hard_yellow_stained_glass: {};
  hard_yellow_stained_glass_pane: {};
  hardened_clay: {};
  hay_block: {
    deprecated: DoubleTag<0 | 1 | 2 | 3>;
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  heavy_weighted_pressure_plate: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  honey_block: {};
  honeycomb_block: {};
  hopper: {
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    toggle_bit: ByteTag<0 | 1>;
  };
  horn_coral: {};
  ice: {};
  infested_deepslate: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  info_update: {};
  info_update2: {};
  invisible_bedrock: {};
  iron_bars: {};
  iron_block: {};
  iron_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  iron_ore: {};
  iron_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  jigsaw: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
    rotation: IntTag<0 | 1 | 2 | 3>;
  };
  jukebox: {};
  jungle_button: {
    button_pressed_bit: IntTag<0 | 1>;
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  jungle_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  jungle_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  jungle_fence: {};
  jungle_fence_gate: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    in_wall_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
  };
  jungle_hanging_sign: {
    attached_bit: ByteTag<0 | 1>;
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
    hanging: ByteTag<0 | 1>;
  };
  jungle_leaves: {
    persistent_bit: ByteTag<0 | 1>;
    update_bit: ByteTag<0 | 1>;
  };
  jungle_log: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  jungle_planks: {};
  jungle_pressure_plate: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  jungle_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  jungle_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  jungle_standing_sign: {
    ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  jungle_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  jungle_wall_sign: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  jungle_wood: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  kelp: {
    kelp_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
  };
  ladder: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  lantern: {
    hanging: ByteTag<0 | 1>;
  };
  lapis_block: {};
  lapis_ore: {};
  large_amethyst_bud: {
    "minecraft:block_face": StringTag<"down" | "up" | "north" | "south" | "west" | "east">;
  };
  lava: {
    liquid_depth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  lectern: {
    "minecraft:cardinal_direction": ByteTag<0 | 0 | 0 | 0>;
    powered_bit: ByteTag<0 | 1>;
  };
  lever: {
    lever_direction: ByteTag<0 | 0 | 0 | 0 | 0 | 0 | 0 | 0>;
    open_bit: ByteTag<0 | 1>;
  };
  light_block: {
    block_light_level: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  light_blue_candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  light_blue_candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  light_blue_carpet: {};
  light_blue_concrete: {};
  light_blue_concrete_powder: {};
  light_blue_glazed_terracotta: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  light_blue_shulker_box: {};
  light_blue_stained_glass: {};
  light_blue_stained_glass_pane: {};
  light_blue_terracotta: {};
  light_blue_wool: {};
  light_gray_candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  light_gray_candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  light_gray_carpet: {};
  light_gray_concrete: {};
  light_gray_concrete_powder: {};
  light_gray_shulker_box: {};
  light_gray_stained_glass: {};
  light_gray_stained_glass_pane: {};
  light_gray_terracotta: {};
  light_gray_wool: {};
  light_weighted_pressure_plate: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  lightning_rod: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  lime_candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  lime_candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  lime_carpet: {};
  lime_concrete: {};
  lime_concrete_powder: {};
  lime_glazed_terracotta: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  lime_shulker_box: {};
  lime_stained_glass: {};
  lime_stained_glass_pane: {};
  lime_terracotta: {};
  lime_wool: {};
  lit_blast_furnace: {
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  lit_deepslate_redstone_ore: {};
  lit_furnace: {
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  lit_pumpkin: {
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  lit_redstone_lamp: {};
  lit_redstone_ore: {};
  lit_smoker: {
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  lodestone: {};
  loom: {
    direction: IntTag<0 | 1 | 2 | 3>;
  };
  magenta_candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  magenta_candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  magenta_carpet: {};
  magenta_concrete: {};
  magenta_concrete_powder: {};
  magenta_glazed_terracotta: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  magenta_shulker_box: {};
  magenta_stained_glass: {};
  magenta_stained_glass_pane: {};
  magenta_terracotta: {};
  magenta_wool: {};
  magma: {};
  mangrove_button: {
    button_pressed_bit: IntTag<0 | 1>;
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  mangrove_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  mangrove_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  mangrove_fence: {};
  mangrove_fence_gate: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    in_wall_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
  };
  mangrove_hanging_sign: {
    attached_bit: ByteTag<0 | 1>;
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
    hanging: ByteTag<0 | 1>;
  };
  mangrove_leaves: {
    persistent_bit: ByteTag<0 | 1>;
    update_bit: ByteTag<0 | 1>;
  };
  mangrove_log: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  mangrove_planks: {};
  mangrove_pressure_plate: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  mangrove_propagule: {
    hanging: IntTag<0 | 1>;
    propagule_stage: IntTag<0 | 1 | 2 | 3 | 4>;
  };
  mangrove_roots: {};
  mangrove_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  mangrove_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  mangrove_standing_sign: {
    ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  mangrove_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  mangrove_wall_sign: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  mangrove_wood: {
    pillar_axis: ByteTag<0 | 0 | 0>;
    stripped_bit: ByteTag<0 | 1>;
  };
  medium_amethyst_bud: {
    "minecraft:block_face": StringTag<"down" | "up" | "north" | "south" | "west" | "east">;
  };
  melon_block: {};
  melon_stem: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
    growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  };
  mob_spawner: {};
  monster_egg: {
    monster_egg_stone_type: StringTag<"stone" | "cobblestone" | "stone_brick" | "mossy_stone_brick" | "cracked_stone_brick" | "chiseled_stone_brick">;
  };
  moss_block: {};
  moss_carpet: {};
  mossy_cobblestone: {};
  mossy_cobblestone_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  mossy_stone_brick_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  moving_block: {};
  mud: {};
  mud_brick_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  mud_brick_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  mud_brick_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  mud_brick_wall: {
    wall_connection_type_east: ByteTag<0 | 0 | 0>;
    wall_connection_type_north: ByteTag<0 | 0 | 0>;
    wall_connection_type_south: ByteTag<0 | 0 | 0>;
    wall_connection_type_west: ByteTag<0 | 0 | 0>;
    wall_post_bit: ByteTag<0 | 1>;
  };
  mud_bricks: {};
  muddy_mangrove_roots: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  mycelium: {};
  nether_brick: {};
  nether_brick_fence: {};
  nether_brick_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  nether_gold_ore: {};
  nether_sprouts: {};
  nether_wart: {
    age: IntTag<0 | 1 | 2 | 3>;
  };
  nether_wart_block: {};
  netherite_block: {};
  netherrack: {};
  netherreactor: {};
  normal_stone_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  noteblock: {};
  oak_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  oak_fence: {};
  oak_hanging_sign: {
    attached_bit: ByteTag<0 | 1>;
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
    hanging: ByteTag<0 | 1>;
  };
  oak_leaves: {
    persistent_bit: ByteTag<0 | 1>;
    update_bit: ByteTag<0 | 1>;
  };
  oak_log: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  oak_planks: {};
  oak_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  oak_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  oak_wood: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  observer: {
    "minecraft:facing_direction": ByteTag<0 | 0 | 0 | 0 | 0 | 0>;
    powered_bit: ByteTag<0 | 1>;
  };
  obsidian: {};
  ochre_froglight: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  orange_candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  orange_candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  orange_carpet: {};
  orange_concrete: {};
  orange_concrete_powder: {};
  orange_glazed_terracotta: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  orange_shulker_box: {};
  orange_stained_glass: {};
  orange_stained_glass_pane: {};
  orange_terracotta: {};
  orange_wool: {};
  oxidized_chiseled_copper: {};
  oxidized_copper: {};
  oxidized_copper_bulb: {
    lit: ByteTag<0 | 1>;
    powered_bit: ByteTag<0 | 1>;
  };
  oxidized_copper_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  oxidized_copper_grate: {};
  oxidized_copper_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  oxidized_cut_copper: {};
  oxidized_cut_copper_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  oxidized_cut_copper_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  oxidized_double_cut_copper_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  packed_ice: {};
  packed_mud: {};
  pearlescent_froglight: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  pink_candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  pink_candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  pink_carpet: {};
  pink_concrete: {};
  pink_concrete_powder: {};
  pink_glazed_terracotta: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  pink_petals: {
    growth: DoubleTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  pink_shulker_box: {};
  pink_stained_glass: {};
  pink_stained_glass_pane: {};
  pink_terracotta: {};
  pink_wool: {};
  piston: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  piston_arm_collision: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  pitcher_crop: {
    growth: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  pitcher_plant: {
    upper_block_bit: ByteTag<0 | 1>;
  };
  podzol: {};
  pointed_dripstone: {
    dripstone_thickness: ByteTag<0 | 0 | 0 | 0 | 0>;
    hanging: ByteTag<0 | 1>;
  };
  polished_andesite: {};
  polished_andesite_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  polished_basalt: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  polished_blackstone: {};
  polished_blackstone_brick_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  polished_blackstone_brick_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  polished_blackstone_brick_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  polished_blackstone_brick_wall: {
    wall_connection_type_east: ByteTag<0 | 0 | 0>;
    wall_connection_type_north: ByteTag<0 | 0 | 0>;
    wall_connection_type_south: ByteTag<0 | 0 | 0>;
    wall_connection_type_west: ByteTag<0 | 0 | 0>;
    wall_post_bit: ByteTag<0 | 1>;
  };
  polished_blackstone_bricks: {};
  polished_blackstone_button: {
    button_pressed_bit: IntTag<0 | 1>;
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  polished_blackstone_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  polished_blackstone_pressure_plate: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  polished_blackstone_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  polished_blackstone_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  polished_blackstone_wall: {
    wall_connection_type_east: ByteTag<0 | 0 | 0>;
    wall_connection_type_north: ByteTag<0 | 0 | 0>;
    wall_connection_type_south: ByteTag<0 | 0 | 0>;
    wall_connection_type_west: ByteTag<0 | 0 | 0>;
    wall_post_bit: ByteTag<0 | 1>;
  };
  polished_deepslate: {};
  polished_deepslate_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  polished_deepslate_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  polished_deepslate_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  polished_deepslate_wall: {
    wall_connection_type_east: ByteTag<0 | 0 | 0>;
    wall_connection_type_north: ByteTag<0 | 0 | 0>;
    wall_connection_type_south: ByteTag<0 | 0 | 0>;
    wall_connection_type_west: ByteTag<0 | 0 | 0>;
    wall_post_bit: ByteTag<0 | 1>;
  };
  polished_diorite: {};
  polished_diorite_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  polished_granite: {};
  polished_granite_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  polished_tuff: {};
  polished_tuff_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  polished_tuff_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  polished_tuff_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  polished_tuff_wall: {
    wall_connection_type_east: ByteTag<0 | 0 | 0>;
    wall_connection_type_north: ByteTag<0 | 0 | 0>;
    wall_connection_type_south: ByteTag<0 | 0 | 0>;
    wall_connection_type_west: ByteTag<0 | 0 | 0>;
    wall_post_bit: ByteTag<0 | 1>;
  };
  portal: {
    portal_axis: StringTag<"unknown" | "x" | "z">;
  };
  potatoes: {
    growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  };
  powder_snow: {};
  powered_comparator: {
    "minecraft:cardinal_direction": ByteTag<0 | 0 | 0 | 0>;
    output_lit_bit: ByteTag<0 | 1>;
    output_subtract_bit: ByteTag<0 | 1>;
  };
  powered_repeater: {
    "minecraft:cardinal_direction": IntTag<0 | 0 | 0 | 0>;
    repeater_delay: IntTag<0 | 1 | 2 | 3>;
  };
  prismarine: {
    prismarine_block_type: StringTag<"default" | "dark" | "bricks">;
  };
  prismarine_bricks_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  prismarine_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  pumpkin: {
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  pumpkin_stem: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
    growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  };
  purple_candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  purple_candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  purple_carpet: {};
  purple_concrete: {};
  purple_concrete_powder: {};
  purple_glazed_terracotta: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  purple_shulker_box: {};
  purple_stained_glass: {};
  purple_stained_glass_pane: {};
  purple_terracotta: {};
  purple_wool: {};
  purpur_block: {
    chisel_type: StringTag<"default" | "chiseled" | "lines" | "smooth">;
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  purpur_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  quartz_block: {
    chisel_type: StringTag<"default" | "chiseled" | "lines" | "smooth">;
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  quartz_bricks: {};
  quartz_ore: {};
  quartz_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  rail: {
    rail_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>;
  };
  raw_copper_block: {};
  raw_gold_block: {};
  raw_iron_block: {};
  red_candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  red_candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  red_carpet: {};
  red_concrete: {};
  red_concrete_powder: {};
  red_flower: {
    flower_type: StringTag<"poppy" | "orchid" | "allium" | "houstonia" | "tulip_red" | "tulip_orange" | "tulip_white" | "tulip_pink" | "oxeye" | "cornflower" | "lily_of_the_valley">;
  };
  red_glazed_terracotta: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  red_mushroom: {};
  red_mushroom_block: {
    huge_mushroom_bits: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  red_nether_brick: {};
  red_nether_brick_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  red_sandstone: {
    sand_stone_type: StringTag<"default" | "heiroglyphs" | "cut" | "smooth">;
  };
  red_sandstone_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  red_shulker_box: {};
  red_stained_glass: {};
  red_stained_glass_pane: {};
  red_terracotta: {};
  red_wool: {};
  redstone_block: {};
  redstone_lamp: {};
  redstone_ore: {};
  redstone_torch: {
    torch_facing_direction: StringTag<"unknown" | "west" | "east" | "north" | "south" | "top">;
  };
  redstone_wire: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  reeds: {
    age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  reinforced_deepslate: {};
  repeating_command_block: {
    conditional_bit: IntTag<0 | 1>;
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  reserved6: {};
  respawn_anchor: {
    respawn_anchor_charge: IntTag<0 | 1 | 2 | 3 | 4>;
  };
  sand: {
    sand_type: StringTag<"normal" | "red">;
  };
  sandstone: {
    sand_stone_type: StringTag<"default" | "heiroglyphs" | "cut" | "smooth">;
  };
  sandstone_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  sapling: {
    age_bit: DoubleTag<0 | 1>;
    sapling_type: StringTag<"oak" | "spruce" | "birch" | "jungle" | "acacia" | "dark_oak">;
  };
  scaffolding: {
    stability: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
    stability_check: ByteTag<0 | 1>;
  };
  sculk: {};
  sculk_catalyst: {
    bloom: ByteTag<0 | 1>;
  };
  sculk_sensor: {
    sculk_sensor_phase: IntTag<0 | 1 | 2>;
  };
  sculk_shrieker: {
    active: ByteTag<0 | 1>;
    can_summon: ByteTag<0 | 1>;
  };
  sculk_vein: {
    multi_face_direction_bits: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63>;
  };
  sea_lantern: {};
  sea_pickle: {
    cluster_count: ByteTag<0 | 1 | 2 | 3>;
    dead_bit: ByteTag<0 | 1>;
  };
  seagrass: {
    sea_grass_type: StringTag<"default" | "double_top" | "double_bot">;
  };
  shroomlight: {};
  silver_glazed_terracotta: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  skull: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  slime: {};
  small_amethyst_bud: {
    "minecraft:block_face": StringTag<"down" | "up" | "north" | "south" | "west" | "east">;
  };
  small_dripleaf_block: {
    "minecraft:cardinal_direction": ByteTag<0 | 0 | 0 | 0>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  smithing_table: {};
  smoker: {
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  smooth_basalt: {};
  smooth_quartz_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  smooth_red_sandstone_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  smooth_sandstone_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  smooth_stone: {};
  sniffer_egg: {
    cracked_state: StringTag<"no_cracks" | "cracked" | "max_cracked">;
  };
  snow: {};
  snow_layer: {
    covered_bit: IntTag<0 | 1>;
    height: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  };
  soul_campfire: {
    extinguished: DoubleTag<0 | 1>;
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  soul_fire: {
    age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  soul_lantern: {
    hanging: ByteTag<0 | 1>;
  };
  soul_sand: {};
  soul_soil: {};
  soul_torch: {
    torch_facing_direction: StringTag<"unknown" | "west" | "east" | "north" | "south" | "top">;
  };
  sponge: {
    sponge_type: StringTag<"dry" | "wet">;
  };
  spore_blossom: {};
  spruce_button: {
    button_pressed_bit: IntTag<0 | 1>;
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  spruce_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  spruce_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  spruce_fence: {};
  spruce_fence_gate: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    in_wall_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
  };
  spruce_hanging_sign: {
    attached_bit: ByteTag<0 | 1>;
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
    hanging: ByteTag<0 | 1>;
  };
  spruce_leaves: {
    persistent_bit: ByteTag<0 | 1>;
    update_bit: ByteTag<0 | 1>;
  };
  spruce_log: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  spruce_planks: {};
  spruce_pressure_plate: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  spruce_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  spruce_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  spruce_standing_sign: {
    ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  spruce_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  spruce_wall_sign: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  spruce_wood: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  standing_banner: {
    ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  standing_sign: {
    ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  sticky_piston: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  sticky_piston_arm_collision: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  stone: {};
  stone_block_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
    stone_slab_type: StringTag<"smooth_stone" | "sandstone" | "wood" | "cobblestone" | "brick" | "stone_brick" | "quartz" | "nether_brick">;
  };
  stone_block_slab2: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
    stone_slab_type_2: StringTag<"red_sandstone" | "purpur" | "prismarine_rough" | "prismarine_dark" | "prismarine_brick" | "mossy_cobblestone" | "smooth_sandstone" | "red_nether_brick">;
  };
  stone_block_slab3: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
    stone_slab_type_3: StringTag<"end_stone_brick" | "smooth_red_sandstone" | "polished_andesite" | "andesite" | "diorite" | "polished_diorite" | "granite" | "polished_granite">;
  };
  stone_block_slab4: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
    stone_slab_type_4: StringTag<"mossy_stone_brick" | "smooth_quartz" | "stone" | "cut_sandstone" | "cut_red_sandstone">;
  };
  stone_brick_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  stone_button: {
    button_pressed_bit: IntTag<0 | 1>;
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  stone_pressure_plate: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  stone_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  stonebrick: {
    stone_brick_type: StringTag<"default" | "mossy" | "cracked" | "chiseled" | "smooth">;
  };
  stonecutter: {};
  stonecutter_block: {
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  stripped_acacia_log: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_acacia_wood: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_bamboo_block: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_birch_log: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_birch_wood: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_cherry_log: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_cherry_wood: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_crimson_hyphae: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_crimson_stem: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_dark_oak_log: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_dark_oak_wood: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_jungle_log: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_jungle_wood: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_mangrove_log: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_mangrove_wood: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_oak_log: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_oak_wood: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_spruce_log: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_spruce_wood: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_warped_hyphae: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  stripped_warped_stem: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  structure_block: {
    structure_block_type: StringTag<"data" | "save" | "load" | "corner" | "invalid" | "export">;
  };
  structure_void: {
    structure_void_type: StringTag<"void" | "air">;
  };
  suspicious_gravel: {
    brushed_progress: ByteTag<0 | 1 | 2 | 3>;
    hanging: ByteTag<0 | 1>;
  };
  suspicious_sand: {
    brushed_progress: ByteTag<0 | 1 | 2 | 3>;
    hanging: ByteTag<0 | 1>;
  };
  sweet_berry_bush: {
    growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  };
  tallgrass: {
    tall_grass_type: StringTag<"default" | "tall" | "fern" | "snow">;
  };
  target: {};
  tinted_glass: {};
  tnt: {
    allow_underwater_bit: ByteTag<0 | 1>;
    explode_bit: ByteTag<0 | 1>;
  };
  torch: {
    torch_facing_direction: StringTag<"unknown" | "west" | "east" | "north" | "south" | "top">;
  };
  torchflower: {};
  torchflower_crop: {
    growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  };
  trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  trapped_chest: {
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
  };
  trial_spawner: {
    trial_spawner_state: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  trip_wire: {
    attached_bit: ByteTag<0 | 1>;
    disarmed_bit: ByteTag<0 | 1>;
    powered_bit: ByteTag<0 | 1>;
    suspended_bit: ByteTag<0 | 1>;
  };
  tripwire_hook: {
    attached_bit: ByteTag<0 | 1>;
    direction: ByteTag<0 | 1 | 2 | 3>;
    powered_bit: ByteTag<0 | 1>;
  };
  tube_coral: {};
  tuff: {};
  tuff_brick_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  tuff_brick_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  tuff_brick_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  tuff_brick_wall: {
    wall_connection_type_east: ByteTag<0 | 0 | 0>;
    wall_connection_type_north: ByteTag<0 | 0 | 0>;
    wall_connection_type_south: ByteTag<0 | 0 | 0>;
    wall_connection_type_west: ByteTag<0 | 0 | 0>;
    wall_post_bit: ByteTag<0 | 1>;
  };
  tuff_bricks: {};
  tuff_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  tuff_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  tuff_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  tuff_wall: {
    wall_connection_type_east: ByteTag<0 | 0 | 0>;
    wall_connection_type_north: ByteTag<0 | 0 | 0>;
    wall_connection_type_south: ByteTag<0 | 0 | 0>;
    wall_connection_type_west: ByteTag<0 | 0 | 0>;
    wall_post_bit: ByteTag<0 | 1>;
  };
  turtle_egg: {
    cracked_state: StringTag<"no_cracks" | "cracked" | "max_cracked">;
    turtle_egg_count: StringTag<"one_egg" | "two_egg" | "three_egg" | "four_egg">;
  };
  twisting_vines: {
    twisting_vines_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
  };
  underwater_torch: {
    torch_facing_direction: StringTag<"unknown" | "west" | "east" | "north" | "south" | "top">;
  };
  undyed_shulker_box: {};
  unknown: {};
  unlit_redstone_torch: {
    torch_facing_direction: StringTag<"unknown" | "west" | "east" | "north" | "south" | "top">;
  };
  unpowered_comparator: {
    "minecraft:cardinal_direction": ByteTag<0 | 0 | 0 | 0>;
    output_lit_bit: ByteTag<0 | 1>;
    output_subtract_bit: ByteTag<0 | 1>;
  };
  unpowered_repeater: {
    "minecraft:cardinal_direction": IntTag<0 | 0 | 0 | 0>;
    repeater_delay: IntTag<0 | 1 | 2 | 3>;
  };
  vault: {
    "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
    vault_state: StringTag<"inactive" | "active" | "unlocking" | "ejecting">;
  };
  verdant_froglight: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  vine: {
    vine_direction_bits: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  wall_banner: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  wall_sign: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  warped_button: {
    button_pressed_bit: IntTag<0 | 1>;
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  warped_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  warped_double_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  warped_fence: {};
  warped_fence_gate: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    in_wall_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
  };
  warped_fungus: {};
  warped_hanging_sign: {
    attached_bit: ByteTag<0 | 1>;
    facing_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5>;
    ground_sign_direction: ByteTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
    hanging: ByteTag<0 | 1>;
  };
  warped_hyphae: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  warped_nylium: {};
  warped_planks: {};
  warped_pressure_plate: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  warped_roots: {};
  warped_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  warped_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  warped_standing_sign: {
    ground_sign_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  warped_stem: {
    pillar_axis: StringTag<"y" | "x" | "z">;
  };
  warped_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  warped_wall_sign: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  warped_wart_block: {};
  water: {
    liquid_depth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  waterlily: {};
  waxed_chiseled_copper: {};
  waxed_copper: {};
  waxed_copper_bulb: {
    lit: ByteTag<0 | 1>;
    powered_bit: ByteTag<0 | 1>;
  };
  waxed_copper_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  waxed_copper_grate: {};
  waxed_copper_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  waxed_cut_copper: {};
  waxed_cut_copper_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  waxed_cut_copper_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  waxed_double_cut_copper_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  waxed_exposed_chiseled_copper: {};
  waxed_exposed_copper: {};
  waxed_exposed_copper_bulb: {
    lit: ByteTag<0 | 1>;
    powered_bit: ByteTag<0 | 1>;
  };
  waxed_exposed_copper_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  waxed_exposed_copper_grate: {};
  waxed_exposed_copper_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  waxed_exposed_cut_copper: {};
  waxed_exposed_cut_copper_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  waxed_exposed_cut_copper_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  waxed_exposed_double_cut_copper_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  waxed_oxidized_chiseled_copper: {};
  waxed_oxidized_copper: {};
  waxed_oxidized_copper_bulb: {
    lit: ByteTag<0 | 1>;
    powered_bit: ByteTag<0 | 1>;
  };
  waxed_oxidized_copper_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  waxed_oxidized_copper_grate: {};
  waxed_oxidized_copper_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  waxed_oxidized_cut_copper: {};
  waxed_oxidized_cut_copper_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  waxed_oxidized_cut_copper_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  waxed_oxidized_double_cut_copper_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  waxed_weathered_chiseled_copper: {};
  waxed_weathered_copper: {};
  waxed_weathered_copper_bulb: {
    lit: ByteTag<0 | 1>;
    powered_bit: ByteTag<0 | 1>;
  };
  waxed_weathered_copper_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  waxed_weathered_copper_grate: {};
  waxed_weathered_copper_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  waxed_weathered_cut_copper: {};
  waxed_weathered_cut_copper_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  waxed_weathered_cut_copper_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  waxed_weathered_double_cut_copper_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  weathered_chiseled_copper: {};
  weathered_copper: {};
  weathered_copper_bulb: {
    lit: ByteTag<0 | 1>;
    powered_bit: ByteTag<0 | 1>;
  };
  weathered_copper_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  weathered_copper_grate: {};
  weathered_copper_trapdoor: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    open_bit: ByteTag<0 | 1>;
    upside_down_bit: ByteTag<0 | 1>;
  };
  weathered_cut_copper: {};
  weathered_cut_copper_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  weathered_cut_copper_stairs: {
    upside_down_bit: IntTag<0 | 1>;
    weirdo_direction: IntTag<0 | 1 | 2 | 3>;
  };
  weathered_double_cut_copper_slab: {
    "minecraft:vertical_half": StringTag<"bottom" | "top">;
  };
  web: {};
  weeping_vines: {
    weeping_vines_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
  };
  wheat: {
    growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  };
  white_candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  white_candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  white_carpet: {};
  white_concrete: {};
  white_concrete_powder: {};
  white_glazed_terracotta: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  white_shulker_box: {};
  white_stained_glass: {};
  white_stained_glass_pane: {};
  white_terracotta: {};
  white_wool: {};
  wither_rose: {};
  wooden_button: {
    button_pressed_bit: IntTag<0 | 1>;
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  wooden_door: {
    direction: ByteTag<0 | 1 | 2 | 3>;
    door_hinge_bit: ByteTag<0 | 1>;
    open_bit: ByteTag<0 | 1>;
    upper_block_bit: ByteTag<0 | 1>;
  };
  wooden_pressure_plate: {
    redstone_signal: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
  };
  yellow_candle: {
    candles: ByteTag<0 | 1 | 2 | 3>;
    lit: ByteTag<0 | 1>;
  };
  yellow_candle_cake: {
    lit: ByteTag<0 | 1>;
  };
  yellow_carpet: {};
  yellow_concrete: {};
  yellow_concrete_powder: {};
  yellow_flower: {};
  yellow_glazed_terracotta: {
    facing_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
  };
  yellow_shulker_box: {};
  yellow_stained_glass: {};
  yellow_stained_glass_pane: {};
  yellow_terracotta: {};
  yellow_wool: {};
}

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