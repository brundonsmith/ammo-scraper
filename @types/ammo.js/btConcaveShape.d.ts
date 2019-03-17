declare module Ammo {
  declare class btConcaveShape {
    constructor();
    constructor();
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    getMargin(): number;
    setMargin(collisionMargin: number): void;
  }
}
