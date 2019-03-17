declare module Ammo {
  declare class btCapsuleShape {
    constructor();
    constructor(radius: number, height: number);


    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    calculateSerializeBufferSize(): number;
    deSerializeFloat(btCapsuleShapeData: struct): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getName(): string;
    getRadius(): number;
    getHalfHeight(): number;
    getAnisotropicRollingFrictionDirection(): btVector3;
    getUpAxis(): number;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    setMargin(collisionMargin: number): void;
    setLocalScaling(scaling: btVector3): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
