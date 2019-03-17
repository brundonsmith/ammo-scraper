declare module Ammo {
  declare class btSoftBodyTriangleCallback {
    constructor(dispatcher: btDispatcher, body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, isSwapped: boolean);

    get_m_triangleCount(): number;	set_m_triangleCount(value: number): number;

    clearCache(): void;
    getAabbMin(): btVector3;
    getAabbMax(): btVector3;
    processTriangle(triangle: btVector3, partId: number, triangleIndex: number): void;
    setTimeStepAndCounters(collisionMarginTriangle: number, triObjWrap: btCollisionObjectWrapper, dispatchInfo: btDispatcherInfo, resultOut: btManifoldResult): void;
  }
}
