declare module Ammo {
  declare class GIM_ShapeRetriever {
    constructor(gim_shape: btGImpactShapeInterface);
    getChildShape(index: number): btCollisionShape;
    get_m_gim_shape(): btGImpactShapeInterface;	set_m_gim_shape(value: btGImpactShapeInterface): btGImpactShapeInterface;
    get_m_trishape(): btTriangleShapeEx;	set_m_trishape(value: btTriangleShapeEx): btTriangleShapeEx;
    get_m_tetrashape(): btTetrahedronShapeEx;	set_m_tetrashape(value: btTetrahedronShapeEx): btTetrahedronShapeEx;
    get_m_child_retriever(): ChildShapeRetriever;	set_m_child_retriever(value: ChildShapeRetriever): ChildShapeRetriever;
    get_m_tri_retriever(): TriangleShapeRetriever;	set_m_tri_retriever(value: TriangleShapeRetriever): TriangleShapeRetriever;
    get_m_tetra_retriever(): TetraShapeRetriever;	set_m_tetra_retriever(value: TetraShapeRetriever): TetraShapeRetriever;
    get_m_current_retriever(): ChildShapeRetriever;	set_m_current_retriever(value: ChildShapeRetriever): ChildShapeRetriever;
  }
}
