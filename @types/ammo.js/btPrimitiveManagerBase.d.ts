declare module Ammo {
  declare class btPrimitiveManagerBase {


    get_primitive_count(): number;
    get_primitive_box(prim_index: number, primbox: btAABB): void;
    get_primitive_triangle(prim_index: number, triangle: btPrimitiveTriangle): void;
    is_trimesh(): boolean;
  }
}
