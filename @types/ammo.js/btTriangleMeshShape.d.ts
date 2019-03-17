declare module Ammo {
  declare class btTriangleMeshShape {
    constructor();


    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getLocalAabbMax(): btVector3;
    getLocalAabbMin(): btVector3;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getMeshInterface(): btStridingMeshInterface;
    getName(): string;
    getMeshInterface(): btStridingMeshInterface;
    getLocalScaling(): btVector3;
    localGetSupportingVertex(vec: btVector3): btVector3;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    recalcLocalAabb(): void;
    setLocalScaling(scaling: btVector3): void;
  }
}
