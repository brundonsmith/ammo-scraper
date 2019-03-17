declare module Ammo {
  declare class btSdfCollisionShape {
    constructor();
    initializeSDF(sdfData: string, sizeInBytes: number): boolean;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    setLocalScaling(scaling: btVector3): void;
    getLocalScaling(): btVector3;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getName(): string;
    setMargin(margin: number): void;
    getMargin(): number;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    queryPoint(ptInSDF: btVector3, distOut: number, normal: btVector3): boolean;
  }
}
