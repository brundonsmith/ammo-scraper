declare module Ammo {
  declare class btCylinderShape {
    constructor();
    constructor(halfExtents: btVector3);


    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calculateSerializeBufferSize(): number;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getHalfExtentsWithoutMargin(): btVector3;
    getUpAxis(): number;
    getAnisotropicRollingFrictionDirection(): btVector3;
    getRadius(): number;
    getName(): string;
    getHalfExtentsWithMargin(): btVector3;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    localGetSupportingVertex(vec: btVector3): btVector3;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    setLocalScaling(scaling: btVector3): void;
    setMargin(collisionMargin: number): void;
  }
}
