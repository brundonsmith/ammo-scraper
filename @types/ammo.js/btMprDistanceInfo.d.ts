declare module Ammo {
  declare class btMprDistanceInfo {
    get_m_pointOnA(): btVector3;	set_m_pointOnA(value: btVector3): btVector3;
    get_m_pointOnB(): btVector3;	set_m_pointOnB(value: btVector3): btVector3;
    get_m_normalBtoA(): btVector3;	set_m_normalBtoA(value: btVector3): btVector3;
    get_m_distance(): number;	set_m_distance(value: number): number;
  }
}
