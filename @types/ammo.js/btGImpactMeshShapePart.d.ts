declare module Ammo {
  declare class btGImpactMeshShapePart {
    constructor();
    constructor(meshInterface: btStridingMeshInterface, part: number);


    childrenHasTransform(): boolean;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getLocalScaling(): btVector3;
    getNumChildShapes(): number;
    getChildShape(index: number): btCollisionShape;
    getChildShape(index: number): btCollisionShape;
    getChildTransform(index: number): btTransform;
    getMargin(): number;
    getPrimitiveManager(): btPrimitiveManagerBase;
    getTrimeshPrimitiveManager(): TrimeshPrimitiveManager;
    getGImpactShapeType(): eGIMPACT_SHAPE_TYPE;
    getName(): string;
    getPart(): number;
    getVertex(vertex_index: number, vertex: btVector3): void;
    getVertexCount(): number;
    getBulletTriangle(prim_index: number, triangle: btTriangleShapeEx): void;
    getBulletTetrahedron(prim_index: number, tetrahedron: btTetrahedronShapeEx): void;
    lockChildShapes(): void;
    needsRetrieveTetrahedrons(): boolean;
    needsRetrieveTriangles(): boolean;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    processAllTrianglesRay(callback: btTriangleCallback, rayFrom: btVector3, rayTo: btVector3): void;
    setMargin(margin: number): void;
    setChildTransform(index: number, transform: btTransform): void;
    setLocalScaling(scaling: btVector3): void;
    unlockChildShapes(): void;
  }
}
