declare module Ammo {
  declare class btGeneric6DofConstraintDoubleData2 {
    get_m_typeConstraintData(): btTypedConstraintDoubleData;	set_m_typeConstraintData(value: btTypedConstraintDoubleData): btTypedConstraintDoubleData;
    get_m_rbAFrame(): btTransformDoubleData;	set_m_rbAFrame(value: btTransformDoubleData): btTransformDoubleData;
    get_m_rbBFrame(): btTransformDoubleData;	set_m_rbBFrame(value: btTransformDoubleData): btTransformDoubleData;
    get_m_linearUpperLimit(): btVector3DoubleData;	set_m_linearUpperLimit(value: btVector3DoubleData): btVector3DoubleData;
    get_m_linearLowerLimit(): btVector3DoubleData;	set_m_linearLowerLimit(value: btVector3DoubleData): btVector3DoubleData;
    get_m_angularUpperLimit(): btVector3DoubleData;	set_m_angularUpperLimit(value: btVector3DoubleData): btVector3DoubleData;
    get_m_angularLowerLimit(): btVector3DoubleData;	set_m_angularLowerLimit(value: btVector3DoubleData): btVector3DoubleData;
    get_m_useLinearReferenceFrameA(): number;	set_m_useLinearReferenceFrameA(value: number): number;
    get_m_useOffsetForConstraintFrame(): number;	set_m_useOffsetForConstraintFrame(value: number): number;
  }
}
