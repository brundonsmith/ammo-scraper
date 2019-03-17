declare module Ammo {
  declare class btPairCachingGhostObject {
    constructor();
    addOverlappingObjectInternal(otherProxy: btBroadphaseProxy, thisProxy: btBroadphaseProxy): void;
    removeOverlappingObjectInternal(otherProxy: btBroadphaseProxy, dispatcher: btDispatcher, thisProxy: btBroadphaseProxy): void;
    getOverlappingPairCache(): btHashedOverlappingPairCache;
  }
}
