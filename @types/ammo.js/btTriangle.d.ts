declare module Ammo {
  declare class btTriangle {
    get_m_vertex0(): btVector3;	set_m_vertex0(value: btVector3): btVector3;
    get_m_vertex1(): btVector3;	set_m_vertex1(value: btVector3): btVector3;
    get_m_vertex2(): btVector3;	set_m_vertex2(value: btVector3): btVector3;
    get_m_partId(): number;	set_m_partId(value: number): number;
    get_m_triangleIndex(): number;	set_m_triangleIndex(value: number): number;
  }
}
