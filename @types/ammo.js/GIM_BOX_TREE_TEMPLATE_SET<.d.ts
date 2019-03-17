declare module Ammo {
  declare class GIM_BOX_TREE_TEMPLATE_SET< {
    constructor();


    buildSet(): void;
    boxQuery(box: GIM_AABB, y: gim_arra): boolean;
    boxQueryTrans(box: GIM_AABB, transform: btTransform, y: gim_arra): boolean;
    getPrimitiveManager(): _GIM_PRIMITIVE_MANAGER_PROTOTYPE;
    getRightNodeIndex(nodeindex: GUINT): GUINT;
    getNodeTriangle(nodeindex: GUINT, triangle: GIM_TRIANGLE): void;
    getScapeNodeIndex(nodeindex: GUINT): GUINT;
    getPrimitiveManager(): _GIM_PRIMITIVE_MANAGER_PROTOTYPE;
    getLeftNodeIndex(nodeindex: GUINT): GUINT;
    getGlobalBox(): GIM_AABB;
    getNodeBound(nodeindex: GUINT, bound: GIM_AABB): void;
    getNodeCount(): GUINT;
    getNodeData(nodeindex: GUINT): GUINT;
    hasHierarchy(): boolean;
    isLeafNode(nodeindex: GUINT): boolean;
    isTrimesh(): boolean;
    rayQuery(ray_dir: btVector3, ray_origin: btVector3, y: gim_arra): boolean;
    setNodeBound(nodeindex: GUINT, bound: GIM_AABB): void;
    setPrimitiveManager(primitive_manager: _GIM_PRIMITIVE_MANAGER_PROTOTYPE): void;
    update(): void;
  }
}
