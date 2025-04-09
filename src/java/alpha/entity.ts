import type { ByteTag, BooleanTag, ShortTag, IntTag, FloatTag, DoubleTag } from "nbtify";
import type { BlockResource } from "./block.js";
import type { DimensionID } from "./dimension.js";
import type { Item, SlottedItem } from "./item.js";

export type Entity<K extends keyof EntityNameMap = keyof EntityNameMap> = EntityNameMap[K];

export interface EntityNameMap {
  // Player: Player; // I'm speculating; not sure where this should be defined
  Arrow: Arrow;
  Boat: Boat;
  Chicken: Chicken;
  Cow: Cow;
  Creeper: Creeper;
  Egg: Egg;
  FallingSand: FallingSand;
  Ghast: Ghast;
  Giant: Giant;
  Item: ItemEntity;
  // Mob: Mob; // what's this? player?
  // Monster: Monster; // what's this too?
  Minecart: Minecart;
  Painting: Painting;
  Pig: Pig;
  PigZombie: PigZombie;
  PrimedTnt: PrimedTnt;
  Sheep: Sheep;
  Skeleton: Skeleton;
  Slime: Slime;
  Snowball: Snowball;
  Spider: Spider;
  Zombie: Zombie;
}

// needs to be 'subclassed' with the new interfaces
export interface Player {
  Dimension: IntTag<DimensionID>;
  Pos: [x: DoubleTag, y: DoubleTag, z: DoubleTag];
  Rotation: [yaw: FloatTag, pitch: FloatTag];
  Motion: [x: DoubleTag, y: DoubleTag, z: DoubleTag];
  OnGround: BooleanTag;
  FallDistance: FloatTag;
  Health: ShortTag;
  AttackTime: ShortTag;
  HurtTime: ShortTag;
  DeathTime: ShortTag;
  Air: ShortTag;
  Fire: ShortTag;
  Score: IntTag;
  Inventory: SlottedItem[];
}

export interface Arrow extends EntityLike<EntityResource.Arrow>, ProjectileLike {}

export interface Boat extends EntityLike<EntityResource.Boat> {}

export interface Chicken extends EntityLike<EntityResource.Chicken>, MobLike {}

export interface Cow extends EntityLike<EntityResource.Cow>, MobLike {}

export interface Creeper extends EntityLike<EntityResource.Creeper>, MobLike {}

export interface Egg extends EntityLike<EntityResource.Egg>, ProjectileLike {}

export interface FallingSand extends EntityLike<EntityResource.FallingSand> {
  Tile: ByteTag<BlockResource>;
}

export interface Ghast extends EntityLike<EntityResource.Ghast>, MobLike {}

export interface Giant extends EntityLike<EntityResource.Giant>, MobLike {}

export interface ItemEntity extends EntityLike<EntityResource.Item> {
  Health: ShortTag;
  Age: ShortTag;
  Item: Item;
}

export interface Minecart extends EntityLike<EntityResource.Minecart> {
  Type: ByteTag<MinecartVariant>;
  // Only for Furnace Minecart variant
  PushX?: DoubleTag;
  PushZ?: DoubleTag;
  Fuel?: ShortTag;
  // Only for Chest Minecart variant
  Items?: SlottedItem[];
}

export type MinecartVariant = 0 | 1 | 2;

export interface Painting extends EntityLike<EntityResource.Painting> {
  Dir: ByteTag<PaintingDirection>;
  Motive: PaintingVariant;
  TileX: IntTag; // This isn't in Indev...? It appears to be in modern versions though, so..
  TileY: IntTag;
  TileZ: IntTag;
}

export type PaintingDirection = 0 | 1 | 2 | 3;

export type PaintingVariant = "Alban" | "Aztec" | "Aztec2" | "Bomb" | "Bust" | "Courbet" | "Kebab" | "Match" | "Plant" | "Pool" | "Sea" | "SkullAndRoses" | "Stage" | "Void" | "Wanderer" | "Wasteland";

export interface Pig extends EntityLike<EntityResource.Pig>, MobLike {
  Saddle: BooleanTag;
}

export interface PigZombie extends EntityLike<EntityResource.PigZombie>, MobLike {}

export interface PrimedTnt extends EntityLike<EntityResource.PrimedTnt> {
  Fuse: ByteTag;
}

export interface Sheep extends EntityLike<EntityResource.Sheep>, MobLike {
  Sheared: BooleanTag;
}

export interface Skeleton extends EntityLike<EntityResource.Skeleton>, MobLike {}

export interface Slime extends EntityLike<EntityResource.Slime>, MobLike {
  Size: IntTag;
}

export interface Snowball extends EntityLike<EntityResource.Snowball>, ProjectileLike {}

export interface Spider extends EntityLike<EntityResource.Spider>, MobLike {}

export interface Zombie extends EntityLike<EntityResource.Zombie>, MobLike {}

export interface MobLike {
  AttackTime: ShortTag;
  DeathTime: ShortTag;
  Health: ShortTag;
  HurtTime: ShortTag;
}

export interface ProjectileLike {
  xTile: ShortTag;
  yTile: ShortTag;
  zTile: ShortTag;
  inTile: ByteTag; // boolean?
  shake: ByteTag; // boolean?
  inGround: BooleanTag;
}

export interface EntityLike<EntityID extends string> {
  id: `${EntityID}`;
  Pos: [X: DoubleTag, Y: DoubleTag, Z: DoubleTag];
  Motion: [dX: DoubleTag, dY: DoubleTag, dZ: DoubleTag];
  Rotation: [yaw: FloatTag, pitch: FloatTag];
  FallDistance: FloatTag;
  Fire: ShortTag;
  Air: ShortTag;
  OnGround: BooleanTag;
}

export enum EntityResource {
  // Player = "Player", // I'm speculating; unknown if this is defined here
  Arrow = "Arrow",
  Boat = "Boat",
  Chicken = "Chicken",
  Cow = "Cow",
  Creeper = "Creeper",
  Egg = "Egg",
  FallingSand = "FallingSand",
  Ghast = "Ghast",
  Giant = "Giant",
  Item = "Item",
  // Mob = "Mob", // what's this? player?
  // Monster = "Monster", // what's this too?
  Minecart = "Minecart",
  Painting = "Painting",
  Pig = "Pig",
  PigZombie = "PigZombie",
  PrimedTnt = "PrimedTnt",
  Sheep = "Sheep",
  Skeleton = "Skeleton",
  Slime = "Slime",
  Snowball = "Snowball",
  Spider = "Spider",
  Zombie = "Zombie"
}