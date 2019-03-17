declare module Ammo {
  declare class btEmptyShape {
    constructor();
    constructor();


    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getLocalScaling(): btVector3;
    getName(): string;
    processAllTriangles(k: btTriangleCallbac, 3: btVector, 3: btVector): void;
    setLocalScaling(scaling: btVector3): void;
  }
}
