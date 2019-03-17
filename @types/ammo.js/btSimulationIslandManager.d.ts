declare module Ammo {
  declare class btSimulationIslandManager {
    constructor();


    buildAndProcessIslands(dispatcher: btDispatcher, collisionWorld: btCollisionWorld, callback: IslandCallback): void;
    buildIslands(dispatcher: btDispatcher, colWorld: btCollisionWorld): void;
    findUnions(dispatcher: btDispatcher, colWorld: btCollisionWorld): void;
    getUnionFind(): btUnionFind;
    getSplitIslands(): boolean;
    initUnionFind(n: number): void;
    storeIslandActivationState(world: btCollisionWorld): void;
    setSplitIslands(doSplitIslands: boolean): void;
    updateActivationState(colWorld: btCollisionWorld, dispatcher: btDispatcher): void;
  }
}
