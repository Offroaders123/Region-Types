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
  barrel = "minecraft:barrel",
  beacon = "minecraft:beacon",
  bed = "minecraft:bed",
  beehive = "minecraft:beehive",
  bell = "minecraft:bell",
  blast_furnace = "minecraft:blast_furnace",
  brewing_stand = "minecraft:brewing_stand",
  campfire = "minecraft:campfire",
  chest = "minecraft:chest",
  chiseled_bookshelf = "minecraft:chiseled_bookshelf",
  comparator = "minecraft:comparator",
  command_block = "minecraft:command_block",
  conduit = "minecraft:conduit",
  daylight_detector = "minecraft:daylight_detector",
  dispenser = "minecraft:dispenser",
  dropper = "minecraft:dropper",
  enchanting_table = "minecraft:enchanting_table",
  ender_chest = "minecraft:ender_chest",
  end_gateway = "minecraft:end_gateway",
  end_portal = "minecraft:end_portal",
  furnace = "minecraft:furnace",
  hopper = "minecraft:hopper",
  jigsaw = "minecraft:jigsaw",
  jukebox = "minecraft:jukebox",
  lectern = "minecraft:lectern",
  spawner = "minecraft:spawner",
  piston = "minecraft:piston",
  shulker_box = "minecraft:shulker_box",
  sign = "minecraft:sign",
  skull = "minecraft:skull",
  smoker = "minecraft:smoker",
  soul_campfire = "minecraft:soul_campfire",
  structure_block = "minecraft:structure_block",
  trapped_chest = "minecraft:trapped_chest"
}