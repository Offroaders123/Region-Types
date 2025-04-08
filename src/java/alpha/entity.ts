import type { BooleanTag, ShortTag, IntTag, FloatTag, DoubleTag } from "nbtify";
import type { DimensionID } from "./dimension.js";
import type { Item } from "./item.js";

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
  Inventory: Item[];
}