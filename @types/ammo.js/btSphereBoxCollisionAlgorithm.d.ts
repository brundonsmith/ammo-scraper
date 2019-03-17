declare module Ammo {
  declare class btSphereBoxCollisionAlgorithm {
    constructor(mf: btPersistentManifold, ci: btCollisionAlgorithmConstructionInfo, body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, isSwapped: boolean);


    calculateTimeOfImpact(body0: btCollisionObject, body1: btCollisionObject, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): number;
    getAllContactManifolds(manifoldArray: btManifoldArray): void;
    getSphereDistance(boxObjWrap: btCollisionObjectWrapper, v3PointOnBox: btVector3, normal: btVector3, penetrationDepth: number, v3SphereCenter: btVector3, fRadius: number, maxContactDistance: number): boolean;
    getSpherePenetration(const: btVector3, const: btVector3, closestPoint: btVector3, normal: btVector3): number;
    processCollision(body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): void;
  }
}
