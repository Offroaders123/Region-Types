import { BlockResource } from "./block.js";

import type { BooleanTag, IntTag, CompoundTag } from "nbtify";

export interface BlockEntity extends CompoundTag {
  id: BlockEntityResource;
  keepPacked: BooleanTag;
  x: IntTag;
  y: IntTag;
  z: IntTag;
  [property: string]: any;
}

export enum BlockEntityResource {
  banner = "minecraft:banner",
  barrel = BlockResource.barrel,
  beacon = BlockResource.beacon,
  bed = "minecraft:bed",
  beehive = BlockResource.beehive,
  bell = BlockResource.bell,
  blast_furnace = BlockResource.blast_furnace,
  brewing_stand = BlockResource.brewing_stand,
  campfire = BlockResource.campfire,
  chest = BlockResource.chest,
  chiseled_bookshelf = BlockResource.chiseled_bookshelf,
  comparator = BlockResource.comparator,
  command_block = BlockResource.command_block,
  conduit = BlockResource.conduit,
  daylight_detector = BlockResource.daylight_detector,
  dispenser = BlockResource.dispenser,
  dropper = BlockResource.dropper,
  enchanting_table = BlockResource.enchanting_table,
  ender_chest = BlockResource.ender_chest,
  end_gateway = BlockResource.end_gateway,
  end_portal = BlockResource.end_portal,
  furnace = BlockResource.furnace,
  hopper = BlockResource.hopper,
  jigsaw = BlockResource.jigsaw,
  jukebox = BlockResource.jukebox,
  lectern = BlockResource.lectern,
  mob_spawner = "minecraft:mob_spawner",
  piston = BlockResource.piston,
  shulker_box = BlockResource.shulker_box,
  sign = "minecraft:sign",
  skull = "minecraft:skull",
  smoker = BlockResource.smoker,
  soul_campfire = BlockResource.soul_campfire,
  structure_block = BlockResource.structure_block,
  trapped_chest = BlockResource.trapped_chest
}