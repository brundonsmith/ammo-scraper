declare module Ammo {
  declare class btMultimaterialTriangleMeshShape {
    constructor();
    constructor(meshInterface: btStridingMeshInterface, useQuantizedAabbCompression: boolean, buildBvh: boolean);
    constructor(meshInterface: btStridingMeshInterface, useQuantizedAabbCompression: boolean, bvhAabbMin: btVector3, bvhAabbMax: btVector3, buildBvh: boolean);


    getName(): string;
    getMaterialProperties(partID: number, triIndex: number): btMaterial;
  }
}
