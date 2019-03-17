declare module Ammo {
  declare class btConeShape {
    constructor(radius: number, height: number);
    constructor();


    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    calculateSerializeBufferSize(): number;
    getRadius(): number;
    getHeight(): number;
    getName(): string;
    getConeUpIndex(): number;
    getAnisotropicRollingFrictionDirection(): btVector3;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    localGetSupportingVertex(vec: btVector3): btVector3;
    setRadius(radius: number): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    setLocalScaling(scaling: btVector3): void;
    setConeUpIndex(upIndex: number): void;
    setHeight(height: number): void;
  }
}
