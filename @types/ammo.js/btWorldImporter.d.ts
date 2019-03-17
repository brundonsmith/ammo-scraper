declare module Ammo {
  declare class btWorldImporter {
    constructor(world: btDynamicsWorld);

    get_class(): virtual;	set_class(value: virtual): virtual;
    get_class(): virtual;	set_class(value: virtual): virtual;
    get_class(): virtual;	set_class(value: virtual): virtual;
    get_class(): virtual;	set_class(value: virtual): virtual;
    get_class(): virtual;	set_class(value: virtual): virtual;

    createGeneric6DofConstraint(rbB: btRigidBody, frameInB: btTransform, useLinearReferenceFrameB: boolean): btGeneric6DofConstraint;
    createGeneric6DofConstraint(rbA: btRigidBody, rbB: btRigidBody, frameInA: btTransform, frameInB: btTransform, useLinearReferenceFrameA: boolean): btGeneric6DofConstraint;
    createConeTwistConstraint(rbA: btRigidBody, rbAFrame: btTransform): btConeTwistConstraint;
    createConeTwistConstraint(rbA: btRigidBody, rbB: btRigidBody, rbAFrame: btTransform, rbBFrame: btTransform): btConeTwistConstraint;
    createHingeConstraint(rbA: btRigidBody, rbAFrame: btTransform, useReferenceFrameA: boolean): btHingeConstraint;
    createHingeConstraint(rbA: btRigidBody, rbB: btRigidBody, rbAFrame: btTransform, rbBFrame: btTransform, useReferenceFrameA: boolean): btHingeConstraint;
    createPoint2PointConstraint(rbA: btRigidBody, pivotInA: btVector3): btPoint2PointConstraint;
    createPoint2PointConstraint(rbA: btRigidBody, rbB: btRigidBody, pivotInA: btVector3, pivotInB: btVector3): btPoint2PointConstraint;
    createTriangleInfoMap(): btTriangleInfoMap;
    createOptimizedBvh(): btOptimizedBvh;
    createMeshInterface(meshData: btStridingMeshInterfaceData): btTriangleIndexVertexArray;
    createGearConstraint(rbA: btRigidBody, rbB: btRigidBody, axisInA: btVector3, axisInB: btVector3, ratio: number): btGearConstraint;
    createSliderConstraint(rbB: btRigidBody, frameInB: btTransform, useLinearReferenceFrameA: boolean): btSliderConstraint;
    createSliderConstraint(rbA: btRigidBody, rbB: btRigidBody, frameInA: btTransform, frameInB: btTransform, useLinearReferenceFrameA: boolean): btSliderConstraint;
    createGeneric6DofSpring2Constraint(rbA: btRigidBody, rbB: btRigidBody, frameInA: btTransform, frameInB: btTransform, rotateOrder: number): btGeneric6DofSpring2Constraint;
    createRigidBody(isDynamic: boolean, mass: number, startTransform: btTransform, shape: btCollisionShape, bodyName: string): btRigidBody;
    createCollisionObject(startTransform: btTransform, shape: btCollisionShape, bodyName: string): btCollisionObject;
    createPlaneShape(planeNormal: btVector3, planeConstant: number): btCollisionShape;
    createBoxShape(halfExtents: btVector3): btCollisionShape;
    createSphereShape(radius: number): btCollisionShape;
    createCapsuleShapeX(radius: number, height: number): btCollisionShape;
    createCapsuleShapeY(radius: number, height: number): btCollisionShape;
    createCapsuleShapeZ(radius: number, height: number): btCollisionShape;
    createCylinderShapeX(radius: number, height: number): btCollisionShape;
    createStridingMeshInterfaceData(interfaceData: btStridingMeshInterfaceData): btStridingMeshInterfaceData;
    createCylinderShapeZ(radius: number, height: number): btCollisionShape;
    createConeShapeX(radius: number, height: number): btCollisionShape;
    createConeShapeY(radius: number, height: number): btCollisionShape;
    createConeShapeZ(radius: number, height: number): btCollisionShape;
    createGeneric6DofSpringConstraint(rbA: btRigidBody, rbB: btRigidBody, frameInA: btTransform, frameInB: btTransform, useLinearReferenceFrameA: boolean): btGeneric6DofSpringConstraint;
    createBvhTriangleMeshShape(trimesh: btStridingMeshInterface, bvh: btOptimizedBvh): btBvhTriangleMeshShape;
    createConvexTriangleMeshShape(trimesh: btStridingMeshInterface): btCollisionShape;
    createGimpactShape(trimesh: btStridingMeshInterface): btGImpactMeshShape;
    createCylinderShapeY(radius: number, height: number): btCollisionShape;
    deleteAllData(): void;
    getNumConstraints(): number;
    getNameForPointer(ptr: void): string;
    getRigidBodyByName(name: string): btRigidBody;
    getCollisionShapeByName(name: string): btCollisionShape;
    getTriangleInfoMapByIndex(index: number): btTriangleInfoMap;
    getNumTriangleInfoMaps(): number;
    getBvhByIndex(index: number): btOptimizedBvh;
    getNumBvhs(): number;
    getVerboseMode(): number;
    getConstraintByName(name: string): btTypedConstraint;
    getRigidBodyByIndex(index: number): btCollisionObject;
    getNumRigidBodies(): number;
    getCollisionShapeByIndex(index: number): btCollisionShape;
    getNumCollisionShapes(): number;
    getImporterFlags(): number;
    getConstraintByIndex(index: number): btTypedConstraint;
    setImporterFlags(importerFlags: number): void;
    setDynamicsWorldInfo(gravity: btVector3, solverInfo: btContactSolverInfo): void;
    setVerboseMode(verboseMode: number): void;
  }
}
