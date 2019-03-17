declare module Ammo {
  declare class Bullet_btTransformFloatData {
    get_m_basis(): btMatrix3x3FloatData;	set_m_basis(value: btMatrix3x3FloatData): btMatrix3x3FloatData;
    get_m_origin(): btVector3FloatData;	set_m_origin(value: btVector3FloatData): btVector3FloatData;
  }
}
