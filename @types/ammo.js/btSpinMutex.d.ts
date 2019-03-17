declare module Ammo {
  declare class btSpinMutex {
    constructor();
    lock(): void;
    unlock(): void;
    tryLock(): boolean;
  }
}
