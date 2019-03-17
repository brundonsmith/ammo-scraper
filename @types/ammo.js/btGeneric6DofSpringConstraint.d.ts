declare module Ammo {
  declare class btGeneric6DofSpringConstraint {
    constructor();
    constructor(rbA: btRigidBody, rbB: btRigidBody, frameInA: btTransform, frameInB: btTransform, useLinearReferenceFrameA: boolean);
    constructor(rbB: btRigidBody, frameInB: btTransform, useLinearReferenceFrameB: boolean);
    enableSpring(index: number, onOff: boolean): void;
    setStiffness(index: number, stiffness: number): void;
    setDamping(index: number, damping: number): void;
    setEquilibriumPoint(): void;
    setEquilibriumPoint(index: number): void;
    setEquilibriumPoint(index: number, val: number): void;
    isSpringEnabled(index: number): boolean;
    getStiffness(index: number): number;
    getDamping(index: number): number;
    getEquilibriumPoint(index: number): number;
    setAxis(axis1: btVector3, axis2: btVector3): void;
    getInfo2(info: btConstraintInfo2): void;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
