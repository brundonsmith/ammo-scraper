declare module Ammo {
  declare class Bullet_btTriangleInfoMapData {
    get_m_hashTablePtr(): number;	set_m_hashTablePtr(value: number): number;
    get_m_nextPtr(): number;	set_m_nextPtr(value: number): number;
    get_m_valueArrayPtr(): btTriangleInfoData;	set_m_valueArrayPtr(value: btTriangleInfoData): btTriangleInfoData;
    get_m_keyArrayPtr(): number;	set_m_keyArrayPtr(value: number): number;
    get_m_convexEpsilon(): number;	set_m_convexEpsilon(value: number): number;
    get_m_planarEpsilon(): number;	set_m_planarEpsilon(value: number): number;
    get_m_equalVertexThreshold(): number;	set_m_equalVertexThreshold(value: number): number;
    get_m_edgeDistanceThreshold(): number;	set_m_edgeDistanceThreshold(value: number): number;
    get_m_zeroAreaThreshold(): number;	set_m_zeroAreaThreshold(value: number): number;
    get_m_nextSize(): number;	set_m_nextSize(value: number): number;
    get_m_hashTableSize(): number;	set_m_hashTableSize(value: number): number;
    get_m_numValues(): number;	set_m_numValues(value: number): number;
    get_m_numKeys(): number;	set_m_numKeys(value: number): number;
    get_m_padding(): string;	set_m_padding(value: string): string;
  }
}
