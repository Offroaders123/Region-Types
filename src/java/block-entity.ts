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
  brushable_block = "minecraft:brushable_block",
  calibrated_sculk_sensor = "minecraft:calibrated_sculk_sensor",
  campfire = "minecraft:campfire",
  chest = "minecraft:chest",
  chiseled_bookshelf = "minecraft:chiseled_bookshelf",
  comparator = "minecraft:comparator",
  command_block = "minecraft:command_block",
  conduit = "minecraft:conduit",
  daylight_detector = "minecraft:daylight_detector",
  decorated_pot = "minecraft:decorated_pot",
  dispenser = "minecraft:dispenser",
  dropper = "minecraft:dropper",
  enchanting_table = "minecraft:enchanting_table",
  ender_chest = "minecraft:ender_chest",
  end_gateway = "minecraft:end_gateway",
  end_portal = "minecraft:end_portal",
  furnace = "minecraft:furnace",
  hanging_sign = "minecraft:hanging_sign",
  hopper = "minecraft:hopper",
  jigsaw = "minecraft:jigsaw",
  jukebox = "minecraft:jukebox",
  lectern = "minecraft:lectern",
  mob_spawner = "minecraft:mob_spawner",
  piston = "minecraft:piston",
  sculk_catalyst = "minecraft:sculk_catalyst",
  sculk_sensor = "minecraft:sculk_sensor",
  sculk_shrieker = "minecraft:sculk_shrieker",
  shulker_box = "minecraft:shulker_box",
  sign = "minecraft:sign",
  skull = "minecraft:skull",
  smoker = "minecraft:smoker",
  structure_block = "minecraft:structure_block",
  trapped_chest = "minecraft:trapped_chest"
}