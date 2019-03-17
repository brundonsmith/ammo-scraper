declare module Ammo {
  declare class ThreadsafeCounter {
    constructor();
    getNext(): number;
    get_mCounter(): number;	set_mCounter(value: number): number;
    get_mMutex(): btSpinMutex;	set_mMutex(value: btSpinMutex): btSpinMutex;
  }
}
