declare module Ammo {
  declare class btHeightfieldTerrainShape {
    constructor();
    constructor(heightStickWidth: number, heightStickLength: number, heightfieldData: void, maxHeight: number, upAxis: number, useFloatData: boolean, flipQuadEdges: boolean);
    constructor(heightStickWidth: number, heightStickLength: number, heightfieldData: void, heightScale: number, minHeight: number, maxHeight: number, upAxis: number, heightDataType: PHY_ScalarType, flipQuadEdges: boolean);


    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getName(): string;
    getLocalScaling(): btVector3;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    setUseZigzagSubdivision(useZigzagSubdivision: boolean): void;
    setLocalScaling(scaling: btVector3): void;
    setUseDiamondSubdivision(useDiamondSubdivision: boolean): void;
  }
}
