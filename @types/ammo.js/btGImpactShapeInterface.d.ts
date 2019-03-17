declare module Ammo {
  declare class btGImpactShapeInterface {
    constructor();


    childrenHasTransform(): boolean;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getChildTransform(index: number): btTransform;
    getLocalBox(): btAABB;
    getShapeType(): number;
    getChildShape(index: number): btCollisionShape;
    getLocalScaling(): btVector3;
    getChildShape(index: number): btCollisionShape;
    getChildAabb(child_index: number, t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getPrimitiveTriangle(index: number, triangle: btPrimitiveTriangle): void;
    getBulletTetrahedron(prim_index: number, tetrahedron: btTetrahedronShapeEx): void;
    getGImpactShapeType(): eGIMPACT_SHAPE_TYPE;
    getBoxSet(): btGImpactBoxSet;
    getBulletTriangle(prim_index: number, triangle: btTriangleShapeEx): void;
    getPrimitiveManager(): btPrimitiveManagerBase;
    getNumChildShapes(): number;
    hasBoxSet(): boolean;
    lockChildShapes(): void;
    needsRetrieveTriangles(): boolean;
    needsRetrieveTetrahedrons(): boolean;
    postUpdate(): void;
    processAllTrianglesRay(k: btTriangleCallbac, 3: btVector, 3: btVector): void;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    rayTest(rayFrom: btVector3, rayTo: btVector3, resultCallback: btCollisionWorld_RayResultCallback): void;
    setMargin(margin: number): void;
    setLocalScaling(scaling: btVector3): void;
    setChildTransform(index: number, transform: btTransform): void;
    updateBound(): void;
    unlockChildShapes(): void;
  }
}
