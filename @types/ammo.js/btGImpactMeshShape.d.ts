declare module Ammo {
  declare class btGImpactMeshShape {
    constructor(meshInterface: btStridingMeshInterface);


    calculateSerializeBufferSize(): number;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    childrenHasTransform(): boolean;
    getMeshPart(index: number): btGImpactMeshShapePart;
    getMeshPart(index: number): btGImpactMeshShapePart;
    getBulletTriangle(prim_index: number, triangle: btTriangleShapeEx): void;
    getName(): string;
    getGImpactShapeType(): eGIMPACT_SHAPE_TYPE;
    getMeshInterface(): btStridingMeshInterface;
    getPrimitiveManager(): btPrimitiveManagerBase;
    getNumChildShapes(): number;
    getMeshPartCount(): number;
    getChildTransform(index: number): btTransform;
    getChildShape(index: number): btCollisionShape;
    getMeshInterface(): btStridingMeshInterface;
    getBulletTetrahedron(prim_index: number, tetrahedron: btTetrahedronShapeEx): void;
    getChildShape(index: number): btCollisionShape;
    getChildAabb(child_index: number, t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    lockChildShapes(): void;
    needsRetrieveTetrahedrons(): boolean;
    needsRetrieveTriangles(): boolean;
    postUpdate(): void;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    processAllTrianglesRay(callback: btTriangleCallback, rayFrom: btVector3, rayTo: btVector3): void;
    rayTest(rayFrom: btVector3, rayTo: btVector3, resultCallback: btCollisionWorld_RayResultCallback): void;
    setMargin(margin: number): void;
    setChildTransform(index: number, transform: btTransform): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    setLocalScaling(scaling: btVector3): void;
    unlockChildShapes(): void;
  }
}
