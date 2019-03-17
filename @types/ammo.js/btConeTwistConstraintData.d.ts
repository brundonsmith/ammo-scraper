declare module Ammo {
  declare class btConeTwistConstraintData {
    get_m_typeConstraintData(): btTypedConstraintData;	set_m_typeConstraintData(value: btTypedConstraintData): btTypedConstraintData;
    get_m_rbAFrame(): btTransformFloatData;	set_m_rbAFrame(value: btTransformFloatData): btTransformFloatData;
    get_m_rbBFrame(): btTransformFloatData;	set_m_rbBFrame(value: btTransformFloatData): btTransformFloatData;
    get_m_swingSpan1(): number;	set_m_swingSpan1(value: number): number;
    get_m_swingSpan2(): number;	set_m_swingSpan2(value: number): number;
    get_m_twistSpan(): number;	set_m_twistSpan(value: number): number;
    get_m_limitSoftness(): number;	set_m_limitSoftness(value: number): number;
    get_m_biasFactor(): number;	set_m_biasFactor(value: number): number;
    get_m_relaxationFactor(): number;	set_m_relaxationFactor(value: number): number;
    get_m_damping(): number;	set_m_damping(value: number): number;
    get_m_pad(): string;	set_m_pad(value: string): string;
  }
}
