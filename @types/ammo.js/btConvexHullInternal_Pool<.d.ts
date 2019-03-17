declare module Ammo {
  declare class btConvexHullInternal_Pool< {
    constructor();
    reset(): void;
    setArraySize(arraySize: number): void;
    newObject(): T;
    freeObject(object: T): void;
  }
}
