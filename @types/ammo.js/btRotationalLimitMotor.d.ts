declare module Ammo {
  declare class btRotationalLimitMotor {
    constructor();
    constructor(limot: btRotationalLimitMotor);

    get_m_currentLimit(): number;	set_m_currentLimit(value: number): number;
    get_m_currentPosition(): number;	set_m_currentPosition(value: number): number;
    get_m_currentLimitError(): number;	set_m_currentLimitError(value: number): number;
    get_m_enableMotor(): boolean;	set_m_enableMotor(value: boolean): boolean;
    get_m_loLimit(): number;	set_m_loLimit(value: number): number;
    get_m_hiLimit(): number;	set_m_hiLimit(value: number): number;
    get_m_targetVelocity(): number;	set_m_targetVelocity(value: number): number;
    get_m_maxMotorForce(): number;	set_m_maxMotorForce(value: number): number;
    get_m_maxLimitForce(): number;	set_m_maxLimitForce(value: number): number;
    get_m_accumulatedImpulse(): number;	set_m_accumulatedImpulse(value: number): number;
    get_m_limitSoftness(): number;	set_m_limitSoftness(value: number): number;
    get_m_normalCFM(): number;	set_m_normalCFM(value: number): number;
    get_m_stopERP(): number;	set_m_stopERP(value: number): number;
    get_m_stopCFM(): number;	set_m_stopCFM(value: number): number;
    get_m_bounce(): number;	set_m_bounce(value: number): number;
    get_m_damping(): number;	set_m_damping(value: number): number;

    isLimited(): boolean;
    needApplyTorques(): boolean;
    solveAngularLimits(timeStep: number, axis: btVector3, jacDiagABInv: number, body0: btRigidBody, body1: btRigidBody): number;
    testLimitValue(test_value: number): number;
  }
}
