declare module Ammo {
  declare class btSphereShape {
    constructor();
    constructor(radius: number);


    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getMargin(): number;
    getName(): string;
    getRadius(): number;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    localGetSupportingVertex(vec: btVector3): btVector3;
    setUnscaledRadius(radius: number): void;
    setMargin(margin: number): void;
  }
}
