declare module Ammo {
  declare class btCylinderShape {
    constructor();
    getHalfExtentsWithMargin(): btVector3;
    getHalfExtentsWithoutMargin(): btVector3;
    constructor(halfExtents: btVector3);
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    setMargin(collisionMargin: number): void;
    localGetSupportingVertex(vec: btVector3): btVector3;
    getUpAxis(): number;
    getAnisotropicRollingFrictionDirection(): btVector3;
    getRadius(): number;
    setLocalScaling(scaling: btVector3): void;
    getName(): string;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
