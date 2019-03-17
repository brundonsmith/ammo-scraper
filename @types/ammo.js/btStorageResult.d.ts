declare module Ammo {
  declare class btStorageResult {
    addContactPoint(normalOnBInWorld: btVector3, pointInWorld: btVector3, depth: number): void;
    get_m_normalOnSurfaceB(): btVector3;	set_m_normalOnSurfaceB(value: btVector3): btVector3;
    get_m_closestPointInB(): btVector3;	set_m_closestPointInB(value: btVector3): btVector3;
    get_m_distance(): number;	set_m_distance(value: number): number;
  }
}
