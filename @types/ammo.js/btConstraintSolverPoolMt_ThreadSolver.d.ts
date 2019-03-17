declare module Ammo {
  declare class btConstraintSolverPoolMt_ThreadSolver {
    get_solver(): btConstraintSolver;	set_solver(value: btConstraintSolver): btConstraintSolver;
    get_mutex(): btSpinMutex;	set_mutex(value: btSpinMutex): btSpinMutex;
    get__cachelinePadding(): string;	set__cachelinePadding(value: string): string;
  }
}
