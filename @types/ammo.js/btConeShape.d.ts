declare module Ammo {
  declare class btConeShape {
    constructor();
    constructor(radius: number, height: number);
    localGetSupportingVertex(vec: btVector3): btVector3;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    getRadius(): number;
    getHeight(): number;
    setRadius(radius: number): void;
    setHeight(height: number): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getName(): string;
    setConeUpIndex(upIndex: number): void;
    getConeUpIndex(): number;
    getAnisotropicRollingFrictionDirection(): btVector3;
    setLocalScaling(scaling: btVector3): void;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
