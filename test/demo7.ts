export type World = BedrockWorld | JavaWorld;

export type BedrockWorld = {
  [K in BedrockWorldFile]: File;
};

export type BedrockWorldFile = "level.dat" | "levelname.txt" | "world_icon.jpeg";

export type JavaWorld = {
  [K in JavaWorldFile]: File;
};

export type JavaWorldFile = "icon.png" | "level.dat";

export function readWorld(world: World) {
  if ("levelname.txt" in world){
    world;
  } else {
    world;
  }
}

export function isBedrockWorld(world: World): world is BedrockWorld {
  return "levelname.txt" in world;
}