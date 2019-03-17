declare module Ammo {
  declare class btSdfCollisionShapeInternalData {
    constructor();

    get_m_localScaling(): btVector3;	set_m_localScaling(value: btVector3): btVector3;
    get_m_margin(): number;	set_m_margin(value: number): number;
    get_m_sdf(): btMiniSDF;	set_m_sdf(value: btMiniSDF): btMiniSDF;

  }
}
