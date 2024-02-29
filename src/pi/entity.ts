import type { BooleanTag, ByteTag, ShortTag, IntTag, FloatTag } from "nbtify";
import type { Item } from "./item.js";
import type { DimensionID } from "./dimension.js";

export type Entity<K extends keyof EntityNameKeyMap = keyof EntityNameKeyMap> = EntityNameKeyMap[K];

export interface EntityNameKeyMap {
  Particle: Particle;
  Player: Player;
  TripodCamera: TripodCamera;
  CameraEntity: CameraEntity;
  Chicken: Chicken;
  Cow: Cow;
  Pig: Pig;
  Sheep: Sheep;
  Zombie: Zombie;
  Creeper: Creeper;
  Skeleton: Skeleton;
  Spider: Spider;
  PigZombie: PigZombie;
  ItemEntity: ItemEntity;
  PrimedTNT: PrimedTNT;
  FallingTile: FallingTile;
  Arrow: Arrow;
  Snowball: Snowball;
  ThrownEgg: ThrownEgg;
  Painting: Painting;
}

export interface Particle extends EntityLike<EntityResource.Particle> {}

export interface Player extends EntityLike<undefined>, MobLike {
  Armor: Item[]; // no slot tag actually, ignore. // with slot tag, right? docs doesn't say here. and are these optional? it's actually `[Item, Item, Item, Item]`
  Dimension: IntTag<DimensionID>;
  Inventory: Item[]; // slot tag for sure
  Score: IntTag;
  Sleeping: BooleanTag;
  SleepTimer: ShortTag;
  SpawnX: IntTag;
  SpawnY: IntTag;
  SpawnZ: IntTag;
  abilities: PlayerAbilities;
}

export interface PlayerAbilities {
  mayfly: BooleanTag;
  flying: BooleanTag;
  invulnerable: BooleanTag;
  mayBuild: BooleanTag;
  instabuild: BooleanTag;
}

export interface TripodCamera extends EntityLike<EntityResource.TripodCamera> {}

export interface CameraEntity extends EntityLike<EntityResource.CameraEntity> {}

export interface Chicken extends EntityLike<EntityResource.Chicken>, MobLike, AnimalLike {}

export interface Cow extends EntityLike<EntityResource.Cow>, MobLike, AnimalLike {}

export interface Pig extends EntityLike<EntityResource.Pig>, MobLike, AnimalLike {}

export interface Sheep extends EntityLike<EntityResource.Sheep>, MobLike, AnimalLike {
  Sheared: BooleanTag;
  Color: ByteTag<SheepWoolColor>;
}

export type SheepWoolColor = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;

export interface Zombie extends EntityLike<EntityResource.Zombie>, MobLike {}

export interface Creeper extends EntityLike<EntityResource.Creeper>, MobLike {}

export interface Skeleton extends EntityLike<EntityResource.Skeleton>, MobLike {}

export interface Spider extends EntityLike<EntityResource.Spider>, MobLike {}

export interface PigZombie extends EntityLike<EntityResource.PigZombie>, MobLike {}

export interface ItemEntity extends EntityLike<EntityResource.ItemEntity> {
  Health: ShortTag;
  Age: ShortTag;
  Item: Item;
}

export interface PrimedTNT extends EntityLike<EntityResource.PrimedTnt> {}

export interface FallingTile extends EntityLike<EntityResource.FallingTile> {}

export interface Arrow extends EntityLike<EntityResource.Arrow> {}

export interface Snowball extends EntityLike<EntityResource.Snowball> {}

export interface ThrownEgg extends EntityLike<EntityResource.ThrownEgg> {}

export interface Painting extends EntityLike<EntityResource.Painting> {}

export interface MobLike {
  AttackTime: ShortTag;
  DeathTime: ShortTag;
  Health: ShortTag;
  HurtTime: ShortTag;
}

export interface AnimalLike {
  Age: IntTag;
}

export interface EntityLike<EntityID extends number | undefined> {
  id: EntityID extends number ? IntTag<EntityID> : EntityID;
  Pos: [X: FloatTag, Y: FloatTag, Z: FloatTag];
  Motion: [dX: FloatTag, dY: FloatTag, dZ: FloatTag]; // doesn't seem to mention optional
  Rotation: [yaw: FloatTag, pitch: FloatTag];
  FallDistance: FloatTag;
  Fire: ShortTag;
  Air: ShortTag;
  OnGround: BooleanTag;
}

export enum EntityResource {
  Particle = 0,
  Player = 0,
  TripodCamera = 0,
  CameraEntity = 0,
  // <Animals>
  Chicken = 10,
  Cow,
  Pig,
  Sheep,
  // <Monsters>
  Zombie = 32,
  Creeper,
  Skeleton,
  Spider,
  PigZombie,
  // </Monsters>
  ItemEntity = 64,
  PrimedTnt,
  FallingTile,
  Arrow = 80,
  Snowball,
  ThrownEgg,
  Painting,
}