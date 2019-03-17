declare module Ammo {
  declare class btRigidBodyDoubleData {

    get_m_inverseMass(): number;	set_m_inverseMass(value: number): number;
    get_m_collisionObjectData(): btCollisionObjectDoubleData;	set_m_collisionObjectData(value: btCollisionObjectDoubleData): btCollisionObjectDoubleData;
    get_m_linearVelocity(): btVector3DoubleData;	set_m_linearVelocity(value: btVector3DoubleData): btVector3DoubleData;
    get_m_angularVelocity(): btVector3DoubleData;	set_m_angularVelocity(value: btVector3DoubleData): btVector3DoubleData;
    get_m_angularFactor(): btVector3DoubleData;	set_m_angularFactor(value: btVector3DoubleData): btVector3DoubleData;
    get_m_linearFactor(): btVector3DoubleData;	set_m_linearFactor(value: btVector3DoubleData): btVector3DoubleData;
    get_m_gravity(): btVector3DoubleData;	set_m_gravity(value: btVector3DoubleData): btVector3DoubleData;
    get_m_gravity_acceleration(): btVector3DoubleData;	set_m_gravity_acceleration(value: btVector3DoubleData): btVector3DoubleData;
    get_m_invInertiaLocal(): btVector3DoubleData;	set_m_invInertiaLocal(value: btVector3DoubleData): btVector3DoubleData;
    get_m_totalForce(): btVector3DoubleData;	set_m_totalForce(value: btVector3DoubleData): btVector3DoubleData;
    get_m_totalTorque(): btVector3DoubleData;	set_m_totalTorque(value: btVector3DoubleData): btVector3DoubleData;
    get_m_invInertiaTensorWorld(): btMatrix3x3DoubleData;	set_m_invInertiaTensorWorld(value: btMatrix3x3DoubleData): btMatrix3x3DoubleData;
    get_m_linearDamping(): number;	set_m_linearDamping(value: number): number;
    get_m_angularDamping(): number;	set_m_angularDamping(value: number): number;
    get_m_additionalDampingFactor(): number;	set_m_additionalDampingFactor(value: number): number;
    get_m_additionalLinearDampingThresholdSqr(): number;	set_m_additionalLinearDampingThresholdSqr(value: number): number;
    get_m_additionalAngularDampingThresholdSqr(): number;	set_m_additionalAngularDampingThresholdSqr(value: number): number;
    get_m_additionalAngularDampingFactor(): number;	set_m_additionalAngularDampingFactor(value: number): number;
    get_m_linearSleepingThreshold(): number;	set_m_linearSleepingThreshold(value: number): number;
    get_m_angularSleepingThreshold(): number;	set_m_angularSleepingThreshold(value: number): number;
    get_m_additionalDamping(): number;	set_m_additionalDamping(value: number): number;
    get_m_padding(): string;	set_m_padding(value: string): string;

  }
}
