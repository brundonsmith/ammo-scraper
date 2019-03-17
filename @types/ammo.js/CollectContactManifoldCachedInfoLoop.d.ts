declare module Ammo {
  declare class CollectContactManifoldCachedInfoLoop {
    constructor(solver: btSequentialImpulseConstraintSolverMt, cachedInfoArray: btSequentialImpulseConstraintSolverMt_btContactManifoldCachedInfo, d: btPersistentManifol, r: manifoldPt, infoGlobal: btContactSolverInfo);
    forLoop(iBegin: number, iEnd: number): void;
    get_m_solver(): btSequentialImpulseConstraintSolverMt;	set_m_solver(value: btSequentialImpulseConstraintSolverMt): btSequentialImpulseConstraintSolverMt;
    get_m_cachedInfoArray(): btSequentialImpulseConstraintSolverMt_btContactManifoldCachedInfo;	set_m_cachedInfoArray(value: btSequentialImpulseConstraintSolverMt_btContactManifoldCachedInfo): btSequentialImpulseConstraintSolverMt_btContactManifoldCachedInfo;
    get_m_manifoldPtr(): btPersistentManifold;	set_m_manifoldPtr(value: btPersistentManifold): btPersistentManifold;
    get_m_infoGlobal(): btContactSolverInfo;	set_m_infoGlobal(value: btContactSolverInfo): btContactSolverInfo;
  }
}
