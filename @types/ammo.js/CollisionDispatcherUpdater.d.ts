declare module Ammo {
  declare class CollisionDispatcherUpdater {
    constructor();

    get_mPairArray(): btBroadphasePair;	set_mPairArray(value: btBroadphasePair): btBroadphasePair;
    get_mCallback(): btNearCallback;	set_mCallback(value: btNearCallback): btNearCallback;
    get_mDispatcher(): btCollisionDispatcher;	set_mDispatcher(value: btCollisionDispatcher): btCollisionDispatcher;
    get_mInfo(): btDispatcherInfo;	set_mInfo(value: btDispatcherInfo): btDispatcherInfo;

    forLoop(iBegin: number, iEnd: number): void;
  }
}
