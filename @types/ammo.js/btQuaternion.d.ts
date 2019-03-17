declare module Ammo {
  declare class btQuaternion {
    constructor();
    constructor(_axis: btVector3, _angle: number);
    constructor(yaw: number, pitch: number, roll: number);
    constructor(_x: number, _y: number, _z: number, _w: number);

    get_const(): static;	set_const(value: static): static;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;
    get_operator(): btQuaternion;	set_operator(value: btQuaternion): btQuaternion;

    angle(q: btQuaternion): number;
    angleShortestPath(q: btQuaternion): number;
    deSerialize(btQuaternionDoubleData: struct): void;
    deSerializeFloat(btQuaternionFloatData: struct): void;
    deSerializeDouble(btQuaternionDoubleData: struct): void;
    dot(q: btQuaternion): number;
    deSerialize(btQuaternionFloatData: struct): void;
    farthest(qd: btQuaternion): btQuaternion;
    getW(): number;
    getAngleShortestPath(): number;
    getAxis(): btVector3;
    getAngle(): number;
    getEulerZYX(yawZ: number, pitchY: number, rollX: number): void;
    inverse(): btQuaternion;
    length2(): number;
    length(): number;
    nearest(qd: btQuaternion): btQuaternion;
    normalize(): btQuaternion;
    normalized(): btQuaternion;
    serialize(btQuaternionData: struct): void;
    setEulerZYX(yawZ: number, pitchY: number, rollX: number): void;
    safeNormalize(): btQuaternion;
    serializeFloat(btQuaternionFloatData: struct): void;
    slerp(q: btQuaternion, t: number): btQuaternion;
    serializeDouble(btQuaternionDoubleData: struct): void;
    setRotation(axis: btVector3, _angle: number): void;
    setEuler(yaw: number, pitch: number, roll: number): void;
  }
}
