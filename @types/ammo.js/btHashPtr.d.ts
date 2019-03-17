declare module Ammo {
  declare class btHashPtr {
    constructor(ptr: void);


    equals(other: btHashPtr): boolean;
    getPointer(): void;
    getHash(): number;
  }
}
