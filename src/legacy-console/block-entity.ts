export type BlockEntity<K extends keyof BlockEntityNameMap = keyof BlockEntityNameMap> = BlockEntityNameMap[K];

export type BlockEntityNameMap = {
  // temp, also unsure of all of the values here yet
  [K in BlockEntityResource]: BlockEntityLike<K>;
};

export interface BlockEntityLike<BlockEntityID extends string> {
  id: `${BlockEntityID}`;
}

export enum BlockEntityResource {
  Airportal = "Airportal",
  Banner = "Banner",
  Beacon = "Beacon",
  Cauldron = "Cauldron",
  Chest = "Chest",
  Comparator = "Comparator",
  DLDetector = "DLDetector",
  Dropper = "Dropper",
  EnchantTable = "EnchantTable",
  EndGateway = "EndGateway",
  EnderChest = "EnderChest",
  FlowerPot = "FlowerPot",
  Furnace = "Furnace",
  Hopper = "Hopper",
  MobSpawner = "MobSpawner",
  Music = "Music",
  Piston = "Piston",
  RecordPlayer = "RecordPlayer",
  Sign = "Sign",
  Skull = "Skull",
  Trap = "Trap",
  banner = "banner",
  beacon = "beacon",
  bed = "bed",
  brewing_stand = "brewing_stand",
  cauldron = "cauldron",
  chest = "chest",
  comparator = "comparator",
  conduit = "conduit",
  daylight_detector = "daylight_detector",
  dispenser = "dispenser",
  dropper = "dropper",
  enchanting_table = "enchanting_table",
  end_gateway = "end_gateway",
  end_portal = "end_portal",
  ender_Chest = "ender_Chest",
  ender_chest = "ender_chest",
  flower_pot = "flower_pot",
  furnace = "furnace",
  hopper = "hopper",
  jukebox = "jukebox",
  mob_spawner = "mob_spawner",
  noteblock = "noteblock",
  piston = "piston",
  shulker_box = "shulker_box",
  sign = "sign",
  skull = "skull"
}