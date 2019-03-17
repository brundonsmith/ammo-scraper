declare module Ammo {
  declare class btMLCPSolver {
    constructor(solver: btMLCPSolverInterface);
    setMLCPSolver(solver: btMLCPSolverInterface): void;
    getNumFallbacks(): number;
    setNumFallbacks(num: number): void;
    getSolverType(): btConstraintSolverType;
  }
}
