declare module Ammo {
  declare class btInternalTriangleIndexCallback {
    internalProcessTriangleIndex(triangle: btVector3, partId: number, triangleIndex: number): void;
  }
}
