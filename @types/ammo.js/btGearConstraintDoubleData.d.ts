declare module Ammo {
  declare class btGearConstraintDoubleData {
    get_m_typeConstraintData(): btTypedConstraintDoubleData;	set_m_typeConstraintData(value: btTypedConstraintDoubleData): btTypedConstraintDoubleData;
    get_m_axisInA(): btVector3DoubleData;	set_m_axisInA(value: btVector3DoubleData): btVector3DoubleData;
    get_m_axisInB(): btVector3DoubleData;	set_m_axisInB(value: btVector3DoubleData): btVector3DoubleData;
    get_m_ratio(): number;	set_m_ratio(value: number): number;
  }
}
