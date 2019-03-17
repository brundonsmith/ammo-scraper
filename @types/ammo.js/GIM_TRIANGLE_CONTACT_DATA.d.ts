declare module Ammo {
  declare class GIM_TRIANGLE_CONTACT_DATA {
    constructor();
    constructor(other: GIM_TRIANGLE_CONTACT_DATA);

    get_e(): templat;	set_e(value: templat): templat;
    get_m_penetration_depth(): GREAL;	set_m_penetration_depth(value: GREAL): GREAL;
    get_m_point_count(): GUINT;	set_m_point_count(value: GUINT): GUINT;
    get_m_separating_normal(): btVector4;	set_m_separating_normal(value: btVector4): btVector4;
    get_m_points(): btVector3;	set_m_points(value: btVector3): btVector3;

    copy_from(other: GIM_TRIANGLE_CONTACT_DATA): void;
    mergepoints_generic(plane: CLASS_PLANE, margin: GREAL, points: btVector3, point_count: GUINT, distance_func: DISTANCE_FUNC): void;
    merge_points(plane: btVector4, margin: GREAL, points: btVector3, point_count: GUINT): void;
  }
}
