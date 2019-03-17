declare module Ammo {
  declare class btConeShapeZ {
    constructor(radius: number, height: number);
    getAnisotropicRollingFrictionDirection(): btVector3;
    getName(): string;
  }
}
