declare module Ammo {
  declare class btConvexTriangleMeshShape {
    constructor();
    constructor(meshInterface: btStridingMeshInterface, calcAabb: boolean);
    get_btStridingMeshInterface(): class;	set_btStridingMeshInterface(value: class): class;
    get_btStridingMeshInterface(): class;	set_btStridingMeshInterface(value: class): class;
    localGetSupportingVertex(vec: btVector3): btVector3;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    getName(): string;
    getNumVertices(): number;
    getNumEdges(): number;
    getEdge(i: number, pa: btVector3, pb: btVector3): void;
    getVertex(i: number, vtx: btVector3): void;
    getNumPlanes(): number;
    getPlane(planeNormal: btVector3, planeSupport: btVector3, i: number): void;
    isInside(pt: btVector3, tolerance: number): boolean;
    setLocalScaling(scaling: btVector3): void;
    getLocalScaling(): btVector3;
    calculatePrincipalAxisTransform(principal: btTransform, inertia: btVector3, volume: number): void;
  }
}
