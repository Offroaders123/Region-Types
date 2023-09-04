export type DimensionResource = typeof DimensionResource[keyof typeof DimensionResource];

export const DimensionResource = {
  overworld: "minecraft:overworld",
  the_nether: "minecraft:the_nether",
  the_end: "minecraft:the_end"
} as const;

export type DimensionID = typeof DimensionID[keyof typeof DimensionID];

export const DimensionID = {
  overworld: 0,
  the_nether: -1,
  the_end: 1
} as const;