declare module Ammo {
  declare class btSoftBodyConcaveCollisionAlgorithm {
    constructor(ci: btCollisionAlgorithmConstructionInfo, body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, isSwapped: boolean);


    calculateTimeOfImpact(body0: btCollisionObject, body1: btCollisionObject, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): number;
    clearCache(): void;
    getAllContactManifolds(manifoldArray: btManifoldArray): void;
    processCollision(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): void;
  }
}
