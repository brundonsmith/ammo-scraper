declare module Ammo {
  declare class btBvhTree {
    constructor();
    build_tree(primitive_boxes: GIM_BVH_DATA_ARRAY): void;
    clearNodes(): void;
    getNodeCount(): number;
    isLeafNode(nodeindex: number): boolean;
    getNodeData(nodeindex: number): number;
    getNodeBound(nodeindex: number, bound: btAABB): void;
    setNodeBound(nodeindex: number, bound: btAABB): void;
    getLeftNode(nodeindex: number): number;
    getRightNode(nodeindex: number): number;
    getEscapeNodeIndex(nodeindex: number): number;
    get_node_pointer(index: number): GIM_BVH_TREE_NODE;
  }
}
