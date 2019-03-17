declare module Ammo {
  declare class btSimpleBroadphaseProxy {
    constructor();
    constructor(minpt: btVector3, maxpt: btVector3, shapeType: number, userPtr: void, collisionFilterGroup: number, collisionFilterMask: number);

    get_m_nextFree(): number;	set_m_nextFree(value: number): number;

    GetNextFree(): number;
    SetNextFree(next: number): void;
  }
}
