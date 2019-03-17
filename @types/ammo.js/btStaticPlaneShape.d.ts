declare module Ammo {
  declare class btStaticPlaneShape {
    constructor();
    constructor(planeNormal: btVector3, planeConstant: number);


    calculateSerializeBufferSize(): number;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getName(): string;
    getLocalScaling(): btVector3;
    getPlaneNormal(): btVector3;
    getPlaneConstant(): number;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    setLocalScaling(scaling: btVector3): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
