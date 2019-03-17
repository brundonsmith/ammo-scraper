declare module Ammo {
  declare class btGeneric6DofSpringConstraint {
    constructor();
    constructor(rbB: btRigidBody, frameInB: btTransform, useLinearReferenceFrameB: boolean);
    constructor(rbA: btRigidBody, rbB: btRigidBody, frameInA: btTransform, frameInB: btTransform, useLinearReferenceFrameA: boolean);


    calculateSerializeBufferSize(): number;
    enableSpring(index: number, onOff: boolean): void;
    getStiffness(index: number): number;
    getDamping(index: number): number;
    getEquilibriumPoint(index: number): number;
    getInfo2(info: btConstraintInfo2): void;
    isSpringEnabled(index: number): boolean;
    setDamping(index: number, damping: number): void;
    setEquilibriumPoint(): void;
    setEquilibriumPoint(index: number): void;
    setAxis(axis1: btVector3, axis2: btVector3): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    setStiffness(index: number, stiffness: number): void;
    setEquilibriumPoint(index: number, val: number): void;
  }
}
