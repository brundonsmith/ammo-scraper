declare module Ammo {
  declare class btConeShapeX {
    constructor(radius: number, height: number);


    getAnisotropicRollingFrictionDirection(): btVector3;
    getName(): string;
  }
}
