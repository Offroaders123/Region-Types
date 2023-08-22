import { NBTData, TAG, isTag, getTagType } from "nbtify";

import type { Tag, ListTag, CompoundTag } from "nbtify";

export interface DefinitionOptions {
  name: string;
}

/**
 * Generates a TypeScript interface definition from an NBTData object.
*/
export function definition<T extends CompoundTag>(data: T | NBTData<T>, options: DefinitionOptions): string;
export function definition<T extends CompoundTag>(data: T | NBTData<T>, { name }: DefinitionOptions): string {
  if (data instanceof NBTData){
    data = data.data;
  }

  if (typeof data !== "object" || data === null){
    throw new TypeError("First parameter must be an object");
  }
  if (typeof name !== "string"){
    throw new TypeError("Name option must be a string");
  }

  return new DefinitionWriter().write(data,{ name });
}

export interface DefinitionWriterOptions {
  name: string;
}

/**
 * The base implementation to generate a TypeScript interface definition from an NBTData object.
*/
export class DefinitionWriter {
  #space!: string;
  #level!: number;

  /**
   * Initiates the writer over an NBTData object.
  */
  write<T extends CompoundTag>(data: T | NBTData<T>, options: DefinitionWriterOptions): string;
  write<T extends CompoundTag>(data: T | NBTData<T>, { name }: DefinitionWriterOptions): string {
    if (data instanceof NBTData){
      data = data.data;
    }

    if (typeof data !== "object" || data === null){
      throw new TypeError("First parameter must be an object");
    }
    if (typeof name !== "string"){
      throw new TypeError("Name option must be a string");
    }

    this.#space = "  ";
    this.#level = 1;

    return `interface ${name} ${this.#writeCompound(data)}`;
  }

  #writeTag(value: Tag): string {
    const type = getTagType(value);
    switch (type){
      case TAG.BYTE: return (typeof value === "boolean") ? "BooleanTag" : "ByteTag";
      case TAG.SHORT: return "ShortTag";
      case TAG.INT: return "IntTag";
      case TAG.LONG: return "LongTag";
      case TAG.FLOAT: return "FloatTag";
      case TAG.DOUBLE: return "DoubleTag";
      case TAG.BYTE_ARRAY: return "ByteArrayTag";
      case TAG.STRING: return "StringTag";
      case TAG.LIST: return this.#writeList(value as ListTag<Tag>);
      case TAG.COMPOUND: return this.#writeCompound(value as CompoundTag);
      case TAG.INT_ARRAY: return "IntArrayTag";
      case TAG.LONG_ARRAY: return "LongArrayTag";
      default: throw new Error(`Encountered unsupported tag type '${type}'`);
    }
  }

  #writeStringLiteral(value: string): string {
    const singleQuoteString = value.replace(/['\\]/g,(character) => `\\${character}`);
    const doubleQuoteString = value.replace(/["\\]/g,(character) => `\\${character}`);
    return (singleQuoteString.length < doubleQuoteString.length) ? `'${singleQuoteString}'` : `"${doubleQuoteString}"`;
  }

  #writeList(value: ListTag<Tag>): string {
    value = value.filter(isTag);
    const fancy = (this.#space !== "");
    const type: TAG = (value[0] !== undefined) ? getTagType(value[0]) : TAG.END;
    const isIndentedList = fancy && new Set<TAG>([TAG.BYTE_ARRAY,TAG.LIST,TAG.COMPOUND,TAG.INT_ARRAY,TAG.LONG_ARRAY]).has(type);
    return `[${value.map(entry => `${isIndentedList ? `\n${this.#space.repeat(this.#level)}` : ""}${(() => {
      this.#level += 1;
      const result = this.#writeTag(entry);
      this.#level -= 1;
      return result;
    })() satisfies string}`).join(`,${fancy && !isIndentedList ? " " : ""}`)}${isIndentedList ? `\n${this.#space.repeat(this.#level - 1)}` : ""}]`;
  }

  #writeCompound(value: CompoundTag): string {
    const fancy = (this.#space !== "");
    return `{${Object.entries(value).filter((entry): entry is [string,Tag] => isTag(entry[1])).map(([key,value]) => `${fancy ? `\n${(this.#space satisfies string).repeat(this.#level)}` : ""}${/^[0-9a-z_\-.+]+$/i.test(key) ? key : this.#writeStringLiteral(key)}:${fancy ? " " : ""}${(() => {
      this.#level += 1;
      const result = `${this.#writeTag(value)};`;
      this.#level -= 1;
      return result;
    })() satisfies string}`).join("")}${fancy && Object.keys(value).length !== 0 ? `\n${this.#space.repeat(this.#level - 1)}` : ""}}`;
  }
}