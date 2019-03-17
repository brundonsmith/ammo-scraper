declare module Ammo {
  declare class btDiscreteDynamicsWorldMt {
    constructor();
    constructor(dispatcher: btDispatcher, pairCache: btBroadphaseInterface, constraintSolver: btConstraintSolverPoolMt, constraintSolverMt: btConstraintSolver, collisionConfiguration: btCollisionConfiguration);
    stepSimulation(timeStep: number, maxSubSteps: number, fixedTimeStep: number): number;
  }
}
