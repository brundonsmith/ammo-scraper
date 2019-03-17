declare module Ammo {
  declare class btAlignedBox3d {
    min(): btVector3;
    max(): btVector3;
    contains(x: btVector3): boolean;
    constructor(mn: btVector3, mx: btVector3);
    constructor();
    get_m_min(): btVector3;	set_m_min(value: btVector3): btVector3;
    get_m_max(): btVector3;	set_m_max(value: btVector3): btVector3;
  }
}
