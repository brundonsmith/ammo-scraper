declare module Ammo {
  declare class btHeightfieldTerrainShape {
    constructor();
    constructor(heightStickWidth: number, heightStickLength: number, heightfieldData: void, heightScale: number, minHeight: number, maxHeight: number, upAxis: number, heightDataType: PHY_ScalarType, flipQuadEdges: boolean);
    constructor(heightStickWidth: number, heightStickLength: number, heightfieldData: void, maxHeight: number, upAxis: number, useFloatData: boolean, flipQuadEdges: boolean);
    setUseDiamondSubdivision(useDiamondSubdivision: boolean): void;
    setUseZigzagSubdivision(useZigzagSubdivision: boolean): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    processAllTriangles(callback: btTriangleCallback, aabbMin: btVector3, aabbMax: btVector3): void;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    setLocalScaling(scaling: btVector3): void;
    getLocalScaling(): btVector3;
    getName(): string;
  }
}
