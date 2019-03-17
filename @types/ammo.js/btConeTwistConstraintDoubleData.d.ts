declare module Ammo {
  declare class btConeTwistConstraintDoubleData {

    get_m_typeConstraintData(): btTypedConstraintDoubleData;	set_m_typeConstraintData(value: btTypedConstraintDoubleData): btTypedConstraintDoubleData;
    get_m_rbAFrame(): btTransformDoubleData;	set_m_rbAFrame(value: btTransformDoubleData): btTransformDoubleData;
    get_m_rbBFrame(): btTransformDoubleData;	set_m_rbBFrame(value: btTransformDoubleData): btTransformDoubleData;
    get_m_swingSpan1(): number;	set_m_swingSpan1(value: number): number;
    get_m_swingSpan2(): number;	set_m_swingSpan2(value: number): number;
    get_m_twistSpan(): number;	set_m_twistSpan(value: number): number;
    get_m_limitSoftness(): number;	set_m_limitSoftness(value: number): number;
    get_m_biasFactor(): number;	set_m_biasFactor(value: number): number;
    get_m_relaxationFactor(): number;	set_m_relaxationFactor(value: number): number;
    get_m_damping(): number;	set_m_damping(value: number): number;

  }
}
