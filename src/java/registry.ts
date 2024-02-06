import { BooleanTag, IntTag, LongTag, FloatTag, DoubleTag, StringTag, CompoundTag } from "nbtify";

export type RegistryData = {
  [K in keyof EntryElementNameMap]: RegistryLike<K>;
};

export interface RegistryLike<K extends keyof EntryElementNameMap = keyof EntryElementNameMap> {
  type: K;
  value: EntryElementNameMap[K][];
}

export interface RegistryEntry<T extends object, N extends string, I extends number> {
  name: N;
  id: IntTag<I>;
  element: T;
}

export interface EntryElementNameMap {
  "minecraft:trim_material": RegistryEntry<ArmorTrimMaterial, keyof typeof RegistryArmorTrimMaterialResource, RegistryArmorTrimMaterialResource>;
  "minecraft:trim_pattern": RegistryEntry<ArmorTrimPattern, keyof typeof RegistryArmorTrimPatternResource, RegistryArmorTrimPatternResource>;
  "minecraft:worldgen/biome": RegistryEntry<Biome, keyof typeof RegistryBiomeResource, RegistryBiomeResource>;
  "minecraft:chat_type": RegistryEntry<ChatType, keyof typeof RegistryChatTypeResource, RegistryChatTypeResource>;
  "minecraft:damage_type": RegistryEntry<DamageType, keyof typeof RegistryDamageTypeResource, RegistryDamageTypeResource>;
  "minecraft:dimension_type": RegistryEntry<DimensionType, keyof typeof RegistryDimensionTypeResource, RegistryDimensionTypeResource>;
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

export enum RegistryArmorTrimPatternResource {
  "minecraft:coast" = 0,
  "minecraft:dune",
  "minecraft:eye",
  "minecraft:host",
  "minecraft:raiser",
  "minecraft:rib",
  "minecraft:sentry",
  "minecraft:shaper",
  "minecraft:silence",
  "minecraft:snout",
  "minecraft:spire",
  "minecraft:tide",
  "minecraft:vex",
  "minecraft:ward",
  "minecraft:wayfinder",
  "minecraft:wild"
}

export enum RegistryArmorTrimMaterialResource {
  "minecraft:amethyst" = 0,
  "minecraft:copper",
  "minecraft:diamond",
  "minecraft:emerald",
  "minecraft:gold",
  "minecraft:iron",
  "minecraft:lapis",
  "minecraft:netherite",
  "minecraft:quartz",
  "minecraft:redstone"
}

export enum RegistryBiomeResource {
  "minecraft:badlands" = 0,
  "minecraft:bamboo_jungle",
  "minecraft:basalt_deltas",
  "minecraft:beach",
  "minecraft:birch_forest",
  "minecraft:cherry_grove",
  "minecraft:cold_ocean",
  "minecraft:crimson_forest",
  "minecraft:dark_forest",
  "minecraft:deep_cold_ocean",
  "minecraft:deep_dark",
  "minecraft:deep_frozen_ocean",
  "minecraft:deep_lukewarm_ocean",
  "minecraft:deep_ocean",
  "minecraft:desert",
  "minecraft:dripstone_caves",
  "minecraft:end_barrens",
  "minecraft:end_highlands",
  "minecraft:end_midlands",
  "minecraft:eroded_badlands",
  "minecraft:flower_forest",
  "minecraft:forest",
  "minecraft:frozen_ocean",
  "minecraft:frozen_peaks",
  "minecraft:frozen_river",
  "minecraft:grove",
  "minecraft:ice_spikes",
  "minecraft:jagged_peaks",
  "minecraft:jungle",
  "minecraft:lukewarm_ocean",
  "minecraft:lush_caves",
  "minecraft:mangrove_swamp",
  "minecraft:meadow",
  "minecraft:mushroom_fields",
  "minecraft:nether_wastes",
  "minecraft:ocean",
  "minecraft:old_growth_birch_forest",
  "minecraft:old_growth_pine_taiga",
  "minecraft:old_growth_spruce_taiga",
  "minecraft:plains",
  "minecraft:river",
  "minecraft:savanna",
  "minecraft:savanna_plateau",
  "minecraft:small_end_islands",
  "minecraft:snowy_beach",
  "minecraft:snowy_plains",
  "minecraft:snowy_slopes",
  "minecraft:snowy_taiga",
  "minecraft:soul_sand_valley",
  "minecraft:sparse_jungle",
  "minecraft:stony_peaks",
  "minecraft:stony_shore",
  "minecraft:sunflower_plains",
  "minecraft:swamp",
  "minecraft:taiga",
  "minecraft:the_end",
  "minecraft:the_void",
  "minecraft:warm_ocean",
  "minecraft:warped_forest",
  "minecraft:windswept_forest",
  "minecraft:windswept_gravelly_hills",
  "minecraft:windswept_hills",
  "minecraft:windswept_savanna",
  "minecraft:wooded_badlands"
}

export enum RegistryChatTypeResource {
  "minecraft:chat" = 0,
  "minecraft:emote_command",
  "minecraft:msg_command_incoming",
  "minecraft:msg_command_outgoing",
  "minecraft:say_command",
  "minecraft:team_msg_command_incoming",
  "minecraft:team_msg_command_outgoing"
}

export enum RegistryDamageTypeResource {
  "minecraft:arrow" = 0,
  "minecraft:bad_respawn_point",
  "minecraft:cactus",
  "minecraft:cramming",
  "minecraft:dragon_breath",
  "minecraft:drown",
  "minecraft:dry_out",
  "minecraft:explosion",
  "minecraft:fall",
  "minecraft:falling_anvil",
  "minecraft:falling_block",
  "minecraft:falling_stalactite",
  "minecraft:fireball",
  "minecraft:fireworks",
  "minecraft:fly_into_wall",
  "minecraft:freeze",
  "minecraft:generic",
  "minecraft:generic_kill",
  "minecraft:hot_floor",
  "minecraft:in_fire",
  "minecraft:in_wall",
  "minecraft:indirect_magic",
  "minecraft:lava",
  "minecraft:lightning_bolt",
  "minecraft:magic",
  "minecraft:mob_attack",
  "minecraft:mob_attack_no_aggro",
  "minecraft:mob_projectile",
  "minecraft:on_fire",
  "minecraft:out_of_world",
  "minecraft:outside_border",
  "minecraft:player_attack",
  "minecraft:player_explosion",
  "minecraft:sonic_boom",
  "minecraft:stalagmite",
  "minecraft:starve",
  "minecraft:sting",
  "minecraft:sweet_berry_bush",
  "minecraft:thorns",
  "minecraft:thrown",
  "minecraft:trident",
  "minecraft:unattributed_fireball",
  "minecraft:wither",
  "minecraft:wither_skull"
}

export enum RegistryDimensionTypeResource {
  "minecraft:overworld" = 0,
  "minecraft:overworld_caves",
  "minecraft:the_end",
  "minecraft:the_nether"
}