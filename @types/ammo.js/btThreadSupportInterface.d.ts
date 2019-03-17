declare module Ammo {
  declare class btThreadSupportInterface {

    get_btThreadSupportInterface(): static;	set_btThreadSupportInterface(value: static): static;

    createCriticalSection(): btCriticalSection;
    deleteCriticalSection(criticalSection: btCriticalSection): void;
    getNumWorkerThreads(): number;
    getCacheFriendlyNumThreads(): number;
    getLogicalToPhysicalCoreRatio(): number;
    runTask(threadIndex: number, userData: void): void;
    waitForAllTasks(): void;
  }
}
