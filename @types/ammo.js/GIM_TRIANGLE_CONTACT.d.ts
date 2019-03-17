declare module Ammo {
  declare class GIM_TRIANGLE_CONTACT {
    copy_from(other: GIM_TRIANGLE_CONTACT): void;
    constructor();
    constructor(other: GIM_TRIANGLE_CONTACT);
    merge_points(plane: btVector4, margin: number, points: btVector3, point_count: number): void;
    get_m_penetration_depth(): number;	set_m_penetration_depth(value: number): number;
    get_m_point_count(): number;	set_m_point_count(value: number): number;
    get_m_separating_normal(): btVector4;	set_m_separating_normal(value: btVector4): btVector4;
    get_m_points(): btVector3;	set_m_points(value: btVector3): btVector3;
  }
}
