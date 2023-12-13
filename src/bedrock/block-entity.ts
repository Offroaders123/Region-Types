import type { BooleanTag, ByteTag, ShortTag, IntTag, LongTag, FloatTag, StringTag } from "nbtify";
import type { Block, BlockResource } from "./block.js";
import type { Entity, EntityResource } from "./entity.js";
import type { Item, ItemResource } from "./item.js";

export type BlockEntity = Banner | Barrel | Beacon | Bed | Beehive | Bell | BlastFurnace | BrewingStand | BrushableBlock | CalibratedSculkSensor | Campfire | Cauldron | Chalkboard | Chest | ChiseledBookshelf | CommandBlock | Comparator | CompoundCreator | Conduit | DaylightDetector | DecoratedPot | Dispenser | Dropper | ElementConstructor | EnchantTable | EndGateway | FlowerPot | Furnace | HangingSign | Hopper | ItemFrame | JigsawBlock | Jukebox | LabTable | Lectern | Lodestone | MaterialReducer | MobSpawner | MovingBlock | Music | NetherReactor | PistonArm | Poster | SculkCatalyst | SculkSensor | SculkShrieker | ShulkerBox | Sign | Skull | Slate | Smoker | StructureBlock;

export interface Banner extends BlockEntityLike {
  id: typeof BlockEntityResource.Banner;
  Base: IntTag; // BannerColor
  Patterns?: BannerPattern[];
  Type: IntTag<BannerType>;
}

export interface BannerPattern {
  Color: IntTag; // BannerColor
  Pattern: StringTag; // PatternID
}

export type BannerType = 0 | 1;

export interface Barrel extends BlockEntityLike {
  id: typeof BlockEntityResource.Barrel;
}

export interface Beacon extends BlockEntityLike {
  id: typeof BlockEntityResource.Beacon;
  primary: IntTag; // EffectID
  secondary: IntTag; // EffectID
}

export interface Bed extends BlockEntityLike {
  id: typeof BlockEntityResource.Bed;
  color: ByteTag; // Bed#Metadata
}

export interface Beehive extends BlockEntityLike {
  id: typeof BlockEntityResource.Beehive;
  Occupants?: BeehiveOccupant[];
  ShouldSpawnBees: BooleanTag;
}

export interface BeehiveOccupant {
  ActorIdentifier: StringTag; // Always `minecraft:bee<>`, probably should be from a type `ActorResource.bee`
  SaveData: Entity;
  TicksLeftToStay: IntTag;
}

export interface Bell extends BlockEntityLike {
  id: typeof BlockEntityResource.Bell;
  Direction: IntTag; // May be only two/four values? unknown for sure
  Ringing: BooleanTag;
  Ticks: IntTag;
}

export interface BlastFurnace extends FurnaceLike {
  id: typeof BlockEntityResource.BlastFurnace;
}

export interface BrewingStand extends BlockEntityLike {
  id: typeof BlockEntityResource.BrewingStand;
  CookTime: ShortTag;
  FuelAmount: ShortTag;
  FuelTotal: ShortTag;
  Items: Item[]; // Maybe just `[Item,Item,Item]`, but the values should be optional because they aren't always be present.
}

export interface BrushableBlock extends BlockEntityLike {
  id: typeof BlockEntityResource.BrushableBlock;
  brush_count: IntTag<BrushCount>;
  brush_direction: ByteTag<BrushDirection>;
  item?: Item;
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: IntTag;
  type: BrushBlockType;
}

export type BrushCount = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

export type BrushDirection = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type BrushBlockType = typeof BlockResource.suspicious_gravel | typeof BlockResource.suspicious_sand;

export interface CalibratedSculkSensor extends BlockEntityLike {
  id: typeof BlockEntityResource.CalibratedSculkSensor;
  VibrationListener: SculkVibrationListener;
}

