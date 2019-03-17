declare module Ammo {
  declare class btHashKey< {
    constructor(uid: number);
    getUid1(): number;
    equals(y: btHashKe): boolean;
    getHash(): number;
  }
}
