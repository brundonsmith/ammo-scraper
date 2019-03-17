declare module Ammo {
  declare class btConvexSeparatingDistanceUtil {
    constructor(boundingRadiusA: number, boundingRadiusB: number);
    getConservativeSeparatingDistance(): number;
    updateSeparatingDistance(transA: btTransform, transB: btTransform): void;
    initSeparatingDistance(separatingVector: btVector3, separatingDistance: number, transA: btTransform, transB: btTransform): void;
  }
}
