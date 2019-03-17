declare module Ammo {
  declare class btBroadphasePair {
    constructor();
    constructor();
    constructor(other: btBroadphasePair);
    constructor(proxy0: btBroadphaseProxy, proxy1: btBroadphaseProxy);
    get_m_pProxy0(): btBroadphaseProxy;	set_m_pProxy0(value: btBroadphaseProxy): btBroadphaseProxy;
    get_m_pProxy1(): btBroadphaseProxy;	set_m_pProxy1(value: btBroadphaseProxy): btBroadphaseProxy;
    get_m_algorithm(): btCollisionAlgorithm;	set_m_algorithm(value: btCollisionAlgorithm): btCollisionAlgorithm;
    get_n(): unio;	set_n(value: unio): unio;
    get_m_internalInfo1(): void;	set_m_internalInfo1(value: void): void;
    get_m_internalTmpValue(): number;	set_m_internalTmpValue(value: number): number;
  }
}
