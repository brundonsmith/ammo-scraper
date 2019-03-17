declare module Ammo {
  declare class btITaskScheduler {
    constructor(name: string);
    getName(): string;
    getMaxNumThreads(): number;
    getNumThreads(): number;
    setNumThreads(numThreads: number): void;
    parallelFor(iBegin: number, iEnd: number, grainSize: number, body: btIParallelForBody): void;
    parallelSum(iBegin: number, iEnd: number, grainSize: number, body: btIParallelSumBody): number;
    sleepWorkerThreadsHint(): void;
    activate(): void;
    deactivate(): void;
  }
}
