import type { ByteTag, ShortTag } from "nbtify";
import type { BlockResource } from "./block.js";

export interface Item {
  id: ShortTag<BlockResource | ItemResource>;
  Count: ByteTag;
  Damage: ShortTag;
}

export interface SlottedItem extends Item {
  Slot: ByteTag;
}

export enum ItemResource {
  iron_shovel = 256,
  iron_pickaxe,
  iron_axe,
  flint_and_steel,
  apple,
  bow,
  arrow,
  coal,
  diamond,
  iron_ingot,
  gold_ingot,
  iron_sword,
  wooden_sword,
  wooden_shovel,
  wooden_pickaxe,
  wooden_axe,
  stone_sword,
  stone_shovel,
  stone_pickaxe,
  stone_axe,
  diamond_sword,
  diamond_shovel,
  diamond_pickaxe,
  diamond_axe,
  stick,
  bowl,
  mushroom_stew,
  golden_sword,
  golden_shovel,
  golden_pickaxe,
  golden_axe,
  string,
  feather,
  gunpowder,
  wooden_hoe,
  stone_hoe,
  iron_hoe,
  diamond_hoe,
  golden_hoe,
  seeds,
  wheat,
  bread,
  leather_cap,
  leather_tunic,
  leather_pants,
  leather_boots,
  chain_helmet,
  chain_chestplate,
  chain_leggings,
  chain_boots,
  iron_helmet,
  iron_chestplate,
  iron_leggings,
  iron_boots,
  diamond_helmet,
  diamond_chestplate,
  diamond_leggings,
  diamond_boots,
  golden_helmet,
  golden_chestplate,
  golden_leggings,
  golden_boots,
  flint,
  raw_porkchop,
  cooked_porkchop,
  painting
}