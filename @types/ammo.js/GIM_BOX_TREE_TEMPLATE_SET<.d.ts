declare module Ammo {
  declare class GIM_BOX_TREE_TEMPLATE_SET< {
    constructor();
    getGlobalBox(): GIM_AABB;
    setPrimitiveManager(primitive_manager: _GIM_PRIMITIVE_MANAGER_PROTOTYPE): void;
    getPrimitiveManager(): _GIM_PRIMITIVE_MANAGER_PROTOTYPE;
    getPrimitiveManager(): _GIM_PRIMITIVE_MANAGER_PROTOTYPE;
    update(): void;
    buildSet(): void;
    boxQuery(box: GIM_AABB, y: gim_arra): boolean;
    boxQueryTrans(box: GIM_AABB, transform: btTransform, y: gim_arra): boolean;
    rayQuery(ray_dir: btVector3, ray_origin: btVector3, y: gim_arra): boolean;
    hasHierarchy(): boolean;
    isTrimesh(): boolean;
    getNodeCount(): GUINT;
    isLeafNode(nodeindex: GUINT): boolean;
    getNodeData(nodeindex: GUINT): GUINT;
    getNodeBound(nodeindex: GUINT, bound: GIM_AABB): void;
    setNodeBound(nodeindex: GUINT, bound: GIM_AABB): void;
    getLeftNodeIndex(nodeindex: GUINT): GUINT;
    getRightNodeIndex(nodeindex: GUINT): GUINT;
    getScapeNodeIndex(nodeindex: GUINT): GUINT;
    getNodeTriangle(nodeindex: GUINT, triangle: GIM_TRIANGLE): void;
  }
}
