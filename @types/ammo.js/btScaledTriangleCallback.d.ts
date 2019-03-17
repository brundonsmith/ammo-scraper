declare module Ammo {
  declare class btScaledTriangleCallback {
    constructor(originalCallback: btTriangleCallback, localScaling: btVector3);


    processTriangle(triangle: btVector3, partId: number, triangleIndex: number): void;
  }
}
