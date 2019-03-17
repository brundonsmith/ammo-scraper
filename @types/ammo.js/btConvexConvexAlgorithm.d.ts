declare module Ammo {
  declare class btConvexConvexAlgorithm {
    constructor(mf: btPersistentManifold, ci: btCollisionAlgorithmConstructionInfo, body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, pdSolver: btConvexPenetrationDepthSolver, numPerturbationIterations: number, minimumPointsPerturbationThreshold: number);
    processCollision(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): void;
    calculateTimeOfImpact(body0: btCollisionObject, body1: btCollisionObject, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): number;
    getAllContactManifolds(manifoldArray: btManifoldArray): void;
    setLowLevelOfDetail(useLowLevel: boolean): void;
    getManifold(): btPersistentManifold;
  }
}
