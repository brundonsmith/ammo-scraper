declare module Ammo {
  declare class btMatrix3x3 {
    constructor();
    constructor(q: btQuaternion);
    constructor(xx: number, xy: number, xz: number, yx: number, yy: number, yz: number, zx: number, zy: number, zz: number);
    constructor(other: btMatrix3x3);
    get_operator(): btMatrix3x3;	set_operator(value: btMatrix3x3): btMatrix3x3;
    getColumn(i: number): btVector3;
    getRow(i: number): btVector3;
    get_operator(): btVector3;	set_operator(value: btVector3): btVector3;
    get_operator(): btVector3;	set_operator(value: btVector3): btVector3;
    get_operator(): btMatrix3x3;	set_operator(value: btMatrix3x3): btMatrix3x3;
    get_operator(): btMatrix3x3;	set_operator(value: btMatrix3x3): btMatrix3x3;
    get_operator(): btMatrix3x3;	set_operator(value: btMatrix3x3): btMatrix3x3;
    setFromOpenGLSubMatrix(m: number): void;
    setValue(xx: number, xy: number, xz: number, yx: number, yy: number, yz: number, zx: number, zy: number, zz: number): void;
    setRotation(q: btQuaternion): void;
    setEulerYPR(yaw: number, pitch: number, roll: number): void;
    setEulerZYX(eulerX: number, eulerY: number, eulerZ: number): void;
    setIdentity(): void;
    getOpenGLSubMatrix(m: number): void;
    getRotation(q: btQuaternion): void;
    getEulerYPR(yaw: number, pitch: number, roll: number): void;
    getEulerZYX(yaw: number, pitch: number, roll: number, solution_number: number): void;
    scaled(s: btVector3): btMatrix3x3;
    determinant(): number;
    adjoint(): btMatrix3x3;
    absolute(): btMatrix3x3;
    transpose(): btMatrix3x3;
    inverse(): btMatrix3x3;
    solve33(b: btVector3): btVector3;
    transposeTimes(m: btMatrix3x3): btMatrix3x3;
    timesTranspose(m: btMatrix3x3): btMatrix3x3;
    tdotx(v: btVector3): number;
    tdoty(v: btVector3): number;
    tdotz(v: btVector3): number;
    extractRotation(q: btQuaternion, tolerance: number, maxIter: number): void;
    diagonalize(rot: btMatrix3x3, threshold: number, maxSteps: number): void;
    cofac(r1: number, c1: number, r2: number, c2: number): number;
    serialize(btMatrix3x3Data: struct): void;
    serializeFloat(btMatrix3x3FloatData: struct): void;
    deSerialize(btMatrix3x3Data: struct): void;
    deSerializeFloat(btMatrix3x3FloatData: struct): void;
    deSerializeDouble(btMatrix3x3DoubleData: struct): void;
    get_const(): static;	set_const(value: static): static;
  }
}
