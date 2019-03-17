declare module Ammo {
  declare class btSoftBody_Body {
    constructor();
    constructor(p: Cluster);
    constructor(colObj: btCollisionObject);
    activate(): void;
    invWorldInertia(): btMatrix3x3;
    invMass(): number;
    xform(): btTransform;
    linearVelocity(): btVector3;
    angularVelocity(rpos: btVector3): btVector3;
    angularVelocity(): btVector3;
    velocity(rpos: btVector3): btVector3;
    applyVImpulse(impulse: btVector3, rpos: btVector3): void;
    applyDImpulse(impulse: btVector3, rpos: btVector3): void;
    applyImpulse(impulse: Impulse, rpos: btVector3): void;
    applyVAImpulse(impulse: btVector3): void;
    applyDAImpulse(impulse: btVector3): void;
    applyAImpulse(impulse: Impulse): void;
    applyDCImpulse(impulse: btVector3): void;
    get_m_soft(): Cluster;	set_m_soft(value: Cluster): Cluster;
    get_m_rigid(): btRigidBody;	set_m_rigid(value: btRigidBody): btRigidBody;
    get_m_collisionObject(): btCollisionObject;	set_m_collisionObject(value: btCollisionObject): btCollisionObject;
  }
}
