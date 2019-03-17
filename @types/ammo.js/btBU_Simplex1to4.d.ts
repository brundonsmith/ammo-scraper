declare module Ammo {
  declare class btBU_Simplex1to4 {
    constructor();
    constructor();
    constructor(pt0: btVector3);
    constructor(pt0: btVector3, pt1: btVector3);
    constructor(pt0: btVector3, pt1: btVector3, pt2: btVector3);
    constructor(pt0: btVector3, pt1: btVector3, pt2: btVector3, pt3: btVector3);
    reset(): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    addVertex(pt: btVector3): void;
    getNumVertices(): number;
    getNumEdges(): number;
    getEdge(i: number, pa: btVector3, pb: btVector3): void;
    getVertex(i: number, vtx: btVector3): void;
    getNumPlanes(): number;
    getPlane(planeNormal: btVector3, planeSupport: btVector3, i: number): void;
    getIndex(i: number): number;
    isInside(pt: btVector3, tolerance: number): boolean;
    getName(): string;
  }
}