export interface Campfire extends BlockEntityLike {
  id: typeof BlockEntityResource.Campfire;
  Item1?: Item;
  ItemTime1: IntTag;
  Item2?: Item;
  ItemTime2: IntTag;
  Item3?: Item;
  ItemTime3: IntTag;
  Item4?: Item;
  ItemTime4: IntTag;
}

export interface Cauldron extends BlockEntityLike {
  id: typeof BlockEntityResource.Cauldron;
  CustomColor?: IntTag; // 32-bit ARGB-encoded color
  Items: Item[];
  PotionId: ShortTag; // `PotionID | -1`
  PotionType: ShortTag<PotionType>;
}

export type PotionType = 0 | 1 | 2;

export interface Chalkboard extends BlockEntityLike {
  id: typeof BlockEntityResource.Chalkboard;
  BaseX: IntTag;
  BaseY: IntTag;
  BaseZ: IntTag;
  Locked: BooleanTag;
  OnGround: BooleanTag;
  Owner: LongTag;
  Size: IntTag;
  Text: StringTag;
}

export interface Chest extends ChestLike {
  id: typeof BlockEntityResource.Chest;
}

export interface ChiseledBookshelf extends BlockEntityLike {
  id: typeof BlockEntityResource.ChiseledBookshelf;
  Items: Item[];
  LastInteractedSlot: IntTag<ChiseledBookshelfLastInteractedSlot>;
}

export type ChiseledBookshelfLastInteractedSlot = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface CommandBlock extends CommandBlockLike {
  id: typeof BlockEntityResource.CommandBlock;
  auto: BooleanTag;
  conditionalMode?: BooleanTag; // I think it's a boolean, not just `ByteTag`, missing docs
  conditionMet: BooleanTag;
  LPConditionalMode: BooleanTag; // Also guessing; This was also named `LPCondionalMode`, double-check the wiki is misspelt.
  LPRedstoneMode: BooleanTag; // Also guessing
  LPCommandMode: BooleanTag; // Also guessing
  powered: BooleanTag;
}

export interface Comparator extends BlockEntityLike {
  id: typeof BlockEntityResource.Comparator;
  OutputSignal: IntTag;
}

export interface CompoundCreator extends ChemistryTableLike {
  id: typeof BlockEntityResource.CompoundCreator;
}

export interface Conduit extends BlockEntityLike {
  id: typeof BlockEntityResource.Conduit;
  Active: BooleanTag;
  Target: LongTag;
}

export interface DaylightDetector extends BlockEntityLike {
  id: typeof BlockEntityResource.DaylightDetector;
}

export interface DecoratedPot extends BlockEntityLike {
  id: typeof BlockEntityResource.DecoratedPot;
  sherds: ItemResource[]; // Probably should only be the sherd item ID's and `minecraft:brick`?
}

export interface Dispenser extends BlockEntityLike {
  id: typeof BlockEntityResource.Dispenser;
  Items: Item[];
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: IntTag;
}

export interface Dropper extends BlockEntityLike {
  id: typeof BlockEntityResource.Dropper;
  Items: Item[];
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: IntTag;
}

export interface ElementConstructor extends ChemistryTableLike {
  id: typeof BlockEntityResource.ElementConstructor;
}

export interface EnchantTable extends BlockEntityLike {
  id: typeof BlockEntityResource.EnchantTable;
  CustomName?: StringTag;
  rott: FloatTag; // Really two t's?
}

export interface EndGateway extends BlockEntityLike {
  id: typeof BlockEntityResource.EndGateway;
  Age: IntTag;
  ExitPortal: ExitPortal;
}

export type ExitPortal = [IntTag,IntTag,IntTag];

export interface FlowerPot extends BlockEntityLike {
  id: typeof BlockEntityResource.FlowerPot;
  PlantBlock?: Block;
}

export interface Furnace extends FurnaceLike {
  id: typeof BlockEntityResource.Furnace;
}

export interface HangingSign extends SignLike {
  id: typeof BlockEntityResource.HangingSign;
}

