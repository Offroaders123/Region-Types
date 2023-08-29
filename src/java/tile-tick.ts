import { BlockResource } from "./block.js";

import type { IntTag, CompoundTag } from "nbtify";

export interface TileTick extends CompoundTag {
  i: TileTickResource;
  p: IntTag;
  t: IntTag;
  x: IntTag;
  y: IntTag;
  z: IntTag;
}

export type TileTickResource = typeof TileTickResource[keyof typeof TileTickResource];

export const TileTickResource = {
  repeater: BlockResource.repeater,
  redstone_torch: BlockResource.redstone_torch,
  redstone_wall_torch: BlockResource.redstone_wall_torch,
  comparator: BlockResource.comparator,
  observer: BlockResource.observer,
  dispenser: BlockResource.dispenser,
  dropper: BlockResource.dropper,
  chain_command_block: BlockResource.chain_command_block,
  command_block: BlockResource.command_block,
  repeating_command_block: BlockResource.repeating_command_block,
  water: BlockResource.water,
  lava: BlockResource.lava,
  red_sand: BlockResource.red_sand,
  sand: BlockResource.sand,
  suspicious_sand: BlockResource.suspicious_sand,
  acacia_button: BlockResource.acacia_button,
  birch_button: BlockResource.birch_button,
  crimson_button: BlockResource.crimson_button,
  dark_oak_button: BlockResource.dark_oak_button,
  jungle_button: BlockResource.jungle_button,
  oak_button: BlockResource.oak_button,
  polished_blackstone_button: BlockResource.polished_blackstone_button,
  spruce_button: BlockResource.spruce_button,
  stone_button: BlockResource.stone_button,
  warped_button: BlockResource.warped_button,
  mangrove_button: BlockResource.mangrove_button,
  bamboo_button: BlockResource.bamboo_button,
  cherry_button: BlockResource.cherry_button,
  acacia_pressure_plate: BlockResource.acacia_pressure_plate,
  birch_pressure_plate: BlockResource.birch_pressure_plate,
  crimson_pressure_plate: BlockResource.crimson_pressure_plate,
  dark_oak_pressure_plate: BlockResource.dark_oak_pressure_plate,
  heavy_weighted_pressure_plate: BlockResource.heavy_weighted_pressure_plate,
  jungle_pressure_plate: BlockResource.jungle_pressure_plate,
  light_weighted_pressure_plate: BlockResource.light_weighted_pressure_plate,
  oak_pressure_plate: BlockResource.oak_pressure_plate,
  polished_blackstone_pressure_plate: BlockResource.polished_blackstone_pressure_plate,
  spruce_pressure_plate: BlockResource.spruce_pressure_plate,
  stone_pressure_plate: BlockResource.stone_pressure_plate,
  warped_pressure_plate: BlockResource.warped_pressure_plate,
  mangrove_pressure_plate: BlockResource.mangrove_pressure_plate,
  bamboo_pressure_plate: BlockResource.bamboo_pressure_plate,
  cherry_pressure_plate: BlockResource.cherry_pressure_plate,
  detector_rail: BlockResource.detector_rail,
  tripwire_hook: BlockResource.tripwire_hook,
  redstone_lamp: BlockResource.redstone_lamp
} as const;