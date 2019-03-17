declare module Ammo {
  declare class btSimulationIslandManager {
    constructor();
    initUnionFind(n: number): void;
    getUnionFind(): btUnionFind;
    updateActivationState(colWorld: btCollisionWorld, dispatcher: btDispatcher): void;
    storeIslandActivationState(world: btCollisionWorld): void;
    findUnions(dispatcher: btDispatcher, colWorld: btCollisionWorld): void;
    buildAndProcessIslands(dispatcher: btDispatcher, collisionWorld: btCollisionWorld, callback: IslandCallback): void;
    buildIslands(dispatcher: btDispatcher, colWorld: btCollisionWorld): void;
    getSplitIslands(): boolean;
    setSplitIslands(doSplitIslands: boolean): void;
  }
}
