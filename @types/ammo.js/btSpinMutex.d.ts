declare module Ammo {
  declare class btSpinMutex {
    constructor();


    lock(): void;
    tryLock(): boolean;
    unlock(): void;
  }
}
