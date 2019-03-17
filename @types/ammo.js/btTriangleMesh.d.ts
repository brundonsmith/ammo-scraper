declare module Ammo {
  declare class btTriangleMesh {
    constructor(use32bitIndices: boolean, use4componentVertices: boolean);

    get_m_weldingThreshold(): number;	set_m_weldingThreshold(value: number): number;

    addTriangle(vertex0: btVector3, vertex1: btVector3, vertex2: btVector3, removeDuplicateVertices: boolean): void;
    addTriangleIndices(index1: number, index2: number, index3: number): void;
    addIndex(index: number): void;
    findOrAddVertex(vertex: btVector3, removeDuplicateVertices: boolean): number;
    getUse4componentVertices(): boolean;
    getUse32bitIndices(): boolean;
    getNumTriangles(): number;
    preallocateVertices(numverts: number): void;
    preallocateIndices(numindices: number): void;
  }
}
