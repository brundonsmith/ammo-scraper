declare module Ammo {
  declare class btCollisionDispatcher {
    constructor(collisionConfiguration: btCollisionConfiguration);

    get_void(): static;	set_void(value: static): static;

    allocateCollisionAlgorithm(size: number): void;
    clearManifold(manifold: btPersistentManifold): void;
    dispatchAllCollisionPairs(pairCache: btOverlappingPairCache, dispatchInfo: btDispatcherInfo, dispatcher: btDispatcher): void;
    findAlgorithm(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, sharedManifold: btPersistentManifold, queryType: ebtDispatcherQueryType): btCollisionAlgorithm;
    freeCollisionAlgorithm(ptr: void): void;
    getManifoldByIndexInternal(index: number): btPersistentManifold;
    getDispatcherFlags(): number;
    getNewManifold(b0: btCollisionObject, b1: btCollisionObject): btPersistentManifold;
    getCollisionConfiguration(): btCollisionConfiguration;
    getInternalManifoldPool(): btPoolAllocator;
    getInternalManifoldPool(): btPoolAllocator;
    getCollisionConfiguration(): btCollisionConfiguration;
    getNumManifolds(): number;
    getInternalManifoldPointer(): btPersistentManifold;
    getManifoldByIndexInternal(index: number): btPersistentManifold;
    getNearCallback(): btNearCallback;
    needsResponse(body0: btCollisionObject, body1: btCollisionObject): boolean;
    needsCollision(body0: btCollisionObject, body1: btCollisionObject): boolean;
    releaseManifold(manifold: btPersistentManifold): void;
    registerClosestPointsCreateFunc(proxyType0: number, proxyType1: number, createFunc: btCollisionAlgorithmCreateFunc): void;
    registerCollisionCreateFunc(proxyType0: number, proxyType1: number, createFunc: btCollisionAlgorithmCreateFunc): void;
    setNearCallback(nearCallback: btNearCallback): void;
    setDispatcherFlags(flags: number): void;
    setCollisionConfiguration(config: btCollisionConfiguration): void;
  }
}
