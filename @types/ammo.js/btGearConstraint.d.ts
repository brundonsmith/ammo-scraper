declare module Ammo {
  declare class btGearConstraint {
    constructor(rbA: btRigidBody, rbB: btRigidBody, axisInA: btVector3, axisInB: btVector3, ratio: number);


    calculateSerializeBufferSize(): number;
    getInfo2(info: btConstraintInfo2): void;
    getAxisA(): btVector3;
    getParam(num: number, axis: number): number;
    getRatio(): number;
    getInfo1(info: btConstraintInfo1): void;
    getAxisB(): btVector3;
    setRatio(ratio: number): void;
    setParam(num: number, value: number, axis: number): void;
    setAxisB(axisB: btVector3): void;
    setAxisA(axisA: btVector3): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
