declare module Ammo {
  declare class btEmptyShape {
    constructor();
    constructor();
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    setLocalScaling(scaling: btVector3): void;
    getLocalScaling(): btVector3;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getName(): string;
    processAllTriangles(k: btTriangleCallbac, 3: btVector, 3: btVector): void;
  }
}
