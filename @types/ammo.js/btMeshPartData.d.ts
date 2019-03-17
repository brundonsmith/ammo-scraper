declare module Ammo {
  declare class btMeshPartData {

    get_m_vertices3f(): btVector3FloatData;	set_m_vertices3f(value: btVector3FloatData): btVector3FloatData;
    get_m_vertices3d(): btVector3DoubleData;	set_m_vertices3d(value: btVector3DoubleData): btVector3DoubleData;
    get_m_indices32(): btIntIndexData;	set_m_indices32(value: btIntIndexData): btIntIndexData;
    get_m_3indices16(): btShortIntIndexTripletData;	set_m_3indices16(value: btShortIntIndexTripletData): btShortIntIndexTripletData;
    get_m_3indices8(): btCharIndexTripletData;	set_m_3indices8(value: btCharIndexTripletData): btCharIndexTripletData;
    get_m_indices16(): btShortIntIndexData;	set_m_indices16(value: btShortIntIndexData): btShortIntIndexData;
    get_m_numTriangles(): number;	set_m_numTriangles(value: number): number;
    get_m_numVertices(): number;	set_m_numVertices(value: number): number;

  }
}
