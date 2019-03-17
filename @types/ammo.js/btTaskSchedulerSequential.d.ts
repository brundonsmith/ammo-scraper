declare module Ammo {
  declare class btTaskSchedulerSequential {
    constructor();


    getMaxNumThreads(): number;
    getNumThreads(): number;
    parallelFor(iBegin: number, iEnd: number, grainSize: number, body: btIParallelForBody): void;
    parallelSum(iBegin: number, iEnd: number, grainSize: number, body: btIParallelSumBody): number;
    setNumThreads(numThreads: number): void;
  }
}
