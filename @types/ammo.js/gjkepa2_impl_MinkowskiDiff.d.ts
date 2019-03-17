declare module Ammo {
  declare class gjkepa2_impl_MinkowskiDiff {
    constructor();

    get_3(): btVector;	set_3(value: btVector): btVector;
    get_m_shapes(): btConvexShape;	set_m_shapes(value: btConvexShape): btConvexShape;
    get_m_toshape1(): btMatrix3x3;	set_m_toshape1(value: btMatrix3x3): btMatrix3x3;
    get_m_toshape0(): btTransform;	set_m_toshape0(value: btTransform): btTransform;

    EnableMargin(enable: boolean): void;
    Support0(d: btVector3): btVector3;
    Support1(d: btVector3): btVector3;
    Support(d: btVector3): btVector3;
    Support(d: btVector3, index: U): btVector3;
  }
}
