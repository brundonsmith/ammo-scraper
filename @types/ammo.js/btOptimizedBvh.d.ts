declare module Ammo {
  declare class btOptimizedBvh {
    constructor();
    constructor();
    build(triangles: btStridingMeshInterface, useQuantizedAabbCompression: boolean, bvhAabbMin: btVector3, bvhAabbMax: btVector3): void;
    refit(triangles: btStridingMeshInterface, aabbMin: btVector3, aabbMax: btVector3): void;
    refitPartial(triangles: btStridingMeshInterface, aabbMin: btVector3, aabbMax: btVector3): void;
    updateBvhNodes(meshInterface: btStridingMeshInterface, firstNode: number, endNode: number, index: number): void;
    serializeInPlace(o_alignedDataBuffer: void, e: i_dataBufferSiz, i_swapEndian: boolean): boolean;
    get_btOptimizedBvh(): static;	set_btOptimizedBvh(value: static): static;
  }
}
