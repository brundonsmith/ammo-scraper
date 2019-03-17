declare module Ammo {
  declare class btConvexSeparatingDistanceUtil {
    constructor(boundingRadiusA: number, boundingRadiusB: number);


    getConservativeSeparatingDistance(): number;
    initSeparatingDistance(separatingVector: btVector3, separatingDistance: number, transA: btTransform, transB: btTransform): void;
    updateSeparatingDistance(transA: btTransform, transB: btTransform): void;
  }
}
