declare module Ammo {
  declare class btDefaultCollisionConfiguration {
    constructor(constructionInfo: btDefaultCollisionConstructionInfo);


    getPersistentManifoldPool(): btPoolAllocator;
    getCollisionAlgorithmPool(): btPoolAllocator;
    getCollisionAlgorithmCreateFunc(proxyType0: number, proxyType1: number): btCollisionAlgorithmCreateFunc;
    getClosestPointsAlgorithmCreateFunc(proxyType0: number, proxyType1: number): btCollisionAlgorithmCreateFunc;
    setConvexConvexMultipointIterations(numPerturbationIterations: number, minimumPointsPerturbationThreshold: number): void;
    setPlaneConvexMultipointIterations(numPerturbationIterations: number, minimumPointsPerturbationThreshold: number): void;
  }
}
