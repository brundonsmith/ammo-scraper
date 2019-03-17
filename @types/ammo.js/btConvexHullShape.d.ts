declare module Ammo {
  declare class btConvexHullShape {
    constructor();
    constructor(points: number, numPoints: number, stride: number);
    addPoint(point: btVector3, recalculateLocalAabb: boolean): void;
    getUnscaledPoints(): btVector3;
    getUnscaledPoints(): btVector3;
    getPoints(): btVector3;
    optimizeConvexHull(): void;
    getScaledPoint(i: number): btVector3;
    getNumPoints(): number;
    localGetSupportingVertex(vec: btVector3): btVector3;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    project(trans: btTransform, dir: btVector3, minProj: number, maxProj: number, witnesPtMin: btVector3, witnesPtMax: btVector3): void;
    getName(): string;
    getNumVertices(): number;
    getNumEdges(): number;
    getEdge(i: number, pa: btVector3, pb: btVector3): void;
    getVertex(i: number, vtx: btVector3): void;
    getNumPlanes(): number;
    getPlane(planeNormal: btVector3, planeSupport: btVector3, i: number): void;
    isInside(pt: btVector3, tolerance: number): boolean;
    setLocalScaling(scaling: btVector3): void;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
