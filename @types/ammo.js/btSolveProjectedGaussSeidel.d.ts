declare module Ammo {
  declare class btSolveProjectedGaussSeidel {
    constructor();
    solveMLCP(A: btMatrixXu, b: btVectorXu, x: btVectorXu, lo: btVectorXu, hi: btVectorXu, y: btAlignedObjectArra, numIterations: number, useSparsity: boolean): boolean;
    get_m_leastSquaresResidualThreshold(): number;	set_m_leastSquaresResidualThreshold(value: number): number;
    get_m_leastSquaresResidual(): number;	set_m_leastSquaresResidual(value: number): number;
  }
}
