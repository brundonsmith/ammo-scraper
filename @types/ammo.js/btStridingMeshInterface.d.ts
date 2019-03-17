declare module Ammo {
  declare class btStridingMeshInterface {
    constructor();
    constructor();
    InternalProcessAllTriangles(callback: btInternalTriangleIndexCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    calculateAabbBruteForce(aabbMin: btVector3, aabbMax: btVector3): void;
    getLockedVertexIndexBase(r: cha, numverts: number, type: PHY_ScalarType, stride: number, r: cha, indexstride: number, numfaces: number, indicestype: PHY_ScalarType, subpart: number): void;
    getLockedReadOnlyVertexIndexBase(r: cha, numverts: number, type: PHY_ScalarType, stride: number, r: cha, indexstride: number, numfaces: number, indicestype: PHY_ScalarType, subpart: number): void;
    unLockVertexBase(subpart: number): void;
    unLockReadOnlyVertexBase(subpart: number): void;
    getNumSubParts(): number;
    preallocateVertices(numverts: number): void;
    preallocateIndices(numindices: number): void;
    hasPremadeAabb(): boolean;
    setPremadeAabb(aabbMin: btVector3, aabbMax: btVector3): void;
    getPremadeAabb(aabbMin: btVector3, aabbMax: btVector3): void;
    getScaling(): btVector3;
    setScaling(scaling: btVector3): void;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
