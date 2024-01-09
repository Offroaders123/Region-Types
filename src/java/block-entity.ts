import type { BooleanTag, ByteTag, ShortTag, IntTag, LongTag, FloatTag, StringTag, IntArrayTag } from "nbtify";
import type { BlockState, BlockResource } from "./block.js";
import type { EffectID } from "./effect.js";
import type { Entity } from "./entity.js";
import type { Item } from "./item.js";

export type BlockEntity = Banner | Barrel | Beacon | Beehive | BlastFurnace | BrewingStand | BrushableBlock | CalibratedSculkSensor | Campfire | Chest | ChiseledBookshelf | Comparator | CommandBlock | Conduit | Dispenser | Dropper | EnchantingTable | EndGateway | Furnace | HangingSign | Hopper | Jigsaw | Jukebox | Lectern | MobSpawner | Piston | SculkCatalyst | SculkSensor | SculkShrieker | ShulkerBox | Sign | Skull | Smoker | SoulCampfire | StructureBlock | TrappedChest;

export interface Banner extends BlockEntityLike<BlockEntityResource.banner> {
  CustomName?: StringTag;
  Patterns: BannerPattern[];
}

export interface BannerPattern {
  Color: IntTag<BannerPatternColor>;
  Pattern: BannerPatternResource;
}

export type BannerPatternColor = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export type BannerPatternResource = "b" | "bs" | "ts" | "ls" | "rs" | "cs" | "ms" | "drs" | "dls" | "ss" | "cr" | "sc" | "ld" | "rud" | "lud" | "rd" | "vh" | "vhr" | "hh" | "hhb" | "bl" | "br" | "tl" | "tr" | "bt" | "tt" | "bts" | "tts" | "mc" | "mr" | "bo" | "cbo" | "bri" | "gra" | "gru" | "cre" | "sku" | "flo" | "moj" | "glb" | "pig";

export interface Barrel extends BlockEntityLike<BlockEntityResource.barrel> {
  CustomName?: StringTag;
  Items: Item[];
  Lock?: StringTag;
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: LongTag;
}

export interface Beacon extends BlockEntityLike<BlockEntityResource.beacon> {
  CustomName?: StringTag;
  Lock?: StringTag;
  Levels: IntTag<BeaconLevel>;
  Primary: IntTag<BeaconEffectID>;
  Secondary: IntTag<BeaconEffectID>;
}

export type BeaconLevel = 0 | 1 | 2 | 3 | 4;

export type BeaconEffectID = -1 | EffectID;

export interface Beehive extends BlockEntityLike<BlockEntityResource.beehive> {
  Bees: BeehiveEntity[];
  FlowerPos: BeehiveFlower;
}

export interface BeehiveEntity {
  EntityData: Entity<"bee">; // Probably should allow only `BeeEntity` once that's implemented? Wiki doesn't specify
  MinOccupationTicks: IntTag;
  TicksInHive: IntTag;
}

export interface BeehiveFlower {
  X: IntTag;
  Y: IntTag;
  Z: IntTag;
}

export interface BlastFurnace extends BlockEntityLike<BlockEntityResource.blast_furnace> {
  BurnTime: ShortTag;
  CookTime: ShortTag;
  CookTimeTotal: ShortTag;
  CustomName?: StringTag;
  Items: Item[]; // Like `Campfire`, this should really be `[Item,Item,Item]`.
  Lock?: StringTag;
  RecipesUsed: BlastFurnaceRecipesUsed;
}

export interface BlastFurnaceRecipesUsed {
  [id: number]: IntTag; // Use `BlastFurnaceRecipeID` for the index once that is implemented.
}

export interface BrewingStand extends BlockEntityLike<BlockEntityResource.brewing_stand> {
  BrewTime: ShortTag;
  CustomName?: StringTag;
  Fuel: ByteTag<BrewingStandFuelLevel>;
  Items: Item[];
  Lock?: StringTag;
}

