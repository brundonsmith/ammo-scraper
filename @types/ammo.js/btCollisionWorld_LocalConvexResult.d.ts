declare module Ammo {
  declare class btCollisionWorld_LocalConvexResult {
    constructor(hitCollisionObject: btCollisionObject, localShapeInfo: LocalShapeInfo, hitNormalLocal: btVector3, hitPointLocal: btVector3, hitFraction: number);
    get_m_hitCollisionObject(): btCollisionObject;	set_m_hitCollisionObject(value: btCollisionObject): btCollisionObject;
    get_m_localShapeInfo(): LocalShapeInfo;	set_m_localShapeInfo(value: LocalShapeInfo): LocalShapeInfo;
    get_m_hitNormalLocal(): btVector3;	set_m_hitNormalLocal(value: btVector3): btVector3;
    get_m_hitPointLocal(): btVector3;	set_m_hitPointLocal(value: btVector3): btVector3;
    get_m_hitFraction(): number;	set_m_hitFraction(value: number): number;
  }
}
