declare module Ammo {
  declare class btMultiSphereShape {
    constructor();
    constructor(positions: btVector3, radi: number, numSpheres: number);


    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    calculateSerializeBufferSize(): number;
    getSphereCount(): number;
    getSpherePosition(index: number): btVector3;
    getSphereRadius(index: number): number;
    getName(): string;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
