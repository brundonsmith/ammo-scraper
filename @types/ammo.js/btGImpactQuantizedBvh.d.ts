declare module Ammo {
  declare class btGImpactQuantizedBvh {
    constructor();
    constructor(primitive_manager: btPrimitiveManagerBase);


    getGlobalBox(): btAABB;
    getPrimitiveManager(): btPrimitiveManagerBase;
    setPrimitiveManager(primitive_manager: btPrimitiveManagerBase): void;
  }
}
