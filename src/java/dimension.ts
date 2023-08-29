export type DimensionResource = typeof DimensionResource[keyof typeof DimensionResource];

export const DimensionResource = {
  overworld: "minecraft:overworld",
  the_nether: "minecraft:the_nether",
  the_end: "minecraft:the_end"
} as const;