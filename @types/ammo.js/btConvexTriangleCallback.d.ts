declare module Ammo {
  declare class btConvexTriangleCallback {
    constructor();
    constructor(dispatcher: btDispatcher, body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper, isSwapped: boolean);

    get_m_triangleCount(): number;	set_m_triangleCount(value: number): number;
    get_m_manifoldPtr(): btPersistentManifold;	set_m_manifoldPtr(value: btPersistentManifold): btPersistentManifold;

    clearWrapperData(): void;
    clearCache(): void;
    getAabbMin(): btVector3;
    getAabbMax(): btVector3;
    processTriangle(triangle: btVector3, partId: number, triangleIndex: number): void;
    setTimeStepAndCounters(collisionMarginTriangle: number, dispatchInfo: btDispatcherInfo, convexBodyWrap: btCollisionObjectWrapper, triBodyWrap: btCollisionObjectWrapper, resultOut: btManifoldResult): void;
  }
}
