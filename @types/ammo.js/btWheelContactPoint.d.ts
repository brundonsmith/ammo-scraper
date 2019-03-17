declare module Ammo {
  declare class btWheelContactPoint {
    constructor(body0: btRigidBody, body1: btRigidBody, frictionPosWorld: btVector3, frictionDirectionWorld: btVector3, maxImpulse: number);
    get_m_body0(): btRigidBody;	set_m_body0(value: btRigidBody): btRigidBody;
    get_m_body1(): btRigidBody;	set_m_body1(value: btRigidBody): btRigidBody;
    get_m_frictionPositionWorld(): btVector3;	set_m_frictionPositionWorld(value: btVector3): btVector3;
    get_m_frictionDirectionWorld(): btVector3;	set_m_frictionDirectionWorld(value: btVector3): btVector3;
    get_m_jacDiagABInv(): number;	set_m_jacDiagABInv(value: number): number;
    get_m_maxImpulse(): number;	set_m_maxImpulse(value: number): number;
  }
}
