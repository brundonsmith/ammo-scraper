declare module Ammo {
  declare class btStridingMeshInterface {
    constructor();
    constructor();


    InternalProcessAllTriangles(callback: btInternalTriangleIndexCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    calculateSerializeBufferSize(): number;
    calculateAabbBruteForce(aabbMin: btVector3, aabbMax: btVector3): void;
    getLockedReadOnlyVertexIndexBase(vertexbase: string, numverts: number, type: PHY_ScalarType, stride: number, indexbase: string, indexstride: number, numfaces: number, indicestype: PHY_ScalarType, subpart: number): void;
    getScaling(): btVector3;
    getNumSubParts(): number;
    getLockedVertexIndexBase(vertexbase: string, numverts: number, type: PHY_ScalarType, stride: number, indexbase: string, indexstride: number, numfaces: number, indicestype: PHY_ScalarType, subpart: number): void;
    getPremadeAabb(aabbMin: btVector3, aabbMax: btVector3): void;
    hasPremadeAabb(): boolean;
    preallocateVertices(numverts: number): void;
    preallocateIndices(numindices: number): void;
    setPremadeAabb(aabbMin: btVector3, aabbMax: btVector3): void;
    setScaling(scaling: btVector3): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    unLockReadOnlyVertexBase(subpart: number): void;
    unLockVertexBase(subpart: number): void;
  }
}
