declare module Ammo {
  declare class AllocContactConstraintsLoop {
    constructor(solver: btSequentialImpulseConstraintSolverMt, cachedInfoArray: btSequentialImpulseConstraintSolverMt_btContactManifoldCachedInfo);
    forLoop(iBegin: number, iEnd: number): void;
    get_m_solver(): btSequentialImpulseConstraintSolverMt;	set_m_solver(value: btSequentialImpulseConstraintSolverMt): btSequentialImpulseConstraintSolverMt;
    get_m_cachedInfoArray(): btSequentialImpulseConstraintSolverMt_btContactManifoldCachedInfo;	set_m_cachedInfoArray(value: btSequentialImpulseConstraintSolverMt_btContactManifoldCachedInfo): btSequentialImpulseConstraintSolverMt_btContactManifoldCachedInfo;
  }
}
