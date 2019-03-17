declare module Ammo {
  declare class btTriangleBuffer {
    processTriangle(triangle: btVector3, partId: number, triangleIndex: number): void;
    getNumTriangles(): number;
    getTriangle(index: number): btTriangle;
    clearBuffer(): void;
  }
}
