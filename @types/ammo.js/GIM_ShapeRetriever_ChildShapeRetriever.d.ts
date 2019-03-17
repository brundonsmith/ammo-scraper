declare module Ammo {
  declare class GIM_ShapeRetriever_ChildShapeRetriever {

    get_m_parent(): GIM_ShapeRetriever;	set_m_parent(value: GIM_ShapeRetriever): GIM_ShapeRetriever;

    getChildShape(index: number): btCollisionShape;
  }
}
