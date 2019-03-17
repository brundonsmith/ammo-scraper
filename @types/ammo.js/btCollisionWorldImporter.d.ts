declare module Ammo {
  declare class btCollisionWorldImporter {
    constructor(world: btCollisionWorld);
    convertAllObjects(arrays: btBulletSerializedArrays): boolean;
    deleteAllData(): void;
    setVerboseMode(verboseMode: number): void;
    getVerboseMode(): number;
    getNumCollisionShapes(): number;
    getCollisionShapeByIndex(index: number): btCollisionShape;
    getNumRigidBodies(): number;
    getRigidBodyByIndex(index: number): btCollisionObject;
    getNumBvhs(): number;
    getBvhByIndex(index: number): btOptimizedBvh;
    getNumTriangleInfoMaps(): number;
    getTriangleInfoMapByIndex(index: number): btTriangleInfoMap;
    getCollisionShapeByName(name: string): btCollisionShape;
    getCollisionObjectByName(name: string): btCollisionObject;
    getNameForPointer(ptr: void): string;
    createCollisionObject(startTransform: btTransform, shape: btCollisionShape, bodyName: string): btCollisionObject;
    createPlaneShape(planeNormal: btVector3, planeConstant: number): btCollisionShape;
    createBoxShape(halfExtents: btVector3): btCollisionShape;
    createSphereShape(radius: number): btCollisionShape;
    createCapsuleShapeX(radius: number, height: number): btCollisionShape;
    createCapsuleShapeY(radius: number, height: number): btCollisionShape;
    createCapsuleShapeZ(radius: number, height: number): btCollisionShape;
    createCylinderShapeX(radius: number, height: number): btCollisionShape;
    createCylinderShapeY(radius: number, height: number): btCollisionShape;
    createCylinderShapeZ(radius: number, height: number): btCollisionShape;
    createConeShapeX(radius: number, height: number): btCollisionShape;
    createConeShapeY(radius: number, height: number): btCollisionShape;
    createConeShapeZ(radius: number, height: number): btCollisionShape;
    get_class(): virtual;	set_class(value: virtual): virtual;
    createBvhTriangleMeshShape(trimesh: btStridingMeshInterface, bvh: btOptimizedBvh): btBvhTriangleMeshShape;
    createConvexTriangleMeshShape(trimesh: btStridingMeshInterface): btCollisionShape;
    createStridingMeshInterfaceData(interfaceData: btStridingMeshInterfaceData): btStridingMeshInterfaceData;
    get_class(): virtual;	set_class(value: virtual): virtual;
    get_class(): virtual;	set_class(value: virtual): virtual;
    get_class(): virtual;	set_class(value: virtual): virtual;
    get_class(): virtual;	set_class(value: virtual): virtual;
    createMeshInterface(meshData: btStridingMeshInterfaceData): btTriangleIndexVertexArray;
    createOptimizedBvh(): btOptimizedBvh;
    createTriangleInfoMap(): btTriangleInfoMap;
  }
}
