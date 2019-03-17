declare module Ammo {
  declare class btPolarDecomposition {
    constructor(tolerance: number, maxIterations: number);


    decompose(a: btMatrix3x3, u: btMatrix3x3, h: btMatrix3x3): number;
    maxIterations(): number;
  }
}
