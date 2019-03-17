declare module Ammo {
  declare class btITaskScheduler {
    constructor(name: string);


    activate(): void;
    deactivate(): void;
    getName(): string;
    getMaxNumThreads(): number;
    getNumThreads(): number;
    parallelFor(iBegin: number, iEnd: number, grainSize: number, body: btIParallelForBody): void;
    parallelSum(iBegin: number, iEnd: number, grainSize: number, body: btIParallelSumBody): number;
    setNumThreads(numThreads: number): void;
    sleepWorkerThreadsHint(): void;
  }
}
