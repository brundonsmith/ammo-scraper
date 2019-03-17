declare module Ammo {
  declare class Bullet_btSliderConstraintData {

    get_m_typeConstraintData(): btTypedConstraintData;	set_m_typeConstraintData(value: btTypedConstraintData): btTypedConstraintData;
    get_m_rbAFrame(): btTransformFloatData;	set_m_rbAFrame(value: btTransformFloatData): btTransformFloatData;
    get_m_rbBFrame(): btTransformFloatData;	set_m_rbBFrame(value: btTransformFloatData): btTransformFloatData;
    get_m_linearUpperLimit(): number;	set_m_linearUpperLimit(value: number): number;
    get_m_linearLowerLimit(): number;	set_m_linearLowerLimit(value: number): number;
    get_m_angularUpperLimit(): number;	set_m_angularUpperLimit(value: number): number;
    get_m_angularLowerLimit(): number;	set_m_angularLowerLimit(value: number): number;
    get_m_useLinearReferenceFrameA(): number;	set_m_useLinearReferenceFrameA(value: number): number;
    get_m_useOffsetForConstraintFrame(): number;	set_m_useOffsetForConstraintFrame(value: number): number;

  }
}
