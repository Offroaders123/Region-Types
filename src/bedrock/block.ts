import type { BooleanTag, IntTag } from "nbtify";

export interface Block {
  name: `${BlockResource}`;
  states: BlockState;
  version: IntTag;
}

// These should eventually come from NBTify itself, once they're generic there
type StringTag<T extends string = string> = `${T}`;

export type BlockState<K extends keyof BlockStateNameMap = keyof BlockStateNameMap> = BlockStateNameMap[K];

export interface BlockStateNameMap {
  acacia_button: AcaciaButton;
  acacia_door: AcaciaDoor;
  acacia_double_slab: AcaciaDoubleSlab;
  acacia_fence: AcaciaFence;
  acacia_fence_gate: AcaciaFenceGate;
  acacia_hanging_sign: AcaciaHangingSign;
  acacia_leaves: AcaciaLeaves;
  acacia_log: AcaciaLog;
  acacia_planks: AcaciaPlanks;
  acacia_pressure_plate: AcaciaPressurePlate;
  acacia_slab: AcaciaSlab;
  acacia_stairs: AcaciaStairs;
  acacia_standing_sign: AcaciaStandingSign;
  acacia_trapdoor: AcaciaTrapdoor;
  acacia_wall_sign: AcaciaWallSign;
  acacia_wood: AcaciaWood;
  activator_rail: ActivatorRail;
  air: Air;
  allow: Allow;
  amethyst_block: AmethystBlock;
  amethyst_cluster: AmethystCluster;
  ancient_debris: AncientDebris;
  andesite: Andesite;
  andesite_stairs: AndesiteStairs;
  anvil: Anvil;
  azalea: Azalea;
  azalea_leaves: AzaleaLeaves;
  azalea_leaves_flowered: AzaleaLeavesFlowered;
  bamboo: Bamboo;
  bamboo_block: BambooBlock;
  bamboo_button: BambooButton;
  bamboo_door: BambooDoor;
  bamboo_double_slab: BambooDoubleSlab;
  bamboo_fence: BambooFence;
  bamboo_fence_gate: BambooFenceGate;
  bamboo_hanging_sign: BambooHangingSign;
  bamboo_mosaic: BambooMosaic;
  bamboo_mosaic_double_slab: BambooMosaicDoubleSlab;
  bamboo_mosaic_slab: BambooMosaicSlab;
  bamboo_mosaic_stairs: BambooMosaicStairs;
  bamboo_planks: BambooPlanks;
  bamboo_pressure_plate: BambooPressurePlate;
  bamboo_sapling: BambooSapling;
  bamboo_slab: BambooSlab;
  bamboo_stairs: BambooStairs;
  bamboo_standing_sign: BambooStandingSign;
  bamboo_trapdoor: BambooTrapdoor;
  bamboo_wall_sign: BambooWallSign;
  barrel: Barrel;
  barrier: Barrier;
  basalt: Basalt;
  beacon: Beacon;
  bed: Bed;
  bedrock: Bedrock;
  bee_nest: BeeNest;
  beehive: Beehive;
  beetroot: Beetroot;
  bell: Bell;
  big_dripleaf: BigDripleaf;
  birch_button: BirchButton;
  birch_door: BirchDoor;
  birch_double_slab: BirchDoubleSlab;
  birch_fence: BirchFence;
  birch_fence_gate: BirchFenceGate;
  birch_hanging_sign: BirchHangingSign;
  birch_leaves: BirchLeaves;
  birch_log: BirchLog;
  birch_planks: BirchPlanks;
  birch_pressure_plate: BirchPressurePlate;
  birch_slab: BirchSlab;
  birch_stairs: BirchStairs;
  birch_standing_sign: BirchStandingSign;
  birch_trapdoor: BirchTrapdoor;
  birch_wall_sign: BirchWallSign;
  birch_wood: BirchWood;
  black_candle: BlackCandle;
  black_candle_cake: BlackCandleCake;
  black_carpet: BlackCarpet;
  black_concrete: BlackConcrete;
  black_concrete_powder: BlackConcretePowder;
  black_glazed_terracotta: BlackGlazedTerracotta;
  black_shulker_box: BlackShulkerBox;
  black_stained_glass: BlackStainedGlass;
  black_stained_glass_pane: BlackStainedGlassPane;
  black_terracotta: BlackTerracotta;
  black_wool: BlackWool;
  blackstone: Blackstone;
  blackstone_double_slab: BlackstoneDoubleSlab;
  blackstone_slab: BlackstoneSlab;
  blackstone_stairs: BlackstoneStairs;
  blackstone_wall: BlackstoneWall;
  blast_furnace: BlastFurnace;
  blue_candle: BlueCandle;
  blue_candle_cake: BlueCandleCake;
  blue_carpet: BlueCarpet;
  blue_concrete: BlueConcrete;
  blue_concrete_powder: BlueConcretePowder;
  blue_glazed_terracotta: BlueGlazedTerracotta;
  blue_ice: BlueIce;
  blue_shulker_box: BlueShulkerBox;
  blue_stained_glass: BlueStainedGlass;
  blue_stained_glass_pane: BlueStainedGlassPane;
  blue_terracotta: BlueTerracotta;
  blue_wool: BlueWool;
  bone_block: BoneBlock;
  bookshelf: Bookshelf;
  border_block: BorderBlock;
  brain_coral: BrainCoral;
  brewing_stand: BrewingStand;
  brick_block: BrickBlock;
  brick_stairs: BrickStairs;
  brown_candle: BrownCandle;
  brown_candle_cake: BrownCandleCake;
  brown_carpet: BrownCarpet;
  brown_concrete: BrownConcrete;
  brown_concrete_powder: BrownConcretePowder;
  brown_glazed_terracotta: BrownGlazedTerracotta;
  brown_mushroom: BrownMushroom;
  brown_mushroom_block: BrownMushroomBlock;
  brown_shulker_box: BrownShulkerBox;
  brown_stained_glass: BrownStainedGlass;
  brown_stained_glass_pane: BrownStainedGlassPane;
  brown_terracotta: BrownTerracotta;
  brown_wool: BrownWool;
  bubble_column: BubbleColumn;
  bubble_coral: BubbleCoral;
  budding_amethyst: BuddingAmethyst;
  cactus: Cactus;
  cake: Cake;
  calcite: Calcite;
  calibrated_sculk_sensor: CalibratedSculkSensor;
  camera: Camera;
  campfire: Campfire;
  candle: Candle;
  candle_cake: CandleCake;
  carrots: Carrots;
  cartography_table: CartographyTable;
  carved_pumpkin: CarvedPumpkin;
  cauldron: Cauldron;
  cave_vines: CaveVines;
  cave_vines_body_with_berries: CaveVinesBodyWithBerries;
  cave_vines_head_with_berries: CaveVinesHeadWithBerries;
  chain: Chain;
  chain_command_block: ChainCommandBlock;
  chemical_heat: ChemicalHeat;
  chemistry_table: ChemistryTable;
  cherry_button: CherryButton;
  cherry_door: CherryDoor;
  cherry_double_slab: CherryDoubleSlab;
  cherry_fence: CherryFence;
  cherry_fence_gate: CherryFenceGate;
  cherry_hanging_sign: CherryHangingSign;
  cherry_leaves: CherryLeaves;
  cherry_log: CherryLog;
  cherry_planks: CherryPlanks;
  cherry_pressure_plate: CherryPressurePlate;
  cherry_sapling: CherrySapling;
  cherry_slab: CherrySlab;
  cherry_stairs: CherryStairs;
  cherry_standing_sign: CherryStandingSign;
  cherry_trapdoor: CherryTrapdoor;
  cherry_wall_sign: CherryWallSign;
  cherry_wood: CherryWood;
  chest: Chest;
  chiseled_bookshelf: ChiseledBookshelf;
  chiseled_copper: ChiseledCopper;
  chiseled_deepslate: ChiseledDeepslate;
  chiseled_nether_bricks: ChiseledNetherBricks;
  chiseled_polished_blackstone: ChiseledPolishedBlackstone;
  chiseled_tuff: ChiseledTuff;
  chiseled_tuff_bricks: ChiseledTuffBricks;
  chorus_flower: ChorusFlower;
  chorus_plant: ChorusPlant;
  clay: Clay;
  client_request_placeholder_block: ClientRequestPlaceholderBlock;
  coal_block: CoalBlock;
  coal_ore: CoalOre;
  cobbled_deepslate: CobbledDeepslate;
  cobbled_deepslate_double_slab: CobbledDeepslateDoubleSlab;
  cobbled_deepslate_slab: CobbledDeepslateSlab;
  cobbled_deepslate_stairs: CobbledDeepslateStairs;
  cobbled_deepslate_wall: CobbledDeepslateWall;
  cobblestone: Cobblestone;
  cobblestone_wall: CobblestoneWall;
  cocoa: Cocoa;
  colored_torch_bp: ColoredTorchBp;
  colored_torch_rg: ColoredTorchRg;
  command_block: CommandBlock;
  composter: Composter;
  conduit: Conduit;
  copper_block: CopperBlock;
  copper_bulb: CopperBulb;
  copper_door: CopperDoor;
  copper_grate: CopperGrate;
  copper_ore: CopperOre;
  copper_trapdoor: CopperTrapdoor;
  coral_block: CoralBlock;
  coral_fan: CoralFan;
  coral_fan_dead: CoralFanDead;
  coral_fan_hang: CoralFanHang;
  coral_fan_hang2: CoralFanHang2;
  coral_fan_hang3: CoralFanHang3;
  cracked_deepslate_bricks: CrackedDeepslateBricks;
  cracked_deepslate_tiles: CrackedDeepslateTiles;
  cracked_nether_bricks: CrackedNetherBricks;
  cracked_polished_blackstone_bricks: CrackedPolishedBlackstoneBricks;
  crafter: Crafter;
  crafting_table: CraftingTable;
  crimson_button: CrimsonButton;
  crimson_door: CrimsonDoor;
  crimson_double_slab: CrimsonDoubleSlab;
  crimson_fence: CrimsonFence;
  crimson_fence_gate: CrimsonFenceGate;
  crimson_fungus: CrimsonFungus;
  crimson_hanging_sign: CrimsonHangingSign;
  crimson_hyphae: CrimsonHyphae;
  crimson_nylium: CrimsonNylium;
  crimson_planks: CrimsonPlanks;
  crimson_pressure_plate: CrimsonPressurePlate;
  crimson_roots: CrimsonRoots;
  crimson_slab: CrimsonSlab;
  crimson_stairs: CrimsonStairs;
  crimson_standing_sign: CrimsonStandingSign;
  crimson_stem: CrimsonStem;
  crimson_trapdoor: CrimsonTrapdoor;
  crimson_wall_sign: CrimsonWallSign;
  crying_obsidian: CryingObsidian;
  cut_copper: CutCopper;
  cut_copper_slab: CutCopperSlab;
  cut_copper_stairs: CutCopperStairs;
  cyan_candle: CyanCandle;
  cyan_candle_cake: CyanCandleCake;
  cyan_carpet: CyanCarpet;
  cyan_concrete: CyanConcrete;
  cyan_concrete_powder: CyanConcretePowder;
  cyan_glazed_terracotta: CyanGlazedTerracotta;
  cyan_shulker_box: CyanShulkerBox;
  cyan_stained_glass: CyanStainedGlass;
  cyan_stained_glass_pane: CyanStainedGlassPane;
  cyan_terracotta: CyanTerracotta;
  cyan_wool: CyanWool;
  dark_oak_button: DarkOakButton;
  dark_oak_door: DarkOakDoor;
  dark_oak_double_slab: DarkOakDoubleSlab;
  dark_oak_fence: DarkOakFence;
  dark_oak_fence_gate: DarkOakFenceGate;
  dark_oak_hanging_sign: DarkOakHangingSign;
  dark_oak_leaves: DarkOakLeaves;
  dark_oak_log: DarkOakLog;
  dark_oak_planks: DarkOakPlanks;
  dark_oak_pressure_plate: DarkOakPressurePlate;
  dark_oak_slab: DarkOakSlab;
  dark_oak_stairs: DarkOakStairs;
  dark_oak_trapdoor: DarkOakTrapdoor;
  dark_oak_wood: DarkOakWood;
  dark_prismarine_stairs: DarkPrismarineStairs;
  darkoak_standing_sign: DarkOakStandingSign;
  darkoak_wall_sign: DarkOakWallSign;
  daylight_detector: DaylightDetector;
  daylight_detector_inverted: DaylightDetectorInverted;
  dead_brain_coral: DeadBrainCoral;
  dead_bubble_coral: DeadBubbleCoral;
  dead_fire_coral: DeadFireCoral;
  dead_horn_coral: DeadHornCoral;
  dead_tube_coral: DeadTubeCoral;
  deadbush: DeadBush;
  decorated_pot: DecoratedPot;
  deepslate: Deepslate;
  deepslate_brick_double_slab: DeepslateBrickDoubleSlab;
  deepslate_brick_slab: DeepslateBrickSlab;
  deepslate_brick_stairs: DeepslateBrickStairs;
  deepslate_brick_wall: DeepslateBrickWall;
  deepslate_bricks: DeepslateBricks;
  deepslate_coal_ore: DeepslateCoalOre;
  deepslate_copper_ore: DeepslateCopperOre;
  deepslate_diamond_ore: DeepslateDiamondOre;
  deepslate_emerald_ore: DeepslateEmeraldOre;
  deepslate_gold_ore: DeepslateGoldOre;
  deepslate_iron_ore: DeepslateIronOre;
  deepslate_lapis_ore: DeepslateLapisOre;
  deepslate_redstone_ore: DeepslateRedstoneOre;
  deepslate_tile_double_slab: DeepslateTileDoubleSlab;
  deepslate_tile_slab: DeepslateTileSlab;
  deepslate_tile_stairs: DeepslateTileStairs;
  deepslate_tile_wall: DeepslateTileWall;
  deepslate_tiles: DeepslateTiles;
  deny: Deny;
  detector_rail: DetectorRail;
  diamond_block: DiamondBlock;
  diamond_ore: DiamondOre;
  diorite: Diorite;
  diorite_stairs: DioriteStairs;
  dirt: Dirt;
  dirt_with_roots: DirtWithRoots;
  dispenser: Dispenser;
  double_cut_copper_slab: DoubleCutCopperSlab;
  double_plant: DoublePlant;
  double_stone_block_slab: DoubleStoneBlockSlab;
  double_stone_block_slab2: DoubleStoneBlockSlab2;
  double_stone_block_slab3: DoubleStoneBlockSlab3;
  double_stone_block_slab4: DoubleStoneBlockSlab4;
  dragon_egg: DragonEgg;
  dried_kelp_block: DriedKelpBlock;
  dripstone_block: DripstoneBlock;
  dropper: Dropper;
  element_0: Element0;
  element_1: Element1;
  element_10: Element10;
  element_100: Element100;
  element_101: Element101;
  element_102: Element102;
  element_103: Element103;
  element_104: Element104;
  element_105: Element105;
  element_106: Element106;
  element_107: Element107;
  element_108: Element108;
  element_109: Element109;
  element_11: Element11;
  element_110: Element110;
  element_111: Element111;
  element_112: Element112;
  element_113: Element113;
  element_114: Element114;
  element_115: Element115;
  element_116: Element116;
  element_117: Element117;
  element_118: Element118;
  element_12: Element12;
  element_13: Element13;
  element_14: Element14;
  element_15: Element15;
  element_16: Element16;
  element_17: Element17;
  element_18: Element18;
  element_19: Element19;
  element_2: Element2;
  element_20: Element20;
  element_21: Element21;
  element_22: Element22;
  element_23: Element23;
  element_24: Element24;
  element_25: Element25;
  element_26: Element26;
  element_27: Element27;
  element_28: Element28;
  element_29: Element29;
  element_3: Element3;
  element_30: Element30;
  element_31: Element31;
  element_32: Element32;
  element_33: Element33;
  element_34: Element34;
  element_35: Element35;
  element_36: Element36;
  element_37: Element37;
  element_38: Element38;
  element_39: Element39;
  element_4: Element4;
  element_40: Element40;
  element_41: Element41;
  element_42: Element42;
  element_43: Element43;
  element_44: Element44;
  element_45: Element45;
  element_46: Element46;
  element_47: Element47;
  element_48: Element48;
  element_49: Element49;
  element_5: Element5;
  element_50: Element50;
  element_51: Element51;
  element_52: Element52;
  element_53: Element53;
  element_54: Element54;
  element_55: Element55;
  element_56: Element56;
  element_57: Element57;
  element_58: Element58;
  element_59: Element59;
  element_6: Element6;
  element_60: Element60;
  element_61: Element61;
  element_62: Element62;
  element_63: Element63;
  element_64: Element64;
  element_65: Element65;
  element_66: Element66;
  element_67: Element67;
  element_68: Element68;
  element_69: Element69;
  element_7: Element7;
  element_70: Element70;
  element_71: Element71;
  element_72: Element72;
  element_73: Element73;
  element_74: Element74;
  element_75: Element75;
  element_76: Element76;
  element_77: Element77;
  element_78: Element78;
  element_79: Element79;
  element_8: Element8;
  element_80: Element80;
  element_81: Element81;
  element_82: Element82;
  element_83: Element83;
  element_84: Element84;
  element_85: Element85;
  element_86: Element86;
  element_87: Element87;
  element_88: Element88;
  element_89: Element89;
  element_9: Element9;
  element_90: Element90;
  element_91: Element91;
  element_92: Element92;
  element_93: Element93;
  element_94: Element94;
  element_95: Element95;
  element_96: Element96;
  element_97: Element97;
  element_98: Element98;
  element_99: Element99;
  emerald_block: EmeraldBlock;
  emerald_ore: EmeraldOre;
  enchanting_table: EnchantingTable;
  end_brick_stairs: EndBrickStairs;
  end_bricks: EndBricks;
  end_gateway: EndGateway;
  end_portal: EndPortal;
  end_portal_frame: EndPortalFrame;
  end_rod: EndRod;
  end_stone: EndStone;
  ender_chest: EnderChest;
  exposed_chiseled_copper: ExposedChiseledCopper;
  exposed_copper: ExposedCopper;
  exposed_copper_bulb: ExposedCopperBulb;
  exposed_copper_door: ExposedCopperDoor;
  exposed_copper_grate: ExposedCopperGrate;
  exposed_copper_trapdoor: ExposedCopperTrapdoor;
  exposed_cut_copper: ExposedCutCopper;
  exposed_cut_copper_slab: ExposedCutCopperSlab;
  exposed_cut_copper_stairs: ExposedCutCopperStairs;
  exposed_double_cut_copper_slab: ExposedDoubleCutCopperSlab;
  farmland: Farmland;
  fence_gate: FenceGate;
  fire: Fire;
  fire_coral: FireCoral;
  fletching_table: FletchingTable;
  flower_pot: FlowerPot;
  flowering_azalea: FloweringAzalea;
  flowing_lava: FlowingLava;
  flowing_water: FlowingWater;
  frame: Frame;
  frog_spawn: FrogSpawn;
  frosted_ice: FrostedIce;
  furnace: Furnace;
  gilded_blackstone: GildedBlackstone;
  glass: Glass;
  glass_pane: GlassPane;
  glow_frame: GlowFrame;
  glow_lichen: GlowLichen;
  glowingobsidian: GlowingObsidian;
  glowstone: Glowstone;
  gold_block: GoldBlock;
  gold_ore: GoldOre;
  golden_rail: GoldenRail;
  granite: Granite;
  granite_stairs: GraniteStairs;
  grass_block: GrassBlock;
  grass_path: GrassPath;
  gravel: Gravel;
  gray_candle: GrayCandle;
  gray_candle_cake: GrayCandleCake;
  gray_carpet: GrayCarpet;
  gray_concrete: GrayConcrete;
  gray_concrete_powder: GrayConcretePowder;
  gray_glazed_terracotta: GrayGlazedTerracotta;
  gray_shulker_box: GrayShulkerBox;
  gray_stained_glass: GrayStainedGlass;
  gray_stained_glass_pane: GrayStainedGlassPane;
  gray_terracotta: GrayTerracotta;
  gray_wool: GrayWool;
  green_candle: GreenCandle;
  green_candle_cake: GreenCandleCake;
  green_carpet: GreenCarpet;
  green_concrete: GreenConcrete;
  green_concrete_powder: GreenConcretePowder;
  green_glazed_terracotta: GreenGlazedTerracotta;
  green_shulker_box: GreenShulkerBox;
  green_stained_glass: GreenStainedGlass;
  green_stained_glass_pane: GreenStainedGlassPane;
  green_terracotta: GreenTerracotta;
  green_wool: GreenWool;
  grindstone: Grindstone;
  hanging_roots: HangingRoots;
  hard_black_stained_glass: HardBlackStainedGlass;
  hard_black_stained_glass_pane: HardBlackStainedGlassPane;
  hard_blue_stained_glass: HardBlueStainedGlass;
  hard_blue_stained_glass_pane: HardBlueStainedGlassPane;
  hard_brown_stained_glass: HardBrownStainedGlass;
  hard_brown_stained_glass_pane: HardBrownStainedGlassPane;
  hard_cyan_stained_glass: HardCyanStainedGlass;
  hard_cyan_stained_glass_pane: HardCyanStainedGlassPane;
  hard_glass: HardGlass;
  hard_glass_pane: HardGlassPane;
  hard_gray_stained_glass: HardGrayStainedGlass;
  hard_gray_stained_glass_pane: HardGrayStainedGlassPane;
  hard_green_stained_glass: HardGreenStainedGlass;
  hard_green_stained_glass_pane: HardGreenStainedGlassPane;
  hard_light_blue_stained_glass: HardLightBlueStainedGlass;
  hard_light_blue_stained_glass_pane: HardLightBlueStainedGlassPane;
  hard_light_gray_stained_glass: HardLightGrayStainedGlass;
  hard_light_gray_stained_glass_pane: HardLightGrayStainedGlassPane;
  hard_lime_stained_glass: HardLimeStainedGlass;
  hard_lime_stained_glass_pane: HardLimeStainedGlassPane;
  hard_magenta_stained_glass: HardMagentaStainedGlass;
  hard_magenta_stained_glass_pane: HardMagentaStainedGlassPane;
  hard_orange_stained_glass: HardOrangeStainedGlass;
  hard_orange_stained_glass_pane: HardOrangeStainedGlassPane;
  hard_pink_stained_glass: HardPinkStainedGlass;
  hard_pink_stained_glass_pane: HardPinkStainedGlassPane;
  hard_purple_stained_glass: HardPurpleStainedGlass;
  hard_purple_stained_glass_pane: HardPurpleStainedGlassPane;
  hard_red_stained_glass: HardRedStainedGlass;
  hard_red_stained_glass_pane: HardRedStainedGlassPane;
  hard_white_stained_glass: HardWhiteStainedGlass;
  hard_white_stained_glass_pane: HardWhiteStainedGlassPane;
  hard_yellow_stained_glass: HardYellowStainedGlass;
  hard_yellow_stained_glass_pane: HardYellowStainedGlassPane;
  hardened_clay: HardenedClay;
  hay_block: HayBlock;
  heavy_weighted_pressure_plate: HeavyWeightedPressurePlate;
  honey_block: HoneyBlock;
  honeycomb_block: HoneycombBlock;
  hopper: Hopper;
  horn_coral: HornCoral;
  ice: Ice;
  infested_deepslate: InfestedDeepslate;
  info_update: InfoUpdate;
  info_update2: InfoUpdate2;
  invisible_bedrock: InvisibleBedrock;
  iron_bars: IronBars;
  iron_block: IronBlock;
  iron_door: IronDoor;
  iron_ore: IronOre;
  iron_trapdoor: IronTrapdoor;
  jigsaw: Jigsaw;
  jukebox: Jukebox;
  jungle_button: JungleButton;
  jungle_door: JungleDoor;
  jungle_double_slab: JungleDoubleSlab;
  jungle_fence: JungleFence;
  jungle_fence_gate: JungleFenceGate;
  jungle_hanging_sign: JungleHangingSign;
  jungle_leaves: JungleLeaves;
  jungle_log: JungleLog;
  jungle_planks: JunglePlanks;
  jungle_pressure_plate: JunglePressurePlate;
  jungle_slab: JungleSlab;
  jungle_stairs: JungleStairs;
  jungle_standing_sign: JungleStandingSign;
  jungle_trapdoor: JungleTrapdoor;
  jungle_wall_sign: JungleWallSign;
  jungle_wood: JungleWood;
  kelp: Kelp;
  ladder: Ladder;
  lantern: Lantern;
  lapis_block: LapisBlock;
  lapis_ore: LapisOre;
  large_amethyst_bud: LargeAmethystBud;
  lava: Lava;
  lectern: Lectern;
  lever: Lever;
  light_block: LightBlock;
  light_blue_candle: LightBlueCandle;
  light_blue_candle_cake: LightBlueCandleCake;
  light_blue_carpet: LightBlueCarpet;
  light_blue_concrete: LightBlueConcrete;
  light_blue_concrete_powder: LightBlueConcretePowder;
  light_blue_glazed_terracotta: LightBlueGlazedTerracotta;
  light_blue_shulker_box: LightBlueShulkerBox;
  light_blue_stained_glass: LightBlueStainedGlass;
  light_blue_stained_glass_pane: LightBlueStainedGlassPane;
  light_blue_terracotta: LightBlueTerracotta;
  light_blue_wool: LightBlueWool;
  light_gray_candle: LightGrayCandle;
  light_gray_candle_cake: LightGrayCandleCake;
  light_gray_carpet: LightGrayCarpet;
  light_gray_concrete: LightGrayConcrete;
  light_gray_concrete_powder: LightGrayConcretePowder;
  light_gray_shulker_box: LightGrayShulkerBox;
  light_gray_stained_glass: LightGrayStainedGlass;
  light_gray_stained_glass_pane: LightGrayStainedGlassPane;
  light_gray_terracotta: LightGrayTerracotta;
  light_gray_wool: LightGrayWool;
  light_weighted_pressure_plate: LightWeightedPressurePlate;
  lightning_rod: LightningRod;
  lime_candle: LimeCandle;
  lime_candle_cake: LimeCandleCake;
  lime_carpet: LimeCarpet;
  lime_concrete: LimeConcrete;
  lime_concrete_powder: LimeConcretePowder;
  lime_glazed_terracotta: LimeGlazedTerracotta;
  lime_shulker_box: LimeShulkerBox;
  lime_stained_glass: LimeStainedGlass;
  lime_stained_glass_pane: LimeStainedGlassPane;
  lime_terracotta: LimeTerracotta;
  lime_wool: LimeWool;
  lit_blast_furnace: LitBlastFurnace;
  lit_deepslate_redstone_ore: LitDeepslateRedstoneOre;
  lit_furnace: LitFurnace;
  lit_pumpkin: LitPumpkin;
  lit_redstone_lamp: LitRedstoneLamp;
  lit_redstone_ore: LitRedstoneOre;
  lit_smoker: LitSmoker;
  lodestone: Lodestone;
  loom: Loom;
  magenta_candle: MagentaCandle;
  magenta_candle_cake: MagentaCandleCake;
  magenta_carpet: MagentaCarpet;
  magenta_concrete: MagentaConcrete;
  magenta_concrete_powder: MagentaConcretePowder;
  magenta_glazed_terracotta: MagentaGlazedTerracotta;
  magenta_shulker_box: MagentaShulkerBox;
  magenta_stained_glass: MagentaStainedGlass;
  magenta_stained_glass_pane: MagentaStainedGlassPane;
  magenta_terracotta: MagentaTerracotta;
  magenta_wool: MagentaWool;
  magma: Magma;
  mangrove_button: MangroveButton;
  mangrove_door: MangroveDoor;
  mangrove_double_slab: MangroveDoubleSlab;
  mangrove_fence: MangroveFence;
  mangrove_fence_gate: MangroveFenceGate;
  mangrove_hanging_sign: MangroveHangingSign;
  mangrove_leaves: MangroveLeaves;
  mangrove_log: MangroveLog;
  mangrove_planks: MangrovePlanks;
  mangrove_pressure_plate: MangrovePressurePlate;
  mangrove_propagule: MangrovePropagule;
  mangrove_roots: MangroveRoots;
  mangrove_slab: MangroveSlab;
  mangrove_stairs: MangroveStairs;
  mangrove_standing_sign: MangroveStandingSign;
  mangrove_trapdoor: MangroveTrapdoor;
  mangrove_wall_sign: MangroveWallSign;
  mangrove_wood: MangroveWood;
  medium_amethyst_bud: MediumAmethystBud;
  melon_block: MelonBlock;
  melon_stem: MelonStem;
  mob_spawner: MobSpawner;
  monster_egg: MonsterEgg;
  moss_block: MossBlock;
  moss_carpet: MossCarpet;
  mossy_cobblestone: MossyCobblestone;
  mossy_cobblestone_stairs: MossyCobblestoneStairs;
  mossy_stone_brick_stairs: MossyStoneBrickStairs;
  moving_block: MovingBlock;
  mud: Mud;
  mud_brick_double_slab: MudBrickDoubleSlab;
  mud_brick_slab: MudBrickSlab;
  mud_brick_stairs: MudBrickStairs;
  mud_brick_wall: MudBrickWall;
  mud_bricks: MudBricks;
  muddy_mangrove_roots: MuddyMangroveRoots;
  mycelium: Mycelium;
  nether_brick: NetherBrick;
  nether_brick_fence: NetherBrickFence;
  nether_brick_stairs: NetherBrickStairs;
  nether_gold_ore: NetherGoldOre;
  nether_sprouts: NetherSprouts;
  nether_wart: NetherWart;
  nether_wart_block: NetherWartBlock;
  netherite_block: NetheriteBlock;
  netherrack: Netherrack;
  netherreactor: NetherReactorCore;
  normal_stone_stairs: NormalStoneStairs;
  noteblock: NoteBlock;
  oak_double_slab: OakDoubleSlab;
  oak_fence: OakFence;
  oak_hanging_sign: OakHangingSign;
  oak_leaves: OakLeaves;
  oak_log: OakLog;
  oak_planks: OakPlanks;
  oak_slab: OakSlab;
  oak_stairs: OakStairs;
  oak_wood: OakWood;
  observer: Observer;
  obsidian: Obsidian;
  ochre_froglight: OchreFroglight;
  orange_candle: OrangeCandle;
  orange_candle_cake: OrangeCandleCake;
  orange_carpet: OrangeCarpet;
  orange_concrete: OrangeConcrete;
  orange_concrete_powder: OrangeConcretePowder;
  orange_glazed_terracotta: OrangeGlazedTerracotta;
  orange_shulker_box: OrangeShulkerBox;
  orange_stained_glass: OrangeStainedGlass;
  orange_stained_glass_pane: OrangeStainedGlassPane;
  orange_terracotta: OrangeTerracotta;
  orange_wool: OrangeWool;
  oxidized_chiseled_copper: OxidizedChiseledCopper;
  oxidized_copper: OxidizedCopper;
  oxidized_copper_bulb: OxidizedCopperBulb;
  oxidized_copper_door: OxidizedCopperDoor;
  oxidized_copper_grate: OxidizedCopperGrate;
  oxidized_copper_trapdoor: OxidizedCopperTrapdoor;
  oxidized_cut_copper: OxidizedCutCopper;
  oxidized_cut_copper_slab: OxidizedCutCopperSlab;
  oxidized_cut_copper_stairs: OxidizedCutCopperStairs;
  oxidized_double_cut_copper_slab: OxidizedDoubleCutCopperSlab;
  packed_ice: PackedIce;
  packed_mud: PackedMud;
  pearlescent_froglight: PearlescentFroglight;
  pink_candle: PinkCandle;
  pink_candle_cake: PinkCandleCake;
  pink_carpet: PinkCarpet;
  pink_concrete: PinkConcrete;
  pink_concrete_powder: PinkConcretePowder;
  pink_glazed_terracotta: PinkGlazedTerracotta;
  pink_petals: PinkPetals;
  pink_shulker_box: PinkShulkerBox;
  pink_stained_glass: PinkStainedGlass;
  pink_stained_glass_pane: PinkStainedGlassPane;
  pink_terracotta: PinkTerracotta;
  pink_wool: PinkWool;
  piston: Piston;
  piston_arm_collision: PistonArmCollision;
  pitcher_crop: PitcherCrop;
  pitcher_plant: PitcherPlant;
  podzol: Podzol;
  pointed_dripstone: PointedDripstone;
  polished_andesite: PolishedAndesite;
  polished_andesite_stairs: PolishedAndesiteStairs;
  polished_basalt: PolishedBasalt;
  polished_blackstone: PolishedBlackstone;
  polished_blackstone_brick_double_slab: PolishedBlackstoneBrickDoubleSlab;
  polished_blackstone_brick_slab: PolishedBlackstoneBrickSlab;
  polished_blackstone_brick_stairs: PolishedBlackstoneBrickStairs;
  polished_blackstone_brick_wall: PolishedBlackstoneBrickWall;
  polished_blackstone_bricks: PolishedBlackstoneBricks;
  polished_blackstone_button: PolishedBlackstoneButton;
  polished_blackstone_double_slab: PolishedBlackstoneDoubleSlab;
  polished_blackstone_pressure_plate: PolishedBlackstonePressurePlate;
  polished_blackstone_slab: PolishedBlackstoneSlab;
  polished_blackstone_stairs: PolishedBlackstoneStairs;
  polished_blackstone_wall: PolishedBlackstoneWall;
  polished_deepslate: PolishedDeepslate;
  polished_deepslate_double_slab: PolishedDeepslateDoubleSlab;
  polished_deepslate_slab: PolishedDeepslateSlab;
  polished_deepslate_stairs: PolishedDeepslateStairs;
  polished_deepslate_wall: PolishedDeepslateWall;
  polished_diorite: PolishedDiorite;
  polished_diorite_stairs: PolishedDioriteStairs;
  polished_granite: PolishedGranite;
  polished_granite_stairs: PolishedGraniteStairs;
  polished_tuff: PolishedTuff;
  polished_tuff_double_slab: PolishedTuffDoubleSlab;
  polished_tuff_slab: PolishedTuffSlab;
  polished_tuff_stairs: PolishedTuffStairs;
  polished_tuff_wall: PolishedTuffWall;
  portal: Portal;
  potatoes: Potatoes;
  powder_snow: PowderSnow;
  powered_comparator: PoweredComparator;
  powered_repeater: PoweredRepeater;
  prismarine: Prismarine;
  prismarine_bricks_stairs: PrismarineBricksStairs;
  prismarine_stairs: PrismarineStairs;
  pumpkin: Pumpkin;
  pumpkin_stem: PumpkinStem;
  purple_candle: PurpleCandle;
  purple_candle_cake: PurpleCandleCake;
  purple_carpet: PurpleCarpet;
  purple_concrete: PurpleConcrete;
  purple_concrete_powder: PurpleConcretePowder;
  purple_glazed_terracotta: PurpleGlazedTerracotta;
  purple_shulker_box: PurpleShulkerBox;
  purple_stained_glass: PurpleStainedGlass;
  purple_stained_glass_pane: PurpleStainedGlassPane;
  purple_terracotta: PurpleTerracotta;
  purple_wool: PurpleWool;
  purpur_block: PurpurBlock;
  purpur_stairs: PurpurStairs;
  quartz_block: QuartzBlock;
  quartz_bricks: QuartzBricks;
  quartz_ore: QuartzOre;
  quartz_stairs: QuartzStairs;
  rail: Rail;
  raw_copper_block: RawCopperBlock;
  raw_gold_block: RawGoldBlock;
  raw_iron_block: RawIronBlock;
  red_candle: RedCandle;
  red_candle_cake: RedCandleCake;
  red_carpet: RedCarpet;
  red_concrete: RedConcrete;
  red_concrete_powder: RedConcretePowder;
  red_flower: RedFlower;
  red_glazed_terracotta: RedGlazedTerracotta;
  red_mushroom: RedMushroom;
  red_mushroom_block: RedMushroomBlock;
  red_nether_brick: RedNetherBrick;
  red_nether_brick_stairs: RedNetherBrickStairs;
  red_sandstone: RedSandstone;
  red_sandstone_stairs: RedSandstoneStairs;
  red_shulker_box: RedShulkerBox;
  red_stained_glass: RedStainedGlass;
  red_stained_glass_pane: RedStainedGlassPane;
  red_terracotta: RedTerracotta;
  red_wool: RedWool;
  redstone_block: RedstoneBlock;
  redstone_lamp: RedstoneLamp;
  redstone_ore: RedstoneOre;
  redstone_torch: RedstoneTorch;
  redstone_wire: RedstoneWire;
  reeds: Reeds;
  reinforced_deepslate: ReinforcedDeepslate;
  repeating_command_block: RepeatingCommandBlock;
  reserved6: Reserved6;
  respawn_anchor: RespawnAnchor;
  sand: Sand;
  sandstone: Sandstone;
  sandstone_stairs: SandstoneStairs;
  sapling: Sapling;
  scaffolding: Scaffolding;
  sculk: Sculk;
  sculk_catalyst: SculkCatalyst;
  sculk_sensor: SculkSensor;
  sculk_shrieker: SculkShrieker;
  sculk_vein: SculkVein;
  sea_lantern: SeaLantern;
  sea_pickle: SeaPickle;
  seagrass: Seagrass;
  shroomlight: Shroomlight;
  silver_glazed_terracotta: SilverGlazedTerracotta;
  skull: Skull;
  slime: Slime;
  small_amethyst_bud: SmallAmethystBud;
  small_dripleaf_block: SmallDripleafBlock;
  smithing_table: SmithingTable;
  smoker: Smoker;
  smooth_basalt: SmoothBasalt;
  smooth_quartz_stairs: SmoothQuartzStairs;
  smooth_red_sandstone_stairs: SmoothRedSandstoneStairs;
  smooth_sandstone_stairs: SmoothSandstoneStairs;
  smooth_stone: SmoothStone;
  sniffer_egg: SnifferEgg;
  snow: Snow;
  snow_layer: SnowLayer;
  soul_campfire: SoulCampfire;
  soul_fire: SoulFire;
  soul_lantern: SoulLantern;
  soul_sand: SoulSand;
  soul_soil: SoulSoil;
  soul_torch: SoulTorch;
  sponge: Sponge;
  spore_blossom: SporeBlossom;
  spruce_button: SpruceButton;
  spruce_door: SpruceDoor;
  spruce_double_slab: SpruceDoubleSlab;
  spruce_fence: SpruceFence;
  spruce_fence_gate: SpruceFenceGate;
  spruce_hanging_sign: SpruceHangingSign;
  spruce_leaves: SpruceLeaves;
  spruce_log: SpruceLog;
  spruce_planks: SprucePlanks;
  spruce_pressure_plate: SprucePressurePlate;
  spruce_slab: SpruceSlab;
  spruce_stairs: SpruceStairs;
  spruce_standing_sign: SpruceStandingSign;
  spruce_trapdoor: SpruceTrapdoor;
  spruce_wall_sign: SpruceWallSign;
  spruce_wood: SpruceWood;
  standing_banner: StandingBanner;
  standing_sign: StandingSign;
  sticky_piston: StickyPiston;
  sticky_piston_arm_collision: StickyPistonArmCollision;
  stone: Stone;
  stone_block_slab: StoneBlockSlab;
  stone_block_slab2: StoneBlockSlab2;
  stone_block_slab3: StoneBlockSlab3;
  stone_block_slab4: StoneBlockSlab4;
  stone_brick_stairs: StoneBrickStairs;
  stone_button: StoneButton;
  stone_pressure_plate: StonePressurePlate;
  stone_stairs: StoneStairs;
  stonebrick: StoneBrick;
  stonecutter: Stonecutter;
  stonecutter_block: StonecutterBlock;
  stripped_acacia_log: StrippedAcaciaLog;
  stripped_acacia_wood: StrippedAcaciaWood;
  stripped_bamboo_block: StrippedBambooBlock;
  stripped_birch_log: StrippedBirchLog;
  stripped_birch_wood: StrippedBirchWood;
  stripped_cherry_log: StrippedCherryLog;
  stripped_cherry_wood: StrippedCherryWood;
  stripped_crimson_hyphae: StrippedCrimsonHyphae;
  stripped_crimson_stem: StrippedCrimsonStem;
  stripped_dark_oak_log: StrippedDarkOakLog;
  stripped_dark_oak_wood: StrippedDarkOakWood;
  stripped_jungle_log: StrippedJungleLog;
  stripped_jungle_wood: StrippedJungleWood;
  stripped_mangrove_log: StrippedMangroveLog;
  stripped_mangrove_wood: StrippedMangroveWood;
  stripped_oak_log: StrippedOakLog;
  stripped_oak_wood: StrippedOakWood;
  stripped_spruce_log: StrippedSpruceLog;
  stripped_spruce_wood: StrippedSpruceWood;
  stripped_warped_hyphae: StrippedWarpedHyphae;
  stripped_warped_stem: StrippedWarpedStem;
  structure_block: StructureBlock;
  structure_void: StructureVoid;
  suspicious_gravel: SuspiciousGravel;
  suspicious_sand: SuspiciousSand;
  sweet_berry_bush: SweetBerryBush;
  tallgrass: Tallgrass;
  target: Target;
  tinted_glass: TintedGlass;
  tnt: TNT;
  torch: Torch;
  torchflower: Torchflower;
  torchflower_crop: TorchflowerCrop;
  trapdoor: Trapdoor;
  trapped_chest: TrappedChest;
  trial_spawner: TrialSpawner;
  trip_wire: TripWire;
  tripwire_hook: TripwireHook;
  tube_coral: TubeCoral;
  tuff: Tuff;
  tuff_brick_double_slab: TuffBrickDoubleSlab;
  tuff_brick_slab: TuffBrickSlab;
  tuff_brick_stairs: TuffBrickStairs;
  tuff_brick_wall: TuffBrickWall;
  tuff_bricks: TuffBricks;
  tuff_double_slab: TuffDoubleSlab;
  tuff_slab: TuffSlab;
  tuff_stairs: TuffStairs;
  tuff_wall: TuffWall;
  turtle_egg: TurtleEgg;
  twisting_vines: TwistingVines;
  underwater_torch: UnderwaterTorch;
  undyed_shulker_box: UndyedShulkerBox;
  unknown: Unknown;
  unlit_redstone_torch: UnlitRedstoneTorch;
  unpowered_comparator: UnpoweredComparator;
  unpowered_repeater: UnpoweredRepeater;
  vault: Vault;
  verdant_froglight: VerdantFroglight;
  vine: Vine;
  wall_banner: WallBanner;
  wall_sign: WallSign;
  warped_button: WarpedButton;
  warped_door: WarpedDoor;
  warped_double_slab: WarpedDoubleSlab;
  warped_fence: WarpedFence;
  warped_fence_gate: WarpedFenceGate;
  warped_fungus: WarpedFungus;
  warped_hanging_sign: WarpedHangingSign;
  warped_hyphae: WarpedHyphae;
  warped_nylium: WarpedNylium;
  warped_planks: WarpedPlanks;
  warped_pressure_plate: WarpedPressurePlate;
  warped_roots: WarpedRoots;
  warped_slab: WarpedSlab;
  warped_stairs: WarpedStairs;
  warped_standing_sign: WarpedStandingSign;
  warped_stem: WarpedStem;
  warped_trapdoor: WarpedTrapdoor;
  warped_wall_sign: WarpedWallSign;
  warped_wart_block: WarpedWartBlock;
  water: Water;
  waterlily: Waterlily;
  waxed_chiseled_copper: WaxedChiseledCopper;
  waxed_copper: WaxedCopper;
  waxed_copper_bulb: WaxedCopperBulb;
  waxed_copper_door: WaxedCopperDoor;
  waxed_copper_grate: WaxedCopperGrate;
  waxed_copper_trapdoor: WaxedCopperTrapdoor;
  waxed_cut_copper: WaxedCutCopper;
  waxed_cut_copper_slab: WaxedCutCopperSlab;
  waxed_cut_copper_stairs: WaxedCutCopperStairs;
  waxed_double_cut_copper_slab: WaxedDoubleCutCopperSlab;
  waxed_exposed_chiseled_copper: WaxedExposedChiseledCopper;
  waxed_exposed_copper: WaxedExposedCopper;
  waxed_exposed_copper_bulb: WaxedExposedCopperBulb;
  waxed_exposed_copper_door: WaxedExposedCopperDoor;
  waxed_exposed_copper_grate: WaxedExposedCopperGrate;
  waxed_exposed_copper_trapdoor: WaxedExposedCopperTrapdoor;
  waxed_exposed_cut_copper: WaxedExposedCutCopper;
  waxed_exposed_cut_copper_slab: WaxedExposedCutCopperSlab;
  waxed_exposed_cut_copper_stairs: WaxedExposedCutCopperStairs;
  waxed_exposed_double_cut_copper_slab: WaxedExposedDoubleCutCopperSlab;
  waxed_oxidized_chiseled_copper: WaxedOxidizedChiseledCopper;
  waxed_oxidized_copper: WaxedOxidizedCopper;
  waxed_oxidized_copper_bulb: WaxedOxidizedCopperBulb;
  waxed_oxidized_copper_door: WaxedOxidizedCopperDoor;
  waxed_oxidized_copper_grate: WaxedOxidizedCopperGrate;
  waxed_oxidized_copper_trapdoor: WaxedOxidizedCopperTrapdoor;
  waxed_oxidized_cut_copper: WaxedOxidizedCutCopper;
  waxed_oxidized_cut_copper_slab: WaxedOxidizedCutCopperSlab;
  waxed_oxidized_cut_copper_stairs: WaxedOxidizedCutCopperStairs;
  waxed_oxidized_double_cut_copper_slab: WaxedOxidizedDoubleCutCopperSlab;
  waxed_weathered_chiseled_copper: WaxedWeatheredChiseledCopper;
  waxed_weathered_copper: WaxedWeatheredCopper;
  waxed_weathered_copper_bulb: WaxedWeatheredCopperBulb;
  waxed_weathered_copper_door: WaxedWeatheredCopperDoor;
  waxed_weathered_copper_grate: WaxedWeatheredCopperGrate;
  waxed_weathered_copper_trapdoor: WaxedWeatheredCopperTrapdoor;
  waxed_weathered_cut_copper: WaxedWeatheredCutCopper;
  waxed_weathered_cut_copper_slab: WaxedWeatheredCutCopperSlab;
  waxed_weathered_cut_copper_stairs: WaxedWeatheredCutCopperStairs;
  waxed_weathered_double_cut_copper_slab: WaxedWeatheredDoubleCutCopperSlab;
  weathered_chiseled_copper: WeatheredChiseledCopper;
  weathered_copper: WeatheredCopper;
  weathered_copper_bulb: WeatheredCopperBulb;
  weathered_copper_door: WeatheredCopperDoor;
  weathered_copper_grate: WeatheredCopperGrate;
  weathered_copper_trapdoor: WeatheredCopperTrapdoor;
  weathered_cut_copper: WeatheredCutCopper;
  weathered_cut_copper_slab: WeatheredCutCopperSlab;
  weathered_cut_copper_stairs: WeatheredCutCopperStairs;
  weathered_double_cut_copper_slab: WeatheredDoubleCutCopperSlab;
  web: Web;
  weeping_vines: WeepingVines;
  wheat: Wheat;
  white_candle: WhiteCandle;
  white_candle_cake: WhiteCandleCake;
  white_carpet: WhiteCarpet;
  white_concrete: WhiteConcrete;
  white_concrete_powder: WhiteConcretePowder;
  white_glazed_terracotta: WhiteGlazedTerracotta;
  white_shulker_box: WhiteShulkerBox;
  white_stained_glass: WhiteStainedGlass;
  white_stained_glass_pane: WhiteStainedGlassPane;
  white_terracotta: WhiteTerracotta;
  white_wool: WhiteWool;
  wither_rose: WitherRose;
  wooden_button: WoodenButton;
  wooden_door: WoodenDoor;
  wooden_pressure_plate: WoodenPressurePlate;
  yellow_candle: YellowCandle;
  yellow_candle_cake: YellowCandleCake;
  yellow_carpet: YellowCarpet;
  yellow_concrete: YellowConcrete;
  yellow_concrete_powder: YellowConcretePowder;
  yellow_flower: YellowFlower;
  yellow_glazed_terracotta: YellowGlazedTerracotta;
  yellow_shulker_box: YellowShulkerBox;
  yellow_stained_glass: YellowStainedGlass;
  yellow_stained_glass_pane: YellowStainedGlassPane;
  yellow_terracotta: YellowTerracotta;
  yellow_wool: YellowWool;
}

