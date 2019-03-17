declare module Ammo {
  declare class btMLCPSolver {
    constructor(solver: btMLCPSolverInterface);


    getNumFallbacks(): number;
    getSolverType(): btConstraintSolverType;
    setMLCPSolver(solver: btMLCPSolverInterface): void;
    setNumFallbacks(num: number): void;
  }
}
