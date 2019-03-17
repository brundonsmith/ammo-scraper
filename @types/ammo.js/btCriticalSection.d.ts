declare module Ammo {
  declare class btCriticalSection {
    constructor();
    lock(): void;
    unlock(): void;
  }
}
