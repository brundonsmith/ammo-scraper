declare module Ammo {
  declare class btScaledBvhTriangleMeshShape {
    constructor();
    constructor(childShape: btBvhTriangleMeshShape, localScaling: btVector3);


    calculateSerializeBufferSize(): number;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getLocalScaling(): btVector3;
    getChildShape(): btBvhTriangleMeshShape;
    getChildShape(): btBvhTriangleMeshShape;
    getName(): string;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    setLocalScaling(scaling: btVector3): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
