declare module Ammo {
  declare class GIM_TRIANGLE_CALCULATION_CACHE {
    compute_intervals(D0: GREAL, D1: GREAL, D2: GREAL, D0D1: GREAL, D0D2: GREAL, scale_edge0: GREAL, scale_edge1: GREAL, edge_index0: GUINT, edge_index1: GUINT): boolean;
    clip_triangle(tri_plane: btVector4, tripoints: btVector3, srcpoints: btVector3, clip_points: btVector3): GUINT;
    sort_isect(isect0: GREAL, isect1: GREAL, e0: GUINT, e1: GUINT, vec0: btVector3, vec1: btVector3): void;
    cross_line_intersection_test(): GUINT;
    triangle_collision(u0: btVector3, u1: btVector3, u2: btVector3, margin_u: GREAL, v0: btVector3, v1: btVector3, v2: btVector3, margin_v: GREAL, contacts: GIM_TRIANGLE_CONTACT_DATA): boolean;
    get_margin(): GREAL;	set_margin(value: GREAL): GREAL;
    get_tu_vertices(): btVector3;	set_tu_vertices(value: btVector3): btVector3;
    get_tv_vertices(): btVector3;	set_tv_vertices(value: btVector3): btVector3;
    get_tu_plane(): btVector4;	set_tu_plane(value: btVector4): btVector4;
    get_tv_plane(): btVector4;	set_tv_plane(value: btVector4): btVector4;
    get_closest_point_u(): btVector3;	set_closest_point_u(value: btVector3): btVector3;
    get_closest_point_v(): btVector3;	set_closest_point_v(value: btVector3): btVector3;
    get_edge_edge_dir(): btVector3;	set_edge_edge_dir(value: btVector3): btVector3;
    get_distances(): btVector3;	set_distances(value: btVector3): btVector3;
    get_du(): GREAL;	set_du(value: GREAL): GREAL;
    get_du0du1(): GREAL;	set_du0du1(value: GREAL): GREAL;
    get_du0du2(): GREAL;	set_du0du2(value: GREAL): GREAL;
    get_dv(): GREAL;	set_dv(value: GREAL): GREAL;
    get_dv0dv1(): GREAL;	set_dv0dv1(value: GREAL): GREAL;
    get_dv0dv2(): GREAL;	set_dv0dv2(value: GREAL): GREAL;
    get_temp_points(): btVector3;	set_temp_points(value: btVector3): btVector3;
    get_temp_points1(): btVector3;	set_temp_points1(value: btVector3): btVector3;
    get_contact_points(): btVector3;	set_contact_points(value: btVector3): btVector3;
  }
}
