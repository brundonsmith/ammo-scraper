declare module Ammo {
  declare class HullDesc {
    constructor(d: voi);
    constructor(flag: HullFlag, vcount: number, vertices: btVector3, stride: number);
    HasHullFlag(flag: HullFlag): boolean;
    SetHullFlag(flag: HullFlag): void;
    ClearHullFlag(flag: HullFlag): void;
    get_mFlags(): number;	set_mFlags(value: number): number;
    get_mVcount(): number;	set_mVcount(value: number): number;
    get_mVertices(): btVector3;	set_mVertices(value: btVector3): btVector3;
    get_mVertexStride(): number;	set_mVertexStride(value: number): number;
    get_mNormalEpsilon(): number;	set_mNormalEpsilon(value: number): number;
    get_mMaxVertices(): number;	set_mMaxVertices(value: number): number;
    get_mMaxFaces(): number;	set_mMaxFaces(value: number): number;
  }
}
