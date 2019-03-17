declare module Ammo {
  declare class btTriangleBuffer {


    clearBuffer(): void;
    getNumTriangles(): number;
    getTriangle(index: number): btTriangle;
    processTriangle(triangle: btVector3, partId: number, triangleIndex: number): void;
  }
}
