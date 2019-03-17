declare module Ammo {
  declare class btSphereShape {
    constructor();
    constructor(radius: number);
    localGetSupportingVertex(vec: btVector3): btVector3;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    batchedUnitVectorGetSupportingVertexWithoutMargin(vectors: btVector3, supportVerticesOut: btVector3, numVectors: number): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getRadius(): number;
    setUnscaledRadius(radius: number): void;
    getName(): string;
    setMargin(margin: number): void;
    getMargin(): number;
  }
}
