declare module Ammo {
  declare class btLemkeAlgorithm {
    constructor(M_: btMatrixXu, q_: btVectorXu, DEBUGLEVEL_: number);


    getInfo(): number;
    getSteps(d: voi): number;
    setSystem(M_: btMatrixXu, q_: btVectorXu): void;
    solve(maxloops: number): btVectorXu;
  }
}
