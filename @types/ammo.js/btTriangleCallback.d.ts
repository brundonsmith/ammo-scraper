declare module Ammo {
  declare class btTriangleCallback {


    processTriangle(triangle: btVector3, partId: number, triangleIndex: number): void;
  }
}
