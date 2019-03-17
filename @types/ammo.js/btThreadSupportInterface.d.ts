declare module Ammo {
  declare class btThreadSupportInterface {
    getNumWorkerThreads(): number;
    getCacheFriendlyNumThreads(): number;
    getLogicalToPhysicalCoreRatio(): number;
    runTask(threadIndex: number, userData: void): void;
    waitForAllTasks(): void;
    createCriticalSection(): btCriticalSection;
    deleteCriticalSection(criticalSection: btCriticalSection): void;
    get_btThreadSupportInterface(): static;	set_btThreadSupportInterface(value: static): static;
  }
}
