declare module Ammo {
  declare class btHashInt {
    constructor();
    constructor(uid: number);


    equals(other: btHashInt): boolean;
    getUid1(): number;
    getHash(): number;
    setUid1(uid: number): void;
  }
}
