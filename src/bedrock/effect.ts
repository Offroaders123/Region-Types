import type { ByteTag, BooleanTag, IntTag, FloatTag } from "nbtify";

export interface Effect {
  Ambient: BooleanTag;
  Amplifier: ByteTag;
  DisplayOnScreenTextureAnimation: ByteTag; // probably `BooleanTag`? I feel like this is for Bad Omen & friends.
  Duration: IntTag;
  DurationEasy: IntTag;
  DurationHard: IntTag;
  DurationNormal: IntTag;
  FactorCalculationData: EffectFactorCalculationData; // not enough info about this..
  Id: ByteTag<EffectID>;
  ShowParticles: BooleanTag;
}

export interface EffectFactorCalculationData {
  change_timestamp: IntTag;
  factor_current: FloatTag;
  factor_previous: FloatTag;
  factor_start: FloatTag;
  factor_target: FloatTag;
  had_applied: ByteTag; // boolean?
  had_last_tick: ByteTag; // boolean?
  padding_duration: IntTag;
}

// Very much need to make these an enum, as they are different to that of Java :(
export type EffectID = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30;

export enum EffectResource {
  speed = "minecraft:speed",
  haste = "minecraft:haste",
  mining_fatigue = "minecraft:mining_fatigue",
  strength = "minecraft:strength",
  instant_health = "minecraft:instant_health",
  instant_damage = "minecraft:instant_damage",
  jump_boost = "minecraft:jump_boost",
  nausea = "minecraft:nausea",
  regeneration = "minecraft:regeneration",
  resistance = "minecraft:resistance",
  fire_resistance = "minecraft:fire_resistance",
  water_breathing = "minecraft:water_breathing",
  invisibility = "minecraft:invisibility",
  blindness = "minecraft:blindness",
  night_vision = "minecraft:night_vision",
  hunger = "minecraft:hunger",
  weakness = "minecraft:weakness",
  poison = "minecraft:poison",
  wither = "minecraft:wither",
  health_boost = "minecraft:health_boost",
  absorption = "minecraft:absorption",
  saturation = "minecraft:saturation",
  levitation = "minecraft:levitation",
  fatal_poison = "minecraft:fatal_poison",
  conduit_power = "minecraft:conduit_power",
  slow_falling = "minecraft:slow_falling",
  bad_omen = "minecraft:bad_omen",
  village_hero = "minecraft:village_hero",
  darkness = "minecraft:darkness"
}