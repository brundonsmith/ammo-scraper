declare module Ammo {
  declare class btGImpactMeshShapePart {
    constructor();
    constructor(meshInterface: btStridingMeshInterface, part: number);
    childrenHasTransform(): boolean;
    lockChildShapes(): void;
    unlockChildShapes(): void;
    getNumChildShapes(): number;
    getChildShape(index: number): btCollisionShape;
    getChildShape(index: number): btCollisionShape;
    getChildTransform(index: number): btTransform;
    setChildTransform(index: number, transform: btTransform): void;
    getPrimitiveManager(): btPrimitiveManagerBase;
    getTrimeshPrimitiveManager(): TrimeshPrimitiveManager;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getName(): string;
    getGImpactShapeType(): eGIMPACT_SHAPE_TYPE;
    needsRetrieveTriangles(): boolean;
    needsRetrieveTetrahedrons(): boolean;
    getBulletTriangle(prim_index: number, triangle: btTriangleShapeEx): void;
    getBulletTetrahedron(prim_index: number, tetrahedron: btTetrahedronShapeEx): void;
    getVertexCount(): number;
    getVertex(vertex_index: number, vertex: btVector3): void;
    setMargin(margin: number): void;
    getMargin(): number;
    setLocalScaling(scaling: btVector3): void;
    getLocalScaling(): btVector3;
    getPart(): number;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    processAllTrianglesRay(callback: btTriangleCallback, rayFrom: btVector3, rayTo: btVector3): void;
  }
}
