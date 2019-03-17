declare module Ammo {
  declare class btQuantizedBvhFloatData {

    get_m_numQuantizedContiguousNodes(): number;	set_m_numQuantizedContiguousNodes(value: number): number;
    get_m_bvhAabbMin(): btVector3FloatData;	set_m_bvhAabbMin(value: btVector3FloatData): btVector3FloatData;
    get_m_bvhQuantization(): btVector3FloatData;	set_m_bvhQuantization(value: btVector3FloatData): btVector3FloatData;
    get_m_curNodeIndex(): number;	set_m_curNodeIndex(value: number): number;
    get_m_useQuantization(): number;	set_m_useQuantization(value: number): number;
    get_m_numContiguousLeafNodes(): number;	set_m_numContiguousLeafNodes(value: number): number;
    get_m_bvhAabbMax(): btVector3FloatData;	set_m_bvhAabbMax(value: btVector3FloatData): btVector3FloatData;
    get_m_contiguousNodesPtr(): btOptimizedBvhNodeFloatData;	set_m_contiguousNodesPtr(value: btOptimizedBvhNodeFloatData): btOptimizedBvhNodeFloatData;
    get_m_quantizedContiguousNodesPtr(): btQuantizedBvhNodeData;	set_m_quantizedContiguousNodesPtr(value: btQuantizedBvhNodeData): btQuantizedBvhNodeData;
    get_m_subTreeInfoPtr(): btBvhSubtreeInfoData;	set_m_subTreeInfoPtr(value: btBvhSubtreeInfoData): btBvhSubtreeInfoData;
    get_m_traversalMode(): number;	set_m_traversalMode(value: number): number;
    get_m_numSubtreeHeaders(): number;	set_m_numSubtreeHeaders(value: number): number;

  }
}
