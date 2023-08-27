import type { BooleanTag, ByteTag, ShortTag, IntTag, LongTag, FloatTag, DoubleTag, StringTag, ByteArrayTag, CompoundTag, IntArrayTag, LongArrayTag } from "nbtify";
import type { BiomeResource } from "./biome.js";
import { BlockResource } from "./block.js";
import type { BlockEntityResource } from "./block-entity.js";
import type { EntityResource } from "./entity.js";
import type { StructureResource } from "./structure.js";

export interface Chunk extends CompoundTag {
  DataVersion: IntTag;
  xPos: IntTag;
  zPos: IntTag;
  yPos: IntTag;
  Status: StringTag;
  LastUpdate: LongTag;
  sections: Section[];
  block_entities: BlockEntity[];
  CarvingMasks: {
    AIR: ByteArrayTag;
    LIQUID: ByteArrayTag;
  };
  Heightmaps: {
    MOTION_BLOCKING: LongArrayTag;
    MOTION_BLOCKING_NO_LEAVES: LongArrayTag;
    OCEAN_FLOOR: LongArrayTag;
    OCEAN_FLOOR_WG: LongArrayTag;
    WORLD_SURFACE: LongArrayTag;
    WORLD_SURFACE_WG: LongArrayTag;
  };
  Lights: ShortTag[][];
  Entities: Entity[];
  fluid_ticks: TileTick[];
  block_ticks: TileTick[];
  InhabitedTime: LongTag;
  PostProcessing: ToBeTicked[];
  structures: {
    References: {
      [K in StructureResource]?: LongArrayTag;
    };
    starts: {
      [K in StructureResource]?: Structure;
    };
  };
}

export interface Section extends CompoundTag {
  Y: ByteTag;
  block_states: {
    palette: BlockState[];
    data?: LongArrayTag;
  };
  biomes: {
    palette: BiomeResource[];
    data?: LongArrayTag;
  };
  BlockLight: ByteArrayTag;
  SkyLight: ByteArrayTag;
}

export interface BlockState extends CompoundTag {
  Name: BlockResource;
  [property: string]: any;
}

export interface BlockEntity extends CompoundTag {
  id: BlockEntityResource;
  keepPacked: BooleanTag;
  x: IntTag;
  y: IntTag;
  z: IntTag;
  [property: string]: any;
}

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

export type Scoreboard = unknown;

export enum TileTickResource {
  repeater = BlockResource.repeater,
  redstone_torch = BlockResource.redstone_torch,
  redstone_wall_torch = BlockResource.redstone_wall_torch,
  comparator = BlockResource.comparator,
  observer = BlockResource.observer,
  dispenser = BlockResource.dispenser,
  dropper = BlockResource.dropper,
  chain_command_block = BlockResource.chain_command_block,
  command_block = BlockResource.command_block,
  repeating_command_block = BlockResource.repeating_command_block,
  water = BlockResource.water,
  lava = BlockResource.lava,
  red_sand = BlockResource.red_sand,
  sand = BlockResource.sand,
  suspicious_sand = BlockResource.suspicious_sand,
  acacia_button = BlockResource.acacia_button,
  birch_button = BlockResource.birch_button,
  crimson_button = BlockResource.crimson_button,
  dark_oak_button = BlockResource.dark_oak_button,
  jungle_button = BlockResource.jungle_button,
  oak_button = BlockResource.oak_button,
  polished_blackstone_button = BlockResource.polished_blackstone_button,
  spruce_button = BlockResource.spruce_button,
  stone_button = BlockResource.stone_button,
  warped_button = BlockResource.warped_button,
  mangrove_button = BlockResource.mangrove_button,
  bamboo_button = BlockResource.bamboo_button,
  cherry_button = BlockResource.cherry_button,
  acacia_pressure_plate = BlockResource.acacia_pressure_plate,
  birch_pressure_plate = BlockResource.birch_pressure_plate,
  crimson_pressure_plate = BlockResource.crimson_pressure_plate,
  dark_oak_pressure_plate = BlockResource.dark_oak_pressure_plate,
  heavy_weighted_pressure_plate = BlockResource.heavy_weighted_pressure_plate,
  jungle_pressure_plate = BlockResource.jungle_pressure_plate,
  light_weighted_pressure_plate = BlockResource.light_weighted_pressure_plate,
  oak_pressure_plate = BlockResource.oak_pressure_plate,
  polished_blackstone_pressure_plate = BlockResource.polished_blackstone_pressure_plate,
  spruce_pressure_plate = BlockResource.spruce_pressure_plate,
  stone_pressure_plate = BlockResource.stone_pressure_plate,
  warped_pressure_plate = BlockResource.warped_pressure_plate,
  mangrove_pressure_plate = BlockResource.mangrove_pressure_plate,
  bamboo_pressure_plate = BlockResource.bamboo_pressure_plate,
  cherry_pressure_plate = BlockResource.cherry_pressure_plate,
  detector_rail = BlockResource.detector_rail,
  tripwire_hook = BlockResource.tripwire_hook,
  redstone_lamp = BlockResource.redstone_lamp
}

