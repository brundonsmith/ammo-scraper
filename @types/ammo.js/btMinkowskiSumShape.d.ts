declare module Ammo {
  declare class btMinkowskiSumShape {
    constructor();
    constructor(shapeA: btConvexShape, shapeB: btConvexShape);
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    setTransformA(transA: btTransform): void;
    setTransformB(transB: btTransform): void;
    getTransformA(): btTransform;
    GetTransformB(): btTransform;
    getMargin(): number;
    getShapeA(): btConvexShape;
    getShapeB(): btConvexShape;
    getName(): string;
  }
}
