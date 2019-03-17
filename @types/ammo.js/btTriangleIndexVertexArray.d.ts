declare module Ammo {
  declare class btTriangleIndexVertexArray {
    constructor();
    constructor(numTriangles: number, triangleIndexBase: number, triangleIndexStride: number, numVertices: number, vertexBase: number, vertexStride: number);
    constructor();


    addIndexedMesh(mesh: btIndexedMesh, indexType: PHY_ScalarType): void;
    getLockedVertexIndexBase(vertexbase: string, numverts: number, type: PHY_ScalarType, vertexStride: number, indexbase: string, indexstride: number, numfaces: number, indicestype: PHY_ScalarType, subpart: number): void;
    getLockedReadOnlyVertexIndexBase(vertexbase: string, numverts: number, type: PHY_ScalarType, vertexStride: number, indexbase: string, indexstride: number, numfaces: number, indicestype: PHY_ScalarType, subpart: number): void;
    getIndexedMeshArray(): IndexedMeshArray;
    getIndexedMeshArray(): IndexedMeshArray;
    getPremadeAabb(aabbMin: btVector3, aabbMax: btVector3): void;
    getNumSubParts(): number;
    hasPremadeAabb(): boolean;
    preallocateVertices(numverts: number): void;
    preallocateIndices(numindices: number): void;
    setPremadeAabb(aabbMin: btVector3, aabbMax: btVector3): void;
    unLockReadOnlyVertexBase(subpart: number): void;
    unLockVertexBase(subpart: number): void;
  }
}
