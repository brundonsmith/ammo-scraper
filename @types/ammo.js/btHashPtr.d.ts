declare module Ammo {
  declare class btHashPtr {
    constructor(ptr: void);
    getPointer(): void;
    equals(other: btHashPtr): boolean;
    getHash(): number;
  }
}
