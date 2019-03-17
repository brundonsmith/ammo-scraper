declare module Ammo {
  declare class btAngleCompareFunc {
    constructor(anchor: btVector3);

    get_m_anchor(): btVector3;	set_m_anchor(value: btVector3): btVector3;
    get_operator(): boolean;	set_operator(value: boolean): boolean;

  }
}
