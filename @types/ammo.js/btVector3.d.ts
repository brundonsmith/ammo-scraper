declare module Ammo {
  declare class btVector3 {
    constructor();
    constructor(_x: number, _y: number, _z: number);
    constructor();

    get_btScalar(): operator;	set_btScalar(value: operator): operator;
    get_const(): operator;	set_const(value: operator): operator;
    get_m_floats(): number;	set_m_floats(value: number): number;
    get_operator(): btVector3;	set_operator(value: btVector3): btVector3;
    get_operator(): btVector3;	set_operator(value: btVector3): btVector3;
    get_operator(): btVector3;	set_operator(value: btVector3): btVector3;
    get_operator(): btVector3;	set_operator(value: btVector3): btVector3;
    get_operator(): btVector3;	set_operator(value: btVector3): btVector3;
    get_operator(): boolean;	set_operator(value: boolean): boolean;
    get_operator(): boolean;	set_operator(value: boolean): boolean;

    angle(v: btVector3): number;
    absolute(): btVector3;
    cross(v: btVector3): btVector3;
    closestAxis(): number;
    deSerialize(btVector3DoubleData: struct): void;
    distance(v: btVector3): number;
    distance2(v: btVector3): number;
    deSerializeDouble(btVector3DoubleData: struct): void;
    deSerializeFloat(btVector3FloatData: struct): void;
    dot(v: btVector3): number;
    dot3(v0: btVector3, v1: btVector3, v2: btVector3): btVector3;
    deSerialize(btVector3FloatData: struct): void;
    furthestAxis(): number;
    fuzzyZero(): boolean;
    getZ(): number;
    getSkewSymmetricMatrix(v0: btVector3, v1: btVector3, v2: btVector3): void;
    getX(): number;
    getY(): number;
    isZero(): boolean;
    lerp(v: btVector3, t: number): btVector3;
    length(): number;
    length2(): number;
    minAxis(): number;
    maxAxis(): number;
    minDot(array: btVector3, array_count: number, dotOut: number): number;
    maxDot(array: btVector3, array_count: number, dotOut: number): number;
    normalized(): btVector3;
    normalize(): btVector3;
    norm(): number;
    rotate(wAxis: btVector3, angle: number): btVector3;
    setInterpolate3(v0: btVector3, v1: btVector3, rt: number): void;
    setMax(other: btVector3): void;
    setMin(other: btVector3): void;
    setX(_x: number): void;
    setW(_w: number): void;
    setZero(): void;
    setZ(_z: number): void;
    setY(_y: number): void;
    serialize(btVector3Data: struct): void;
    safeNormalize(): btVector3;
    safeNorm(): number;
    serializeFloat(btVector3FloatData: struct): void;
    serializeDouble(btVector3DoubleData: struct): void;
    setValue(_x: number, _y: number, _z: number): void;
    triple(v1: btVector3, v2: btVector3): number;
    w(): number;
    x(): number;
    y(): number;
    z(): number;
  }
}
