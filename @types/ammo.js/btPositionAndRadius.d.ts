declare module Ammo {
  declare class btPositionAndRadius {
    get_m_pos(): btVector3FloatData;	set_m_pos(value: btVector3FloatData): btVector3FloatData;
    get_m_radius(): number;	set_m_radius(value: number): number;
  }
}
