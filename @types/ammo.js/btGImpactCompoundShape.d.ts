declare module Ammo {
  declare class btGImpactCompoundShape {
    constructor(children_has_transform: boolean);
    childrenHasTransform(): boolean;
    getPrimitiveManager(): btPrimitiveManagerBase;
    getCompoundPrimitiveManager(): CompoundPrimitiveManager;
    getNumChildShapes(): number;
    addChildShape(localTransform: btTransform, shape: btCollisionShape): void;
    addChildShape(shape: btCollisionShape): void;
    getChildShape(index: number): btCollisionShape;
    getChildShape(index: number): btCollisionShape;
    getChildAabb(child_index: number, t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getChildTransform(index: number): btTransform;
    setChildTransform(index: number, transform: btTransform): void;
    needsRetrieveTriangles(): boolean;
    needsRetrieveTetrahedrons(): boolean;
    getBulletTriangle(prim_index: number, triangle: btTriangleShapeEx): void;
    getBulletTetrahedron(prim_index: number, tetrahedron: btTetrahedronShapeEx): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getName(): string;
    getGImpactShapeType(): eGIMPACT_SHAPE_TYPE;
  }
}
