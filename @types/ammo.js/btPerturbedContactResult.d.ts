declare module Ammo {
  declare class btPerturbedContactResult {
    constructor(originalResult: btManifoldResult, transformA: btTransform, transformB: btTransform, unPerturbedTransform: btTransform, perturbA: boolean, debugDrawer: btIDebugDraw);

    get_m_originalManifoldResult(): btManifoldResult;	set_m_originalManifoldResult(value: btManifoldResult): btManifoldResult;
    get_m_transformA(): btTransform;	set_m_transformA(value: btTransform): btTransform;
    get_m_transformB(): btTransform;	set_m_transformB(value: btTransform): btTransform;
    get_m_unPerturbedTransform(): btTransform;	set_m_unPerturbedTransform(value: btTransform): btTransform;
    get_m_perturbA(): boolean;	set_m_perturbA(value: boolean): boolean;
    get_m_debugDrawer(): btIDebugDraw;	set_m_debugDrawer(value: btIDebugDraw): btIDebugDraw;

    addContactPoint(normalOnBInWorld: btVector3, pointInWorld: btVector3, orgDepth: number): void;
  }
}
