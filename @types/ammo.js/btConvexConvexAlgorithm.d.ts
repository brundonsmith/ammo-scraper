declare module Ammo {
  declare class btConvexConvexAlgorithm {
    constructor(mf: btPersistentManifold, ci: btCollisionAlgorithmConstructionInfo, body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, pdSolver: btConvexPenetrationDepthSolver, numPerturbationIterations: number, minimumPointsPerturbationThreshold: number);


    calculateTimeOfImpact(body0: btCollisionObject, body1: btCollisionObject, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): number;
    getAllContactManifolds(manifoldArray: btManifoldArray): void;
    getManifold(): btPersistentManifold;
    processCollision(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): void;
    setLowLevelOfDetail(useLowLevel: boolean): void;
  }
}
