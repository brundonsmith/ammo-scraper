declare module Ammo {
  declare class btAABB {
    constructor();
    constructor(V1: btVector3, V2: btVector3, V3: btVector3, margin: number);
    constructor(other: btAABB);
    constructor(other: btAABB, margin: number);
    constructor(V1: btVector3, V2: btVector3, V3: btVector3);

    get_e(): templat;	set_e(value: templat): templat;
    get_e(): templat;	set_e(value: templat): templat;
    get_e(): templat;	set_e(value: templat): templat;
    get_m_max(): btVector3;	set_m_max(value: btVector3): btVector3;
    get_m_min(): btVector3;	set_m_min(value: btVector3): btVector3;

    appy_transform(trans: btTransform): void;
    appy_transform_trans_cache(trans: BT_BOX_BOX_TRANSFORM_CACHE): void;
    copy_with_margin(other: btAABB, margin: number): void;
    calc_from_triangle_margin(V1: CLASS_POINT, V2: CLASS_POINT, V3: CLASS_POINT, margin: number): void;
    collide_triangle_exact(p1: btVector3, p2: btVector3, p3: btVector3, triangle_plane: btVector4): boolean;
    collide_plane(plane: btVector4): boolean;
    collide_ray(vorigin: btVector3, vdir: btVector3): boolean;
    calc_from_triangle(V1: CLASS_POINT, V2: CLASS_POINT, V3: CLASS_POINT): void;
    find_intersection(other: btAABB, intersection: btAABB): void;
    get_center_extend(center: btVector3, extend: btVector3): void;
    has_collision(other: btAABB): boolean;
    invalidate(): void;
    increment_margin(margin: number): void;
    merge_point(point: CLASS_POINT): void;
    merge(box: btAABB): void;
    overlapping_trans_conservative(box: btAABB, trans1_to_0: btTransform): boolean;
    overlapping_trans_cache(box: btAABB, transcache: BT_BOX_BOX_TRANSFORM_CACHE, fulltest: boolean): boolean;
    overlapping_trans_conservative2(box: btAABB, trans1_to_0: BT_BOX_BOX_TRANSFORM_CACHE): boolean;
    projection_interval(direction: btVector3, vmin: number, vmax: number): void;
    plane_classify(plane: btVector4): eBT_PLANE_INTERSECTION_TYPE;
  }
}
