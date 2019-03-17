declare module Ammo {
  declare class CheckOverlapCallback {
    processOverlap(pair: btBroadphasePair): boolean;
  }
}
