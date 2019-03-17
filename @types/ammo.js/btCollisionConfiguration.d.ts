declare module Ammo {
  declare class btCollisionConfiguration {
    getPersistentManifoldPool(): btPoolAllocator;
    getCollisionAlgorithmPool(): btPoolAllocator;
    getCollisionAlgorithmCreateFunc(proxyType0: number, proxyType1: number): btCollisionAlgorithmCreateFunc;
    getClosestPointsAlgorithmCreateFunc(proxyType0: number, proxyType1: number): btCollisionAlgorithmCreateFunc;
  }
}
