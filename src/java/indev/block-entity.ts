import type { ShortTag, IntTag } from "nbtify";
import type { SlottedItem } from "./item.js";

export type BlockEntity<K extends keyof BlockEntityNameMap = keyof BlockEntityNameMap> = BlockEntityNameMap[K];

export interface BlockEntityNameMap {
  Chest: Chest;
  Furnace: Furnace;
}

export interface Chest extends BlockEntityLike<BlockEntityResource.Chest> {
  Items: SlottedItem[];
}

export interface Furnace extends BlockEntityLike<BlockEntityResource.Furnace> {
  BurnTime: ShortTag;
  CookTime: ShortTag;
}

export interface BlockEntityLike<BlockEntityID extends string> {
  Pos: IntTag; // not a tuple, interestingly enough, just a composed int of some sort, I think you have to use math to get the actual coordinates out of the value
  id: `${BlockEntityID}`;
}

export enum BlockEntityResource {
  Chest = "Chest",
  Furnace = "Furnace"
}