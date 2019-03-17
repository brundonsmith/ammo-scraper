declare module Ammo {
  declare class btDefaultVehicleRaycaster {
    constructor(world: btDynamicsWorld);


    castRay(from: btVector3, to: btVector3, result: btVehicleRaycasterResult): void;
  }
}
