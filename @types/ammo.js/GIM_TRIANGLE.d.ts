declare module Ammo {
  declare class GIM_TRIANGLE {
    constructor();
    get_box(): GIM_AABB;
    get_normal(normal: btVector3): void;
    get_plane(plane: btVector4): void;
    apply_transform(trans: btTransform): void;
    get_edge_plane(edge_index: GUINT, triangle_normal: btVector3, plane: btVector4): void;
    get_triangle_transform(triangle_transform: btTransform): void;
    collide_triangle_hard_test(other: GIM_TRIANGLE, contact_data: GIM_TRIANGLE_CONTACT_DATA): boolean;
    collide_triangle(other: GIM_TRIANGLE, contact_data: GIM_TRIANGLE_CONTACT_DATA): boolean;
    get_uv_parameters(point: btVector3, tri_plane: btVector3, u: GREAL, v: GREAL): boolean;
    is_point_inside(point: btVector3, tri_normal: btVector3): boolean;
    ray_collision(vPoint: btVector3, vDir: btVector3, pout: btVector3, triangle_normal: btVector3, tparam: GREAL, tmax: GREAL): boolean;
    ray_collision_front_side(vPoint: btVector3, vDir: btVector3, pout: btVector3, triangle_normal: btVector3, tparam: GREAL, tmax: GREAL): boolean;
    get_m_margin(): number;	set_m_margin(value: number): number;
    get_m_vertices(): btVector3;	set_m_vertices(value: btVector3): btVector3;
  }
}
