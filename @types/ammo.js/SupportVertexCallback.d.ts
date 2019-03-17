declare module Ammo {
  declare class SupportVertexCallback {
    constructor(supportVecWorld: btVector3, trans: btTransform);

    get_m_worldTrans(): btTransform;	set_m_worldTrans(value: btTransform): btTransform;
    get_m_maxDot(): number;	set_m_maxDot(value: number): number;
    get_m_supportVecLocal(): btVector3;	set_m_supportVecLocal(value: btVector3): btVector3;

    GetSupportVertexWorldSpace(): btVector3;
    GetSupportVertexLocal(): btVector3;
    processTriangle(triangle: btVector3, partId: number, triangleIndex: number): void;
  }
}
