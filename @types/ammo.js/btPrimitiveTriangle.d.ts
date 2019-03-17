declare module Ammo {
  declare class btPrimitiveTriangle {
    constructor();
    buildTriPlane(): void;
    overlap_test_conservative(other: btPrimitiveTriangle): boolean;
    get_edge_plane(edge_index: number, plane: btVector4): void;
    applyTransform(t: btTransform): void;
    clip_triangle(other: btPrimitiveTriangle, clipped_points: btVector3): number;
    find_triangle_collision_clip_method(other: btPrimitiveTriangle, contacts: GIM_TRIANGLE_CONTACT): boolean;
    get_m_vertices(): btVector3;	set_m_vertices(value: btVector3): btVector3;
    get_m_plane(): btVector4;	set_m_plane(value: btVector4): btVector4;
    get_m_margin(): number;	set_m_margin(value: number): number;
    get_m_dummy(): number;	set_m_dummy(value: number): number;
  }
}
