declare module Ammo {
  declare class btSoftBody_sMedium {
    get_m_velocity(): btVector3;	set_m_velocity(value: btVector3): btVector3;
    get_m_pressure(): number;	set_m_pressure(value: number): number;
    get_m_density(): number;	set_m_density(value: number): number;
  }
}
