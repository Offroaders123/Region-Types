import type { ShortTag, IntTag, StringTag } from "nbtify";
import type { EntityResource } from "./entity.js";
import type { SlottedItem } from "./item.js";

export type BlockEntity<K extends keyof BlockEntityNameMap = keyof BlockEntityNameMap> = BlockEntityNameMap[K];

export interface BlockEntityNameMap {
  Chest: Chest;
  Furnace: Furnace;
  MobSpawner: MobSpawner;
  Sign: Sign;
}

export interface Chest extends BlockEntityLike<BlockEntityResource.Chest> {
  Items: SlottedItem;
}

export interface Furnace extends BlockEntityLike<BlockEntityResource.Furnace> {
  BurnTime: ShortTag;
  CookTime: ShortTag;
  Items: [SlottedItem?, SlottedItem?, SlottedItem?];
}

export interface MobSpawner extends BlockEntityLike<BlockEntityResource.MobSpawner> {
  EntityId: `${EntityResource}`;
  Delay: ShortTag;
}

export interface Sign extends BlockEntityLike<BlockEntityResource.Sign> {
  Text1: StringTag;
  Text2: StringTag;
  Text3: StringTag;
  Text4: StringTag;
}

export interface BlockEntityLike<BlockEntityID extends string> {
  id: `${BlockEntityID}`;
  x: IntTag;
  y: IntTag;
  z: IntTag;
}

export enum BlockEntityResource {
  Chest = "Chest",
  Furnace = "Furnace",
  MobSpawner = "MobSpawner",
  Sign = "Sign"
}