import { BooleanTag, IntTag, LongTag, FloatTag, DoubleTag, StringTag, CompoundTag } from "nbtify";

export type RegistryData = {
  [K in keyof EntryElementNameMap]: RegistryLike<K>;
};

export interface RegistryLike<K extends keyof EntryElementNameMap = keyof EntryElementNameMap> {
  type: K;
  value: RegistryEntry<K>[];
}

export interface RegistryEntry<K extends keyof EntryElementNameMap = keyof EntryElementNameMap> {
  name: K; // I don't think `K` is right
  id: IntTag;
  element: EntryElement<K>;
}

export type EntryElement<K extends keyof EntryElementNameMap = keyof EntryElementNameMap> = EntryElementNameMap[K];

export interface EntryElementNameMap {
  "minecraft:trim_material": ArmorTrimMaterial;
  "minecraft:trim_pattern": ArmorTrimPattern;
  "minecraft:worldgen/biome": Biome;
  "minecraft:chat_type": ChatType;
  "minecraft:damage_type": DamageType;
  "minecraft:dimension_type": DimensionType;
}

export interface ArmorTrimMaterial {
  asset_name: StringTag; // `trims/color_palettes`
  ingredient: StringTag; // `ItemResource`
  item_model_index: FloatTag;
  override_armor_materials?: ArmorTrimMaterial; // not sure about this one
  description: CompoundTag | StringTag; // regular string, or custom formatted text, needs more info
}

export interface ArmorTrimPattern {
  asset_id: StringTag; // `trims/models/armor`, ie `minecraft:coast`
  template_item: StringTag; // ie `minecraft:coast_armor_trim_smithing_template`
  description: CompoundTag | StringTag; // regular string, or custom formatted text, needs more info
}

export interface Biome {
  has_precipitation: BooleanTag;
  temperature: FloatTag;
  temperature_modifier?: BiomeTemperatureModifier;
  downfall: FloatTag;
  effects: BiomeEffects;
}

export type BiomeTemperatureModifier = "none" | "frozen";

export interface BiomeEffects {
  fog_color: IntTag;
  water_color: IntTag;
  water_fog_color: IntTag;
  sky_color: IntTag;
  foliage_color?: IntTag;
  grass_color?: IntTag;
  grass_color_modifier?: BiomeEffectGrassColorModifier;
  particle?: BiomeParticle;
  ambient_sound?: BiomeAmbientSound | StringTag; // `SoundResource`
  mood_sound?: BiomeMoodSound;
  additions_sound?: BiomeAdditionsSound;
  music?: BiomeMusicSound;
}

export type BiomeEffectGrassColorModifier = "none" | "dark_forest" | "swamp";

export interface BiomeParticle {
  options: BiomeParticleOptions;
  probability: FloatTag;
}

export interface BiomeParticleOptions {
  type: StringTag; // `ParticleResource`
  value?: unknown; // needs more info
}

export interface BiomeAmbientSound {
  sound_id: StringTag; // `SoundtrackResource`
  range?: FloatTag;
}

export interface BiomeMoodSound {
  sound: StringTag; // `SoundtrackResource`
  tick_delay: IntTag;
  block_search_extent: IntTag;
  offset: DoubleTag;
}

export interface BiomeAdditionsSound {
  sound: StringTag; // `SoundtrackResource`
  tick_chance: DoubleTag;
}

export interface BiomeMusicSound {
  sound: StringTag; // `SoundtrackResource`
  min_delay: IntTag;
  max_delay: IntTag;
  replace_current_music: BooleanTag;
}

export interface ChatType {
  chat: ChatDecoration;
  narration: ChatDecoration;
}

export interface ChatDecoration {
  translation_key: StringTag;
  style?: CompoundTag; // Custom formatted text, needs more info
  parameters: ChatDecorationPlaceholder[];
}

export type ChatDecorationPlaceholder = "sender" | "target" | "content";

export interface DamageType {
  message_id: StringTag; // `death.attack.<message_id>`, ie `onFire`
  scaling: DamageScaling;
  exhaustion: FloatTag;
  effects?: DamageEffect;
  death_message_type?: DamageDeathMessage;
}

export type DamageScaling = "never" | "when_caused_by_living_non_player" | "always";

export type DamageEffect = "hurt" | "thorns" | "drowning" | "burning" | "poking" | "freezing";

export type DamageDeathMessage = "default" | "fall_variants" | "intentional_game_design";

export interface DimensionType {
  fixed_time?: LongTag;
  has_skylight: BooleanTag;
  has_ceiling: BooleanTag;
  ultrawarm: BooleanTag;
  natural: BooleanTag;
  coordinate_scale: DoubleTag;
  bed_works: BooleanTag;
  respawn_anchor_works: BooleanTag;
  min_y: IntTag;
  height: IntTag;
  logical_height: IntTag;
  infiniburn: DimensionInfiniburn;
  effects: StringTag; // `DimensionResource`
  ambient_light: FloatTag;
  piglin_safe: BooleanTag;
  has_raids_safe: BooleanTag;
  monster_spawn_light_level: DimensionMonsterSpawnLightLevel;
  monster_spawn_block_light_limit: IntTag<DimensionMonsterSpawnLightLevelRange>;
}

export type DimensionInfiniburn = `#${string}`; // `BlockResource`

export type DimensionMonsterSpawnLightLevel = IntegerDistribution | IntTag<DimensionMonsterSpawnLightLevelRange>;

export interface IntegerDistribution {
  type: IntegerDistributionType;
  value: unknown; // `CompoundTag`, needs more info
}

export type IntegerDistributionType = "minecraft:constant" | "minecraft:uniform" | "minecraft:biased_to_bottom" | "minecraft:clamped" | "minecraft:weighted_list" | "minecraft:clamped_normal";

export type DimensionMonsterSpawnLightLevelRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;