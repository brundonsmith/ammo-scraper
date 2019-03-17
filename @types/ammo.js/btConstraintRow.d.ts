declare module Ammo {
  declare class btConstraintRow {

    get_m_normal(): number;	set_m_normal(value: number): number;
    get_m_rhs(): number;	set_m_rhs(value: number): number;
    get_m_jacDiagInv(): number;	set_m_jacDiagInv(value: number): number;
    get_m_lowerLimit(): number;	set_m_lowerLimit(value: number): number;
    get_m_upperLimit(): number;	set_m_upperLimit(value: number): number;
    get_m_accumImpulse(): number;	set_m_accumImpulse(value: number): number;

  }
}
