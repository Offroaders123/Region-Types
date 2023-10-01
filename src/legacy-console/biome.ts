export enum BiomeResource {
  none = -1,
  // 0
  ocean = 0,
  plains,
  desert,
  extreme_hills,                     mountains = extreme_hills,
  forest,
  taiga,
  swampland,                         swamp = swampland,
  river,
  hell,                              nether_wastes = hell,
  the_end,
  // 10
  legacy_frozen_ocean,               frozenOcean = legacy_frozen_ocean,
  frozen_river,
  ice_plains,                        snowy_tundra = ice_plains,
  ice_mountains,                     snowy_mountains = ice_mountains,
  mushroom_island,                   mushroom_fields = mushroom_island,
  mushroom_island_shore,             mushroom_field_shore = mushroom_island_shore,
  beach,
  desert_hills,
  forest_hills,                      wooded_hills = forest_hills,
  taiga_hills,
  // 20
  extreme_hills_edge,                mountain_edge = extreme_hills_edge,
  jungle,
  jungle_hills,
  jungle_edge,
  deep_ocean,
  stone_beach,                       stone_shore = stone_beach,
  cold_beach,                        snowy_beach = cold_beach,
  birch_forest,
  birch_forest_hills,
  roofed_forest,                     dark_forest = roofed_forest,
  // 30
  cold_taiga,                        snowy_taiga = cold_taiga,
  cold_taiga_hills,                  snowy_taiga_hills = cold_taiga_hills,
  mega_taiga,                        giant_tree_taiga = mega_taiga,
  mega_taiga_hills,                  giant_tree_taiga_hills = mega_taiga_hills,
  extreme_hills_plus_trees,          wooded_mountains = extreme_hills_plus_trees,
  savanna,
  savanna_plateau,
  mesa,                              badlands = mesa,
  mesa_plateau_stone,                wooded_badlands_plateau = mesa_plateau_stone,
  mesa_plateau,                      badlands_plateau = mesa_plateau,
  // 40  --  1.13
  warm_ocean,
  deep_warm_ocean,
  lukewarm_ocean,
  deep_lukewarm_ocean,
  cold_ocean,
  deep_cold_ocean,
  frozen_ocean,
  deep_frozen_ocean,
  small_end_islands,
  end_midlands,
  // 50
  end_highlands,
  end_barrens,
  // BIOME_NUM,

  the_void = 127,

  // mutated variants
  sunflower_plains                 = plains + 128,
  desert_mutated                   = desert + 128,                        desert_lakes = desert_mutated,
  extreme_hills_mutated            = extreme_hills + 128,                 gravelly_mountains = extreme_hills_mutated,
  flower_forest                    = forest + 128,
  taiga_mutated                    = taiga + 128,                         taiga_mountains = taiga_mutated,
  swampland_mutated                = swampland + 128,                     swamp_hills = swampland_mutated,
  ice_plains_spikes                = ice_plains + 128,                    ice_spikes = ice_plains_spikes,
  jungle_mutated                   = jungle + 128,                        modified_jungle = jungle_mutated,
  jungle_edge_mutated              = jungle_edge + 128,                   modified_jungle_edge = jungle_edge_mutated,
  birch_forest_mutated             = birch_forest + 128,                  tall_birch_forest = birch_forest_mutated,
  birch_forest_hills_mutated       = birch_forest_hills + 128,            tall_birch_hills = birch_forest_hills_mutated,
  roofed_forest_mutated            = roofed_forest + 128,                 dark_forest_hills = roofed_forest_mutated,
  cold_taiga_mutated               = cold_taiga + 128,                    snowy_taiga_mountains = cold_taiga_mutated,
  mega_spruce_taiga                = mega_taiga + 128,                    giant_spruce_taiga = mega_spruce_taiga,
  redwood_taiga_hills_mutated      = mega_taiga_hills + 128,              giant_spruce_taiga_hills = redwood_taiga_hills_mutated,
  extreme_hills_plus_trees_mutated = extreme_hills_plus_trees + 128,      modified_gravelly_mountains = extreme_hills_plus_trees_mutated,
  savanna_mutated                  = savanna + 128,                       shattered_savanna = savanna_mutated,
  savanna_plateau_mutated          = savanna_plateau + 128,               shattered_savanna_plateau = savanna_plateau_mutated,
  mesa_bryce                       = mesa + 128,                          eroded_badlands = mesa_bryce,
  mesa_plateau_stone_mutated       = mesa_plateau_stone + 128,            modified_wooded_badlands_plateau = mesa_plateau_stone_mutated,
  mesa_plateau_mutated             = mesa_plateau + 128,                  modified_badlands_plateau = mesa_plateau_mutated,
  // 1.14
  bamboo_jungle                    = 168,
  bamboo_jungle_hills              = 169
}