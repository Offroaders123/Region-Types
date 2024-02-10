import type { BooleanTag, ByteTag, ShortTag, IntTag, LongTag, FloatTag, StringTag } from "nbtify";
import type { Block, BlockResource } from "./block.js";
import type { Entity, EntityResource } from "./entity.js";
import type { Item, ItemResource } from "./item.js";

export type BlockEntity<K extends keyof BlockEntityNameMap = keyof BlockEntityNameMap> = BlockEntityNameMap[K];

export interface BlockEntityNameMap {
  Banner: Banner;
  Barrel: Barrel;
  Beacon: Beacon;
  Bed: Bed;
  Beehive: Beehive;
  Bell: Bell;
  BlastFurnace: BlastFurnace;
  BrewingStand: BrewingStand;
  BrushableBlock: BrushableBlock;
  CalibratedSculkSensor: CalibratedSculkSensor;
  Campfire: Campfire;
  Cauldron: Cauldron;
  Chalkboard: Chalkboard;
  Chest: Chest;
  ChiseledBookshelf: ChiseledBookshelf;
  CommandBlock: CommandBlock;
  Comparator: Comparator;
  CompoundCreator: CompoundCreator;
  Conduit: Conduit;
  DaylightDetector: DaylightDetector;
  DecoratedPot: DecoratedPot;
  Dispenser: Dispenser;
  Dropper: Dropper;
  ElementConstructor: ElementConstructor;
  EnchantTable: EnchantTable;
  EndGateway: EndGateway;
  FlowerPot: FlowerPot;
  Furnace: Furnace;
  HangingSign: HangingSign;
  Hopper: Hopper;
  ItemFrame: ItemFrame;
  JigsawBlock: JigsawBlock;
  Jukebox: Jukebox;
  LabTable: LabTable;
  Lectern: Lectern;
  Lodestone: Lodestone;
  MaterialReducer: MaterialReducer;
  MobSpawner: MobSpawner;
  MovingBlock: MovingBlock;
  Music: Music;
  NetherReactor: NetherReactor;
  PistonArm: PistonArm;
  Poster: Poster;
  SculkCatalyst: SculkCatalyst;
  SculkSensor: SculkSensor;
  SculkShrieker: SculkShrieker;
  ShulkerBox: ShulkerBox;
  Sign: Sign;
  Skull: Skull;
  Slate: Slate;
  Smoker: Smoker;
  StructureBlock: StructureBlock;
}

export interface Banner extends BlockEntityLike<BlockEntityResource.Banner> {
  Base: IntTag; // BannerColor
  Patterns?: BannerPattern[];
  Type: IntTag<BannerType>;
}

export interface BannerPattern {
  Color: IntTag; // BannerColor
  Pattern: StringTag; // PatternID
}

export type BannerType = 0 | 1;

export interface Barrel extends BlockEntityLike<BlockEntityResource.Barrel> {}

export interface Beacon extends BlockEntityLike<BlockEntityResource.Beacon> {
  primary: IntTag; // EffectID
  secondary: IntTag; // EffectID
}

export interface Bed extends BlockEntityLike<BlockEntityResource.Bed> {
  color: ByteTag; // Bed#Metadata
}

export interface Beehive extends BlockEntityLike<BlockEntityResource.Beehive> {
  Occupants?: BeehiveOccupant[];
  ShouldSpawnBees: BooleanTag;
}

export interface BeehiveOccupant {
  ActorIdentifier: `${EntityResource.bee}<>`; // Always `minecraft:bee<>`, probably should be from a type `ActorResource.bee`
  SaveData: Entity; // `Entity<"bee">`
  TicksLeftToStay: IntTag;
}

export interface Bell extends BlockEntityLike<BlockEntityResource.Bell> {
  Direction: IntTag; // May be only two/four values? unknown for sure
  Ringing: BooleanTag;
  Ticks: IntTag;
}

export interface BlastFurnace extends BlockEntityLike<BlockEntityResource.BlastFurnace>, FurnaceLike {}

export interface BrewingStand extends BlockEntityLike<BlockEntityResource.BrewingStand> {
  CookTime: ShortTag;
  FuelAmount: ShortTag;
  FuelTotal: ShortTag;
  Items: Item[]; // Maybe just `[Item,Item,Item]`, but the values should be optional because they aren't always be present.
}

