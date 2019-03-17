declare module Ammo {
  declare class btQuantizedBvhNodeData {
    get_m_quantizedAabbMin(): short;	set_m_quantizedAabbMin(value: short): short;
    get_m_quantizedAabbMax(): short;	set_m_quantizedAabbMax(value: short): short;
    get_m_escapeIndexOrTriangleIndex(): number;	set_m_escapeIndexOrTriangleIndex(value: number): number;
  }
}
