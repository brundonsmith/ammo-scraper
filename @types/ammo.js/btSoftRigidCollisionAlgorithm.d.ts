declare module Ammo {
  declare class btSoftRigidCollisionAlgorithm {
    constructor(mf: btPersistentManifold, ci: btCollisionAlgorithmConstructionInfo, col0: btCollisionObjectWrapper, col1Wrap: btCollisionObjectWrapper, isSwapped: boolean);


    calculateTimeOfImpact(body0: btCollisionObject, body1: btCollisionObject, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): number;
    getAllContactManifolds(manifoldArray: btManifoldArray): void;
    processCollision(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): void;
  }
}
