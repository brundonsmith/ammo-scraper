declare module Ammo {
  declare class btTriangleMeshShape {
    constructor();
    localGetSupportingVertex(vec: btVector3): btVector3;
    localGetSupportingVertexWithoutMargin(vec: btVector3): btVector3;
    recalcLocalAabb(): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    setLocalScaling(scaling: btVector3): void;
    getLocalScaling(): btVector3;
    getMeshInterface(): btStridingMeshInterface;
    getMeshInterface(): btStridingMeshInterface;
    getLocalAabbMin(): btVector3;
    getLocalAabbMax(): btVector3;
    getName(): string;
  }
}
