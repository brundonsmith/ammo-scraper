declare module Ammo {
  declare class GIM_AABB {
    constructor();
    constructor(V1: btVector3, V2: btVector3, V3: btVector3, margin: GREAL);
    constructor(other: GIM_AABB);
    constructor(other: GIM_AABB, margin: number);
    constructor(V1: btVector3, V2: btVector3, V3: btVector3);

    get_e(): templat;	set_e(value: templat): templat;
    get_e(): templat;	set_e(value: templat): templat;
    get_e(): templat;	set_e(value: templat): templat;
    get_m_max(): btVector3;	set_m_max(value: btVector3): btVector3;
    get_m_min(): btVector3;	set_m_min(value: btVector3): btVector3;

    appy_transform(trans: btTransform): void;
    calc_from_triangle_margin(V1: CLASS_POINT, V2: CLASS_POINT, V3: CLASS_POINT, margin: number): void;
    copy_with_margin(other: GIM_AABB, margin: number): void;
    collide_triangle_exact(p1: btVector3, p2: btVector3, p3: btVector3, triangle_plane: btVector4): boolean;
    collide_plane(plane: btVector4): boolean;
    collide_ray(vorigin: btVector3, vdir: btVector3): boolean;
    calc_from_triangle(V1: CLASS_POINT, V2: CLASS_POINT, V3: CLASS_POINT): void;
    find_intersection(other: GIM_AABB, intersection: GIM_AABB): void;
    get_center_extend(center: btVector3, extend: btVector3): void;
    has_collision(other: GIM_AABB): boolean;
    invalidate(): void;
    increment_margin(margin: number): void;
    merge_point(point: CLASS_POINT): void;
    merge(box: GIM_AABB): void;
    overlapping_trans_cache(box: GIM_AABB, transcache: GIM_BOX_BOX_TRANSFORM_CACHE, fulltest: boolean): boolean;
    overlapping_trans_conservative(box: GIM_AABB, trans1_to_0: btTransform): boolean;
    projection_interval(direction: btVector3, vmin: number, vmax: number): void;
    plane_classify(plane: btVector4): ePLANE_INTERSECTION_TYPE;
  }
}
