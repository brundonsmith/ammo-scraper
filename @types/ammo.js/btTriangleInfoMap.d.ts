declare module Ammo {
  declare class btTriangleInfoMap {
    constructor();
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    deSerialize(btTriangleInfoMapData: struct): void;
    get_m_convexEpsilon(): number;	set_m_convexEpsilon(value: number): number;
    get_m_planarEpsilon(): number;	set_m_planarEpsilon(value: number): number;
    get_m_equalVertexThreshold(): number;	set_m_equalVertexThreshold(value: number): number;
    get_m_edgeDistanceThreshold(): number;	set_m_edgeDistanceThreshold(value: number): number;
    get_m_maxEdgeAngleThreshold(): number;	set_m_maxEdgeAngleThreshold(value: number): number;
    get_m_zeroAreaThreshold(): number;	set_m_zeroAreaThreshold(value: number): number;
  }
}
