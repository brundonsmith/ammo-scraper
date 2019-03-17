declare module Ammo {
  declare class btConcaveShape {
    constructor();
    constructor();


    getMargin(): number;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    setMargin(collisionMargin: number): void;
  }
}
