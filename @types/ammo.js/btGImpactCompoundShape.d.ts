declare module Ammo {
  declare class btGImpactCompoundShape {
    constructor(children_has_transform: boolean);


    addChildShape(localTransform: btTransform, shape: btCollisionShape): void;
    addChildShape(shape: btCollisionShape): void;
    childrenHasTransform(): boolean;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getGImpactShapeType(): eGIMPACT_SHAPE_TYPE;
    getPrimitiveManager(): btPrimitiveManagerBase;
    getChildShape(index: number): btCollisionShape;
    getChildShape(index: number): btCollisionShape;
    getCompoundPrimitiveManager(): CompoundPrimitiveManager;
    getChildTransform(index: number): btTransform;
    getName(): string;
    getNumChildShapes(): number;
    getBulletTetrahedron(prim_index: number, tetrahedron: btTetrahedronShapeEx): void;
    getBulletTriangle(prim_index: number, triangle: btTriangleShapeEx): void;
    getChildAabb(child_index: number, t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    needsRetrieveTetrahedrons(): boolean;
    needsRetrieveTriangles(): boolean;
    setChildTransform(index: number, transform: btTransform): void;
  }
}
