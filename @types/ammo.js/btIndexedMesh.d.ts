declare module Ammo {
  declare class btIndexedMesh {
    constructor();
    constructor();

    get_m_numTriangles(): number;	set_m_numTriangles(value: number): number;
    get_m_triangleIndexBase(): string;	set_m_triangleIndexBase(value: string): string;
    get_m_triangleIndexStride(): number;	set_m_triangleIndexStride(value: number): number;
    get_m_numVertices(): number;	set_m_numVertices(value: number): number;
    get_m_vertexBase(): string;	set_m_vertexBase(value: string): string;
    get_m_vertexStride(): number;	set_m_vertexStride(value: number): number;
    get_m_indexType(): PHY_ScalarType;	set_m_indexType(value: PHY_ScalarType): PHY_ScalarType;
    get_m_vertexType(): PHY_ScalarType;	set_m_vertexType(value: PHY_ScalarType): PHY_ScalarType;

  }
}
