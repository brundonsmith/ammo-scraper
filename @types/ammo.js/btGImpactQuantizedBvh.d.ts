declare module Ammo {
  declare class btGImpactQuantizedBvh {
    constructor();
    constructor(primitive_manager: btPrimitiveManagerBase);
    getGlobalBox(): btAABB;
    setPrimitiveManager(primitive_manager: btPrimitiveManagerBase): void;
    getPrimitiveManager(): btPrimitiveManagerBase;
  }
}
