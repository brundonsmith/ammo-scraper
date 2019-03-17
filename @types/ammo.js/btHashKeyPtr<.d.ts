declare module Ammo {
  declare class btHashKeyPtr< {
    constructor(uid: number);
    getUid1(): number;
    equals(r: btHashKeyPt): boolean;
    getHash(): number;
  }
}
