declare module Ammo {
  declare class btCollisionDispatcherMt {
    constructor(config: btCollisionConfiguration, grainSize: number);


    dispatchAllCollisionPairs(pairCache: btOverlappingPairCache, info: btDispatcherInfo, dispatcher: btDispatcher): void;
    getNewManifold(body0: btCollisionObject, body1: btCollisionObject): btPersistentManifold;
    releaseManifold(manifold: btPersistentManifold): void;
  }
}
