declare module Ammo {
  declare class btActionInterface {


    debugDraw(debugDrawer: btIDebugDraw): void;
    updateAction(collisionWorld: btCollisionWorld, deltaTimeStep: number): void;
  }
}
