declare module Ammo {
  declare class btSoftBody_Body {
    constructor();
    constructor(colObj: btCollisionObject);
    constructor(p: Cluster);

    get_m_rigid(): btRigidBody;	set_m_rigid(value: btRigidBody): btRigidBody;
    get_m_soft(): Cluster;	set_m_soft(value: Cluster): Cluster;
    get_m_collisionObject(): btCollisionObject;	set_m_collisionObject(value: btCollisionObject): btCollisionObject;

    applyImpulse(impulse: Impulse, rpos: btVector3): void;
    activate(): void;
    angularVelocity(): btVector3;
    applyDCImpulse(impulse: btVector3): void;
    applyVImpulse(impulse: btVector3, rpos: btVector3): void;
    applyDImpulse(impulse: btVector3, rpos: btVector3): void;
    angularVelocity(rpos: btVector3): btVector3;
    applyVAImpulse(impulse: btVector3): void;
    applyDAImpulse(impulse: btVector3): void;
    applyAImpulse(impulse: Impulse): void;
    invMass(): number;
    invWorldInertia(): btMatrix3x3;
    linearVelocity(): btVector3;
    velocity(rpos: btVector3): btVector3;
    xform(): btTransform;
  }
}
