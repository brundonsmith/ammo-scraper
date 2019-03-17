declare module Ammo {
  declare class btSolverBody {
    constructor();
    setWorldTransform(worldTransform: btTransform): void;
    getWorldTransform(): btTransform;
    getVelocityInLocalPointNoDelta(rel_pos: btVector3, velocity: btVector3): void;
    getVelocityInLocalPointObsolete(rel_pos: btVector3, velocity: btVector3): void;
    getAngularVelocity(angVel: btVector3): void;
    applyImpulse(linearComponent: btVector3, angularComponent: btVector3, impulseMagnitude: number): void;
    internalApplyPushImpulse(linearComponent: btVector3, angularComponent: btVector3, impulseMagnitude: number): void;
    getDeltaLinearVelocity(): btVector3;
    getDeltaAngularVelocity(): btVector3;
    getPushVelocity(): btVector3;
    getTurnVelocity(): btVector3;
    internalGetDeltaLinearVelocity(): btVector3;
    internalGetDeltaAngularVelocity(): btVector3;
    internalGetAngularFactor(): btVector3;
    internalGetInvMass(): btVector3;
    internalSetInvMass(invMass: btVector3): void;
    internalGetPushVelocity(): btVector3;
    internalGetTurnVelocity(): btVector3;
    internalGetVelocityInLocalPointObsolete(rel_pos: btVector3, velocity: btVector3): void;
    internalGetAngularVelocity(angVel: btVector3): void;
    internalApplyImpulse(linearComponent: btVector3, angularComponent: btVector3, impulseMagnitude: number): void;
    writebackVelocity(): void;
    writebackVelocityAndTransform(timeStep: number, splitImpulseTurnErp: number): void;
    get_m_worldTransform(): btTransform;	set_m_worldTransform(value: btTransform): btTransform;
    get_m_deltaLinearVelocity(): btVector3;	set_m_deltaLinearVelocity(value: btVector3): btVector3;
    get_m_deltaAngularVelocity(): btVector3;	set_m_deltaAngularVelocity(value: btVector3): btVector3;
    get_m_angularFactor(): btVector3;	set_m_angularFactor(value: btVector3): btVector3;
    get_m_linearFactor(): btVector3;	set_m_linearFactor(value: btVector3): btVector3;
    get_m_invMass(): btVector3;	set_m_invMass(value: btVector3): btVector3;
    get_m_pushVelocity(): btVector3;	set_m_pushVelocity(value: btVector3): btVector3;
    get_m_turnVelocity(): btVector3;	set_m_turnVelocity(value: btVector3): btVector3;
    get_m_linearVelocity(): btVector3;	set_m_linearVelocity(value: btVector3): btVector3;
    get_m_angularVelocity(): btVector3;	set_m_angularVelocity(value: btVector3): btVector3;
    get_m_externalForceImpulse(): btVector3;	set_m_externalForceImpulse(value: btVector3): btVector3;
    get_m_externalTorqueImpulse(): btVector3;	set_m_externalTorqueImpulse(value: btVector3): btVector3;
    get_m_originalBody(): btRigidBody;	set_m_originalBody(value: btRigidBody): btRigidBody;
  }
}
