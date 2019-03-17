declare module Ammo {
  declare class btGImpactBvh {
    constructor();
    constructor(primitive_manager: btPrimitiveManagerBase);


    getGlobalBox(): btAABB;
    getPrimitiveManager(): btPrimitiveManagerBase;
    setPrimitiveManager(primitive_manager: btPrimitiveManagerBase): void;
  }
}
