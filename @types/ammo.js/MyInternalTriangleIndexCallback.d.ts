declare module Ammo {
  declare class MyInternalTriangleIndexCallback {
    constructor(colShape: btCompoundShape, meshShape: btGImpactMeshShape, depth: number);
    internalProcessTriangleIndex(triangle: btVector3, partId: number, triangleIndex: number): void;
    get_m_gimpactShape(): btGImpactMeshShape;	set_m_gimpactShape(value: btGImpactMeshShape): btGImpactMeshShape;
    get_m_colShape(): btCompoundShape;	set_m_colShape(value: btCompoundShape): btCompoundShape;
    get_m_depth(): number;	set_m_depth(value: number): number;
  }
}
