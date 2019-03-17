declare module Ammo {
  declare class btConvex2dConvex2dAlgorithm {
    constructor(mf: btPersistentManifold, ci: btCollisionAlgorithmConstructionInfo, body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, simplexSolver: btSimplexSolverInterface, pdSolver: btConvexPenetrationDepthSolver, numPerturbationIterations: number, minimumPointsPerturbationThreshold: number);


    calculateTimeOfImpact(body0: btCollisionObject, body1: btCollisionObject, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): number;
    getAllContactManifolds(manifoldArray: btManifoldArray): void;
    getManifold(): btPersistentManifold;
    processCollision(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): void;
    setLowLevelOfDetail(useLowLevel: boolean): void;
  }
}
