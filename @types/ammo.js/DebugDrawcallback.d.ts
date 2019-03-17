declare module Ammo {
  declare class DebugDrawcallback {
    constructor(debugDrawer: btIDebugDraw, worldTrans: btTransform, color: btVector3);
    internalProcessTriangleIndex(triangle: btVector3, partId: number, triangleIndex: number): void;
    processTriangle(triangle: btVector3, partId: number, triangleIndex: number): void;
  }
}
