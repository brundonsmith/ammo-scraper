declare module Ammo {
  declare class btMultiSphereShape {
    constructor();
    constructor(positions: btVector3, radi: number, numSpheres: number);
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    getSphereCount(): number;
    getSpherePosition(index: number): btVector3;
    getSphereRadius(index: number): number;
    getName(): string;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
