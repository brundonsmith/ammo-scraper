declare module Ammo {
  declare class btStaticPlaneShape {
    constructor();
    constructor(planeNormal: btVector3, planeConstant: number);
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    setLocalScaling(scaling: btVector3): void;
    getLocalScaling(): btVector3;
    getPlaneNormal(): btVector3;
    getPlaneConstant(): number;
    getName(): string;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
