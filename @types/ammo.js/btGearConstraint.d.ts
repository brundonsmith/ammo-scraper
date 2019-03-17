declare module Ammo {
  declare class btGearConstraint {
    constructor(rbA: btRigidBody, rbB: btRigidBody, axisInA: btVector3, axisInB: btVector3, ratio: number);
    getInfo1(info: btConstraintInfo1): void;
    getInfo2(info: btConstraintInfo2): void;
    setAxisA(axisA: btVector3): void;
    setAxisB(axisB: btVector3): void;
    setRatio(ratio: number): void;
    getAxisA(): btVector3;
    getAxisB(): btVector3;
    getRatio(): number;
    setParam(num: number, value: number, axis: number): void;
    getParam(num: number, axis: number): number;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
