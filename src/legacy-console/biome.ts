export type BiomeResource = typeof BiomeResource[keyof typeof BiomeResource];

export const BiomeResource = {
// v1.0
  forest: 21,
  forest_hills: 22,
// v1.2
  // implied?
  ocean: 0,
  beach: 16,
  // forest: 4,
  // forest_hills: 18,
  taiga: 5,
  taiga_hills: 19,
  extreme_hills: 3,
  desert: 2,
  desert_hills: 17,
  // may need help, off by +128?
  deep_ocean: 24,
  stone_beach: 25,
  snowy_beach: 26, // cold/snowy beach
  jungle_edge: 23,
  birch_forest: 27,
  dark_forest: 29, // roofed/dark forest
  birch_forest_hills: 28,
  snowy_taiga: 30, // cold/snowy_taiga
  mega_taiga: 32,
  snowy_taiga_hills: 31, // cold/snowy_taiga_hills
  mega_taiga_hills: 33,
  wooded_mountains: 34, // extreme_hills_plus_trees/wooded_mountains
  savanna: 35,
  mesa: 37,
  savanna_plateau: 36,
  wooded_badlands_plateau: 38, // mesa_plateau_stone/wooded_badlands_plateau
  mesa_plateau: 39,
// v1.7
  the_end: [48,49,50,51], // ?
// v1.9
  warm_ocean: 40,
  lukewarm_ocean: 42,
  cold_ocean: 44,
  deep_warm_ocean: 41,
  deep_lukewarm_ocean: 43,
  deep_cold_ocean: 45,
  frozen_ocean: 46,
  deep_frozen_ocean: 47,
  legacy_frozen_ocean: 10, // 'frozen_ocean' alias, kind of? (for pre-1.9)
// v1.13
  jungle: [168,21], // ?
  jungle_hills: [169,22] // ?
} as const;