declare module Ammo {
  declare class GIM_PRIMITIVE_MANAGER_PROTOTYPE {
    is_trimesh(): boolean;
    get_primitive_count(): GUINT;
    get_primitive_box(prim_index: GUINT, primbox: GIM_AABB): void;
    get_primitive_triangle(prim_index: GUINT, triangle: GIM_TRIANGLE): void;
  }
}
