declare module Ammo {
  declare class SphereTriangleDetector {
    getClosestPoints(input: ClosestPointInput, output: Result, debugDraw: btIDebugDraw, swapResults: boolean): void;
    constructor(sphere: btSphereShape, triangle: btTriangleShape, contactBreakingThreshold: number);
    collide(sphereCenter: btVector3, point: btVector3, resultNormal: btVector3, depth: number, timeOfImpact: number, contactBreakingThreshold: number): boolean;
  }
}
