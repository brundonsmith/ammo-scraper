declare module Ammo {
  declare class btBvhSubtreeInfoData {
    get_m_rootNodeIndex(): number;	set_m_rootNodeIndex(value: number): number;
    get_m_subtreeSize(): number;	set_m_subtreeSize(value: number): number;
    get_m_quantizedAabbMin(): short;	set_m_quantizedAabbMin(value: short): short;
    get_m_quantizedAabbMax(): short;	set_m_quantizedAabbMax(value: short): short;
  }
}
