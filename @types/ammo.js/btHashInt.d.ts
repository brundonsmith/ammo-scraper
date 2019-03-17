declare module Ammo {
  declare class btHashInt {
    constructor();
    constructor(uid: number);
    getUid1(): number;
    setUid1(uid: number): void;
    equals(other: btHashInt): boolean;
    getHash(): number;
  }
}