export interface AcaciaButton extends ButtonLike {}

export interface AcaciaDoor extends DoorLike {}

export interface AcaciaDoubleSlab extends DoubleSlabLike {}

export interface AcaciaFence {}

export interface AcaciaFenceGate extends FenceGateLike {}

export interface AcaciaHangingSign extends HangingSignLike {}

export interface AcaciaLeaves extends LeavesLike {}

export interface AcaciaLog extends PillarLike {}

export interface AcaciaPlanks {}

export interface AcaciaPressurePlate extends Powerable {}

export interface AcaciaSlab extends DoubleSlabLike {}

export interface AcaciaStairs extends StairsLike {}

export interface AcaciaStandingSign extends SignLike {}

export interface AcaciaTrapdoor extends TrapdoorLike {}

export interface AcaciaWallSign extends WallSignLike {}

export interface AcaciaWood extends PillarLike {}

export interface ActivatorRail {
  rail_data_bit: BooleanTag;
  rail_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface Air {}

export interface Allow {}

export interface AmethystBlock {}

export interface AmethystCluster {
  "minecraft:block_face": StringTag<"down" | "up" | "north" | "south" | "west" | "east">;
}

export interface AncientDebris {}

export interface Andesite {}

export interface AndesiteStairs extends StairsLike {}

export interface Anvil extends CardinalDirectionLike {
  damage: StringTag<"undamaged" | "slightly_damaged" | "very_damaged" | "broken">;
}

export interface Azalea {}

export interface AzaleaLeaves extends LeavesLike {}

export interface AzaleaLeavesFlowered extends LeavesLike {}

export interface Bamboo {
  age_bit: BooleanTag;
  bamboo_leaf_size: StringTag<"no_leaves" | "small_leaves" | "large_leaves">;
  bamboo_stalk_thickness: StringTag<"thin" | "thick">;
}

export interface BambooBlock extends PillarLike {}

export interface BambooButton extends ButtonLike {}

export interface BambooDoor extends DoorLike {}

export interface BambooDoubleSlab extends DoubleSlabLike {}

export interface BambooFence {}

export interface BambooFenceGate extends FenceGateLike {}

export interface BambooHangingSign extends HangingSignLike {}

export interface BambooMosaic {}

export interface BambooMosaicDoubleSlab extends DoubleSlabLike {}

export interface BambooMosaicSlab extends DoubleSlabLike {}

export interface BambooMosaicStairs extends StairsLike {}

export interface BambooPlanks {}

export interface BambooPressurePlate extends Powerable {}

export interface BambooSapling {
  age_bit: BooleanTag;
  sapling_type: StringTag<"oak" | "spruce" | "birch" | "jungle" | "acacia" | "dark_oak">;
}

export interface BambooSlab extends DoubleSlabLike {}

export interface BambooStairs extends StairsLike {}

export interface BambooStandingSign extends SignLike {}

export interface BambooTrapdoor extends TrapdoorLike {}

export interface BambooWallSign extends WallSignLike {}

export interface Barrel extends FacingDirectionLike {
  open_bit: BooleanTag;
}

export interface Barrier {}

export interface Basalt extends PillarLike {}

export interface Beacon {}

export interface Bed extends DirectionLike {
  head_piece_bit: BooleanTag;
  occupied_bit: BooleanTag;
}

export interface Bedrock {
  infiniburn_bit: BooleanTag;
}

export interface BeeNest extends BeehiveLike {}

export interface Beehive extends BeehiveLike {}

export interface BeehiveLike extends DirectionLike {
  honey_level: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface Beetroot {
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface Bell extends DirectionLike {
  attachment: StringTag<"standing" | "hanging" | "side" | "multiple">;
  toggle_bit: BooleanTag;
}

export interface BigDripleaf extends CardinalDirectionLike {
  big_dripleaf_head: BooleanTag;
  big_dripleaf_tilt: StringTag<"none" | "unstable" | "partial_tilt" | "full_tilt">;
}

export interface BirchButton extends ButtonLike {}

export interface BirchDoor extends DoorLike {}

export interface BirchDoubleSlab extends DoubleSlabLike {}

export interface BirchFence {}

export interface BirchFenceGate extends FenceGateLike {}

export interface BirchHangingSign extends HangingSignLike {}

export interface BirchLeaves extends LeavesLike {}

export interface BirchLog extends PillarLike {}

export interface BirchPlanks {}

export interface BirchPressurePlate extends Powerable {}

export interface BirchSlab extends DoubleSlabLike {}

export interface BirchStairs extends StairsLike {}

export interface BirchStandingSign extends SignLike {}

export interface BirchTrapdoor extends TrapdoorLike {}

export interface BirchWallSign extends WallSignLike {}

export interface BirchWood extends PillarLike {}

export interface BlackCandle extends CandleLike {}

export interface BlackCandleCake extends LightLike {}

export interface BlackCarpet {}

export interface BlackConcrete {}

export interface BlackConcretePowder {}

export interface BlackGlazedTerracotta extends GlazedTerracottaLike {}

export interface BlackShulkerBox {}

export interface BlackStainedGlass {}

export interface BlackStainedGlassPane {}

export interface BlackTerracotta {}

export interface BlackWool {}

export interface Blackstone {}

export interface BlackstoneDoubleSlab extends DoubleSlabLike {}

export interface BlackstoneSlab extends DoubleSlabLike {}

export interface BlackstoneStairs extends StairsLike {}

export interface BlackstoneWall extends WallLike {}

export interface BlastFurnace extends CardinalDirectionLike {}

export interface BlueCandle extends CandleLike {}

export interface BlueCandleCake extends LightLike {}

export interface BlueCarpet {}

export interface BlueConcrete {}

export interface BlueConcretePowder {}

export interface BlueGlazedTerracotta extends GlazedTerracottaLike {}

export interface BlueIce {}

export interface BlueShulkerBox {}

export interface BlueStainedGlass {}

export interface BlueStainedGlassPane {}

export interface BlueTerracotta {}

export interface BlueWool {}

export interface BoneBlock extends PillarLike {
  deprecated: IntTag<0 | 1 | 2 | 3>;
}

export interface Bookshelf {}

export interface BorderBlock extends WallLike {}

export interface BrainCoral {}

export interface BrewingStand {
  brewing_stand_slot_a_bit: BooleanTag;
  brewing_stand_slot_b_bit: BooleanTag;
  brewing_stand_slot_c_bit: BooleanTag;
}

export interface BrickBlock {}

export interface BrickStairs extends StairsLike {}

export interface BrownCandle extends CandleLike {}

export interface BrownCandleCake extends LightLike {}

export interface BrownCarpet {}

export interface BrownConcrete {}

export interface BrownConcretePowder {}

export interface BrownGlazedTerracotta extends GlazedTerracottaLike {}

export interface BrownMushroom {}

export interface BrownMushroomBlock {
  huge_mushroom_bits: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface BrownShulkerBox {}

export interface BrownStainedGlass {}

export interface BrownStainedGlassPane {}

export interface BrownTerracotta {}

export interface BrownWool {}

export interface BubbleColumn {
  drag_down: BooleanTag;
}

export interface BubbleCoral {}

export interface BuddingAmethyst {}

export interface Cactus {
  age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface Cake {
  bite_counter: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6>;
}

export interface Calcite {}

export interface CalibratedSculkSensor extends CardinalDirectionLike {
  sculk_sensor_phase: IntTag<0 | 1 | 2>;
}

export interface Camera {}

export interface Campfire extends CardinalDirectionLike {
  extinguished: BooleanTag;
}

export interface Candle extends CandleLike {}

export interface CandleCake extends LightLike {}

export interface Carrots {
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface CartographyTable {}

export interface CarvedPumpkin extends CardinalDirectionLike {}

export interface Cauldron {
  cauldron_liquid: StringTag<"water" | "lava" | "powder_snow">;
  fill_level: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6>;
}

export interface CaveVines {
  growing_plant_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
}

export interface CaveVinesBodyWithBerries {
  growing_plant_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
}

export interface CaveVinesHeadWithBerries {
  growing_plant_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
}

export interface Chain extends PillarLike {}

export interface ChainCommandBlock extends FacingDirectionLike {
  conditional_bit: BooleanTag;
}

export interface ChemicalHeat {}

export interface ChemistryTable extends DirectionLike {
  chemistry_table_type: StringTag<"compound_creator" | "material_reducer" | "element_constructor" | "lab_table">;
}

export interface CherryButton extends ButtonLike {}

export interface CherryDoor extends DoorLike {}

export interface CherryDoubleSlab extends DoubleSlabLike {}

export interface CherryFence {}

export interface CherryFenceGate extends FenceGateLike {}

export interface CherryHangingSign extends HangingSignLike {}

export interface CherryLeaves extends LeavesLike {}

export interface CherryLog extends PillarLike {}

export interface CherryPlanks {}

export interface CherryPressurePlate extends Powerable {}

export interface CherrySapling {
  age_bit: BooleanTag;
}

export interface CherrySlab extends DoubleSlabLike {}

export interface CherryStairs extends StairsLike {}

export interface CherryStandingSign extends SignLike {}

export interface CherryTrapdoor extends TrapdoorLike {}

export interface CherryWallSign extends WallSignLike {}

export interface CherryWood extends PillarLike {
  stripped_bit: BooleanTag;
}

export interface Chest extends CardinalDirectionLike {}

export interface ChiseledBookshelf extends DirectionLike {
  books_stored: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63>;
}

export interface ChiseledCopper {}

export interface ChiseledDeepslate {}

export interface ChiseledNetherBricks {}

export interface ChiseledPolishedBlackstone {}

export interface ChiseledTuff {}

export interface ChiseledTuffBricks {}

export interface ChorusFlower {
  age: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface ChorusPlant {}

export interface Clay {}

export interface ClientRequestPlaceholderBlock {}

export interface CoalBlock {}

export interface CoalOre {}

export interface CobbledDeepslate {}

export interface CobbledDeepslateDoubleSlab extends DoubleSlabLike {}

export interface CobbledDeepslateSlab extends DoubleSlabLike {}

export interface CobbledDeepslateStairs extends StairsLike {}

export interface CobbledDeepslateWall extends WallLike {}

export interface Cobblestone {}

export interface CobblestoneWall extends WallLike {
  wall_block_type: StringTag<"cobblestone" | "mossy_cobblestone" | "granite" | "diorite" | "andesite" | "sandstone" | "brick" | "stone_brick" | "mossy_stone_brick" | "nether_brick" | "end_brick" | "prismarine" | "red_sandstone" | "red_nether_brick">;
}

export interface Cocoa extends DirectionLike {
  age: IntTag<0 | 1 | 2>;
}

export interface ColoredTorchBp extends TorchLike {
  color_bit: BooleanTag;
}

export interface ColoredTorchRg extends TorchLike {
  color_bit: BooleanTag;
}

export interface CommandBlock extends FacingDirectionLike {
  conditional_bit: BooleanTag;
}

export interface Composter {
  composter_fill_level: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8>;
}

export interface Conduit {}

export interface CopperBlock {}

export interface CopperBulb extends LightLike {
  powered_bit: BooleanTag;
}

export interface CopperDoor extends DoorLike {}

export interface CopperGrate {}

export interface CopperOre {}

export interface CopperTrapdoor extends TrapdoorLike {}

export interface CoralBlock {
  coral_color: StringTag<"blue" | "pink" | "purple" | "red" | "yellow">;
  dead_bit: BooleanTag;
}

export interface CoralFan {
  coral_color: StringTag<"blue" | "pink" | "purple" | "red" | "yellow">;
  coral_fan_direction: IntTag<0 | 1>;
}

export interface CoralFanDead {
  coral_color: StringTag<"blue" | "pink" | "purple" | "red" | "yellow">;
  coral_fan_direction: IntTag<0 | 1>;
}

export interface CoralFanHang {
  coral_direction: IntTag<Direction>;
  coral_hang_type_bit: BooleanTag;
  dead_bit: BooleanTag;
}

export interface CoralFanHang2 {
  coral_direction: IntTag<Direction>;
  coral_hang_type_bit: BooleanTag;
  dead_bit: BooleanTag;
}

export interface CoralFanHang3 {
  coral_direction: IntTag<Direction>;
  coral_hang_type_bit: BooleanTag;
  dead_bit: BooleanTag;
}

export interface CrackedDeepslateBricks {}

export interface CrackedDeepslateTiles {}

export interface CrackedNetherBricks {}

export interface CrackedPolishedBlackstoneBricks {}

export interface Crafter {
  crafting: BooleanTag;
  orientation: StringTag<"down_east" | "down_north" | "down_south" | "down_west" | "up_east" | "up_north" | "up_south" | "up_west" | "west_up" | "east_up" | "north_up" | "south_up">;
  triggered_bit: BooleanTag;
}

export interface CraftingTable {}

export interface CrimsonButton extends ButtonLike {}

export interface CrimsonDoor extends DoorLike {}

export interface CrimsonDoubleSlab extends DoubleSlabLike {}

export interface CrimsonFence {}

export interface CrimsonFenceGate extends FenceGateLike {}

export interface CrimsonFungus {}

export interface CrimsonHangingSign extends HangingSignLike {}

export interface CrimsonHyphae extends PillarLike {}

export interface CrimsonNylium {}

export interface CrimsonPlanks {}

export interface CrimsonPressurePlate extends Powerable {}

export interface CrimsonRoots {}

export interface CrimsonSlab extends DoubleSlabLike {}

export interface CrimsonStairs extends StairsLike {}

export interface CrimsonStandingSign extends SignLike {}

export interface CrimsonStem extends PillarLike {}

export interface CrimsonTrapdoor extends TrapdoorLike {}

export interface CrimsonWallSign extends WallSignLike {}

export interface CryingObsidian {}

export interface CutCopper {}

export interface CutCopperSlab extends DoubleSlabLike {}

export interface CutCopperStairs extends StairsLike {}

export interface CyanCandle extends CandleLike {}

export interface CyanCandleCake extends LightLike {}

export interface CyanCarpet {}

export interface CyanConcrete {}

export interface CyanConcretePowder {}

export interface CyanGlazedTerracotta extends GlazedTerracottaLike {}

export interface CyanShulkerBox {}

export interface CyanStainedGlass {}

export interface CyanStainedGlassPane {}

export interface CyanTerracotta {}

export interface CyanWool {}

export interface DarkOakButton extends ButtonLike {}

export interface DarkOakDoor extends DoorLike {}

export interface DarkOakDoubleSlab extends DoubleSlabLike {}

export interface DarkOakFence {}

export interface DarkOakFenceGate extends FenceGateLike {}

export interface DarkOakHangingSign extends HangingSignLike {}

export interface DarkOakLeaves extends LeavesLike {}

export interface DarkOakLog extends PillarLike {}

export interface DarkOakPlanks {}

export interface DarkOakPressurePlate extends Powerable {}

export interface DarkOakSlab extends DoubleSlabLike {}

export interface DarkOakStairs extends StairsLike {}

export interface DarkOakTrapdoor extends TrapdoorLike {}

export interface DarkOakWood extends PillarLike {}

export interface DarkPrismarineStairs extends StairsLike {}

export interface DarkOakStandingSign extends SignLike {}

export interface DarkOakWallSign extends WallSignLike {}

export interface DaylightDetector extends Powerable {}

export interface DaylightDetectorInverted extends Powerable {}

export interface DeadBrainCoral {}

export interface DeadBubbleCoral {}

export interface DeadFireCoral {}

export interface DeadHornCoral {}

export interface DeadTubeCoral {}

export interface DeadBush {}

export interface DecoratedPot extends DirectionLike {}

export interface Deepslate extends PillarLike {}

export interface DeepslateBrickDoubleSlab extends DoubleSlabLike {}

export interface DeepslateBrickSlab extends DoubleSlabLike {}

export interface DeepslateBrickStairs extends StairsLike {}

export interface DeepslateBrickWall extends WallLike {}

export interface DeepslateBricks {}

export interface DeepslateCoalOre {}

export interface DeepslateCopperOre {}

export interface DeepslateDiamondOre {}

export interface DeepslateEmeraldOre {}

export interface DeepslateGoldOre {}

export interface DeepslateIronOre {}

export interface DeepslateLapisOre {}

export interface DeepslateRedstoneOre {}

export interface DeepslateTileDoubleSlab extends DoubleSlabLike {}

export interface DeepslateTileSlab extends DoubleSlabLike {}

export interface DeepslateTileStairs extends StairsLike {}

export interface DeepslateTileWall extends WallLike {}

export interface DeepslateTiles {}

export interface Deny {}

export interface DetectorRail {
  rail_data_bit: BooleanTag;
  rail_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface DiamondBlock {}

export interface DiamondOre {}

export interface Diorite {}

export interface DioriteStairs extends StairsLike {}

export interface Dirt {
  dirt_type: StringTag<"normal" | "coarse">;
}

export interface DirtWithRoots {}

export interface Dispenser extends FacingDirectionLike {
  triggered_bit: BooleanTag;
}

export interface DoubleCutCopperSlab extends DoubleSlabLike {}

export interface DoublePlant {
  double_plant_type: StringTag<"sunflower" | "syringa" | "grass" | "fern" | "rose" | "paeonia">;
  upper_block_bit: BooleanTag;
}

export interface DoubleStoneBlockSlab extends DoubleSlabLike {
  stone_slab_type: StringTag<"smooth_stone" | "sandstone" | "wood" | "cobblestone" | "brick" | "stone_brick" | "quartz" | "nether_brick">;
}

export interface DoubleStoneBlockSlab2 extends DoubleSlabLike {
  stone_slab_type_2: StringTag<"red_sandstone" | "purpur" | "prismarine_rough" | "prismarine_dark" | "prismarine_brick" | "mossy_cobblestone" | "smooth_sandstone" | "red_nether_brick">;
}

export interface DoubleStoneBlockSlab3 extends DoubleSlabLike {
  stone_slab_type_3: StringTag<"end_stone_brick" | "smooth_red_sandstone" | "polished_andesite" | "andesite" | "diorite" | "polished_diorite" | "granite" | "polished_granite">;
}

export interface DoubleStoneBlockSlab4 extends DoubleSlabLike {
  stone_slab_type_4: StringTag<"mossy_stone_brick" | "smooth_quartz" | "stone" | "cut_sandstone" | "cut_red_sandstone">;
}

export interface DragonEgg {}

export interface DriedKelpBlock {}

export interface DripstoneBlock {}

export interface Dropper extends FacingDirectionLike {
  triggered_bit: BooleanTag;
}

export interface Element0 {}

export interface Element1 {}

export interface Element10 {}

export interface Element100 {}

export interface Element101 {}

export interface Element102 {}

export interface Element103 {}

export interface Element104 {}

export interface Element105 {}

export interface Element106 {}

export interface Element107 {}

export interface Element108 {}

export interface Element109 {}

export interface Element11 {}

export interface Element110 {}

export interface Element111 {}

export interface Element112 {}

export interface Element113 {}

export interface Element114 {}

export interface Element115 {}

export interface Element116 {}

export interface Element117 {}

export interface Element118 {}

export interface Element12 {}

export interface Element13 {}

export interface Element14 {}

export interface Element15 {}

export interface Element16 {}

export interface Element17 {}

export interface Element18 {}

export interface Element19 {}

export interface Element2 {}

export interface Element20 {}

export interface Element21 {}

export interface Element22 {}

export interface Element23 {}

export interface Element24 {}

export interface Element25 {}

export interface Element26 {}

export interface Element27 {}

export interface Element28 {}

export interface Element29 {}

export interface Element3 {}

export interface Element30 {}

export interface Element31 {}

export interface Element32 {}

export interface Element33 {}

export interface Element34 {}

export interface Element35 {}

export interface Element36 {}

export interface Element37 {}

export interface Element38 {}

export interface Element39 {}

export interface Element4 {}

export interface Element40 {}

export interface Element41 {}

export interface Element42 {}

export interface Element43 {}

export interface Element44 {}

export interface Element45 {}

export interface Element46 {}

export interface Element47 {}

export interface Element48 {}

export interface Element49 {}

export interface Element5 {}

export interface Element50 {}

export interface Element51 {}

export interface Element52 {}

export interface Element53 {}

export interface Element54 {}

export interface Element55 {}

export interface Element56 {}

export interface Element57 {}

export interface Element58 {}

export interface Element59 {}

export interface Element6 {}

export interface Element60 {}

export interface Element61 {}

export interface Element62 {}

export interface Element63 {}

export interface Element64 {}

export interface Element65 {}

export interface Element66 {}

export interface Element67 {}

export interface Element68 {}

export interface Element69 {}

export interface Element7 {}

export interface Element70 {}

export interface Element71 {}

export interface Element72 {}

export interface Element73 {}

export interface Element74 {}

export interface Element75 {}

export interface Element76 {}

export interface Element77 {}

export interface Element78 {}

export interface Element79 {}

export interface Element8 {}

export interface Element80 {}

export interface Element81 {}

export interface Element82 {}

export interface Element83 {}

export interface Element84 {}

export interface Element85 {}

export interface Element86 {}

export interface Element87 {}

export interface Element88 {}

export interface Element89 {}

export interface Element9 {}

export interface Element90 {}

export interface Element91 {}

export interface Element92 {}

export interface Element93 {}

export interface Element94 {}

export interface Element95 {}

export interface Element96 {}

export interface Element97 {}

export interface Element98 {}

export interface Element99 {}

export interface EmeraldBlock {}

export interface EmeraldOre {}

export interface EnchantingTable {}

export interface EndBrickStairs extends StairsLike {}

export interface EndBricks {}

export interface EndGateway {}

export interface EndPortal {}

export interface EndPortalFrame extends CardinalDirectionLike {
  end_portal_eye_bit: BooleanTag;
}

export interface EndRod extends FacingDirectionLike {}

export interface EndStone {}

export interface EnderChest extends CardinalDirectionLike {}

export interface ExposedChiseledCopper {}

export interface ExposedCopper {}

export interface ExposedCopperBulb extends LightLike {
  powered_bit: BooleanTag;
}

export interface ExposedCopperDoor extends DoorLike {}

export interface ExposedCopperGrate {}

export interface ExposedCopperTrapdoor extends TrapdoorLike {}

export interface ExposedCutCopper {}

export interface ExposedCutCopperSlab extends DoubleSlabLike {}

export interface ExposedCutCopperStairs extends StairsLike {}

export interface ExposedDoubleCutCopperSlab extends DoubleSlabLike {}

export interface Farmland {
  moisturized_amount: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface FenceGate extends FenceGateLike {}

export interface Fire {
  age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface FireCoral {}

export interface FletchingTable {}

export interface FlowerPot {
  update_bit: BooleanTag;
}

export interface FloweringAzalea {}

export interface FlowingLava {
  liquid_depth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface FlowingWater {
  liquid_depth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface Frame extends FacingDirectionLike {
  item_frame_map_bit: BooleanTag;
  item_frame_photo_bit: BooleanTag;
}

export interface FrogSpawn {}

export interface FrostedIce {
  age: IntTag<0 | 1 | 2 | 3>;
}

export interface Furnace extends CardinalDirectionLike {}

export interface GildedBlackstone {}

export interface Glass {}

export interface GlassPane {}

export interface GlowFrame extends FacingDirectionLike {
  item_frame_map_bit: BooleanTag;
  item_frame_photo_bit: BooleanTag;
}

export interface GlowLichen {
  multi_face_direction_bits: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63>;
}

export interface GlowingObsidian {}

export interface Glowstone {}

export interface GoldBlock {}

export interface GoldOre {}

export interface GoldenRail {
  rail_data_bit: BooleanTag;
  rail_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface Granite {}

export interface GraniteStairs extends StairsLike {}

export interface GrassBlock {}

export interface GrassPath {}

export interface Gravel {}

export interface GrayCandle extends CandleLike {}

export interface GrayCandleCake extends LightLike {}

export interface GrayCarpet {}

export interface GrayConcrete {}

export interface GrayConcretePowder {}

export interface GrayGlazedTerracotta extends GlazedTerracottaLike {}

export interface GrayShulkerBox {}

export interface GrayStainedGlass {}

export interface GrayStainedGlassPane {}

export interface GrayTerracotta {}

export interface GrayWool {}

export interface GreenCandle extends CandleLike {}

export interface GreenCandleCake extends LightLike {}

export interface GreenCarpet {}

export interface GreenConcrete {}

export interface GreenConcretePowder {}

export interface GreenGlazedTerracotta extends GlazedTerracottaLike {}

export interface GreenShulkerBox {}

export interface GreenStainedGlass {}

export interface GreenStainedGlassPane {}

export interface GreenTerracotta {}

export interface GreenWool {}

export interface Grindstone extends DirectionLike {
  attachment: StringTag<"standing" | "hanging" | "side" | "multiple">;
}

export interface HangingRoots {}

export interface HardBlackStainedGlass {}

export interface HardBlackStainedGlassPane {}

export interface HardBlueStainedGlass {}

export interface HardBlueStainedGlassPane {}

export interface HardBrownStainedGlass {}

export interface HardBrownStainedGlassPane {}

export interface HardCyanStainedGlass {}

export interface HardCyanStainedGlassPane {}

export interface HardGlass {}

export interface HardGlassPane {}

export interface HardGrayStainedGlass {}

export interface HardGrayStainedGlassPane {}

export interface HardGreenStainedGlass {}

export interface HardGreenStainedGlassPane {}

export interface HardLightBlueStainedGlass {}

export interface HardLightBlueStainedGlassPane {}

export interface HardLightGrayStainedGlass {}

export interface HardLightGrayStainedGlassPane {}

export interface HardLimeStainedGlass {}

export interface HardLimeStainedGlassPane {}

export interface HardMagentaStainedGlass {}

export interface HardMagentaStainedGlassPane {}

export interface HardOrangeStainedGlass {}

export interface HardOrangeStainedGlassPane {}

export interface HardPinkStainedGlass {}

export interface HardPinkStainedGlassPane {}

export interface HardPurpleStainedGlass {}

export interface HardPurpleStainedGlassPane {}

export interface HardRedStainedGlass {}

export interface HardRedStainedGlassPane {}

export interface HardWhiteStainedGlass {}

export interface HardWhiteStainedGlassPane {}

export interface HardYellowStainedGlass {}

export interface HardYellowStainedGlassPane {}

export interface HardenedClay {}

export interface HayBlock extends PillarLike {
  deprecated: IntTag<0 | 1 | 2 | 3>;
}

export interface HeavyWeightedPressurePlate extends Powerable {}

export interface HoneyBlock {}

export interface HoneycombBlock {}

export interface Hopper extends FacingDirectionLike {
  toggle_bit: BooleanTag;
}

export interface HornCoral {}

export interface Ice {}

export interface InfestedDeepslate extends PillarLike {}

export interface InfoUpdate {}

export interface InfoUpdate2 {}

export interface InvisibleBedrock {}

export interface IronBars {}

export interface IronBlock {}

export interface IronDoor extends DoorLike {}

export interface IronOre {}

export interface IronTrapdoor extends TrapdoorLike {}

export interface Jigsaw extends FacingDirectionLike {
  rotation: IntTag<0 | 1 | 2 | 3>;
}

export interface Jukebox {}

export interface JungleButton extends ButtonLike {}

export interface JungleDoor extends DoorLike {}

export interface JungleDoubleSlab extends DoubleSlabLike {}

export interface JungleFence {}

export interface JungleFenceGate extends FenceGateLike {}

export interface JungleHangingSign extends HangingSignLike {}

export interface JungleLeaves extends LeavesLike {}

export interface JungleLog extends PillarLike {}

export interface JunglePlanks {}

export interface JunglePressurePlate extends Powerable {}

export interface JungleSlab extends DoubleSlabLike {}

export interface JungleStairs extends StairsLike {}

export interface JungleStandingSign extends SignLike {}

export interface JungleTrapdoor extends TrapdoorLike {}

export interface JungleWallSign extends WallSignLike {}

export interface JungleWood extends PillarLike {}

export interface Kelp {
  kelp_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
}

export interface Ladder extends FacingDirectionLike {}

export interface Lantern {
  hanging: BooleanTag;
}

export interface LapisBlock {}

export interface LapisOre {}

export interface LargeAmethystBud {
  "minecraft:block_face": StringTag<"down" | "up" | "north" | "south" | "west" | "east">;
}

export interface Lava {
  liquid_depth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface Lectern extends CardinalDirectionLike {
  powered_bit: BooleanTag;
}

export interface Lever {
  lever_direction: StringTag<"down_east_west" | "east" | "west" | "south" | "north" | "up_north_south" | "up_east_west" | "down_north_south">;
  open_bit: BooleanTag;
}

export interface LightBlock {
  block_light_level: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface LightBlueCandle extends CandleLike {}

export interface LightBlueCandleCake extends LightLike {}

export interface LightBlueCarpet {}

export interface LightBlueConcrete {}

export interface LightBlueConcretePowder {}

export interface LightBlueGlazedTerracotta extends GlazedTerracottaLike {}

export interface LightBlueShulkerBox {}

export interface LightBlueStainedGlass {}

export interface LightBlueStainedGlassPane {}

export interface LightBlueTerracotta {}

export interface LightBlueWool {}

export interface LightGrayCandle extends CandleLike {}

export interface LightGrayCandleCake extends LightLike {}

export interface LightGrayCarpet {}

export interface LightGrayConcrete {}

export interface LightGrayConcretePowder {}

export interface LightGrayShulkerBox {}

export interface LightGrayStainedGlass {}

export interface LightGrayStainedGlassPane {}

export interface LightGrayTerracotta {}

export interface LightGrayWool {}

export interface LightWeightedPressurePlate extends Powerable {}

export interface LightningRod extends FacingDirectionLike {}

export interface LimeCandle extends CandleLike {}

export interface LimeCandleCake extends LightLike {}

export interface LimeCarpet {}

export interface LimeConcrete {}

export interface LimeConcretePowder {}

export interface LimeGlazedTerracotta extends GlazedTerracottaLike {}

export interface LimeShulkerBox {}

export interface LimeStainedGlass {}

export interface LimeStainedGlassPane {}

export interface LimeTerracotta {}

export interface LimeWool {}

export interface LitBlastFurnace extends CardinalDirectionLike {}

export interface LitDeepslateRedstoneOre {}

export interface LitFurnace extends CardinalDirectionLike {}

export interface LitPumpkin extends CardinalDirectionLike {}

export interface LitRedstoneLamp {}

export interface LitRedstoneOre {}

export interface LitSmoker extends CardinalDirectionLike {}

export interface Lodestone {}

export interface Loom extends DirectionLike {}

export interface MagentaCandle extends CandleLike {}

export interface MagentaCandleCake extends LightLike {}

export interface MagentaCarpet {}

export interface MagentaConcrete {}

export interface MagentaConcretePowder {}

export interface MagentaGlazedTerracotta extends GlazedTerracottaLike {}

export interface MagentaShulkerBox {}

export interface MagentaStainedGlass {}

export interface MagentaStainedGlassPane {}

export interface MagentaTerracotta {}

export interface MagentaWool {}

export interface Magma {}

export interface MangroveButton extends ButtonLike {}

export interface MangroveDoor extends DoorLike {}

export interface MangroveDoubleSlab extends DoubleSlabLike {}

export interface MangroveFence {}

export interface MangroveFenceGate extends FenceGateLike {}

export interface MangroveHangingSign extends HangingSignLike {}

export interface MangroveLeaves extends LeavesLike {}

export interface MangroveLog extends PillarLike {}

export interface MangrovePlanks {}

export interface MangrovePressurePlate extends Powerable {}

export interface MangrovePropagule {
  hanging: BooleanTag;
  propagule_stage: IntTag<0 | 1 | 2 | 3 | 4>;
}

export interface MangroveRoots {}

export interface MangroveSlab extends DoubleSlabLike {}

export interface MangroveStairs extends StairsLike {}

export interface MangroveStandingSign extends SignLike {}

export interface MangroveTrapdoor extends TrapdoorLike {}

export interface MangroveWallSign extends WallSignLike {}

export interface MangroveWood extends PillarLike {
  stripped_bit: BooleanTag;
}

export interface MediumAmethystBud {
  "minecraft:block_face": StringTag<"down" | "up" | "north" | "south" | "west" | "east">;
}

export interface MelonBlock {}

export interface MelonStem extends FacingDirectionLike {
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface MobSpawner {}

export interface MonsterEgg {
  monster_egg_stone_type: StringTag<"stone" | "cobblestone" | "stone_brick" | "mossy_stone_brick" | "cracked_stone_brick" | "chiseled_stone_brick">;
}

export interface MossBlock {}

export interface MossCarpet {}

export interface MossyCobblestone {}

export interface MossyCobblestoneStairs extends StairsLike {}

export interface MossyStoneBrickStairs extends StairsLike {}

export interface MovingBlock {}

export interface Mud {}

export interface MudBrickDoubleSlab extends DoubleSlabLike {}

export interface MudBrickSlab extends DoubleSlabLike {}

export interface MudBrickStairs extends StairsLike {}

export interface MudBrickWall extends WallLike {}

export interface MudBricks {}

export interface MuddyMangroveRoots extends PillarLike {}

export interface Mycelium {}

export interface NetherBrick {}

export interface NetherBrickFence {}

export interface NetherBrickStairs extends StairsLike {}

export interface NetherGoldOre {}

export interface NetherSprouts {}

export interface NetherWart {
  age: IntTag<0 | 1 | 2 | 3>;
}

export interface NetherWartBlock {}

export interface NetheriteBlock {}

export interface Netherrack {}

export interface NetherReactorCore {}

export interface NormalStoneStairs extends StairsLike {}

export interface NoteBlock {}

export interface OakDoubleSlab extends DoubleSlabLike {}

export interface OakFence {}

export interface OakHangingSign extends HangingSignLike {}

export interface OakLeaves extends LeavesLike {}

export interface OakLog extends PillarLike {}

export interface OakPlanks {}

export interface OakSlab extends DoubleSlabLike {}

export interface OakStairs extends StairsLike {}

export interface OakWood extends PillarLike {}

export interface Observer {
  "minecraft:facing_direction": StringTag<"down" | "up" | "north" | "south" | "west" | "east">;
  powered_bit: BooleanTag;
}

export interface Obsidian {}

export interface OchreFroglight extends PillarLike {}

export interface OrangeCandle extends CandleLike {}

export interface OrangeCandleCake extends LightLike {}

export interface OrangeCarpet {}

export interface OrangeConcrete {}

export interface OrangeConcretePowder {}

export interface OrangeGlazedTerracotta extends GlazedTerracottaLike {}

export interface OrangeShulkerBox {}

export interface OrangeStainedGlass {}

export interface OrangeStainedGlassPane {}

export interface OrangeTerracotta {}

export interface OrangeWool {}

export interface OxidizedChiseledCopper {}

export interface OxidizedCopper {}

export interface OxidizedCopperBulb extends LightLike {
  powered_bit: BooleanTag;
}

export interface OxidizedCopperDoor extends DoorLike {}

export interface OxidizedCopperGrate {}

export interface OxidizedCopperTrapdoor extends TrapdoorLike {}

export interface OxidizedCutCopper {}

export interface OxidizedCutCopperSlab extends DoubleSlabLike {}

export interface OxidizedCutCopperStairs extends StairsLike {}

export interface OxidizedDoubleCutCopperSlab extends DoubleSlabLike {}

export interface PackedIce {}

export interface PackedMud {}

export interface PearlescentFroglight extends PillarLike {}

export interface PinkCandle extends CandleLike {}

export interface PinkCandleCake extends LightLike {}

export interface PinkCarpet {}

export interface PinkConcrete {}

export interface PinkConcretePowder {}

export interface PinkGlazedTerracotta extends GlazedTerracottaLike {}

export interface PinkPetals extends CardinalDirectionLike {
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface PinkShulkerBox {}

export interface PinkStainedGlass {}

export interface PinkStainedGlassPane {}

export interface PinkTerracotta {}

export interface PinkWool {}

export interface Piston extends FacingDirectionLike {}

export interface PistonArmCollision extends FacingDirectionLike {}

export interface PitcherCrop {
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  upper_block_bit: BooleanTag;
}

export interface PitcherPlant {
  upper_block_bit: BooleanTag;
}

export interface Podzol {}

export interface PointedDripstone {
  dripstone_thickness: StringTag<"tip" | "frustum" | "middle" | "base" | "merge">;
  hanging: BooleanTag;
}

export interface PolishedAndesite {}

export interface PolishedAndesiteStairs extends StairsLike {}

export interface PolishedBasalt extends PillarLike {}

export interface PolishedBlackstone {}

export interface PolishedBlackstoneBrickDoubleSlab extends DoubleSlabLike {}

export interface PolishedBlackstoneBrickSlab extends DoubleSlabLike {}

export interface PolishedBlackstoneBrickStairs extends StairsLike {}

export interface PolishedBlackstoneBrickWall extends WallLike {}

export interface PolishedBlackstoneBricks {}

export interface PolishedBlackstoneButton extends ButtonLike {}

export interface PolishedBlackstoneDoubleSlab extends DoubleSlabLike {}

export interface PolishedBlackstonePressurePlate extends Powerable {}

export interface PolishedBlackstoneSlab extends DoubleSlabLike {}

export interface PolishedBlackstoneStairs extends StairsLike {}

export interface PolishedBlackstoneWall extends WallLike {}

export interface PolishedDeepslate {}

export interface PolishedDeepslateDoubleSlab extends DoubleSlabLike {}

export interface PolishedDeepslateSlab extends DoubleSlabLike {}

export interface PolishedDeepslateStairs extends StairsLike {}

export interface PolishedDeepslateWall extends WallLike {}

export interface PolishedDiorite {}

export interface PolishedDioriteStairs extends StairsLike {}

export interface PolishedGranite {}

export interface PolishedGraniteStairs extends StairsLike {}

export interface PolishedTuff {}

export interface PolishedTuffDoubleSlab extends DoubleSlabLike {}

export interface PolishedTuffSlab extends DoubleSlabLike {}

export interface PolishedTuffStairs extends StairsLike {}

export interface PolishedTuffWall extends WallLike {}

export interface Portal {
  portal_axis: StringTag<"unknown" | "x" | "z">;
}

export interface Potatoes {
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface PowderSnow {}

export interface PoweredComparator extends CardinalDirectionLike {
  output_lit_bit: BooleanTag;
  output_subtract_bit: BooleanTag;
}

export interface PoweredRepeater extends CardinalDirectionLike {
  repeater_delay: IntTag<0 | 1 | 2 | 3>;
}

export interface Prismarine {
  prismarine_block_type: StringTag<"default" | "dark" | "bricks">;
}

export interface PrismarineBricksStairs extends StairsLike {}

export interface PrismarineStairs extends StairsLike {}

export interface Pumpkin extends CardinalDirectionLike {}

export interface PumpkinStem extends FacingDirectionLike {
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface PurpleCandle extends CandleLike {}

export interface PurpleCandleCake extends LightLike {}

export interface PurpleCarpet {}

export interface PurpleConcrete {}

export interface PurpleConcretePowder {}

export interface PurpleGlazedTerracotta extends GlazedTerracottaLike {}

export interface PurpleShulkerBox {}

export interface PurpleStainedGlass {}

export interface PurpleStainedGlassPane {}

export interface PurpleTerracotta {}

export interface PurpleWool {}

export interface PurpurBlock extends PillarLike {
  chisel_type: StringTag<"default" | "chiseled" | "lines" | "smooth">;
}

export interface PurpurStairs extends StairsLike {}

export interface QuartzBlock extends PillarLike {
  chisel_type: StringTag<"default" | "chiseled" | "lines" | "smooth">;
}

export interface QuartzBricks {}

export interface QuartzOre {}

export interface QuartzStairs extends StairsLike {}

export interface Rail {
  rail_direction: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9>;
}

export interface RawCopperBlock {}

export interface RawGoldBlock {}

export interface RawIronBlock {}

export interface RedCandle extends CandleLike {}

export interface RedCandleCake extends LightLike {}

export interface RedCarpet {}

export interface RedConcrete {}

export interface RedConcretePowder {}

export interface RedFlower {
  flower_type: StringTag<"poppy" | "orchid" | "allium" | "houstonia" | "tulip_red" | "tulip_orange" | "tulip_white" | "tulip_pink" | "oxeye" | "cornflower" | "lily_of_the_valley">;
}

export interface RedGlazedTerracotta extends GlazedTerracottaLike {}

export interface RedMushroom {}

export interface RedMushroomBlock {
  huge_mushroom_bits: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface RedNetherBrick {}

export interface RedNetherBrickStairs extends StairsLike {}

export interface RedSandstone {
  sand_stone_type: StringTag<"default" | "heiroglyphs" | "cut" | "smooth">;
}

export interface RedSandstoneStairs extends StairsLike {}

export interface RedShulkerBox {}

export interface RedStainedGlass {}

export interface RedStainedGlassPane {}

export interface RedTerracotta {}

export interface RedWool {}

export interface RedstoneBlock {}

export interface RedstoneLamp {}

export interface RedstoneOre {}

export interface RedstoneTorch extends TorchLike {}

export interface RedstoneWire extends Powerable {}

export interface Reeds {
  age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface ReinforcedDeepslate {}

export interface RepeatingCommandBlock extends FacingDirectionLike {
  conditional_bit: BooleanTag;
}

export interface Reserved6 {}

export interface RespawnAnchor {
  respawn_anchor_charge: IntTag<0 | 1 | 2 | 3 | 4>;
}

export interface Sand {
  sand_type: StringTag<"normal" | "red">;
}

export interface Sandstone {
  sand_stone_type: StringTag<"default" | "heiroglyphs" | "cut" | "smooth">;
}

export interface SandstoneStairs extends StairsLike {}

export interface Sapling {
  age_bit: BooleanTag;
  sapling_type: StringTag<"oak" | "spruce" | "birch" | "jungle" | "acacia" | "dark_oak">;
}

export interface Scaffolding {
  stability: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
  stability_check: BooleanTag;
}

export interface Sculk {}

export interface SculkCatalyst {
  bloom: BooleanTag;
}

export interface SculkSensor {
  sculk_sensor_phase: IntTag<0 | 1 | 2>;
}

export interface SculkShrieker {
  active: BooleanTag;
  can_summon: BooleanTag;
}

export interface SculkVein {
  multi_face_direction_bits: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63>;
}

export interface SeaLantern {}

export interface SeaPickle {
  cluster_count: IntTag<0 | 1 | 2 | 3>;
  dead_bit: BooleanTag;
}

export interface Seagrass {
  sea_grass_type: StringTag<"default" | "double_top" | "double_bot">;
}

export interface Shroomlight {}

export interface SilverGlazedTerracotta extends GlazedTerracottaLike {}

export interface Skull extends FacingDirectionLike {}

export interface Slime {}

export interface SmallAmethystBud {
  "minecraft:block_face": StringTag<"down" | "up" | "north" | "south" | "west" | "east">;
}

export interface SmallDripleafBlock extends CardinalDirectionLike {
  upper_block_bit: BooleanTag;
}

export interface SmithingTable {}

export interface Smoker extends CardinalDirectionLike {}

export interface SmoothBasalt {}

export interface SmoothQuartzStairs extends StairsLike {}

export interface SmoothRedSandstoneStairs extends StairsLike {}

export interface SmoothSandstoneStairs extends StairsLike {}

export interface SmoothStone {}

export interface SnifferEgg {
  cracked_state: StringTag<"no_cracks" | "cracked" | "max_cracked">;
}

export interface Snow {}

export interface SnowLayer {
  covered_bit: BooleanTag;
  height: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface SoulCampfire extends CardinalDirectionLike {
  extinguished: BooleanTag;
}

export interface SoulFire {
  age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface SoulLantern {
  hanging: BooleanTag;
}

export interface SoulSand {}

export interface SoulSoil {}

export interface SoulTorch extends TorchLike {}

export interface Sponge {
  sponge_type: StringTag<"dry" | "wet">;
}

export interface SporeBlossom {}

export interface SpruceButton extends ButtonLike {}

export interface SpruceDoor extends DoorLike {}

export interface SpruceDoubleSlab extends DoubleSlabLike {}

export interface SpruceFence {}

export interface SpruceFenceGate extends FenceGateLike {}

export interface SpruceHangingSign extends HangingSignLike {}

export interface SpruceLeaves extends LeavesLike {}

export interface SpruceLog extends PillarLike {}

export interface SprucePlanks {}

export interface SprucePressurePlate extends Powerable {}

export interface SpruceSlab extends DoubleSlabLike {}

export interface SpruceStairs extends StairsLike {}

export interface SpruceStandingSign extends SignLike {}

export interface SpruceTrapdoor extends TrapdoorLike {}

export interface SpruceWallSign extends WallSignLike {}

export interface SpruceWood extends PillarLike {}

export interface StandingBanner extends SignLike {}

export interface StandingSign extends SignLike {}

export interface StickyPiston extends FacingDirectionLike {}

export interface StickyPistonArmCollision extends FacingDirectionLike {}

export interface Stone {}

export interface StoneBlockSlab extends DoubleSlabLike {
  stone_slab_type: StringTag<"smooth_stone" | "sandstone" | "wood" | "cobblestone" | "brick" | "stone_brick" | "quartz" | "nether_brick">;
}

export interface StoneBlockSlab2 extends DoubleSlabLike {
  stone_slab_type_2: StringTag<"red_sandstone" | "purpur" | "prismarine_rough" | "prismarine_dark" | "prismarine_brick" | "mossy_cobblestone" | "smooth_sandstone" | "red_nether_brick">;
}

export interface StoneBlockSlab3 extends DoubleSlabLike {
  stone_slab_type_3: StringTag<"end_stone_brick" | "smooth_red_sandstone" | "polished_andesite" | "andesite" | "diorite" | "polished_diorite" | "granite" | "polished_granite">;
}

export interface StoneBlockSlab4 extends DoubleSlabLike {
  stone_slab_type_4: StringTag<"mossy_stone_brick" | "smooth_quartz" | "stone" | "cut_sandstone" | "cut_red_sandstone">;
}

export interface StoneBrickStairs extends StairsLike {}

export interface StoneButton extends ButtonLike {}

export interface StonePressurePlate extends Powerable {}

export interface StoneStairs extends StairsLike {}

export interface StoneBrick {
  stone_brick_type: StringTag<"default" | "mossy" | "cracked" | "chiseled" | "smooth">;
}

export interface Stonecutter {}

export interface StonecutterBlock extends CardinalDirectionLike {}

export interface StrippedAcaciaLog extends PillarLike {}

export interface StrippedAcaciaWood extends PillarLike {}

export interface StrippedBambooBlock extends PillarLike {}

export interface StrippedBirchLog extends PillarLike {}

export interface StrippedBirchWood extends PillarLike {}

export interface StrippedCherryLog extends PillarLike {}

export interface StrippedCherryWood extends PillarLike {}

export interface StrippedCrimsonHyphae extends PillarLike {}

export interface StrippedCrimsonStem extends PillarLike {}

export interface StrippedDarkOakLog extends PillarLike {}

export interface StrippedDarkOakWood extends PillarLike {}

export interface StrippedJungleLog extends PillarLike {}

export interface StrippedJungleWood extends PillarLike {}

export interface StrippedMangroveLog extends PillarLike {}

export interface StrippedMangroveWood extends PillarLike {}

export interface StrippedOakLog extends PillarLike {}

export interface StrippedOakWood extends PillarLike {}

export interface StrippedSpruceLog extends PillarLike {}

export interface StrippedSpruceWood extends PillarLike {}

export interface StrippedWarpedHyphae extends PillarLike {}

export interface StrippedWarpedStem extends PillarLike {}

export interface StructureBlock {
  structure_block_type: StringTag<"data" | "save" | "load" | "corner" | "invalid" | "export">;
}

export interface StructureVoid {
  structure_void_type: StringTag<"void" | "air">;
}

export interface SuspiciousGravel {
  brushed_progress: IntTag<0 | 1 | 2 | 3>;
  hanging: BooleanTag;
}

export interface SuspiciousSand {
  brushed_progress: IntTag<0 | 1 | 2 | 3>;
  hanging: BooleanTag;
}

export interface SweetBerryBush {
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface Tallgrass {
  tall_grass_type: StringTag<"default" | "tall" | "fern" | "snow">;
}

export interface Target {}

export interface TintedGlass {}

export interface TNT {
  allow_underwater_bit: BooleanTag;
  explode_bit: BooleanTag;
}

export interface Torch extends TorchLike {}

export interface Torchflower {}

export interface TorchflowerCrop {
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface Trapdoor extends TrapdoorLike {}

export interface TrappedChest extends CardinalDirectionLike {}

export interface TrialSpawner {
  trial_spawner_state: IntTag<0 | 1 | 2 | 3 | 4 | 5>;
}

export interface TripWire {
  attached_bit: BooleanTag;
  disarmed_bit: BooleanTag;
  powered_bit: BooleanTag;
  suspended_bit: BooleanTag;
}

export interface TripwireHook extends DirectionLike {
  attached_bit: BooleanTag;
  powered_bit: BooleanTag;
}

export interface TubeCoral {}

export interface Tuff {}

export interface TuffBrickDoubleSlab extends DoubleSlabLike {}

export interface TuffBrickSlab extends DoubleSlabLike {}

export interface TuffBrickStairs extends StairsLike {}

export interface TuffBrickWall extends WallLike {}

export interface TuffBricks {}

export interface TuffDoubleSlab extends DoubleSlabLike {}

export interface TuffSlab extends DoubleSlabLike {}

export interface TuffStairs extends StairsLike {}

export interface TuffWall extends WallLike {}

export interface TurtleEgg {
  cracked_state: StringTag<"no_cracks" | "cracked" | "max_cracked">;
  turtle_egg_count: StringTag<"one_egg" | "two_egg" | "three_egg" | "four_egg">;
}

export interface TwistingVines {
  twisting_vines_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
}

export interface UnderwaterTorch extends TorchLike {}

export interface UndyedShulkerBox {}

export interface Unknown {}

export interface UnlitRedstoneTorch extends TorchLike {}

export interface UnpoweredComparator extends CardinalDirectionLike {
  output_lit_bit: BooleanTag;
  output_subtract_bit: BooleanTag;
}

export interface UnpoweredRepeater extends CardinalDirectionLike {
  repeater_delay: IntTag<0 | 1 | 2 | 3>;
}

export interface Vault extends CardinalDirectionLike {
  vault_state: StringTag<"inactive" | "active" | "unlocking" | "ejecting">;
}

export interface VerdantFroglight extends PillarLike {}

export interface Vine {
  vine_direction_bits: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface WallBanner extends FacingDirectionLike {}

export interface WallSign extends WallSignLike {}

export interface WarpedButton extends ButtonLike {}

export interface WarpedDoor extends DoorLike {}

export interface WarpedDoubleSlab extends DoubleSlabLike {}

export interface WarpedFence {}

export interface WarpedFenceGate extends FenceGateLike {}

export interface WarpedFungus {}

export interface WarpedHangingSign extends HangingSignLike {}

export interface WarpedHyphae extends PillarLike {}

export interface WarpedNylium {}

export interface WarpedPlanks {}

export interface WarpedPressurePlate extends Powerable {}

export interface WarpedRoots {}

export interface WarpedSlab extends DoubleSlabLike {}

export interface WarpedStairs extends StairsLike {}

export interface WarpedStandingSign extends SignLike {}

export interface WarpedStem extends PillarLike {}

export interface WarpedTrapdoor extends TrapdoorLike {}

export interface WarpedWallSign extends WallSignLike {}

export interface WarpedWartBlock {}

export interface Water {
  liquid_depth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15>;
}

export interface Waterlily {}

export interface WaxedChiseledCopper {}

export interface WaxedCopper {}

export interface WaxedCopperBulb extends LightLike {
  powered_bit: BooleanTag;
}

export interface WaxedCopperDoor extends DoorLike {}

export interface WaxedCopperGrate {}

export interface WaxedCopperTrapdoor extends TrapdoorLike {}

export interface WaxedCutCopper {}

export interface WaxedCutCopperSlab extends DoubleSlabLike {}

export interface WaxedCutCopperStairs extends StairsLike {}

export interface WaxedDoubleCutCopperSlab extends DoubleSlabLike {}

export interface WaxedExposedChiseledCopper {}

export interface WaxedExposedCopper {}

export interface WaxedExposedCopperBulb extends LightLike {
  powered_bit: BooleanTag;
}

export interface WaxedExposedCopperDoor extends DoorLike {}

export interface WaxedExposedCopperGrate {}

export interface WaxedExposedCopperTrapdoor extends TrapdoorLike {}

export interface WaxedExposedCutCopper {}

export interface WaxedExposedCutCopperSlab extends DoubleSlabLike {}

export interface WaxedExposedCutCopperStairs extends StairsLike {}

export interface WaxedExposedDoubleCutCopperSlab extends DoubleSlabLike {}

export interface WaxedOxidizedChiseledCopper {}

export interface WaxedOxidizedCopper {}

export interface WaxedOxidizedCopperBulb extends LightLike {
  powered_bit: BooleanTag;
}

export interface WaxedOxidizedCopperDoor extends DoorLike {}

export interface WaxedOxidizedCopperGrate {}

export interface WaxedOxidizedCopperTrapdoor extends TrapdoorLike {}

export interface WaxedOxidizedCutCopper {}

export interface WaxedOxidizedCutCopperSlab extends DoubleSlabLike {}

export interface WaxedOxidizedCutCopperStairs extends StairsLike {}

export interface WaxedOxidizedDoubleCutCopperSlab extends DoubleSlabLike {}

export interface WaxedWeatheredChiseledCopper {}

export interface WaxedWeatheredCopper {}

export interface WaxedWeatheredCopperBulb extends LightLike {
  powered_bit: BooleanTag;
}

export interface WaxedWeatheredCopperDoor extends DoorLike {}

export interface WaxedWeatheredCopperGrate {}

export interface WaxedWeatheredCopperTrapdoor extends TrapdoorLike {}

export interface WaxedWeatheredCutCopper {}

export interface WaxedWeatheredCutCopperSlab extends DoubleSlabLike {}

export interface WaxedWeatheredCutCopperStairs extends StairsLike {}

export interface WaxedWeatheredDoubleCutCopperSlab extends DoubleSlabLike {}

export interface WeatheredChiseledCopper {}

export interface WeatheredCopper {}

export interface WeatheredCopperBulb extends LightLike {
  powered_bit: BooleanTag;
}

export interface WeatheredCopperDoor extends DoorLike {}

export interface WeatheredCopperGrate {}

export interface WeatheredCopperTrapdoor extends TrapdoorLike {}

export interface WeatheredCutCopper {}

export interface WeatheredCutCopperSlab extends DoubleSlabLike {}

export interface WeatheredCutCopperStairs extends StairsLike {}

export interface WeatheredDoubleCutCopperSlab extends DoubleSlabLike {}

export interface Web {}

export interface WeepingVines {
  weeping_vines_age: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25>;
}

export interface Wheat {
  growth: IntTag<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7>;
}

export interface WhiteCandle extends CandleLike {}

export interface WhiteCandleCake extends LightLike {}

export interface WhiteCarpet {}

export interface WhiteConcrete {}

export interface WhiteConcretePowder {}

export interface WhiteGlazedTerracotta extends GlazedTerracottaLike {}

export interface WhiteShulkerBox {}

export interface WhiteStainedGlass {}

export interface WhiteStainedGlassPane {}

export interface WhiteTerracotta {}

export interface WhiteWool {}

export interface WitherRose {}

export interface WoodenButton extends ButtonLike {}

export interface WoodenDoor extends DoorLike {}

export interface WoodenPressurePlate extends Powerable {}

export interface YellowCandle extends CandleLike {}

export interface YellowCandleCake extends LightLike {}

export interface YellowCarpet {}

export interface YellowConcrete {}

export interface YellowConcretePowder {}

export interface YellowFlower {}

export interface YellowGlazedTerracotta extends GlazedTerracottaLike {}

export interface YellowShulkerBox {}

export interface YellowStainedGlass {}

export interface YellowStainedGlassPane {}

export interface YellowTerracotta {}

export interface YellowWool {}

export interface ButtonLike extends FacingDirectionLike {
  button_pressed_bit: BooleanTag;
}

export interface DoubleSlabLike {
  "minecraft:vertical_half": StringTag<DoubleSlabVerticalHalf>;
}

export type DoubleSlabVerticalHalf = "bottom" | "top";

export interface CandleLike extends LightLike {
  candles: IntTag<0 | 1 | 2 | 3>;
}

export interface CardinalDirectionLike {
  "minecraft:cardinal_direction": StringTag<"south" | "west" | "north" | "east">;
}

export interface DirectionLike {
  direction: IntTag<Direction>;
}

export interface DoorLike extends DirectionLike {
  door_hinge_bit: BooleanTag;
  open_bit: BooleanTag;
  upper_block_bit: BooleanTag;
}

export interface FacingDirectionLike {
  facing_direction: IntTag<FacingDirection>;
}

export interface FenceGateLike extends DirectionLike {
  in_wall_bit: BooleanTag;
  open_bit: BooleanTag;
}

export interface GlazedTerracottaLike extends FacingDirectionLike {}

export interface HangingSignLike extends FacingDirectionLike {
  attached_bit: BooleanTag;
  ground_sign_direction: IntTag<SignDirection>;
  hanging: BooleanTag;
}

export interface LeavesLike {
  persistent_bit: BooleanTag;
  update_bit: BooleanTag;
}

export interface LightLike {
  lit: BooleanTag;
}

export interface PillarLike {
  pillar_axis: StringTag<PillarAxis>;
}

export interface Powerable {
  redstone_signal: IntTag<RedstoneSignal>;
}

export interface SignLike {
  ground_sign_direction: IntTag<SignDirection>;
}

export interface StairsLike {
  upside_down_bit: BooleanTag;
  weirdo_direction: IntTag<Direction>;
}

export interface TorchLike {
  torch_facing_direction: StringTag<"unknown" | "west" | "east" | "north" | "south" | "top">;
}

export interface TrapdoorLike extends DirectionLike {
  open_bit: BooleanTag;
  upside_down_bit: BooleanTag;
}

export interface WallLike {
  wall_connection_type_east: StringTag<WallConnectionType>;
  wall_connection_type_north: StringTag<WallConnectionType>;
  wall_connection_type_south: StringTag<WallConnectionType>;
  wall_connection_type_west: StringTag<WallConnectionType>;
  wall_post_bit: BooleanTag;
}

export type WallConnectionType = "none" | "short" | "tall";

export interface WallSignLike extends FacingDirectionLike {}

export type Direction = 0 | 1 | 2 | 3;

export type FacingDirection = 0 | 1 | 2 | 3 | 4 | 5;

export type PillarAxis = "x" | "y" | "z";

export type RedstoneSignal = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export type SignDirection = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

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
  moving_block = "minecraft:moving_block",
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