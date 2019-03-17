declare module Ammo {
  declare class btDiscreteCollisionDetectorInterface {
    getClosestPoints(input: ClosestPointInput, output: Result, debugDraw: btIDebugDraw, swapResults: boolean): void;
  }
}
