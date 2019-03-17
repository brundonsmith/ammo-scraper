declare module Ammo {
  declare class btGeneric6DofConstraintData {
    get_m_typeConstraintData(): btTypedConstraintData;	set_m_typeConstraintData(value: btTypedConstraintData): btTypedConstraintData;
    get_m_rbAFrame(): btTransformFloatData;	set_m_rbAFrame(value: btTransformFloatData): btTransformFloatData;
    get_m_rbBFrame(): btTransformFloatData;	set_m_rbBFrame(value: btTransformFloatData): btTransformFloatData;
    get_m_linearUpperLimit(): btVector3FloatData;	set_m_linearUpperLimit(value: btVector3FloatData): btVector3FloatData;
    get_m_linearLowerLimit(): btVector3FloatData;	set_m_linearLowerLimit(value: btVector3FloatData): btVector3FloatData;
    get_m_angularUpperLimit(): btVector3FloatData;	set_m_angularUpperLimit(value: btVector3FloatData): btVector3FloatData;
    get_m_angularLowerLimit(): btVector3FloatData;	set_m_angularLowerLimit(value: btVector3FloatData): btVector3FloatData;
    get_m_useLinearReferenceFrameA(): number;	set_m_useLinearReferenceFrameA(value: number): number;
    get_m_useOffsetForConstraintFrame(): number;	set_m_useOffsetForConstraintFrame(value: number): number;
  }
}
