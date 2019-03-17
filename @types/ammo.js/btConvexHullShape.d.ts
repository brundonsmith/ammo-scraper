declare module Ammo {
  declare class btConvexHullShape {
    constructor();
    constructor(points: number, numPoints: number, stride: number);


    addPoint(point: btVector3, recalculateLocalAabb: boolean): void;
    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calculateSerializeBufferSize(): number;
    getPoints(): btVector3;
    getScaledPoint(i: number): btVector3;
    getNumPoints(): number;
    getPlane(planeNormal: btVector3, planeSupport: btVector3, i: number): void;
    getNumPlanes(): number;
    getUnscaledPoints(): btVector3;
    getUnscaledPoints(): btVector3;
    getVertex(i: number, vtx: btVector3): void;
    getNumVertices(): number;
    getNumEdges(): number;
    getEdge(i: number, pa: btVector3, pb: btVector3): void;
    getName(): string;
    isInside(pt: btVector3, tolerance: number): boolean;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    localGetSupportingVertex(vec: btVector3): btVector3;
    optimizeConvexHull(): void;
    project(trans: btTransform, dir: btVector3, minProj: number, maxProj: number, witnesPtMin: btVector3, witnesPtMax: btVector3): void;
    setLocalScaling(scaling: btVector3): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
