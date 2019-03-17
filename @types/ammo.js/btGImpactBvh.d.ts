declare module Ammo {
  declare class btGImpactBvh {
    constructor();
    constructor(primitive_manager: btPrimitiveManagerBase);
    getGlobalBox(): btAABB;
    setPrimitiveManager(primitive_manager: btPrimitiveManagerBase): void;
    getPrimitiveManager(): btPrimitiveManagerBase;
  }
}
