declare module Ammo {
  declare class btGImpactMeshShape {
    constructor(meshInterface: btStridingMeshInterface);
    getMeshInterface(): btStridingMeshInterface;
    getMeshInterface(): btStridingMeshInterface;
    getMeshPartCount(): number;
    getMeshPart(index: number): btGImpactMeshShapePart;
    getMeshPart(index: number): btGImpactMeshShapePart;
    setLocalScaling(scaling: btVector3): void;
    setMargin(margin: number): void;
    postUpdate(): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getPrimitiveManager(): btPrimitiveManagerBase;
    getNumChildShapes(): number;
    childrenHasTransform(): boolean;
    needsRetrieveTriangles(): boolean;
    needsRetrieveTetrahedrons(): boolean;
    getBulletTriangle(prim_index: number, triangle: btTriangleShapeEx): void;
    getBulletTetrahedron(prim_index: number, tetrahedron: btTetrahedronShapeEx): void;
    lockChildShapes(): void;
    unlockChildShapes(): void;
    getChildAabb(child_index: number, t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getChildShape(index: number): btCollisionShape;
    getChildShape(index: number): btCollisionShape;
    getChildTransform(index: number): btTransform;
    setChildTransform(index: number, transform: btTransform): void;
    getGImpactShapeType(): eGIMPACT_SHAPE_TYPE;
    getName(): string;
    rayTest(rayFrom: btVector3, rayTo: btVector3, resultCallback: btCollisionWorld_RayResultCallback): void;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    processAllTrianglesRay(callback: btTriangleCallback, rayFrom: btVector3, rayTo: btVector3): void;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
