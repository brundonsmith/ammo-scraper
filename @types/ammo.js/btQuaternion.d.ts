declare module Ammo {
  declare class btQuaternion {
    constructor();
    constructor(_x: number, _y: number, _z: number, _w: number);
    constructor(_axis: btVector3, _angle: number);
    constructor(yaw: number, pitch: number, roll: number);
    setRotation(axis: btVector3, _angle: number): void;
    setEuler(yaw: number, pitch: number, roll: number): void;
    setEulerZYX(yawZ: number, pitchY: number, rollX: number): void;
    getEulerZYX(yawZ: number, pitchY: number, rollX: number): void;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    dot(q: btQuaternion): number;
    length2(): number;
    length(): number;
    safeNormalize(): btQuaternion;
    normalize(): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    normalized(): btQuaternion;
    angle(q: btQuaternion): number;
    angleShortestPath(q: btQuaternion): number;
    getAngle(): number;
    getAngleShortestPath(): number;
    getAxis(): btVector3;
    inverse(): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    farthest(qd: btQuaternion): btQuaternion;
    nearest(qd: btQuaternion): btQuaternion;
    slerp(q: btQuaternion, t: number): btQuaternion;
    getW(): number;
    serialize(btQuaternionData: struct): void;
    deSerialize(btQuaternionFloatData: struct): void;
    deSerialize(btQuaternionDoubleData: struct): void;
    serializeFloat(btQuaternionFloatData: struct): void;
    deSerializeFloat(btQuaternionFloatData: struct): void;
    serializeDouble(btQuaternionDoubleData: struct): void;
    deSerializeDouble(btQuaternionDoubleData: struct): void;
    get_const(): static;	set_const(value: static): static;
  }
}