export type BrewingStandFuelLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;

export interface BrushableBlock extends BlockEntityLike<BlockEntityResource.brushable_block> {
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: LongTag;
  item?: Item; // Should this be uppercase? The wiki showed lowercase
}

export interface CalibratedSculkSensor extends BlockEntityLike<BlockEntityResource.calibrated_sculk_sensor> {
  // This one doesn't have documention yet :P
}

export interface Campfire extends BlockEntityLike<BlockEntityResource.campfire> {
  CookingTimes: IntArrayTag;
  CookingTotalTimes: IntArrayTag;
  Items: Item[]; // Should be `[Item,Item,Item,Item]`, but I want the values to be optional. They're not always present there!
}

export interface Chest extends BlockEntityLike<BlockEntityResource.chest> {
  CustomName?: StringTag;
  Items: Item[];
  Lock?: StringTag;
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: LongTag;
}

export interface ChiseledBookshelf extends BlockEntityLike<BlockEntityResource.chiseled_bookshelf> {
  Items: Item[];
  last_interacted_slot: IntTag<ChiseledBookshelfLastInteractedSlot>;
}

export type ChiseledBookshelfLastInteractedSlot = -1 | 0 | 1 | 2 | 3 | 4 | 5;

export interface Comparator extends BlockEntityLike<BlockEntityResource.comparator> {
  OutputSignal: IntTag;
}

export interface CommandBlock extends BlockEntityLike<BlockEntityResource.command_block> {
  auto: BooleanTag;
  Command: StringTag;
  conditionMet: BooleanTag;
  CustomName?: StringTag;
  LastExecution: LongTag;
  LastOutput: StringTag;
  powered: BooleanTag;
  SuccessCount: IntTag;
  TrackOutput: BooleanTag;
  UpdateLastExecution: BooleanTag;
}

export interface Conduit extends BlockEntityLike<BlockEntityResource.conduit> {
  Target?: IntArrayTag;
}

export interface Dispenser extends BlockEntityLike<BlockEntityResource.dispenser> {
  CustomName?: StringTag;
  Items: Item[];
  Lock?: StringTag;
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: LongTag;
}

export interface Dropper extends BlockEntityLike<BlockEntityResource.dropper> {
  CustomName?: StringTag;
  Items: Item[];
  Lock?: StringTag;
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: LongTag;
}

export interface EnchantingTable extends BlockEntityLike<BlockEntityResource.enchanting_table> {
  CustomName?: StringTag;
}

export interface EndGateway extends BlockEntityLike<BlockEntityResource.end_gateway> {
  Age: LongTag;
  ExactTeleport: BooleanTag;
  ExitPortal: EndGatewayExitPortal;
}

export type EndGatewayExitPortal = [IntTag,IntTag,IntTag];

export interface Furnace extends BlockEntityLike<BlockEntityResource.furnace> {
  BurnTime: ShortTag;
  CookTime: ShortTag;
  CookTimeTotal: ShortTag;
  CustomName?: StringTag;
  Items: Item[]; // `[Item,Item,Item]`
  Lock?: StringTag;
  RecipesUsed: FurnaceRecipesUsed;
}

export interface FurnaceRecipesUsed {
  [id: number]: IntTag; // Use `FurnaceRecipeID` for the index once that is implemented.
}

export interface HangingSign extends BlockEntityLike<BlockEntityResource.hanging_sign>, SignLike {}

export interface Hopper extends BlockEntityLike<BlockEntityResource.hopper> {
  CustomName?: StringTag;
  Items: Item[];
  Lock?: StringTag;
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: LongTag;
  TransferCooldown: IntTag<HopperTransferCooldown>;
}

export type HopperTransferCooldown = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface Jigsaw extends BlockEntityLike<BlockEntityResource.jigsaw> {
  final_state: BlockResource;
  joint: JigsawJoint;
  name: StringTag;
  pool: StringTag;
  target: StringTag;
}

