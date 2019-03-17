declare module Ammo {
  declare class btMultiBodyMLCPConstraintSolver {
    constructor(solver: btMLCPSolverInterface);


    getNumFallbacks(): number;
    getSolverType(): btConstraintSolverType;
    setMLCPSolver(solver: btMLCPSolverInterface): void;
    setNumFallbacks(num: number): void;
  }
}
