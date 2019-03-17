declare module Ammo {
  declare class btRigidBody_btRigidBodyConstructionInfo {
    constructor(mass: number, motionState: btMotionState, collisionShape: btCollisionShape, localInertia: btVector3);
    get_m_mass(): number;	set_m_mass(value: number): number;
    get_m_motionState(): btMotionState;	set_m_motionState(value: btMotionState): btMotionState;
    get_m_startWorldTransform(): btTransform;	set_m_startWorldTransform(value: btTransform): btTransform;
    get_m_collisionShape(): btCollisionShape;	set_m_collisionShape(value: btCollisionShape): btCollisionShape;
    get_m_localInertia(): btVector3;	set_m_localInertia(value: btVector3): btVector3;
    get_m_linearDamping(): number;	set_m_linearDamping(value: number): number;
    get_m_angularDamping(): number;	set_m_angularDamping(value: number): number;
    get_m_friction(): number;	set_m_friction(value: number): number;
    get_m_rollingFriction(): number;	set_m_rollingFriction(value: number): number;
    get_m_spinningFriction(): number;	set_m_spinningFriction(value: number): number;
    get_m_restitution(): number;	set_m_restitution(value: number): number;
    get_m_linearSleepingThreshold(): number;	set_m_linearSleepingThreshold(value: number): number;
    get_m_angularSleepingThreshold(): number;	set_m_angularSleepingThreshold(value: number): number;
    get_m_additionalDamping(): boolean;	set_m_additionalDamping(value: boolean): boolean;
    get_m_additionalDampingFactor(): number;	set_m_additionalDampingFactor(value: number): number;
    get_m_additionalLinearDampingThresholdSqr(): number;	set_m_additionalLinearDampingThresholdSqr(value: number): number;
    get_m_additionalAngularDampingThresholdSqr(): number;	set_m_additionalAngularDampingThresholdSqr(value: number): number;
    get_m_additionalAngularDampingFactor(): number;	set_m_additionalAngularDampingFactor(value: number): number;
  }
}
