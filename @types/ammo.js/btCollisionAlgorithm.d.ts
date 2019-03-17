declare module Ammo {
  declare class btCollisionAlgorithm {
    constructor();
    constructor(ci: btCollisionAlgorithmConstructionInfo);


    calculateTimeOfImpact(body0: btCollisionObject, body1: btCollisionObject, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): number;
    getAllContactManifolds(manifoldArray: btManifoldArray): void;
    processCollision(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): void;
  }
}
