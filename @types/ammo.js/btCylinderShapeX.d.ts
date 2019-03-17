declare module Ammo {
  declare class btCylinderShapeX {
    constructor();
    constructor(halfExtents: btVector3);
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    getName(): string;
    getRadius(): number;
  }
}
