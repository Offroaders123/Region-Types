import type { BooleanTag, ByteTag, IntTag, FloatTag, StringTag, IntArrayTag } from "nbtify";
import type { BiomeResource } from "./biome.js";
import type { BlockState, BlockResource } from "./block.js";

export interface Structure {
  BB: IntArrayTag;
  biome: `${BiomeResource}`;
  Children: StructurePiece[];
  ChunkX: IntTag;
  ChunkZ: IntTag;
  id: StringTag;
  Processed: MonumentProcessed[];
  Valid: BooleanTag;
  [property: string]: any;
}

export interface StructurePiece {
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

export interface VillageBlock {
  Name: `${BlockResource}`;
  Properties: BlockState;
}

export interface VillageJunction {
  source_x: IntTag;
  source_ground_y: IntTag;
  source_z: IntTag;
  delta_y: IntTag;
  dest_proj: "terrain_matching" | "rigid";
}

export interface MonumentProcessed {
  X: IntTag;
  Z: IntTag;
}

export enum StructureResource {
  ancient_city = "minecraft:ancient_city",
  bastion_remnant = "minecraft:bastion_remnant",
  buried_treasure = "minecraft:buried_treasure",
  end_city = "minecraft:end_city",
  fortress = "minecraft:fortress",
  mansion = "minecraft:mansion",
  mineshaft = "minecraft:mineshaft",
  mineshaft_mesa = "minecraft:mineshaft_mesa",
  monument = "minecraft:monument",
  nether_fossil = "minecraft:nether_fossil",
  ocean_ruin_cold = "minecraft:ocean_ruin_cold",
  ocean_ruin_warm = "minecraft:ocean_ruin_warm",
  pillager_outpost = "minecraft:pillager_outpost",
  ruined_portal = "minecraft:ruined_portal",
  ruined_portal_desert = "minecraft:ruined_portal_desert",
  ruined_portal_jungle = "minecraft:ruined_portal_jungle",
  ruined_portal_mountain = "minecraft:ruined_portal_mountain",
  ruined_portal_nether = "minecraft:ruined_portal_nether",
  ruined_portal_ocean = "minecraft:ruined_portal_ocean",
  ruined_portal_swamp = "minecraft:ruined_portal_swamp",
  shipwreck = "minecraft:shipwreck",
  shipwreck_beached = "minecraft:shipwreck_beached",
  stronghold = "minecraft:stronghold",
  desert_pyramid = "minecraft:desert_pyramid",
  igloo = "minecraft:igloo",
  jungle_pyramid = "minecraft:jungle_pyramid",
  swamp_hut = "minecraft:swamp_hut",
  trail_ruins = "minecraft:trail_ruins",
  village_desert = "minecraft:village_desert",
  village_plains = "minecraft:village_plains",
  village_savanna = "minecraft:village_savanna",
  village_snowy = "minecraft:village_snowy",
  village_taiga = "minecraft:village_taiga"
}