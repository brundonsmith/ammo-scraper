declare module Ammo {
  declare class btCollisionWorldImporter {
    constructor(world: btCollisionWorld);

    get_class(): virtual;	set_class(value: virtual): virtual;
    get_class(): virtual;	set_class(value: virtual): virtual;
    get_class(): virtual;	set_class(value: virtual): virtual;
    get_class(): virtual;	set_class(value: virtual): virtual;
    get_class(): virtual;	set_class(value: virtual): virtual;

    createMeshInterface(meshData: btStridingMeshInterfaceData): btTriangleIndexVertexArray;
    createTriangleInfoMap(): btTriangleInfoMap;
    createStridingMeshInterfaceData(interfaceData: btStridingMeshInterfaceData): btStridingMeshInterfaceData;
    createConvexTriangleMeshShape(trimesh: btStridingMeshInterface): btCollisionShape;
    createBvhTriangleMeshShape(trimesh: btStridingMeshInterface, bvh: btOptimizedBvh): btBvhTriangleMeshShape;
    createOptimizedBvh(): btOptimizedBvh;
    createConeShapeZ(radius: number, height: number): btCollisionShape;
    createConeShapeY(radius: number, height: number): btCollisionShape;
    createConeShapeX(radius: number, height: number): btCollisionShape;
    createCylinderShapeZ(radius: number, height: number): btCollisionShape;
    createCollisionObject(startTransform: btTransform, shape: btCollisionShape, bodyName: string): btCollisionObject;
    createPlaneShape(planeNormal: btVector3, planeConstant: number): btCollisionShape;
    createBoxShape(halfExtents: btVector3): btCollisionShape;
    createSphereShape(radius: number): btCollisionShape;
    convertAllObjects(arrays: btBulletSerializedArrays): boolean;
    createCapsuleShapeY(radius: number, height: number): btCollisionShape;
    createCapsuleShapeZ(radius: number, height: number): btCollisionShape;
    createCylinderShapeX(radius: number, height: number): btCollisionShape;
    createCylinderShapeY(radius: number, height: number): btCollisionShape;
    createCapsuleShapeX(radius: number, height: number): btCollisionShape;
    deleteAllData(): void;
    getCollisionShapeByName(name: string): btCollisionShape;
    getTriangleInfoMapByIndex(index: number): btTriangleInfoMap;
    getNumTriangleInfoMaps(): number;
    getBvhByIndex(index: number): btOptimizedBvh;
    getNumBvhs(): number;
    getCollisionObjectByName(name: string): btCollisionObject;
    getNumRigidBodies(): number;
    getCollisionShapeByIndex(index: number): btCollisionShape;
    getNumCollisionShapes(): number;
    getVerboseMode(): number;
    getNameForPointer(ptr: void): string;
    getRigidBodyByIndex(index: number): btCollisionObject;
    setVerboseMode(verboseMode: number): void;
  }
}
