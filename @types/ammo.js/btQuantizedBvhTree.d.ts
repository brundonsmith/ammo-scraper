declare module Ammo {
  declare class btQuantizedBvhTree {
    constructor();


    build_tree(primitive_boxes: GIM_BVH_DATA_ARRAY): void;
    clearNodes(): void;
    getRightNode(nodeindex: number): number;
    get_node_pointer(index: number): BT_QUANTIZED_BVH_NODE;
    getNodeCount(): number;
    getLeftNode(nodeindex: number): number;
    getEscapeNodeIndex(nodeindex: number): number;
    getNodeBound(nodeindex: number, bound: btAABB): void;
    getNodeData(nodeindex: number): number;
    isLeafNode(nodeindex: number): boolean;
    quantizePoint(quantizedpoint: short, point: btVector3): void;
    setNodeBound(nodeindex: number, bound: btAABB): void;
    testQuantizedBoxOverlapp(node_index: number, quantizedMin: short, quantizedMax: short): boolean;
  }
}
