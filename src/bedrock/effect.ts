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
  Id: ByteTag<EffectResource>;
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

export enum EffectResource {
  speed = 1,
  slowness,
  haste,
  mining_fatigue,
  strength,
  instant_health,
  instant_damage,
  jump_boost,
  nausea,
  regeneration,
  resistance,
  fire_resistance,
  water_breathing,
  invisibility,
  blindness,
  night_vision,
  hunger,
  weakness,
  poison,
  wither,
  health_boost,
  absorption,
  saturation,
  levitation,
  fatal_poison,
  conduit_power,
  slow_falling,
  bad_omen,
  village_hero,
  darkness
}