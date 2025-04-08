import type { ByteTag, BooleanTag, IntTag } from "nbtify";

export interface Effect {
  Ambient: BooleanTag;
  Amplifier: ByteTag;
  Duration: IntTag;
  HiddenEffect: Effect; // Might be optional?
  Id: EffectID; // I think this should be an enum instead, and it needs to be wrapped in an NBT tag type
  ShowIcon: BooleanTag;
  ShowParticles: BooleanTag;
}

export enum EffectID {
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
  glowing,
  levitation,
  luck,
  unluck,
  slow_falling,
  conduit_power,
  dolphins_grace,
  bad_omen,
  hero_of_the_village,
  darkness
}

export enum EffectResource {
  absorption = "minecraft:absorption",
  bad_omen = "minecraft:bad_omen",
  blindness = "minecraft:blindness",
  conduit_power = "minecraft:conduit_power",
  dolphins_grace = "minecraft:dolphins_grace",
  fire_resistance = "minecraft:fire_resistance",
  glowing = "minecraft:glowing",
  haste = "minecraft:haste",
  health_boost = "minecraft:health_boost",
  hero_of_the_village = "minecraft:hero_of_the_village",
  hunger = "minecraft:hunger",
  instant_health = "minecraft:instant_health",
  instant_damage = "minecraft:instant_damage",
  invisibility = "minecraft:invisibility",
  jump_boost = "minecraft:jump_boost",
  levitation = "minecraft:levitation",
  luck = "minecraft:luck",
  mining_fatigue = "minecraft:mining_fatigue",
  nausea = "minecraft:nausea",
  night_vision = "minecraft:night_vision",
  poison = "minecraft:poison",
  regeneration = "minecraft:regeneration",
  resistance = "minecraft:resistance",
  saturation = "minecraft:saturation",
  slow_falling = "minecraft:slow_falling",
  slowness = "minecraft:slowness",
  speed = "minecraft:speed",
  strength = "minecraft:strength",
  unluck = "minecraft:unluck",
  water_breathing = "minecraft:water_breathing",
  weakness = "minecraft:weakness",
  wither = "minecraft:wither",
  darkness = "minecraft:darkness"
}