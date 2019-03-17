declare module Ammo {
  declare class btTranslationalLimitMotor2 {
    constructor();
    constructor(other: btTranslationalLimitMotor2);
    isLimited(limitIndex: number): boolean;
    testLimitValue(limitIndex: number, test_value: number): void;
    get_m_lowerLimit(): btVector3;	set_m_lowerLimit(value: btVector3): btVector3;
    get_m_upperLimit(): btVector3;	set_m_upperLimit(value: btVector3): btVector3;
    get_m_bounce(): btVector3;	set_m_bounce(value: btVector3): btVector3;
    get_m_stopERP(): btVector3;	set_m_stopERP(value: btVector3): btVector3;
    get_m_stopCFM(): btVector3;	set_m_stopCFM(value: btVector3): btVector3;
    get_m_motorERP(): btVector3;	set_m_motorERP(value: btVector3): btVector3;
    get_m_motorCFM(): btVector3;	set_m_motorCFM(value: btVector3): btVector3;
    get_m_enableMotor(): boolean;	set_m_enableMotor(value: boolean): boolean;
    get_m_servoMotor(): boolean;	set_m_servoMotor(value: boolean): boolean;
    get_m_enableSpring(): boolean;	set_m_enableSpring(value: boolean): boolean;
    get_m_servoTarget(): btVector3;	set_m_servoTarget(value: btVector3): btVector3;
    get_m_springStiffness(): btVector3;	set_m_springStiffness(value: btVector3): btVector3;
    get_m_springStiffnessLimited(): boolean;	set_m_springStiffnessLimited(value: boolean): boolean;
    get_m_springDamping(): btVector3;	set_m_springDamping(value: btVector3): btVector3;
    get_m_springDampingLimited(): boolean;	set_m_springDampingLimited(value: boolean): boolean;
    get_m_equilibriumPoint(): btVector3;	set_m_equilibriumPoint(value: btVector3): btVector3;
    get_m_targetVelocity(): btVector3;	set_m_targetVelocity(value: btVector3): btVector3;
    get_m_maxMotorForce(): btVector3;	set_m_maxMotorForce(value: btVector3): btVector3;
    get_m_currentLimitError(): btVector3;	set_m_currentLimitError(value: btVector3): btVector3;
    get_m_currentLimitErrorHi(): btVector3;	set_m_currentLimitErrorHi(value: btVector3): btVector3;
    get_m_currentLinearDiff(): btVector3;	set_m_currentLinearDiff(value: btVector3): btVector3;
    get_m_currentLimit(): number;	set_m_currentLimit(value: number): number;
  }
}
