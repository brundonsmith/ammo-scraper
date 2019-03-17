declare module Ammo {
  declare class btConvex2dConvex2dAlgorithm {
    constructor(mf: btPersistentManifold, ci: btCollisionAlgorithmConstructionInfo, body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, simplexSolver: btSimplexSolverInterface, pdSolver: btConvexPenetrationDepthSolver, numPerturbationIterations: number, minimumPointsPerturbationThreshold: number);
    processCollision(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): void;
    calculateTimeOfImpact(body0: btCollisionObject, body1: btCollisionObject, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): number;
    getAllContactManifolds(manifoldArray: btManifoldArray): void;
    setLowLevelOfDetail(useLowLevel: boolean): void;
    getManifold(): btPersistentManifold;
  }
}