export interface Hopper extends BlockEntityLike {
  id: typeof BlockEntityResource.Hopper;
  Items: Item[]; // `[Item,Item,Item,Item,Item]`?
  TransferCooldown: IntTag;
}

export interface ItemFrame extends BlockEntityLike {
  id: typeof BlockEntityResource.ItemFrame;
  ItemDropChance?: FloatTag;
  ItemRotation?: FloatTag;
}

export interface JigsawBlock extends BlockEntityLike {
  id: typeof BlockEntityResource.JigsawBlock;
  final_state: BlockResource;
  joint: JigsawBlockJoint;
  name: StringTag;
  target: StringTag;
  target_pool: StringTag; // `TargetPoolResource`? Still not sure what Target Pool means.
}

export type JigsawBlockJoint = "rollable" | "aligned";

export interface Jukebox extends BlockEntityLike {
  id: typeof BlockEntityResource.Jukebox;
  RecordItem?: Item;
}

export interface LabTable extends ChemistryTableLike {
  id: typeof BlockEntityResource.LabTable;
}

export interface Lectern extends BlockEntityLike {
  id: typeof BlockEntityResource.Lectern;
  book?: Item;
  hasBook?: BooleanTag;
  page?: IntTag;
  totalPages?: IntTag;
}

export interface Lodestone extends BlockEntityLike {
  id: typeof BlockEntityResource.Lectern;
  trackingHandle?: IntTag;
}

export interface MaterialReducer extends ChemistryTableLike {
  id: typeof BlockEntityResource.MaterialReducer;
}

export interface MobSpawner extends BlockEntityLike {
  id: typeof BlockEntityResource.MobSpawner;
  Delay: ShortTag;
  DisplayEntityHeight: FloatTag;
  DisplayEntityScale: FloatTag;
  DisplayEntityWidth: FloatTag;
  EntityIdentifier: EntityResource;
  MaxNearbyEntities: ShortTag;
  MaxSpawnDelay: ShortTag;
  MinSpawnDelay: ShortTag;
  RequiredPlayerRange: ShortTag;
  SpawnCount: ShortTag;
  SpawnData?: SpawnData;
  SpawnPotentials?: SpawnPotential[];
  SpawnRange: ShortTag;
}

export interface SpawnData {
  Properties: {}; // unknown, maybe look at the Java docs
  TypeId: EntityResource;
  Weight: IntTag;
}

export interface SpawnPotential {
  Properties: {}; // Same as above for `SpawnData`
  TypeId: EntityResource;
  Weight: IntTag;
}

// This doesn't feel right? `movingEntity` rather than `extends BlockEntityLike`?
export interface MovingBlock {
  id: typeof BlockEntityResource.MovingBlock;
  movingBlock: Block;
  movingBlockExtra: Block;
  movingEntity?: Omit<BlockEntityLike,"id">;
}

// I'm actually a Note Block :)
export interface Music extends BlockEntityLike {
  id: typeof BlockEntityResource.Music;
  note: ByteTag; // Might be a union type since there are only a certain amount of keys/notes?
}

export interface NetherReactor extends BlockEntityLike {
  id: typeof BlockEntityResource.NetherReactor;
  HasFinished: BooleanTag;
  IsInitialized: BooleanTag;
  Progress: ShortTag;
}

export interface PistonArm extends BlockEntityLike {
  id: typeof BlockEntityResource.PistonArm;
  AttachedBlocks: PistonAssociatedBlocks;
  BreakBlocks: PistonAssociatedBlocks;
  LastProgress: FloatTag;
  NewState: ByteTag<PistonState>;
  Progress: FloatTag<PistonProgress>;
  State: ByteTag<PistonState>;
  Sticky: BooleanTag;
}

export type PistonAssociatedBlocks = IntTag[]; // Essentially a long list of `x,y,z` pairs for individual blocks. So, `( ...[IntTag,IntTag,IntTag] )[]` if that makes any sense.

