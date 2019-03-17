declare module Ammo {
  declare class btActionInterface {
    updateAction(collisionWorld: btCollisionWorld, deltaTimeStep: number): void;
    debugDraw(debugDrawer: btIDebugDraw): void;
  }
}
