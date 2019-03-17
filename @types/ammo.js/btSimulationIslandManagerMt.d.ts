declare module Ammo {
  declare class btSimulationIslandManagerMt {
    constructor();

    get_void(): static;	set_void(value: static): static;
    get_void(): static;	set_void(value: static): static;
    get_void(): static;	set_void(value: static): static;

    buildAndProcessIslands(dispatcher: btDispatcher, collisionWorld: btCollisionWorld, y: btAlignedObjectArra, solverParams: SolverParams): void;
    buildIslands(dispatcher: btDispatcher, colWorld: btCollisionWorld): void;
    getMinimumSolverBatchSize(): number;
    getIslandDispatchFunction(): IslandDispatchFunc;
    setMinimumSolverBatchSize(sz: number): void;
    setIslandDispatchFunction(func: IslandDispatchFunc): void;
  }
}
