declare module Ammo {
  declare class btTriangleIndexVertexMaterialArray {
    constructor();
    constructor();
    constructor(numTriangles: number, triangleIndexBase: number, triangleIndexStride: number, numVertices: number, vertexBase: number, vertexStride: number, numMaterials: number, materialBase: string, materialStride: number, triangleMaterialsBase: number, materialIndexStride: number);


    addMaterialProperties(mat: btMaterialProperties, triangleType: PHY_ScalarType): void;
    getLockedMaterialBase(materialBase: string, numMaterials: number, materialType: PHY_ScalarType, materialStride: number, triangleMaterialBase: string, numTriangles: number, triangleMaterialStride: number, triangleType: PHY_ScalarType, subpart: number): void;
    getLockedReadOnlyMaterialBase(materialBase: string, numMaterials: number, materialType: PHY_ScalarType, materialStride: number, triangleMaterialBase: string, numTriangles: number, triangleMaterialStride: number, triangleType: PHY_ScalarType, subpart: number): void;
  }
}
