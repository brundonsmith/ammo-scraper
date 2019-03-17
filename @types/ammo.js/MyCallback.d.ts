declare module Ammo {
  declare class MyCallback {
    constructor(from: btVector3, to: btVector3, ignorePart: number, ignoreTriangleIndex: number);

    get_m_ignorePart(): number;	set_m_ignorePart(value: number): number;
    get_m_ignoreTriangleIndex(): number;	set_m_ignoreTriangleIndex(value: number): number;

    reportHit(hitNormalLocal: btVector3, hitFraction: number, partId: number, triangleIndex: number): number;
  }
}
