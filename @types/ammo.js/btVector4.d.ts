declare module Ammo {
  declare class btVector4 {
    constructor();
    constructor(_x: number, _y: number, _z: number, _w: number);
    absolute4(): btVector4;
    getW(): number;
    maxAxis4(): number;
    minAxis4(): number;
    closestAxis4(): number;
    setValue(_x: number, _y: number, _z: number, _w: number): void;
  }
}
