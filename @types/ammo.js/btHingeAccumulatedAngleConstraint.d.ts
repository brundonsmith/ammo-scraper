declare module Ammo {
  declare class btHingeAccumulatedAngleConstraint {
    constructor();
    constructor(rbA: btRigidBody, rbB: btRigidBody, pivotInA: btVector3, pivotInB: btVector3, axisInA: btVector3, axisInB: btVector3, useReferenceFrameA: boolean);
    constructor(rbA: btRigidBody, pivotInA: btVector3, axisInA: btVector3, useReferenceFrameA: boolean);
    constructor(rbA: btRigidBody, rbB: btRigidBody, rbAFrame: btTransform, rbBFrame: btTransform, useReferenceFrameA: boolean);
    constructor(rbA: btRigidBody, rbAFrame: btTransform, useReferenceFrameA: boolean);
    getAccumulatedHingeAngle(): number;
    setAccumulatedHingeAngle(accAngle: number): void;
    getInfo1(info: btConstraintInfo1): void;
  }
}
