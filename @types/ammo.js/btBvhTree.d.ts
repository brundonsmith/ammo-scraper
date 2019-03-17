declare module Ammo {
  declare class btBvhTree {
    constructor();


    build_tree(primitive_boxes: GIM_BVH_DATA_ARRAY): void;
    clearNodes(): void;
    getNodeCount(): number;
    getEscapeNodeIndex(nodeindex: number): number;
    getNodeData(nodeindex: number): number;
    get_node_pointer(index: number): GIM_BVH_TREE_NODE;
    getRightNode(nodeindex: number): number;
    getLeftNode(nodeindex: number): number;
    getNodeBound(nodeindex: number, bound: btAABB): void;
    isLeafNode(nodeindex: number): boolean;
    setNodeBound(nodeindex: number, bound: btAABB): void;
  }
}
