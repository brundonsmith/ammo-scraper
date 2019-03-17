declare module Ammo {
  declare class btSingleSweepCallback {
    constructor(castShape: btConvexShape, convexFromTrans: btTransform, convexToTrans: btTransform, world: btCollisionWorld, resultCallback: btCollisionWorld_ConvexResultCallback, allowedPenetration: number);

    get_m_convexFromTrans(): btTransform;	set_m_convexFromTrans(value: btTransform): btTransform;
    get_m_convexToTrans(): btTransform;	set_m_convexToTrans(value: btTransform): btTransform;
    get_m_hitNormal(): btVector3;	set_m_hitNormal(value: btVector3): btVector3;
    get_m_world(): btCollisionWorld;	set_m_world(value: btCollisionWorld): btCollisionWorld;
    get_m_resultCallback(): btCollisionWorld_ConvexResultCallback;	set_m_resultCallback(value: btCollisionWorld_ConvexResultCallback): btCollisionWorld_ConvexResultCallback;
    get_m_allowedCcdPenetration(): number;	set_m_allowedCcdPenetration(value: number): number;
    get_m_castShape(): btConvexShape;	set_m_castShape(value: btConvexShape): btConvexShape;

    process(proxy: btBroadphaseProxy): boolean;
  }
}
