declare module Ammo {
  declare class btDiscreteCollisionDetectorInterface_Result {
    setShapeIdentifiersA(partId0: number, index0: number): void;
    setShapeIdentifiersB(partId1: number, index1: number): void;
    addContactPoint(normalOnBInWorld: btVector3, pointInWorld: btVector3, depth: number): void;
  }
}
