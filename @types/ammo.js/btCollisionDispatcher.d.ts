declare module Ammo {
  declare class btCollisionDispatcher {
    getDispatcherFlags(): number;
    setDispatcherFlags(flags: number): void;
    registerCollisionCreateFunc(proxyType0: number, proxyType1: number, createFunc: btCollisionAlgorithmCreateFunc): void;
    registerClosestPointsCreateFunc(proxyType0: number, proxyType1: number, createFunc: btCollisionAlgorithmCreateFunc): void;
    getNumManifolds(): number;
    getInternalManifoldPointer(): btPersistentManifold;
    getManifoldByIndexInternal(index: number): btPersistentManifold;
    getManifoldByIndexInternal(index: number): btPersistentManifold;
    constructor(collisionConfiguration: btCollisionConfiguration);
    getNewManifold(b0: btCollisionObject, b1: btCollisionObject): btPersistentManifold;
    releaseManifold(manifold: btPersistentManifold): void;
    clearManifold(manifold: btPersistentManifold): void;
    findAlgorithm(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, sharedManifold: btPersistentManifold, queryType: ebtDispatcherQueryType): btCollisionAlgorithm;
    needsCollision(body0: btCollisionObject, body1: btCollisionObject): boolean;
    needsResponse(body0: btCollisionObject, body1: btCollisionObject): boolean;
    dispatchAllCollisionPairs(pairCache: btOverlappingPairCache, dispatchInfo: btDispatcherInfo, dispatcher: btDispatcher): void;
    setNearCallback(nearCallback: btNearCallback): void;
    getNearCallback(): btNearCallback;
    allocateCollisionAlgorithm(size: number): void;
    freeCollisionAlgorithm(ptr: void): void;
    getCollisionConfiguration(): btCollisionConfiguration;
    getCollisionConfiguration(): btCollisionConfiguration;
    setCollisionConfiguration(config: btCollisionConfiguration): void;
    getInternalManifoldPool(): btPoolAllocator;
    getInternalManifoldPool(): btPoolAllocator;
    get_void(): static;	set_void(value: static): static;
  }
}
