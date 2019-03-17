declare module Ammo {
  declare class btScaledBvhTriangleMeshShape {
    constructor();
    constructor(childShape: btBvhTriangleMeshShape, localScaling: btVector3);
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    setLocalScaling(scaling: btVector3): void;
    getLocalScaling(): btVector3;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    getChildShape(): btBvhTriangleMeshShape;
    getChildShape(): btBvhTriangleMeshShape;
    getName(): string;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
