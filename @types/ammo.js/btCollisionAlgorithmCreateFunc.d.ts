declare module Ammo {
  declare class btCollisionAlgorithmCreateFunc {
    constructor();
    CreateCollisionAlgorithm(o: btCollisionAlgorithmConstructionInf, body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper): btCollisionAlgorithm;
    get_m_swapped(): boolean;	set_m_swapped(value: boolean): boolean;
  }
}
