declare module Ammo {
  declare class Bullet_btGearConstraintFloatData {
    get_m_typeConstraintData(): btTypedConstraintFloatData;	set_m_typeConstraintData(value: btTypedConstraintFloatData): btTypedConstraintFloatData;
    get_m_axisInA(): btVector3FloatData;	set_m_axisInA(value: btVector3FloatData): btVector3FloatData;
    get_m_axisInB(): btVector3FloatData;	set_m_axisInB(value: btVector3FloatData): btVector3FloatData;
    get_m_ratio(): number;	set_m_ratio(value: number): number;
    get_m_padding(): string;	set_m_padding(value: string): string;
  }
}
