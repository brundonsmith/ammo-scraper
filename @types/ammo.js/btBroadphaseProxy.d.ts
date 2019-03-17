declare module Ammo {
  declare class btBroadphaseProxy {
    constructor();
    constructor();
    constructor(aabbMin: btVector3, aabbMax: btVector3, userPtr: void, collisionFilterGroup: number, collisionFilterMask: number);

    get_bool(): static;	set_bool(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_bool(): static;	set_bool(value: static): static;
    get_m_clientObject(): void;	set_m_clientObject(value: void): void;
    get_m_collisionFilterGroup(): number;	set_m_collisionFilterGroup(value: number): number;
    get_m_collisionFilterMask(): number;	set_m_collisionFilterMask(value: number): number;
    get_m_uniqueId(): number;	set_m_uniqueId(value: number): number;
    get_m_aabbMin(): btVector3;	set_m_aabbMin(value: btVector3): btVector3;
    get_m_aabbMax(): btVector3;	set_m_aabbMax(value: btVector3): btVector3;

    getUid(): number;
  }
}
