declare module Ammo {
  declare class btTriangleConvexcastCallback {
    constructor(convexShape: btConvexShape, convexShapeFrom: btTransform, convexShapeTo: btTransform, triangleToWorld: btTransform, triangleCollisionMargin: number);

    get_m_convexShape(): btConvexShape;	set_m_convexShape(value: btConvexShape): btConvexShape;
    get_m_convexShapeFrom(): btTransform;	set_m_convexShapeFrom(value: btTransform): btTransform;
    get_m_convexShapeTo(): btTransform;	set_m_convexShapeTo(value: btTransform): btTransform;
    get_m_triangleToWorld(): btTransform;	set_m_triangleToWorld(value: btTransform): btTransform;
    get_m_hitFraction(): number;	set_m_hitFraction(value: number): number;
    get_m_triangleCollisionMargin(): number;	set_m_triangleCollisionMargin(value: number): number;
    get_m_allowedPenetration(): number;	set_m_allowedPenetration(value: number): number;

    processTriangle(triangle: btVector3, partId: number, triangleIndex: number): void;
    reportHit(hitNormalLocal: btVector3, hitPointLocal: btVector3, hitFraction: number, partId: number, triangleIndex: number): number;
  }
}
