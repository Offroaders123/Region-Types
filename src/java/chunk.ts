import type { BooleanTag, ByteTag, ShortTag, IntTag, LongTag, FloatTag, DoubleTag, StringTag, ByteArrayTag, CompoundTag, IntArrayTag, LongArrayTag } from "nbtify";
import type { Biome } from "./biome.js";
import type { Block } from "./block.js";
import type { BlockEntity as BlockEntityLocation } from "./block-entity.js";
import type { Entity as EntityLocation } from "./entity.js";
import type { Structure as StructureLocation } from "./structure.js";

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
      [K in StructureLocation]?: LongArrayTag;
    };
    starts: {
      [K in StructureLocation]?: Structure;
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
    palette: Biome[];
    data?: LongArrayTag;
  };
  BlockLight: ByteArrayTag;
  SkyLight: ByteArrayTag;
}

export interface BlockState extends CompoundTag {
  Name: Block;
  [property: string]: any;
}

export interface BlockEntity extends CompoundTag {
  id: BlockEntityLocation;
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
  id: EntityLocation;
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

export type TileTickResource =
  | "minecraft:repeater"
  | "minecraft:redstone_torch"
  | "minecraft:redstone_wall_torch"
  | "minecraft:comparator"
  | "minecraft:observer"
  | "minecraft:dispenser"
  | "minecraft:dropper"
  | "minecraft:chain_command_block"
  | "minecraft:command_block"
  | "minecraft:repeating_command_block"
  | "minecraft:water"
  | "minecraft:lava"
  | "minecraft:red_sand"
  | "minecraft:sand"
  | "minecraft:suspicious_sand"
  | "minecraft:acacia_button"
  | "minecraft:birch_button"
  | "minecraft:crimson_button"
  | "minecraft:dark_oak_button"
  | "minecraft:jungle_button"
  | "minecraft:oak_button"
  | "minecraft:polished_blackstone_button"
  | "minecraft:spruce_button"
  | "minecraft:stone_button"
  | "minecraft:warped_button"
  | "minecraft:mangrove_button"
  | "minecraft:bamboo_button"
  | "minecraft:cherry_button"
  | "minecraft:pressure_plate"
  | "minecraft:detector_rail"
  | "minecraft:tripwire_hook"
  | "minecraft:redstone_lamp";

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
  biome: Biome;
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
  Name: Block;
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