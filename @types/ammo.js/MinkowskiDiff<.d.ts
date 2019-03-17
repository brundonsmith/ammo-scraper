declare module Ammo {
  declare class MinkowskiDiff< {
    constructor(a: btConvexTemplate, b: btConvexTemplate);
    EnableMargin(enable: boolean): void;
    Support0(d: btVector3): btVector3;
    Support1(d: btVector3): btVector3;
    Support(d: btVector3): btVector3;
    Support(d: btVector3, index: U): btVector3;
    get_m_convexAPtr(): btConvexTemplate;	set_m_convexAPtr(value: btConvexTemplate): btConvexTemplate;
    get_m_convexBPtr(): btConvexTemplate;	set_m_convexBPtr(value: btConvexTemplate): btConvexTemplate;
    get_m_toshape1(): btMatrix3x3;	set_m_toshape1(value: btMatrix3x3): btMatrix3x3;
    get_m_toshape0(): btTransform;	set_m_toshape0(value: btTransform): btTransform;
    get_m_enableMargin(): boolean;	set_m_enableMargin(value: boolean): boolean;
  }
}
