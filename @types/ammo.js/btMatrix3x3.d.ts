declare module Ammo {
  declare class btMatrix3x3 {
    constructor();
    constructor(xx: number, xy: number, xz: number, yx: number, yy: number, yz: number, zx: number, zy: number, zz: number);
    constructor(other: btMatrix3x3);
    constructor(q: btQuaternion);

    get_const(): static;	set_const(value: static): static;
    get_operator(): btVector3;	set_operator(value: btVector3): btVector3;
    get_operator(): btMatrix3x3;	set_operator(value: btMatrix3x3): btMatrix3x3;
    get_operator(): btMatrix3x3;	set_operator(value: btMatrix3x3): btMatrix3x3;
    get_operator(): btMatrix3x3;	set_operator(value: btMatrix3x3): btMatrix3x3;
    get_operator(): btVector3;	set_operator(value: btVector3): btVector3;
    get_operator(): btMatrix3x3;	set_operator(value: btMatrix3x3): btMatrix3x3;

    adjoint(): btMatrix3x3;
    absolute(): btMatrix3x3;
    cofac(r1: number, c1: number, r2: number, c2: number): number;
    deSerializeDouble(btMatrix3x3DoubleData: struct): void;
    diagonalize(rot: btMatrix3x3, threshold: number, maxSteps: number): void;
    determinant(): number;
    deSerialize(btMatrix3x3Data: struct): void;
    deSerializeFloat(btMatrix3x3FloatData: struct): void;
    extractRotation(q: btQuaternion, tolerance: number, maxIter: number): void;
    getEulerYPR(yaw: number, pitch: number, roll: number): void;
    getColumn(i: number): btVector3;
    getOpenGLSubMatrix(m: number): void;
    getRotation(q: btQuaternion): void;
    getRow(i: number): btVector3;
    getEulerZYX(yaw: number, pitch: number, roll: number, solution_number: number): void;
    inverse(): btMatrix3x3;
    scaled(s: btVector3): btMatrix3x3;
    solve33(b: btVector3): btVector3;
    setFromOpenGLSubMatrix(m: number): void;
    setValue(xx: number, xy: number, xz: number, yx: number, yy: number, yz: number, zx: number, zy: number, zz: number): void;
    setRotation(q: btQuaternion): void;
    serializeFloat(btMatrix3x3FloatData: struct): void;
    serialize(btMatrix3x3Data: struct): void;
    setEulerYPR(yaw: number, pitch: number, roll: number): void;
    setEulerZYX(eulerX: number, eulerY: number, eulerZ: number): void;
    setIdentity(): void;
    transpose(): btMatrix3x3;
    tdotz(v: btVector3): number;
    tdoty(v: btVector3): number;
    tdotx(v: btVector3): number;
    timesTranspose(m: btMatrix3x3): btMatrix3x3;
    transposeTimes(m: btMatrix3x3): btMatrix3x3;
  }
}
