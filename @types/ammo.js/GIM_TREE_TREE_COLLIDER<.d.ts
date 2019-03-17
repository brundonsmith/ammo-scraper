declare module Ammo {
  declare class GIM_TREE_TREE_COLLIDER< {
    constructor();

    get_current_node0(): GUINT;	set_current_node0(value: GUINT): GUINT;
    get_current_node1(): GUINT;	set_current_node1(value: GUINT): GUINT;
    get_m_boxset0(): BOX_SET_CLASS0;	set_m_boxset0(value: BOX_SET_CLASS0): BOX_SET_CLASS0;
    get_m_boxset1(): BOX_SET_CLASS1;	set_m_boxset1(value: BOX_SET_CLASS1): BOX_SET_CLASS1;
    get_m_tri1_plane(): btVector4;	set_m_tri1_plane(value: btVector4): btVector4;
    get_m_collision_pairs(): gim_pair_set;	set_m_collision_pairs(value: gim_pair_set): gim_pair_set;
    get_m_tri1(): GIM_TRIANGLE;	set_m_tri1(value: GIM_TRIANGLE): GIM_TRIANGLE;
    get_m_tri0_plane(): btVector4;	set_m_tri0_plane(value: btVector4): btVector4;
    get_m_tri0(): GIM_TRIANGLE;	set_m_tri0(value: GIM_TRIANGLE): GIM_TRIANGLE;
    get_m_box1(): GIM_AABB;	set_m_box1(value: GIM_AABB): GIM_AABB;
    get_m_box0(): GIM_AABB;	set_m_box0(value: GIM_AABB): GIM_AABB;
    get_node1_has_triangle(): boolean;	set_node1_has_triangle(value: boolean): boolean;
    get_node0_has_triangle(): boolean;	set_node0_has_triangle(value: boolean): boolean;
    get_node1_is_leaf(): boolean;	set_node1_is_leaf(value: boolean): boolean;
    get_node0_is_leaf(): boolean;	set_node0_is_leaf(value: boolean): boolean;
    get_trans_cache_1to0(): GIM_BOX_BOX_TRANSFORM_CACHE;	set_trans_cache_1to0(value: GIM_BOX_BOX_TRANSFORM_CACHE): GIM_BOX_BOX_TRANSFORM_CACHE;
    get_trans_cache_0to1(): btTransform;	set_trans_cache_0to1(value: btTransform): btTransform;
    get_t0_is_trimesh(): boolean;	set_t0_is_trimesh(value: boolean): boolean;
    get_t1_is_trimesh(): boolean;	set_t1_is_trimesh(value: boolean): boolean;

    find_collision(boxset1: BOX_SET_CLASS0, trans1: btTransform, boxset2: BOX_SET_CLASS1, trans2: btTransform, collision_pairs: gim_pair_set, complete_primitive_tests: boolean): void;
  }
}
