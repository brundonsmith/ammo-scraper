declare module Ammo {
  declare class btQuadWord {
    constructor(_x: number, _y: number, _z: number, _w: number);
    constructor(_x: number, _y: number, _z: number);
    constructor();

    get_btScalar(): operator;	set_btScalar(value: operator): operator;
    get_const(): operator;	set_const(value: operator): operator;
    get_operator(): boolean;	set_operator(value: boolean): boolean;
    get_operator(): boolean;	set_operator(value: boolean): boolean;

    getX(): number;
    getZ(): number;
    getY(): number;
    setValue(_x: number, _y: number, _z: number, _w: number): void;
    setMin(other: btQuadWord): void;
    setMax(other: btQuadWord): void;
    setX(_x: number): void;
    setW(_w: number): void;
    setValue(_x: number, _y: number, _z: number): void;
    setY(_y: number): void;
    setZ(_z: number): void;
    w(): number;
    x(): number;
    y(): number;
    z(): number;
  }
}
