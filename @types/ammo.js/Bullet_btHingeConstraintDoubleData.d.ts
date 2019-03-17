declare module Ammo {
  declare class Bullet_btHingeConstraintDoubleData {
    get_m_typeConstraintData(): btTypedConstraintData;	set_m_typeConstraintData(value: btTypedConstraintData): btTypedConstraintData;
    get_m_rbAFrame(): btTransformDoubleData;	set_m_rbAFrame(value: btTransformDoubleData): btTransformDoubleData;
    get_m_rbBFrame(): btTransformDoubleData;	set_m_rbBFrame(value: btTransformDoubleData): btTransformDoubleData;
    get_m_useReferenceFrameA(): number;	set_m_useReferenceFrameA(value: number): number;
    get_m_angularOnly(): number;	set_m_angularOnly(value: number): number;
    get_m_enableAngularMotor(): number;	set_m_enableAngularMotor(value: number): number;
    get_m_motorTargetVelocity(): number;	set_m_motorTargetVelocity(value: number): number;
    get_m_maxMotorImpulse(): number;	set_m_maxMotorImpulse(value: number): number;
    get_m_lowerLimit(): number;	set_m_lowerLimit(value: number): number;
    get_m_upperLimit(): number;	set_m_upperLimit(value: number): number;
    get_m_limitSoftness(): number;	set_m_limitSoftness(value: number): number;
    get_m_biasFactor(): number;	set_m_biasFactor(value: number): number;
    get_m_relaxationFactor(): number;	set_m_relaxationFactor(value: number): number;
  }
}
