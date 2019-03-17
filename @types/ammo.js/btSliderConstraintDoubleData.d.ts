declare module Ammo {
  declare class btSliderConstraintDoubleData {
    get_m_typeConstraintData(): btTypedConstraintDoubleData;	set_m_typeConstraintData(value: btTypedConstraintDoubleData): btTypedConstraintDoubleData;
    get_m_rbAFrame(): btTransformDoubleData;	set_m_rbAFrame(value: btTransformDoubleData): btTransformDoubleData;
    get_m_rbBFrame(): btTransformDoubleData;	set_m_rbBFrame(value: btTransformDoubleData): btTransformDoubleData;
    get_m_linearUpperLimit(): number;	set_m_linearUpperLimit(value: number): number;
    get_m_linearLowerLimit(): number;	set_m_linearLowerLimit(value: number): number;
    get_m_angularUpperLimit(): number;	set_m_angularUpperLimit(value: number): number;
    get_m_angularLowerLimit(): number;	set_m_angularLowerLimit(value: number): number;
    get_m_useLinearReferenceFrameA(): number;	set_m_useLinearReferenceFrameA(value: number): number;
    get_m_useOffsetForConstraintFrame(): number;	set_m_useOffsetForConstraintFrame(value: number): number;
  }
}
