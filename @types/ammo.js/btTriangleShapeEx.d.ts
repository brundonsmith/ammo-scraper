declare module Ammo {
  declare class btTriangleShapeEx {
    constructor();
    constructor(p0: btVector3, p1: btVector3, p2: btVector3);
    constructor(other: btTriangleShapeEx);
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    applyTransform(t: btTransform): void;
    buildTriPlane(plane: btVector4): void;
    overlap_test_conservative(other: btTriangleShapeEx): boolean;
  }
}
