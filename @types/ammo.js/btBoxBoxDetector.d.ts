declare module Ammo {
  declare class btBoxBoxDetector {
    constructor(box1: btBoxShape, box2: btBoxShape);

    get_m_box1(): btBoxShape;	set_m_box1(value: btBoxShape): btBoxShape;
    get_m_box2(): btBoxShape;	set_m_box2(value: btBoxShape): btBoxShape;

    getClosestPoints(input: ClosestPointInput, output: Result, debugDraw: btIDebugDraw, swapResults: boolean): void;
  }
}
