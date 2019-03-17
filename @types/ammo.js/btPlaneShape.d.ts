declare module Ammo {
  declare class btPlaneShape {
    constructor(v: btVector3, f: number);


    get_plane_equation(equation: btVector4): void;
    get_plane_equation_transformed(trans: btTransform, equation: btVector4): void;
  }
}
