declare module Ammo {
  declare class btSdfCollisionShape {
    constructor();


    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getLocalScaling(): btVector3;
    getName(): string;
    getMargin(): number;
    initializeSDF(sdfData: string, sizeInBytes: number): boolean;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    queryPoint(ptInSDF: btVector3, distOut: number, normal: btVector3): boolean;
    setLocalScaling(scaling: btVector3): void;
    setMargin(margin: number): void;
  }
}
