declare module Ammo {
  declare class btSolve2LinearConstraint {
    constructor(tau: number, damping: number);


    resolveUnilateralPairConstraint(body0: btRigidBody, body1: btRigidBody, world2A: btMatrix3x3, world2B: btMatrix3x3, invInertiaADiag: btVector3, invMassA: number, linvelA: btVector3, angvelA: btVector3, rel_posA1: btVector3, invInertiaBDiag: btVector3, invMassB: number, linvelB: btVector3, angvelB: btVector3, rel_posA2: btVector3, depthA: number, normalA: btVector3, rel_posB1: btVector3, rel_posB2: btVector3, depthB: number, normalB: btVector3, imp0: number, imp1: number): void;
    resolveBilateralPairConstraint(body0: btRigidBody, body1: btRigidBody, world2A: btMatrix3x3, world2B: btMatrix3x3, invInertiaADiag: btVector3, invMassA: number, linvelA: btVector3, angvelA: btVector3, rel_posA1: btVector3, invInertiaBDiag: btVector3, invMassB: number, linvelB: btVector3, angvelB: btVector3, rel_posA2: btVector3, depthA: number, normalA: btVector3, rel_posB1: btVector3, rel_posB2: btVector3, depthB: number, normalB: btVector3, imp0: number, imp1: number): void;
  }
}
