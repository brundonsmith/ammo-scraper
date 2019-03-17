declare module Ammo {
  declare class btSphereSphereCollisionAlgorithm {
    constructor(mf: btPersistentManifold, ci: btCollisionAlgorithmConstructionInfo, col0Wrap: btCollisionObjectWrapper, col1Wrap: btCollisionObjectWrapper);
    constructor(ci: btCollisionAlgorithmConstructionInfo);
    processCollision(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): void;
    calculateTimeOfImpact(body0: btCollisionObject, body1: btCollisionObject, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): number;
    getAllContactManifolds(manifoldArray: btManifoldArray): void;
  }
}
