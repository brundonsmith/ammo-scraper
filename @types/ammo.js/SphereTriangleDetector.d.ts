declare module Ammo {
  declare class SphereTriangleDetector {
    constructor(sphere: btSphereShape, triangle: btTriangleShape, contactBreakingThreshold: number);


    collide(sphereCenter: btVector3, point: btVector3, resultNormal: btVector3, depth: number, timeOfImpact: number, contactBreakingThreshold: number): boolean;
    getClosestPoints(input: ClosestPointInput, output: Result, debugDraw: btIDebugDraw, swapResults: boolean): void;
  }
}
