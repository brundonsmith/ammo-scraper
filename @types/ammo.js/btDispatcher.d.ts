declare module Ammo {
  declare class btDispatcher {


    allocateCollisionAlgorithm(size: number): void;
    clearManifold(manifold: btPersistentManifold): void;
    dispatchAllCollisionPairs(pairCache: btOverlappingPairCache, dispatchInfo: btDispatcherInfo, dispatcher: btDispatcher): void;
    findAlgorithm(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, sharedManifold: btPersistentManifold, queryType: ebtDispatcherQueryType): btCollisionAlgorithm;
    freeCollisionAlgorithm(ptr: void): void;
    getNewManifold(b0: btCollisionObject, b1: btCollisionObject): btPersistentManifold;
    getManifoldByIndexInternal(index: number): btPersistentManifold;
    getInternalManifoldPointer(): btPersistentManifold;
    getInternalManifoldPool(): btPoolAllocator;
    getInternalManifoldPool(): btPoolAllocator;
    getNumManifolds(): number;
    needsResponse(body0: btCollisionObject, body1: btCollisionObject): boolean;
    needsCollision(body0: btCollisionObject, body1: btCollisionObject): boolean;
    releaseManifold(manifold: btPersistentManifold): void;
  }
}
