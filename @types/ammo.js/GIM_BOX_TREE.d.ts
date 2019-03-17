declare module Ammo {
  declare class GIM_BOX_TREE {
    constructor();
    build_tree(y: gim_arra): void;
    clearNodes(): void;
    getNodeCount(): GUINT;
    isLeafNode(nodeindex: GUINT): boolean;
    getNodeData(nodeindex: GUINT): GUINT;
    getNodeBound(nodeindex: GUINT, bound: GIM_AABB): void;
    setNodeBound(nodeindex: GUINT, bound: GIM_AABB): void;
    getLeftNodeIndex(nodeindex: GUINT): GUINT;
    getRightNodeIndex(nodeindex: GUINT): GUINT;
    getScapeNodeIndex(nodeindex: GUINT): GUINT;
  }
}