export interface BrushableBlock extends BlockEntityLike<BlockEntityResource.BrushableBlock> {
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

export interface CalibratedSculkSensor extends BlockEntityLike<BlockEntityResource.CalibratedSculkSensor> {
  VibrationListener: SculkVibrationListener;
}

export interface Campfire extends BlockEntityLike<BlockEntityResource.Campfire> {
  Item1?: Item;
  ItemTime1: IntTag;
  Item2?: Item;
  ItemTime2: IntTag;
  Item3?: Item;
  ItemTime3: IntTag;
  Item4?: Item;
  ItemTime4: IntTag;
}

export interface Cauldron extends BlockEntityLike<BlockEntityResource.Cauldron> {
  CustomColor?: IntTag; // 32-bit ARGB-encoded color
  Items: Item[];
  PotionId: ShortTag; // `PotionID | -1`
  PotionType: ShortTag<PotionType>;
}

export type PotionType = 0 | 1 | 2;

export interface Chalkboard extends BlockEntityLike<BlockEntityResource.Chalkboard> {
  BaseX: IntTag;
  BaseY: IntTag;
  BaseZ: IntTag;
  Locked: BooleanTag;
  OnGround: BooleanTag;
  Owner: LongTag;
  Size: IntTag;
  Text: StringTag;
}

export interface Chest extends BlockEntityLike<BlockEntityResource.Chest>, ChestLike {}

export interface ChiseledBookshelf extends BlockEntityLike<BlockEntityResource.ChiseledBookshelf> {
  Items: Item[];
  LastInteractedSlot: IntTag<ChiseledBookshelfLastInteractedSlot>;
}

export type ChiseledBookshelfLastInteractedSlot = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface CommandBlock extends Omit<BlockEntityLike<BlockEntityResource.CommandBlock>, "CustomName">, CommandBlockLike {
  auto: BooleanTag;
  conditionalMode?: BooleanTag; // I think it's a boolean, not just `ByteTag`, missing docs
  conditionMet: BooleanTag;
  LPConditionalMode: BooleanTag; // Also guessing; This was also named `LPCondionalMode`, double-check the wiki is misspelt.
  LPRedstoneMode: BooleanTag; // Also guessing
  LPCommandMode: BooleanTag; // Also guessing
  powered: BooleanTag;
}

export interface Comparator extends BlockEntityLike<BlockEntityResource.Comparator> {
  OutputSignal: IntTag;
}

export interface CompoundCreator extends BlockEntityLike<BlockEntityResource.CompoundCreator>, ChemistryTableLike {}

export interface Conduit extends BlockEntityLike<BlockEntityResource.Conduit> {
  Active: BooleanTag;
  Target: LongTag;
}

export interface DaylightDetector extends BlockEntityLike<BlockEntityResource.DaylightDetector> {}

export interface DecoratedPot extends BlockEntityLike<BlockEntityResource.DecoratedPot> {
  sherds: ItemResource[]; // Probably should only be the sherd item ID's and `minecraft:brick`?
}

export interface Dispenser extends BlockEntityLike<BlockEntityResource.Dispenser> {
  Items: Item[];
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: IntTag;
}

export interface Dropper extends BlockEntityLike<BlockEntityResource.Dropper> {
  Items: Item[];
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: IntTag;
}

export interface ElementConstructor extends BlockEntityLike<BlockEntityResource.ElementConstructor>, ChemistryTableLike {}

export interface EnchantTable extends BlockEntityLike<BlockEntityResource.EnchantTable> {
  CustomName?: StringTag;
  rott: FloatTag; // Really two t's?
}

export interface EndGateway extends BlockEntityLike<BlockEntityResource.EndGateway> {
  Age: IntTag;
  ExitPortal: ExitPortal;
}

export type ExitPortal = [IntTag,IntTag,IntTag];

export interface FlowerPot extends BlockEntityLike<BlockEntityResource.FlowerPot> {
  PlantBlock?: Block;
}

export interface Furnace extends BlockEntityLike<BlockEntityResource.Furnace>, FurnaceLike {}

export interface HangingSign extends BlockEntityLike<BlockEntityResource.HangingSign>, SignLike {}

export interface Hopper extends BlockEntityLike<BlockEntityResource.Hopper> {
  Items: Item[]; // `[Item,Item,Item,Item,Item]`?
  TransferCooldown: IntTag;
}

export interface ItemFrame extends BlockEntityLike<BlockEntityResource.ItemFrame> {
  ItemDropChance?: FloatTag;
  ItemRotation?: FloatTag;
}

export interface JigsawBlock extends BlockEntityLike<BlockEntityResource.JigsawBlock> {
  final_state: BlockResource;
  joint: JigsawBlockJoint;
  name: StringTag;
  target: StringTag;
  target_pool: StringTag; // `TargetPoolResource`? Still not sure what Target Pool means.
}

export type JigsawBlockJoint = "rollable" | "aligned";

export interface Jukebox extends BlockEntityLike<BlockEntityResource.Jukebox> {
  RecordItem?: Item;
}

export interface LabTable extends BlockEntityLike<BlockEntityResource.LabTable>, ChemistryTableLike {}

export interface Lectern extends BlockEntityLike<BlockEntityResource.Lectern> {
  book?: Item;
  hasBook?: BooleanTag;
  page?: IntTag;
  totalPages?: IntTag;
}

export interface Lodestone extends BlockEntityLike<BlockEntityResource.Lodestone> {
  trackingHandle?: IntTag;
}

export interface MaterialReducer extends BlockEntityLike<BlockEntityResource.MaterialReducer>, ChemistryTableLike {}

export interface MobSpawner extends BlockEntityLike<BlockEntityResource.MobSpawner> {
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

export interface MovingBlock extends BlockEntityLike<BlockEntityResource.MovingBlock> {
  movingBlock: Block;
  movingBlockExtra: Block;
  movingEntity?: BlockEntity;
}

// I'm actually a Note Block :)
export interface Music extends BlockEntityLike<BlockEntityResource.Music> {
  note: ByteTag; // Might be a union type since there are only a certain amount of keys/notes?
}

export interface NetherReactor extends BlockEntityLike<BlockEntityResource.NetherReactor> {
  HasFinished: BooleanTag;
  IsInitialized: BooleanTag;
  Progress: ShortTag;
}

export interface PistonArm extends BlockEntityLike<BlockEntityResource.PistonArm> {
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

export interface Poster extends BlockEntityLike<BlockEntityResource.Poster> {}

export interface SculkCatalyst extends BlockEntityLike<BlockEntityResource.SculkCatalyst> {
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

export interface SculkSensor extends BlockEntityLike<BlockEntityResource.SculkSensor> {
  VibrationListener: SculkVibrationListener;
}

export interface SculkShrieker extends BlockEntityLike<BlockEntityResource.SculkShrieker> {
  VibrationListener: SculkVibrationListener;
}

export interface ShulkerBox extends BlockEntityLike<BlockEntityResource.ShulkerBox>, ChestLike {
  facing: FloatTag;
}

export interface Sign extends BlockEntityLike<BlockEntityResource.Sign>, SignLike {}

export interface Skull extends BlockEntityLike<BlockEntityResource.Skull> {
  MouthMoving: BooleanTag;
  MouthTickCount: IntTag;
  Rotation: FloatTag;
  SkullType: ByteTag<SkullType>;
}

export type SkullType = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export interface Slate extends BlockEntityLike<BlockEntityResource.Slate> {}

export interface Smoker extends BlockEntityLike<BlockEntityResource.Smoker>, FurnaceLike {}

export interface StructureBlock extends BlockEntityLike<BlockEntityResource.StructureBlock> {
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

export interface ChemistryTableLike {
  itemAux: ShortTag; // Wiki doesn't have much info, double check these
  itemId: IntTag;
  itemStack: ByteTag;
}

export interface ChestLike {
  Findable: ByteTag;
  forceunpair: BooleanTag;
  Item: Item[];
  LootTable?: StringTag; // `LootTableResource`
  LootTableSeed?: IntTag;
  pairlead?: ByteTag;
  pairx?: IntTag;
  pairz?: IntTag;
}

export interface CommandBlockLike {
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

export interface FurnaceLike {
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

export interface SignLike {
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

export interface BlockEntityLike<BlockEntityID extends string> {
  CustomName?: StringTag;
  id: `${BlockEntityID}`;
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