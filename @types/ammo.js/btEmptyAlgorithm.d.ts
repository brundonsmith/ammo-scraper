declare module Ammo {
  declare class btEmptyAlgorithm {
    constructor(ci: btCollisionAlgorithmConstructionInfo);
    processCollision(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): void;
    calculateTimeOfImpact(body0: btCollisionObject, body1: btCollisionObject, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): number;
    getAllContactManifolds(manifoldArray: btManifoldArray): void;
    get_ATTRIBUTE_ALIGNED(): btEmptyAlgorithm_CreateFunc;	set_ATTRIBUTE_ALIGNED(value: btEmptyAlgorithm_CreateFunc): btEmptyAlgorithm_CreateFunc;
  }
}
