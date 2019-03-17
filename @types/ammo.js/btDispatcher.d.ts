declare module Ammo {
  declare class btDispatcher {
    findAlgorithm(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, sharedManifold: btPersistentManifold, queryType: ebtDispatcherQueryType): btCollisionAlgorithm;
    getNewManifold(b0: btCollisionObject, b1: btCollisionObject): btPersistentManifold;
    releaseManifold(manifold: btPersistentManifold): void;
    clearManifold(manifold: btPersistentManifold): void;
    needsCollision(body0: btCollisionObject, body1: btCollisionObject): boolean;
    needsResponse(body0: btCollisionObject, body1: btCollisionObject): boolean;
    dispatchAllCollisionPairs(pairCache: btOverlappingPairCache, dispatchInfo: btDispatcherInfo, dispatcher: btDispatcher): void;
    getNumManifolds(): number;
    getManifoldByIndexInternal(index: number): btPersistentManifold;
    getInternalManifoldPointer(): btPersistentManifold;
    getInternalManifoldPool(): btPoolAllocator;
    getInternalManifoldPool(): btPoolAllocator;
    allocateCollisionAlgorithm(size: number): void;
    freeCollisionAlgorithm(ptr: void): void;
  }
}
