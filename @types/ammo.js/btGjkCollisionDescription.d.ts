declare module Ammo {
  declare class btGjkCollisionDescription {
    constructor();
    get_m_firstDir(): btVector3;	set_m_firstDir(value: btVector3): btVector3;
    get_m_maxGjkIterations(): number;	set_m_maxGjkIterations(value: number): number;
    get_m_maximumDistanceSquared(): number;	set_m_maximumDistanceSquared(value: number): number;
    get_m_gjkRelError2(): number;	set_m_gjkRelError2(value: number): number;
  }
}
