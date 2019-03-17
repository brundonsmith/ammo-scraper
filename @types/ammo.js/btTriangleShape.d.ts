declare module Ammo {
  declare class btTriangleShape {
    constructor(p0: btVector3, p1: btVector3, p2: btVector3);
    constructor();
    constructor();

    get_m_vertices1(): btVector3;	set_m_vertices1(value: btVector3): btVector3;

    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calcNormal(normal: btVector3): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getPreferredPenetrationDirection(index: number, penetrationVector: btVector3): void;
    getVertexPtr(index: number): btVector3;
    getVertexPtr(index: number): btVector3;
    getNumVertices(): number;
    getVertex(index: number, vert: btVector3): void;
    getNumPlanes(): number;
    getNumEdges(): number;
    getPlaneEquation(i: number, planeNormal: btVector3, planeSupport: btVector3): void;
    getEdge(i: number, pa: btVector3, pb: btVector3): void;
    getNumPreferredPenetrationDirections(): number;
    getName(): string;
    getPlane(planeNormal: btVector3, planeSupport: btVector3, i: number): void;
    isInside(pt: btVector3, tolerance: number): boolean;
    localGetSupportingVertexWithoutMargin(dir: btVector3): btVector3;
  }
}
