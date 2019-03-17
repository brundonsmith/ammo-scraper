declare module Ammo {
  declare class Bullet_btQuantizedBvhDoubleData {
    get_m_bvhAabbMin(): btVector3DoubleData;	set_m_bvhAabbMin(value: btVector3DoubleData): btVector3DoubleData;
    get_m_bvhAabbMax(): btVector3DoubleData;	set_m_bvhAabbMax(value: btVector3DoubleData): btVector3DoubleData;
    get_m_bvhQuantization(): btVector3DoubleData;	set_m_bvhQuantization(value: btVector3DoubleData): btVector3DoubleData;
    get_m_curNodeIndex(): number;	set_m_curNodeIndex(value: number): number;
    get_m_useQuantization(): number;	set_m_useQuantization(value: number): number;
    get_m_numContiguousLeafNodes(): number;	set_m_numContiguousLeafNodes(value: number): number;
    get_m_numQuantizedContiguousNodes(): number;	set_m_numQuantizedContiguousNodes(value: number): number;
    get_m_contiguousNodesPtr(): btOptimizedBvhNodeDoubleData;	set_m_contiguousNodesPtr(value: btOptimizedBvhNodeDoubleData): btOptimizedBvhNodeDoubleData;
    get_m_quantizedContiguousNodesPtr(): btQuantizedBvhNodeData;	set_m_quantizedContiguousNodesPtr(value: btQuantizedBvhNodeData): btQuantizedBvhNodeData;
    get_m_traversalMode(): number;	set_m_traversalMode(value: number): number;
    get_m_numSubtreeHeaders(): number;	set_m_numSubtreeHeaders(value: number): number;
    get_m_subTreeInfoPtr(): btBvhSubtreeInfoData;	set_m_subTreeInfoPtr(value: btBvhSubtreeInfoData): btBvhSubtreeInfoData;
  }
}
