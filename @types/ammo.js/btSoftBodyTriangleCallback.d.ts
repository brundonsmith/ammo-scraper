declare module Ammo {
  declare class btSoftBodyTriangleCallback {
    constructor(dispatcher: btDispatcher, body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, isSwapped: boolean);
    setTimeStepAndCounters(collisionMarginTriangle: number, triObjWrap: btCollisionObjectWrapper, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): void;
    processTriangle(triangle: btVector3, partId: number, triangleIndex: number): void;
    clearCache(): void;
    getAabbMin(): btVector3;
    getAabbMax(): btVector3;
    get_m_triangleCount(): number;	set_m_triangleCount(value: number): number;
  }
}
