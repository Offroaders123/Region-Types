import type { BooleanTag, ByteTag, ShortTag, IntTag, LongTag, StringTag, IntArrayTag } from "nbtify";
import type { EffectID } from "./effect.js";
import type { Entity } from "./entity.js";
import type { Item } from "./item.js";

export type BlockEntity = Banner | Barrel | Beacon | Beehive | BlastFurnace | BrewingStand | BrushableBlock | CalibratedSculkSensor | Campfire;

export interface Banner extends BlockEntityLike {
  id: typeof BlockEntityResource.banner;
  CustomName?: StringTag;
  Patterns: BannerPattern[];
}

export interface BannerPattern {
  Color: IntTag<BannerPatternColor>;
  Pattern: BannerPatternResource;
}

export type BannerPatternColor = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export type BannerPatternResource = "b" | "bs" | "ts" | "ls" | "rs" | "cs" | "ms" | "drs" | "dls" | "ss" | "cr" | "sc" | "ld" | "rud" | "lud" | "rd" | "vh" | "vhr" | "hh" | "hhb" | "bl" | "br" | "tl" | "tr" | "bt" | "tt" | "bts" | "tts" | "mc" | "mr" | "bo" | "cbo" | "bri" | "gra" | "gru" | "cre" | "sku" | "flo" | "moj" | "glb" | "pig";

export interface Barrel extends BlockEntityLike {
  id: typeof BlockEntityResource.barrel;
  CustomName?: StringTag;
  Items: Item[];
  Lock?: StringTag;
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: LongTag;
}

export interface Beacon extends BlockEntityLike {
  id: typeof BlockEntityResource.beacon;
  CustomName?: StringTag;
  Lock?: StringTag;
  Levels: IntTag<BeaconLevel>;
  Primary: IntTag<BeaconEffectID>;
  Secondary: IntTag<BeaconEffectID>;
}

export type BeaconLevel = 0 | 1 | 2 | 3 | 4;

export type BeaconEffectID = -1 | EffectID;

export interface Beehive extends BlockEntityLike {
  id: typeof BlockEntityResource.beehive;
  Bees: BeehiveEntity[];
  FlowerPos: BeehiveFlower;
}

export interface BeehiveEntity {
  EntityData: Entity; // Probably should allow only `BeeEntity` once that's implemented? Wiki doesn't specify
  MinOccupationTicks: IntTag;
  TicksInHive: IntTag;
}

export interface BeehiveFlower {
  X: IntTag;
  Y: IntTag;
  Z: IntTag;
}

export interface BlastFurnace extends BlockEntityLike {
  id: typeof BlockEntityResource.blast_furnace;
  BurnTime: ShortTag;
  CookTime: ShortTag;
  CookTimeTotal: ShortTag;
  CustomName?: StringTag;
  Items: Item[];
  Lock?: StringTag;
  RecipesUsed: BlastFurnaceRecipesUsed;
}

export interface BlastFurnaceRecipesUsed {
  [id: number]: IntTag; // Use `RecipeID` for the index once that is implemented.
}

export interface BrewingStand extends BlockEntityLike {
  id: typeof BlockEntityResource.brewing_stand;
  BrewTime: ShortTag;
  CustomName?: StringTag;
  Fuel: ByteTag<BrewingStandFuelLevel>;
  Items: Item[];
  Lock?: StringTag;
}

export type BrewingStandFuelLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

export interface BrushableBlock extends BlockEntityLike {
  id: typeof BlockEntityResource.brushable_block;
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: LongTag;
  item?: Item; // Should this be uppercase? The wiki showed lowercase
}

export interface CalibratedSculkSensor extends BlockEntityLike {
  id: typeof BlockEntityResource.calibrated_sculk_sensor;
  // This one doesn't have documention yet :P
}

export interface Campfire extends BlockEntityLike {
  id: typeof BlockEntityResource.campfire;
  CookingTimes: IntArrayTag;
  CookingTotalTimes: IntArrayTag;
  Items: Item[]; // Should be `[Item,Item,Item,Item]`, but I want the values to be optional. They're not always present there!
}

export interface BlockEntityLike {
  id: BlockEntityResource;
  keepPacked: BooleanTag;
  x: IntTag;
  y: IntTag;
  z: IntTag;
}

export type BlockEntityResource = typeof BlockEntityResource[keyof typeof BlockEntityResource];

export const BlockEntityResource = {
  banner: "minecraft:banner",
  barrel: "minecraft:barrel",
  beacon: "minecraft:beacon",
  bed: "minecraft:bed",
  beehive: "minecraft:beehive",
  bell: "minecraft:bell",
  blast_furnace: "minecraft:blast_furnace",
  brewing_stand: "minecraft:brewing_stand",
  brushable_block: "minecraft:brushable_block",
  calibrated_sculk_sensor: "minecraft:calibrated_sculk_sensor",
  campfire: "minecraft:campfire",
  chest: "minecraft:chest",
  chiseled_bookshelf: "minecraft:chiseled_bookshelf",
  comparator: "minecraft:comparator",
  command_block: "minecraft:command_block",
  conduit: "minecraft:conduit",
  daylight_detector: "minecraft:daylight_detector",
  decorated_pot: "minecraft:decorated_pot",
  dispenser: "minecraft:dispenser",
  dropper: "minecraft:dropper",
  enchanting_table: "minecraft:enchanting_table",
  ender_chest: "minecraft:ender_chest",
  end_gateway: "minecraft:end_gateway",
  end_portal: "minecraft:end_portal",
  furnace: "minecraft:furnace",
  hanging_sign: "minecraft:hanging_sign",
  hopper: "minecraft:hopper",
  jigsaw: "minecraft:jigsaw",
  jukebox: "minecraft:jukebox",
  lectern: "minecraft:lectern",
  mob_spawner: "minecraft:mob_spawner",
  piston: "minecraft:piston",
  sculk_catalyst: "minecraft:sculk_catalyst",
  sculk_sensor: "minecraft:sculk_sensor",
  sculk_shrieker: "minecraft:sculk_shrieker",
  shulker_box: "minecraft:shulker_box",
  sign: "minecraft:sign",
  skull: "minecraft:skull",
  smoker: "minecraft:smoker",
  structure_block: "minecraft:structure_block",
  trapped_chest: "minecraft:trapped_chest"
} as const;