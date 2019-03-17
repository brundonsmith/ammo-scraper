declare module Ammo {
  declare class btVehicleRaycaster_btVehicleRaycasterResult {
    constructor();
    get_m_hitPointInWorld(): btVector3;	set_m_hitPointInWorld(value: btVector3): btVector3;
    get_m_hitNormalInWorld(): btVector3;	set_m_hitNormalInWorld(value: btVector3): btVector3;
    get_m_distFraction(): number;	set_m_distFraction(value: number): number;
  }
}
