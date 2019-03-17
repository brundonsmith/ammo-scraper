declare module Ammo {
  declare class btDantzigSolver {
    constructor();
    solveMLCP(A: btMatrixXu, b: btVectorXu, x: btVectorXu, lo: btVectorXu, hi: btVectorXu, y: btAlignedObjectArra, numIterations: number, useSparsity: boolean): boolean;
  }
}
