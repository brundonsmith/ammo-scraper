declare module Ammo {
  declare class btConvexHullInternal_Pool< {
    constructor();


    freeObject(object: T): void;
    newObject(): T;
    reset(): void;
    setArraySize(arraySize: number): void;
  }
}
