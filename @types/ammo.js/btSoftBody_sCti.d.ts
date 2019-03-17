declare module Ammo {
  declare class btSoftBody_sCti {
    get_m_colObj(): btCollisionObject;	set_m_colObj(value: btCollisionObject): btCollisionObject;
    get_m_normal(): btVector3;	set_m_normal(value: btVector3): btVector3;
    get_m_offset(): number;	set_m_offset(value: number): number;
  }
}
