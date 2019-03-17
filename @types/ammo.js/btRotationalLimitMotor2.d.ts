declare module Ammo {
  declare class btRotationalLimitMotor2 {
    constructor();
    constructor(limot: btRotationalLimitMotor2);
    isLimited(): boolean;
    testLimitValue(test_value: number): void;
    get_m_loLimit(): number;	set_m_loLimit(value: number): number;
    get_m_hiLimit(): number;	set_m_hiLimit(value: number): number;
    get_m_bounce(): number;	set_m_bounce(value: number): number;
    get_m_stopERP(): number;	set_m_stopERP(value: number): number;
    get_m_stopCFM(): number;	set_m_stopCFM(value: number): number;
    get_m_motorERP(): number;	set_m_motorERP(value: number): number;
    get_m_motorCFM(): number;	set_m_motorCFM(value: number): number;
    get_m_enableMotor(): boolean;	set_m_enableMotor(value: boolean): boolean;
    get_m_targetVelocity(): number;	set_m_targetVelocity(value: number): number;
    get_m_maxMotorForce(): number;	set_m_maxMotorForce(value: number): number;
    get_m_servoMotor(): boolean;	set_m_servoMotor(value: boolean): boolean;
    get_m_servoTarget(): number;	set_m_servoTarget(value: number): number;
    get_m_enableSpring(): boolean;	set_m_enableSpring(value: boolean): boolean;
    get_m_springStiffness(): number;	set_m_springStiffness(value: number): number;
    get_m_springStiffnessLimited(): boolean;	set_m_springStiffnessLimited(value: boolean): boolean;
    get_m_springDamping(): number;	set_m_springDamping(value: number): number;
    get_m_springDampingLimited(): boolean;	set_m_springDampingLimited(value: boolean): boolean;
    get_m_equilibriumPoint(): number;	set_m_equilibriumPoint(value: number): number;
    get_m_currentLimitError(): number;	set_m_currentLimitError(value: number): number;
    get_m_currentLimitErrorHi(): number;	set_m_currentLimitErrorHi(value: number): number;
    get_m_currentPosition(): number;	set_m_currentPosition(value: number): number;
    get_m_currentLimit(): number;	set_m_currentLimit(value: number): number;
  }
}
