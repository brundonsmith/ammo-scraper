declare module Ammo {
  declare class btCapsuleShape {
    constructor();
    constructor(radius: number, height: number);
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    setMargin(collisionMargin: number): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getName(): string;
    getUpAxis(): number;
    getRadius(): number;
    getHalfHeight(): number;
    setLocalScaling(scaling: btVector3): void;
    getAnisotropicRollingFrictionDirection(): btVector3;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    deSerializeFloat(btCapsuleShapeData: struct): void;
  }
}
