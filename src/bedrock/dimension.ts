export type DimensionResource = typeof DimensionResource[keyof typeof DimensionResource];

export const DimensionResource = {
  overworld: "minecraft:overworld",
  nether: "minecraft:nether",
  the_end: "minecraft:the_end"
} as const;