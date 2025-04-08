import type { BooleanTag, ByteTag, ShortTag, IntTag, FloatTag } from "nbtify";
import type { Item, SlottedItem } from "./item.js";

export type Entity<K extends keyof EntityNameMap = keyof EntityNameMap> = EntityNameMap[K];

export interface EntityNameMap {
  Arrow: Arrow;
  Creeper: Creeper;
  Giant: Giant;
  Item: ItemEntity;
  LocalPlayer: LocalPlayer;
  Painting: Painting;
  Pig: Pig;
  PrimedTnt: PrimedTnt;
  Skeleton: Skeleton;
  Spider: Spider;
  Zombie: Zombie;
}

export interface Arrow extends EntityLike<EntityResource.Arrow> {
  inGround: BooleanTag;
  inTile: BooleanTag;
  shake: BooleanTag;
  xTile: ShortTag;
  yTile: ShortTag;
  zTile: ShortTag;
}

export interface Creeper extends EntityLike<EntityResource.Creeper>, MobLike {}

export interface Giant extends EntityLike<EntityResource.Giant>, MobLike {}

export interface ItemEntity extends EntityLike<EntityResource.Item> {
  Age: ShortTag;
  Item: Item;
}

export interface LocalPlayer extends EntityLike<EntityResource.LocalPlayer>, MobLike {
  Score: IntTag;
  Inventory: SlottedItem[];
}

// yeah weird that it's moblike, I know
export interface Painting extends EntityLike<EntityResource.Painting>, Omit<MobLike, "Health"> {
  Dir: ByteTag<PaintingDirection>;
  Motive: PaintingVariant;
  TileY: IntTag;
  TileZ: IntTag;
}

export type PaintingDirection = 0 | 1 | 2 | 3;

export type PaintingVariant = "Alban" | "Aztec" | "Aztec2" | "Bomb" | "Bust" | "Courbet" | "Kebab" | "Match" | "Plant" | "Pool" | "Sea" | "SkullAndRoses" | "Stage" | "Void" | "Wanderer" | "Wasteland";

export interface Pig extends EntityLike<EntityResource.Pig>, MobLike {}

export interface Skeleton extends EntityLike<EntityResource.Skeleton>, MobLike {}

export interface Spider extends EntityLike<EntityResource.Spider>, MobLike {}

export interface PrimedTnt extends EntityLike<EntityResource.PrimedTnt>, Omit<MobLike, "Health"> {
  Fuse: ByteTag;
}

export interface Zombie extends EntityLike<EntityResource.Zombie>, MobLike {}

export interface MobLike {
  AttackTime: ShortTag;
  DeathTime: ShortTag;
  Health: ShortTag;
  HurtTime: ShortTag;
}

export interface EntityLike<EntityID extends EntityResource> {
  Air: ShortTag;
  FallDistance: FloatTag;
  Fire: ShortTag;
  Motion: [FloatTag, FloatTag, FloatTag];
  Pos: [FloatTag, FloatTag, FloatTag];
  Rotation: [FloatTag, FloatTag];
  id: `${EntityID}`;
}

export enum EntityResource {
  Arrow = "Arrow",
  Creeper = "Creeper",
  Giant = "Giant",
  Item = "Item",
  LocalPlayer = "LocalPlayer",
  Painting = "Painting",
  Pig = "Pig",
  PrimedTnt = "PrimedTnt",
  Skeleton = "Skeleton",
  Spider = "Spider",
  Zombie = "Zombie",
}