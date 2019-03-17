declare module Ammo {
  declare class btBatchedConstraints {
    constructor();

    get_bool(): static;	set_bool(value: static): static;
    get_m_debugDrawer(): btIDebugDraw;	set_m_debugDrawer(value: btIDebugDraw): btIDebugDraw;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;

    setup(constraints: btConstraintArray, y: btAlignedObjectArra, batchingMethod: BatchingMethod, minBatchSize: number, maxBatchSize: number, y: btAlignedObjectArra): void;
    validate(constraints: btConstraintArray, y: btAlignedObjectArra): boolean;
  }
}
