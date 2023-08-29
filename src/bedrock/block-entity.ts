export type BlockEntityResource = typeof BlockEntityResource[keyof typeof BlockEntityResource];

export const BlockEntityResource = {
  Banner: "minecraft:Banner",
  Barrel: "minecraft:Barrel",
  Beacon: "minecraft:Beacon",
  Bed: "minecraft:Bed",
  Beehive: "minecraft:Beehive",
  Bell: "minecraft:Bell",
  BlastFurnace: "minecraft:BlastFurnace",
  BrewingStand: "minecraft:BrewingStand",
  BrushableBlock: "minecraft:BrushableBlock", // Sus
  CalibratedSculkSensor: "minecraft:CalibratedSculkSensor",
  Campfire: "minecraft:Campfire",
  Cauldron: "minecraft:Cauldron",
  Chalkboard: "minecraft:Chalkboard", // unknown, not on the wiki
  Chest: "minecraft:Chest",
  ChiseledBookshelf: "minecraft:ChiseledBookshelf",
  Comparator: "minecraft:Comparator",
  CompoundCreator: "minecraft:CompoundCreator", // ID not on the wiki
  CommandBlock: "minecraft:CommandBlock",
  Conduit: "minecraft:Conduit",
  DaylightDetector: "minecraft:DaylightDetector",
  DecoratedPot: "minecraft:DecoratedPot",
  Dispenser: "minecraft:Dispenser",
  Dropper: "minecraft:Dropper",
  EnchantTable: "minecraft:EnchantTable",
  EnderChest: "minecraft:EnderChest",
  EndGateway: "minecraft:EndGateway",
  EndPortal: "minecraft:EndPortal",
  ElementConstructor: "minecraft:ElementConstructor", // also guessed
  FlowerPot: "minecraft:FlowerPot", // ID not listed on the wiki
  Furnace: "minecraft:Furnace",
  GlowItemFrame: "minecraft:GlowItemFrame",
  HangingSign: "minecraft:HangingSign",
  Hopper: "minecraft:Hopper",
  ItemFrame: "minecraft:ItemFrame",
  JigsawBlock: "minecraft:JigsawBlock",
  Jukebox: "minecraft:Jukebox",
  LabTable: "minecraft:LabTable", // guessed
  Lectern: "minecraft:Lectern",
  Lodestone: "minecraft:Lodestone", // ID not on the wiki
  MaterialReducer: "minecraft:MaterialReducer", // guessed
  MobSpawner: "minecraft:MobSpawner",
  MovingBlock: "minecraft:MovingBlock", // Related to Piston block movement
  Music: "minecraft:Music", // Note Block
  NetherReactor: "minecraft:NetherReactor",
  PistonArm: "minecraft:PistonArm",
  Poster: "minecraft:Poster", // might be part of Chalkboard?
  SculkCatalyst: "minecraft:SculkCatalyst",
  SculkSensor: "minecraft:SculkSensor",
  SculkShrieker: "minecraft:SculkShrieker",
  ShulkerBox: "minecraft:ShulkerBox",
  Sign: "minecraft:Sign",
  Skull: "minecraft:Skull",
  Slate: "minecraft:Slate", // also unknown
  Smoker: "minecraft:Smoker",
  StructureBlock: "minecraft:StructureBlock"
} as const;