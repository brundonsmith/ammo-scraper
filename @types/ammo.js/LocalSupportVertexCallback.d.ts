declare module Ammo {
  declare class LocalSupportVertexCallback {
    constructor(supportVecLocal: btVector3);

    get_m_maxDot(): number;	set_m_maxDot(value: number): number;
    get_m_supportVecLocal(): btVector3;	set_m_supportVecLocal(value: btVector3): btVector3;

    GetSupportVertexLocal(): btVector3;
    internalProcessTriangleIndex(triangle: btVector3, partId: number, triangleIndex: number): void;
  }
}
