declare module Ammo {
  declare class btConnectivityProcessor {

    get_m_partIdA(): number;	set_m_partIdA(value: number): number;
    get_m_triangleIndexA(): number;	set_m_triangleIndexA(value: number): number;
    get_m_triangleVerticesA(): btVector3;	set_m_triangleVerticesA(value: btVector3): btVector3;
    get_m_triangleInfoMap(): btTriangleInfoMap;	set_m_triangleInfoMap(value: btTriangleInfoMap): btTriangleInfoMap;

    processTriangle(triangle: btVector3, partId: number, triangleIndex: number): void;
  }
}