export type JigsawJoint = "rollable" | "aligned";

export interface Jukebox extends BlockEntityLike<BlockEntityResource.jukebox> {
  IsPlaying: BooleanTag;
  RecordItem: Item;
  RecordStartTick: LongTag;
  TickCount: LongTag;
}

export interface Lectern extends BlockEntityLike<BlockEntityResource.lectern> {
  Book?: Item;
  Page: IntTag;
}

export interface MobSpawner extends BlockEntityLike<BlockEntityResource.mob_spawner>, MobSpawnerLike {}

// Double check that some of these properties are mandatory; the wiki doesn't quite specify, but it make it sound like they could be optional.
export interface MobSpawnerLike {
  Delay: ShortTag;
  MaxNearbyEntities: ShortTag;
  MaxSpawnDelay: ShortTag;
  MinSpawnDelay: ShortTag;
  RequiredPlayerRange: ShortTag;
  SpawnCount: ShortTag;
  SpawnData: Entity; // Also not sure what this should really be, other than a template of properties to add to your supplied mob type? I think?
  SpawnPotentials?: MobSpawnerSpawnPotential[];
  SpawnRange: ShortTag;
}

export interface MobSpawnerSpawnPotential {
  weight: IntTag;
  data: Entity; // Related to `SpawnData`, looks like it will override the properties from that one, if this is present instead.
  customSpawnRules: MobSpawnerSpawnRules;
}

export interface MobSpawnerSpawnRules {
  block_light_limit: MobSpawnerLightLimit;
  sky_light_limit: MobSpawnerLightLimit;
}

export type MobSpawnerLightLimit = IntTag | {
  min_inclusive: IntTag;
  max_inclusive: IntTag;
};

export interface Piston extends BlockEntityLike<BlockEntityResource.piston> {
  blockState: BlockState; // I think this is just the raw `BlockState` type, not totally sure though? Might be a wrapper? I don't think so though.
  extending: BooleanTag;
  facing: IntTag<PistonFacing>;
  progress: FloatTag;
  source: BooleanTag;
}

export type PistonFacing = 0 | 1 | 2 | 3 | 4 | 5;

export interface SculkCatalyst extends BlockEntityLike<BlockEntityResource.sculk_catalyst> {
  charges: SculkCatalystCharge[];
}

export interface SculkCatalystCharge {
  charge: IntTag;
  pos: SculkCatalystChargePosition;
  /**
   * Does not relate to delay.
   * 
   * Be 1 if the charge was spread from a sculk or sculk vein, 0 otherwise.
   * The charge can spread to any block if this tag is 1.
   * If it is 0, all the powers in the charge disappear when it spreads to a block not in sculk family.
  */
  decay_delay: SculkCatalystChargeSpread;
  update_delay: IntTag;
  facings: SculkCatalystFacings;
}

export type SculkCatalystChargePosition = [IntTag,IntTag,IntTag];

export type SculkCatalystChargeSpread = IntTag<0 | 1>;

// This is probably wrong, the wiki wasn't too clear to me.
export type SculkCatalystFacings = [SculkCatalystFacing,SculkCatalystFacing,SculkCatalystFacing,SculkCatalystFacing,SculkCatalystFacing,SculkCatalystFacing];

export type SculkCatalystFacing = "north" | "south" | "east" | "west" | "up" | "down";

export interface SculkSensor extends BlockEntityLike<BlockEntityResource.sculk_sensor> {
  // Can't find documentation about the Block Data here
}

export interface SculkShrieker extends BlockEntityLike<BlockEntityResource.sculk_shrieker> {
  // Can't find documentation about the Block Data here
}

export interface ShulkerBox extends BlockEntityLike<BlockEntityResource.shulker_box> {
  CustomName?: StringTag;
  Items: Item[];
  Lock?: StringTag;
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: LongTag;
}

