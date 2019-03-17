declare module Ammo {
  declare class btPairCachingGhostObject {
    constructor();


    addOverlappingObjectInternal(otherProxy: btBroadphaseProxy, thisProxy: btBroadphaseProxy): void;
    getOverlappingPairCache(): btHashedOverlappingPairCache;
    removeOverlappingObjectInternal(otherProxy: btBroadphaseProxy, dispatcher: btDispatcher, thisProxy: btBroadphaseProxy): void;
  }
}
