declare module Ammo {
  declare class btGImpactShapeInterface {
    constructor();
    updateBound(): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    postUpdate(): void;
    getLocalBox(): btAABB;
    getShapeType(): number;
    setLocalScaling(scaling: btVector3): void;
    getLocalScaling(): btVector3;
    setMargin(margin: number): void;
    rayTest(rayFrom: btVector3, rayTo: btVector3, resultCallback: btCollisionWorld_RayResultCallback): void;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    processAllTrianglesRay(k: btTriangleCallbac, 3: btVector, 3: btVector): void;
    getGImpactShapeType(): eGIMPACT_SHAPE_TYPE;
    getBoxSet(): btGImpactBoxSet;
    hasBoxSet(): boolean;
    getPrimitiveManager(): btPrimitiveManagerBase;
    getNumChildShapes(): number;
    childrenHasTransform(): boolean;
    needsRetrieveTriangles(): boolean;
    needsRetrieveTetrahedrons(): boolean;
    getBulletTriangle(prim_index: number, triangle: btTriangleShapeEx): void;
    getBulletTetrahedron(prim_index: number, tetrahedron: btTetrahedronShapeEx): void;
    lockChildShapes(): void;
    unlockChildShapes(): void;
    getPrimitiveTriangle(index: number, triangle: btPrimitiveTriangle): void;
    getChildAabb(child_index: number, t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getChildShape(index: number): btCollisionShape;
    getChildShape(index: number): btCollisionShape;
    getChildTransform(index: number): btTransform;
    setChildTransform(index: number, transform: btTransform): void;
  }
}
