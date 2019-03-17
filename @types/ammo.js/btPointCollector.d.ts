declare module Ammo {
  declare class btPointCollector {
    constructor();

    get_m_normalOnBInWorld(): btVector3;	set_m_normalOnBInWorld(value: btVector3): btVector3;
    get_m_pointInWorld(): btVector3;	set_m_pointInWorld(value: btVector3): btVector3;
    get_m_distance(): number;	set_m_distance(value: number): number;
    get_m_hasResult(): boolean;	set_m_hasResult(value: boolean): boolean;

    addContactPoint(normalOnBInWorld: btVector3, pointInWorld: btVector3, depth: number): void;
    setShapeIdentifiersA(partId0: number, index0: number): void;
    setShapeIdentifiersB(partId1: number, index1: number): void;
  }
}
