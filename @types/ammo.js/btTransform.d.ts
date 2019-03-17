declare module Ammo {
  declare class btTransform {
    constructor();
    constructor(b: btMatrix3x3, c: btVector3, r: btScala, r: btScala);
    constructor(other: btTransform);
    constructor(q: btQuaternion, c: btVector3, r: btScala, r: btScala);

    get_const(): static;	set_const(value: static): static;
    get_operator(): btTransform;	set_operator(value: btTransform): btTransform;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btVector3;	set_operator(value: btVector3): btVector3;
    get_operator(): btTransform;	set_operator(value: btTransform): btTransform;
    get_operator(): btVector3;	set_operator(value: btVector3): btVector3;
    get_operator(): btTransform;	set_operator(value: btTransform): btTransform;

    deSerializeFloat(btTransformFloatData: struct): void;
    deSerializeDouble(btTransformDoubleData: struct): void;
    deSerialize(btTransformData: struct): void;
    getBasis(): btMatrix3x3;
    getBasis(): btMatrix3x3;
    getOrigin(): btVector3;
    getOrigin(): btVector3;
    getRotation(): btQuaternion;
    getOpenGLMatrix(m: number): void;
    invXform(inVec: btVector3): btVector3;
    inverse(): btTransform;
    inverseTimes(t: btTransform): btTransform;
    mult(t1: btTransform, t2: btTransform): void;
    setIdentity(): void;
    serialize(btTransformData: struct): void;
    serializeFloat(btTransformFloatData: struct): void;
    setRotation(q: btQuaternion): void;
    setOrigin(origin: btVector3): void;
    setFromOpenGLMatrix(m: number): void;
    setBasis(basis: btMatrix3x3): void;
  }
}
