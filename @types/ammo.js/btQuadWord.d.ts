declare module Ammo {
  declare class btQuadWord {
    getX(): number;
    getY(): number;
    getZ(): number;
    setX(_x: number): void;
    setY(_y: number): void;
    setZ(_z: number): void;
    setW(_w: number): void;
    x(): number;
    y(): number;
    z(): number;
    w(): number;
    get_btScalar(): operator;	set_btScalar(value: operator): operator;
    get_const(): operator;	set_const(value: operator): operator;
    get_operator(): boolean;	set_operator(value: boolean): boolean;
    get_operator(): boolean;	set_operator(value: boolean): boolean;
    setValue(_x: number, _y: number, _z: number): void;
    setValue(_x: number, _y: number, _z: number, _w: number): void;
    constructor();
    constructor(_x: number, _y: number, _z: number);
    constructor(_x: number, _y: number, _z: number, _w: number);
    setMax(other: btQuadWord): void;
    setMin(other: btQuadWord): void;
  }
}
