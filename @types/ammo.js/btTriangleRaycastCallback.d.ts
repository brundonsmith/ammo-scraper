declare module Ammo {
  declare class btTriangleRaycastCallback {
    constructor(from: btVector3, to: btVector3, flags: number);
    processTriangle(triangle: btVector3, partId: number, triangleIndex: number): void;
    reportHit(hitNormalLocal: btVector3, hitFraction: number, partId: number, triangleIndex: number): number;
    get_m_from(): btVector3;	set_m_from(value: btVector3): btVector3;
    get_m_to(): btVector3;	set_m_to(value: btVector3): btVector3;
    get_m_flags(): number;	set_m_flags(value: number): number;
    get_m_hitFraction(): number;	set_m_hitFraction(value: number): number;
  }
}
