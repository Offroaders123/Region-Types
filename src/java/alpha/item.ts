import type { ByteTag, ShortTag } from "nbtify";
import type { BlockResource } from "./block.js";

export interface Item {
  Slot: ByteTag; // Inv slot number
  id: ShortTag<BlockResource | ItemResource>;
  Damage: ShortTag;
  Count: ByteTag;
}

export enum ItemResource {}