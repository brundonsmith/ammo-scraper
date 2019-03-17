declare module Ammo {
  declare class btQuantizedBvhTree {
    constructor();
    build_tree(primitive_boxes: GIM_BVH_DATA_ARRAY): void;
    quantizePoint(quantizedpoint: short, point: btVector3): void;
    testQuantizedBoxOverlapp(node_index: number, quantizedMin: short, quantizedMax: short): boolean;
    clearNodes(): void;
    getNodeCount(): number;
    isLeafNode(nodeindex: number): boolean;
    getNodeData(nodeindex: number): number;
    getNodeBound(nodeindex: number, bound: btAABB): void;
    setNodeBound(nodeindex: number, bound: btAABB): void;
    getLeftNode(nodeindex: number): number;
    getRightNode(nodeindex: number): number;
    getEscapeNodeIndex(nodeindex: number): number;
    get_node_pointer(index: number): BT_QUANTIZED_BVH_NODE;
  }
}
