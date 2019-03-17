declare module Ammo {
  declare class btConvexPlaneCollisionAlgorithm {
    constructor(mf: btPersistentManifold, ci: btCollisionAlgorithmConstructionInfo, body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, isSwapped: boolean, numPerturbationIterations: number, minimumPointsPerturbationThreshold: number);


    collideSingleContact(perturbeRot: btQuaternion, body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): void;
    calculateTimeOfImpact(body0: btCollisionObject, body1: btCollisionObject, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): number;
    getAllContactManifolds(manifoldArray: btManifoldArray): void;
    processCollision(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): void;
  }
}