export type PistonState = 0 | 1 | 2 | 3;

export type PistonProgress = 0 | 0.5 | 1;

export interface Poster extends BlockEntityLike {
  id: typeof BlockEntityResource.Poster;
}

export interface SculkCatalyst extends BlockEntityLike {
  id: typeof BlockEntityResource.SculkCatalyst;
  cursors: SculkCatalystCharge[];
}

export interface SculkCatalystCharge {
  charge: ShortTag;
  decay: ShortTag;
  facing: ShortTag;
  update: ShortTag;
  x: IntTag;
  y: IntTag;
  z: IntTag;
}

export interface SculkSensor extends BlockEntityLike {
  id: typeof BlockEntityResource.SculkSensor;
  VibrationListener: SculkVibrationListener;
}

export interface SculkShrieker extends BlockEntityLike {
  id: typeof BlockEntityResource.SculkShrieker;
  VibrationListener: SculkVibrationListener;
}

export interface ShulkerBox extends ChestLike {
  id: typeof BlockEntityResource.ShulkerBox;
  facing: FloatTag;
}

export interface Sign extends SignLike {
  id: typeof BlockEntityResource.Sign;
}

export interface Skull extends BlockEntityLike {
  id: typeof BlockEntityResource.Skull;
  MouthMoving: BooleanTag;
  MouthTickCount: IntTag;
  Rotation: FloatTag;
  SkullType: ByteTag<SkullType>;
}

export type SkullType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface Slate extends BlockEntityLike {
  id: typeof BlockEntityResource.Slate;
}

export interface Smoker extends FurnaceLike {
  id: typeof BlockEntityResource.Smoker;
}

export interface StructureBlock extends BlockEntityLike {
  id: typeof BlockEntityResource.StructureBlock;
  animationMode: ByteTag; // Union type? boolean?
  animationSeconds: FloatTag;
  data: IntTag<StructureBlockMode>;
  dataField: StringTag;
  ignoreEntities: BooleanTag;
  integrity: FloatTag;
  isPowered: BooleanTag;
  mirror: ByteTag; // Union type? boolean?
  redstoneSaveMode: IntTag; // Union?
  removeBlocks: ByteTag;
  rotation: ByteTag; // Union?
  seed: LongTag;
  showBoundingBox: ByteTag;
  structureName: StringTag;
  xStructureOffset: IntTag;
  yStructureOffset: IntTag;
  zStructureOffset: IntTag;
  xStructureSize: IntTag;
  yStructureSize: IntTag;
  zStructureSize: IntTag;
}

export type StructureBlockMode = 0 | 1 | 2 | 3 | 4 | 5;

export interface ChemistryTableLike extends BlockEntityLike {
  itemAux: ShortTag; // Wiki doesn't have much info, double check these
  itemId: IntTag;
  itemStack: ByteTag;
}

export interface ChestLike extends BlockEntityLike {
  Findable: ByteTag;
  forceunpair: BooleanTag;
  Item: Item[];
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: IntTag;
  pairlead?: ByteTag;
  pairx?: IntTag;
  pairz?: IntTag;
}

export interface CommandBlockLike extends BlockEntityLike {
  Command: StringTag;
  CustomName: StringTag; // I'd think this is optional?
  ExecuteOnFirstTick: BooleanTag;
  LastExecution: LongTag;
  LastOutput: StringTag;
  LastOutputParams: StringTag[]; // This could be `[StringTag]`, but I don't think so
  SuccessCount: IntTag;
  TickDelay: IntTag;
  TrackOutput: BooleanTag;
  Version: IntTag;
}

export interface FurnaceLike extends BlockEntityLike {
  BurnDuration: ShortTag;
  BurnTime: ShortTag;
  CookTime: ShortTag;
  Items: Item[];
  StoredXPInt: IntTag;
}

