declare module Ammo {
  declare class btSoftBodyWorldInfo {
    constructor();
    get_air_density(): number;	set_air_density(value: number): number;
    get_water_density(): number;	set_water_density(value: number): number;
    get_water_offset(): number;	set_water_offset(value: number): number;
    get_m_maxDisplacement(): number;	set_m_maxDisplacement(value: number): number;
    get_water_normal(): btVector3;	set_water_normal(value: btVector3): btVector3;
    get_m_broadphase(): btBroadphaseInterface;	set_m_broadphase(value: btBroadphaseInterface): btBroadphaseInterface;
    get_m_dispatcher(): btDispatcher;	set_m_dispatcher(value: btDispatcher): btDispatcher;
    get_m_gravity(): btVector3;	set_m_gravity(value: btVector3): btVector3;
    get_f(): btSparseSd;	set_f(value: btSparseSd): btSparseSd;
  }
}
