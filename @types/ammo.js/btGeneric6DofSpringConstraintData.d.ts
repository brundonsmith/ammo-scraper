declare module Ammo {
  declare class btGeneric6DofSpringConstraintData {
    get_m_6dofData(): btGeneric6DofConstraintData;	set_m_6dofData(value: btGeneric6DofConstraintData): btGeneric6DofConstraintData;
    get_m_springEnabled(): number;	set_m_springEnabled(value: number): number;
    get_m_equilibriumPoint(): number;	set_m_equilibriumPoint(value: number): number;
    get_m_springStiffness(): number;	set_m_springStiffness(value: number): number;
    get_m_springDamping(): number;	set_m_springDamping(value: number): number;
  }
}
