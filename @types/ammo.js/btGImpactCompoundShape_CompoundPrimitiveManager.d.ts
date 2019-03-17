declare module Ammo {
  declare class btGImpactCompoundShape_CompoundPrimitiveManager {
    constructor(compound: CompoundPrimitiveManager);
    constructor(compoundShape: btGImpactCompoundShape);
    constructor();
    is_trimesh(): boolean;
    get_primitive_count(): number;
    get_primitive_box(prim_index: number, primbox: btAABB): void;
    get_primitive_triangle(prim_index: number, triangle: btPrimitiveTriangle): void;
    get_m_compoundShape(): btGImpactCompoundShape;	set_m_compoundShape(value: btGImpactCompoundShape): btGImpactCompoundShape;
  }
}