export interface TileTick extends CompoundTag {
  i: TileTickResource;
  p: IntTag;
  t: IntTag;
  x: IntTag;
  y: IntTag;
  z: IntTag;
}

export type ToBeTicked = ShortTag[];

export interface Structure extends CompoundTag {
  BB: IntArrayTag;
  biome: BiomeResource;
  Children: StructurePiece[];
  ChunkX: IntTag;
  ChunkZ: IntTag;
  id: StringTag;
  Processed: MonumentProcessed[];
  Valid: BooleanTag;
  [property: string]: any;
}

export interface StructurePiece extends CompoundTag {
  BB: IntArrayTag;
  BiomeType: "WARM" | "COLD";
  C: ByteTag;
  CA: VillageBlock;
  CB: VillageBlock;
  CC: VillageBlock;
  CD: VillageBlock;
  Chest: BooleanTag;
  D: IntTag;
  Depth: IntTag;
  Entrances: IntArrayTag[];
  EntryDoor: StringTag;
  GD: IntTag;
  hasPlacedChest0: BooleanTag;
  hasPlacedChest1: BooleanTag;
  hasPlacedChest2: BooleanTag;
  hasPlacedChest3: BooleanTag;
  Height: IntTag;
  HPos: IntTag;
  hps: BooleanTag;
  hr: BooleanTag;
  id: StringTag;
  integrity: FloatTag;
  isLarge: BooleanTag;
  junctions: VillageJunction[];
  Left: BooleanTag;
  leftHigh: BooleanTag;
  leftLow: BooleanTag;
  Length: IntTag;
  Mob: BooleanTag;
  Num: IntTag;
  O: IntTag;
  placedHiddenCHest: BooleanTag;
  placedMainChest: BooleanTag;
  placedTrap1: BooleanTag;
  placedTrap2: BooleanTag;
  PosX: IntTag;
  PosY: IntTag;
  PosZ: IntTag;
  Right: BooleanTag;
  rightHigh: BooleanTag;
  rightLow: BooleanTag;
  Rot: "COUNTERCLOCKWISE_90" | "NONE" | "CLOCKWISE_90" | "CLOCKWISE_180";
  sc: BooleanTag;
  Seed: IntTag;
  Source: BooleanTag;
  Steps: IntTag;
  T: IntTag;
  Tall: BooleanTag;
  Template: StringTag;
  Terrace: BooleanTag;
  tf: BooleanTag;
  TPX: IntTag;
  TPY: IntTag;
  TPZ: IntTag;
  Type: ByteTag<0 | 1 | 2 | 3>;
  Type__stronghold__: IntTag;
  VCount: IntTag;
  Width: IntTag;
  Witch: BooleanTag;
  Zombie: BooleanTag;
}

export interface VillageBlock extends CompoundTag {
  Name: BlockResource;
  Properties: BlockState;
}

export interface VillageJunction extends CompoundTag {
  source_x: IntTag;
  source_ground_y: IntTag;
  source_z: IntTag;
  delta_y: IntTag;
  dest_proj: "terrain_matching" | "rigid";
}

export interface MonumentProcessed extends CompoundTag {
  X: IntTag;
  Z: IntTag;
}