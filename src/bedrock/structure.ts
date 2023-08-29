export type StructureResource = typeof StructureResource[keyof typeof StructureResource];

export const StructureResource = {
  ancientcity: "minecraft:ancientcity",
  ancient_city: "minecraft:ancient_city",
  bastionremnant: "minecraft:bastionremnant",
  bastion_remnant: "minecraft:bastion_remnant",
  buriedtreasure: "minecraft:buriedtreasure",
  buried_treasure: "minecraft:buried_treasure",
  endcity: "minecraft:endcity",
  end_city: "minecraft:end_city",
  fortress: "minecraft:fortress",
  mansion: "minecraft:mansion",
  mineshaft: "minecraft:mineshaft",
  monument: "minecraft:monument",
  ruins: "minecraft:ruins",
  pillageroutpost: "minecraft:pillageroutpost",
  pillager_outpost: "minecraft:pillager_outpost",
  ruinedportal: "minecraft:ruinedportal",
  ruined_portal: "minecraft:ruined_portal",
  shipwreck: "minecraft:shipwreck",
  stronghold: "minecraft:stronghold",
  temple: "minecraft:temple",
  trail_ruins: "minecraft:trail_ruins",
  village: "minecraft:village"
} as const;