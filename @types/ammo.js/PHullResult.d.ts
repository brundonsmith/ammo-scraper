declare module Ammo {
  declare class PHullResult {
    constructor(d: voi);
    get_mVcount(): number;	set_mVcount(value: number): number;
    get_mIndexCount(): number;	set_mIndexCount(value: number): number;
    get_mFaceCount(): number;	set_mFaceCount(value: number): number;
    get_mVertices(): btVector3;	set_mVertices(value: btVector3): btVector3;
    get_m_Indices(): TUIntArray;	set_m_Indices(value: TUIntArray): TUIntArray;
  }
}
