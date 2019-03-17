declare module Ammo {
  declare class btTransform {
    constructor();
    constructor(q: btQuaternion, c: btVector3, r: btScala, r: btScala);
    constructor(b: btMatrix3x3, c: btVector3, r: btScala, r: btScala);
    constructor(other: btTransform);
    get_operator(): btTransform;	set_operator(value: btTransform): btTransform;
    mult(t1: btTransform, t2: btTransform): void;
    get_operator(): btVector3;	set_operator(value: btVector3): btVector3;
    get_operator(): btVector3;	set_operator(value: btVector3): btVector3;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    getBasis(): btMatrix3x3;
    getBasis(): btMatrix3x3;
    getOrigin(): btVector3;
    getOrigin(): btVector3;
    getRotation(): btQuaternion;
    setFromOpenGLMatrix(m: number): void;
    getOpenGLMatrix(m: number): void;
    setOrigin(origin: btVector3): void;
    invXform(inVec: btVector3): btVector3;
    setBasis(basis: btMatrix3x3): void;
    setRotation(q: btQuaternion): void;
    setIdentity(): void;
    get_operator(): btTransform;	set_operator(value: btTransform): btTransform;
    inverse(): btTransform;
    inverseTimes(t: btTransform): btTransform;
    get_operator(): btTransform;	set_operator(value: btTransform): btTransform;
    serialize(btTransformData: struct): void;
    serializeFloat(btTransformFloatData: struct): void;
    deSerialize(btTransformData: struct): void;
    deSerializeDouble(btTransformDoubleData: struct): void;
    deSerializeFloat(btTransformFloatData: struct): void;
    get_const(): static;	set_const(value: static): static;
  }
}