export interface SculkVibrationListener {
  event: IntTag; // Likely a union type of a resource ID?
  pending: SculkPendingVibration;
  selector: {}; // Unknown from thy docs
  ticks: IntTag;
}

export interface SculkPendingVibration {
  distance: FloatTag;
  source: LongTag;
  vibration: IntTag; // Maybe also a union type?
  x: IntTag;
  y: IntTag;
  z: IntTag;
}

export interface SignLike extends BlockEntityLike {
  BackText: SignText;
  FrontText: SignText;
  IsWaxed: BooleanTag;
}

export interface SignText {
  HideGlowOutline: BooleanTag;
  IgnoreLighting: BooleanTag;
  PersistFormatting: ByteTag<1>; // Wiki doesn't have info on the value meaning, other than it only being known to be `1`.
  SignTextColor: IntTag<SignTextColor>; // 32-bit encoded color.
  Text: StringTag;
  TextOwner: StringTag; // wiki doesn't specify the meaning for this tag. Maybe it's a player's username?
}

export type SignTextColor = -986896 | -425955 | -3715395 | -12930086 | -75715 | -8337633 | -816214 | -12103854 | -6447721 | -15295332 | -7785800 | -12827478 | -8170446 | -10585066 | -5231066 | -16777216;

export interface BlockEntityLike {
  CustomName?: StringTag;
  id: BlockEntityResource;
  isMovable: BooleanTag;
  x: IntTag;
  y: IntTag;
  z: IntTag;
}

export enum BlockEntityResource {
  Banner = "Banner",
  Barrel = "Barrel",
  Beacon = "Beacon",
  Bed = "Bed",
  Beehive = "Beehive",
  Bell = "Bell",
  BlastFurnace = "BlastFurnace",
  BrewingStand = "BrewingStand",
  BrushableBlock = "BrushableBlock", // Sus
  CalibratedSculkSensor = "CalibratedSculkSensor",
  Campfire = "Campfire",
  Cauldron = "Cauldron",
  Chalkboard = "Chalkboard", // unknown, not on the wiki
  Chest = "Chest",
  ChiseledBookshelf = "ChiseledBookshelf",
  Comparator = "Comparator",
  CompoundCreator = "CompoundCreator", // ID not on the wiki
  CommandBlock = "CommandBlock",
  Conduit = "Conduit",
  DaylightDetector = "DaylightDetector",
  DecoratedPot = "DecoratedPot",
  Dispenser = "Dispenser",
  Dropper = "Dropper",
  EnchantTable = "EnchantTable",
  EnderChest = "EnderChest",
  EndGateway = "EndGateway",
  EndPortal = "EndPortal",
  ElementConstructor = "ElementConstructor", // also guessed
  FlowerPot = "FlowerPot", // ID not listed on the wiki
  Furnace = "Furnace",
  GlowItemFrame = "GlowItemFrame",
  HangingSign = "HangingSign",
  Hopper = "Hopper",
  ItemFrame = "ItemFrame",
  JigsawBlock = "JigsawBlock",
  Jukebox = "Jukebox",
  LabTable = "LabTable", // guessed
  Lectern = "Lectern",
  Lodestone = "Lodestone", // ID not on the wiki
  MaterialReducer = "MaterialReducer", // guessed
  MobSpawner = "MobSpawner",
  MovingBlock = "MovingBlock", // Related to Piston block movement
  Music = "Music", // Note Block
  NetherReactor = "NetherReactor",
  PistonArm = "PistonArm",
  Poster = "Poster", // might be part of Chalkboard?
  SculkCatalyst = "SculkCatalyst",
  SculkSensor = "SculkSensor",
  SculkShrieker = "SculkShrieker",
  ShulkerBox = "ShulkerBox",
  Sign = "Sign",
  Skull = "Skull",
  Slate = "Slate", // also unknown
  Smoker = "Smoker",
  StructureBlock = "StructureBlock"
}