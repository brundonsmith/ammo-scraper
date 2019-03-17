declare module Ammo {
  declare class btCollisionAlgorithmCreateFunc {
    constructor();

    get_m_swapped(): boolean;	set_m_swapped(value: boolean): boolean;

    CreateCollisionAlgorithm(o: btCollisionAlgorithmConstructionInf, body0Wrap: btCollisionObjectWrapper, body1Wrap: btCollisionObjectWrapper): btCollisionAlgorithm;
  }
}
