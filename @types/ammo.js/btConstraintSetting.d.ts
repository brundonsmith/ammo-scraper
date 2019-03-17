declare module Ammo {
  declare class btConstraintSetting {
    constructor();
    get_m_tau(): number;	set_m_tau(value: number): number;
    get_m_damping(): number;	set_m_damping(value: number): number;
    get_m_impulseClamp(): number;	set_m_impulseClamp(value: number): number;
  }
}
