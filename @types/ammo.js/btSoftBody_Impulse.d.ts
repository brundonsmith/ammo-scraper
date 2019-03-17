declare module Ammo {
  declare class btSoftBody_Impulse {
    constructor();
    get_operator(): Impulse;	set_operator(value: Impulse): Impulse;
    get_operator(): Impulse;	set_operator(value: Impulse): Impulse;
    get_m_velocity(): btVector3;	set_m_velocity(value: btVector3): btVector3;
    get_m_drift(): btVector3;	set_m_drift(value: btVector3): btVector3;
    get_m_asVelocity:1(): number;	set_m_asVelocity:1(value: number): number;
    get_m_asDrift:1(): number;	set_m_asDrift:1(value: number): number;
  }
}
