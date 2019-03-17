declare module Ammo {
  declare class btEmptyAlgorithm {
    constructor(ci: btCollisionAlgorithmConstructionInfo);

    get_ATTRIBUTE_ALIGNED(): btEmptyAlgorithm_CreateFunc;	set_ATTRIBUTE_ALIGNED(value: btEmptyAlgorithm_CreateFunc): btEmptyAlgorithm_CreateFunc;

    calculateTimeOfImpact(body0: btCollisionObject, body1: btCollisionObject, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): number;
    getAllContactManifolds(manifoldArray: btManifoldArray): void;
    processCollision(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): void;
  }
}
