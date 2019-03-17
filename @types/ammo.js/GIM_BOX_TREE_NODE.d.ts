declare module Ammo {
  declare class GIM_BOX_TREE_NODE {
    constructor();
    is_leaf_node(): boolean;
    get_m_bound(): GIM_AABB;	set_m_bound(value: GIM_AABB): GIM_AABB;
    get_m_left(): GUINT;	set_m_left(value: GUINT): GUINT;
    get_m_right(): GUINT;	set_m_right(value: GUINT): GUINT;
    get_m_escapeIndex(): GUINT;	set_m_escapeIndex(value: GUINT): GUINT;
    get_m_data(): GUINT;	set_m_data(value: GUINT): GUINT;
  }
}
