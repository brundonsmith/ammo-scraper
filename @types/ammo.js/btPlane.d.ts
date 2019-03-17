declare module Ammo {
  declare class btPlane {
    constructor(n: btVector3, d: number);
    constructor();

    get_dist(): number;	set_dist(value: number): number;
    get_normal(): btVector3;	set_normal(value: btVector3): btVector3;

  }
}
