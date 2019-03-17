declare module Ammo {
  declare class btConvexCast_CastResult {
    DebugDraw(fraction: number): void;
    drawCoordSystem(trans: btTransform): void;
    reportFailure(errNo: number, numIterations: number): void;
    constructor();
    get_m_hitTransformA(): btTransform;	set_m_hitTransformA(value: btTransform): btTransform;
    get_m_hitTransformB(): btTransform;	set_m_hitTransformB(value: btTransform): btTransform;
    get_m_normal(): btVector3;	set_m_normal(value: btVector3): btVector3;
    get_m_hitPoint(): btVector3;	set_m_hitPoint(value: btVector3): btVector3;
    get_m_fraction(): number;	set_m_fraction(value: number): number;
    get_m_debugDrawer(): btIDebugDraw;	set_m_debugDrawer(value: btIDebugDraw): btIDebugDraw;
    get_m_allowedPenetration(): number;	set_m_allowedPenetration(value: number): number;
  }
}
