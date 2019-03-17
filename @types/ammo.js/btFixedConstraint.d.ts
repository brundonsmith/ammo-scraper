declare module Ammo {
  declare class btFixedConstraint {
    constructor(rbA: btRigidBody, rbB: btRigidBody, frameInA: btTransform, frameInB: btTransform);
  }
}