export interface Sign extends BlockEntityLike<BlockEntityResource.sign>, SignLike {}

export interface Skull extends BlockEntityLike<BlockEntityResource.skull> {
  note_block_sound?: StringTag; // "The sound event this skull plays when played with a note block." probably should be typed to a Resource Location :)
  ExtraType: StringTag;
  SkullOwner?: SkullOwner;
}

export interface SkullOwner {
  Id?: IntArrayTag;
  Name?: StringTag;
  Properties: [SkullTexture];
}

export interface SkullTexture {
  /**
   * A Base64-encoded JSON object. Equivalent to the type SkullTextureJSON.
  */
  Value: StringTag;
  Signature?: StringTag;
}

export interface SkullTextureJSON {
  isPublic?: boolean;
  signatureRequired: boolean;
  profileId?: string;
  textures: {
    CAPE?: {
      url: string;
    };
    SKIN: {
      url: string;
      metadata: {
        model: "classic" | "slim";
      };
    };
  };
  /**
   * LongTag (BigInt), but not really because it's from JSON.
  */
  timestamp: number;
}

export interface Smoker extends BlockEntityLike<BlockEntityResource.smoker> {
  BurnTime: ShortTag;
  CookTime: ShortTag;
  CookTimeTotal: ShortTag;
  CustomName?: StringTag;
  Items: Item[]; // `[Item,Item,Item]`
  Lock?: StringTag;
  RecipesUsed: SmokerRecipesUsed;
}

export interface SmokerRecipesUsed {
  [id: number]: IntTag; // Use `SmokerRecipeID` for the index once that is implemented.
}

export interface SoulCampfire extends BlockEntityLike<BlockEntityResource.soul_campfire> {
  CookingTimes: IntArrayTag;
  CookingTotalTimes: IntArrayTag;
  Items: Item[]; // Like `Campfire`, this should really be `[Item,Item,Item]`.
}

export interface StructureBlock extends BlockEntityLike<BlockEntityResource.structure_block> {
  author: StringTag;
  ignoreEntities: BooleanTag;
  integrity: FloatTag;
  metadata: StringTag;
  mirror: StructureBlockMirror;
  mode: StructureBlockMode;
  name: StringTag;
  posX: IntTag;
  posY: IntTag;
  posZ: IntTag;
  powered: BooleanTag;
  rotation: StructureBlockRotation;
  seed: LongTag;
  showboundingbox: BooleanTag;
  sizeX: IntTag;
  sizeY: IntTag;
  sizeZ: IntTag;
}

export type StructureBlockMirror = "NONE" | "LEFT_RIGHT" | "FRONT_BACK";

export type StructureBlockMode = "SAVE" | "LOAD" | "CORNER" | "DATA";

export type StructureBlockRotation = "NONE" | "CLOCKWISE_90" | "CLOCKWISE_180" | "COUNTERCLOCKWISE_90";

export interface TrappedChest extends BlockEntityLike<BlockEntityResource.trapped_chest> {
  CustomName?: StringTag;
  Items: Item[];
  Lock?: StringTag;
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: LongTag;
}

export interface SignLike {
  is_waxed: BooleanTag;
  front_text: SignText;
  back_text: SignText;
}

export interface SignText {
  has_glowing_text: BooleanTag;
  color: SignColor;
  messages: StringTag[];
}

export type SignColor = "black" | "white" | "orange" | "magenta" | "light_blue" | "yellow" | "lime" | "pink" | "gray" | "light_gray" | "cyan" | "purple" | "blue" | "brown" | "green" | "red" | "black";

export interface BlockEntityLike<BlockEntityID extends string> {
  id: BlockEntityID;
  keepPacked: BooleanTag;
  x: IntTag;
  y: IntTag;
  z: IntTag;
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
  soul_campfire = "minecraft:soul_campfire",
  structure_block = "minecraft:structure_block",
  trapped_chest = "minecraft:trapped_chest"
}