declare module Ammo {
  declare class btInternalVertexPair {
    constructor(v0: number, v1: number);

    get_int(): short;	set_int(value: short): short;
    get_int(): short;	set_int(value: short): short;

    equals(other: btInternalVertexPair): boolean;
    getHash(): number;
  }
}
