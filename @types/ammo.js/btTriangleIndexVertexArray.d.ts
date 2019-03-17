declare module Ammo {
  declare class btTriangleIndexVertexArray {
    constructor();
    constructor();
    constructor(numTriangles: number, triangleIndexBase: number, triangleIndexStride: number, numVertices: number, vertexBase: number, vertexStride: number);
    addIndexedMesh(mesh: btIndexedMesh, indexType: PHY_ScalarType): void;
    getLockedVertexIndexBase(r: cha, numverts: number, type: PHY_ScalarType, vertexStride: number, r: cha, indexstride: number, numfaces: number, indicestype: PHY_ScalarType, subpart: number): void;
    getLockedReadOnlyVertexIndexBase(r: cha, numverts: number, type: PHY_ScalarType, vertexStride: number, r: cha, indexstride: number, numfaces: number, indicestype: PHY_ScalarType, subpart: number): void;
    unLockVertexBase(subpart: number): void;
    unLockReadOnlyVertexBase(subpart: number): void;
    getNumSubParts(): number;
    getIndexedMeshArray(): IndexedMeshArray;
    getIndexedMeshArray(): IndexedMeshArray;
    preallocateVertices(numverts: number): void;
    preallocateIndices(numindices: number): void;
    hasPremadeAabb(): boolean;
    setPremadeAabb(aabbMin: btVector3, aabbMax: btVector3): void;
    getPremadeAabb(aabbMin: btVector3, aabbMax: btVector3): void;
  }
}
