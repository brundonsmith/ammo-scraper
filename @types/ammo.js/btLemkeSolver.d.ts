declare module Ammo {
  declare class btLemkeSolver {
    constructor();

    get_m_maxValue(): number;	set_m_maxValue(value: number): number;
    get_m_debugLevel(): number;	set_m_debugLevel(value: number): number;
    get_m_maxLoops(): number;	set_m_maxLoops(value: number): number;
    get_m_useLoHighBounds(): boolean;	set_m_useLoHighBounds(value: boolean): boolean;

    solveMLCP(A: btMatrixXu, b: btVectorXu, x: btVectorXu, lo: btVectorXu, hi: btVectorXu, y: btAlignedObjectArra, numIterations: number, useSparsity: boolean): boolean;
  }
}
