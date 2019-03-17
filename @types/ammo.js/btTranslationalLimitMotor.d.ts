declare module Ammo {
  declare class btTranslationalLimitMotor {
    constructor();
    constructor(other: btTranslationalLimitMotor);
    isLimited(limitIndex: number): boolean;
    needApplyForce(limitIndex: number): boolean;
    testLimitValue(limitIndex: number, test_value: number): number;
    solveLinearAxis(timeStep: number, jacDiagABInv: number, body1: btRigidBody, pointInA: btVector3, body2: btRigidBody, pointInB: btVector3, limit_index: number, axis_normal_on_a: btVector3, anchorPos: btVector3): number;
    get_m_lowerLimit(): btVector3;	set_m_lowerLimit(value: btVector3): btVector3;
    get_m_upperLimit(): btVector3;	set_m_upperLimit(value: btVector3): btVector3;
    get_m_accumulatedImpulse(): btVector3;	set_m_accumulatedImpulse(value: btVector3): btVector3;
    get_m_enableMotor(): boolean;	set_m_enableMotor(value: boolean): boolean;
    get_m_targetVelocity(): btVector3;	set_m_targetVelocity(value: btVector3): btVector3;
    get_m_maxMotorForce(): btVector3;	set_m_maxMotorForce(value: btVector3): btVector3;
    get_m_currentLimitError(): btVector3;	set_m_currentLimitError(value: btVector3): btVector3;
    get_m_currentLinearDiff(): btVector3;	set_m_currentLinearDiff(value: btVector3): btVector3;
    get_m_currentLimit(): number;	set_m_currentLimit(value: number): number;
    get_m_limitSoftness(): number;	set_m_limitSoftness(value: number): number;
    get_m_damping(): number;	set_m_damping(value: number): number;
    get_m_restitution(): number;	set_m_restitution(value: number): number;
    get_m_normalCFM(): btVector3;	set_m_normalCFM(value: btVector3): btVector3;
    get_m_stopERP(): btVector3;	set_m_stopERP(value: btVector3): btVector3;
    get_m_stopCFM(): btVector3;	set_m_stopCFM(value: btVector3): btVector3;
  }
}
