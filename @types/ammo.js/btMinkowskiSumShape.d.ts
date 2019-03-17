declare module Ammo {
  declare class btMinkowskiSumShape {
    constructor();
    constructor(shapeA: btConvexShape, shapeB: btConvexShape);


    GetTransformB(): btTransform;
    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getShapeA(): btConvexShape;
    getName(): string;
    getTransformA(): btTransform;
    getShapeB(): btConvexShape;
    getMargin(): number;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    setTransformA(transA: btTransform): void;
    setTransformB(transB: btTransform): void;
  }
}
