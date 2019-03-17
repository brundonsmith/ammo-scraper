declare module Ammo {
  declare class btGhostObject {
    constructor();
    convexSweepTest(castShape: btConvexShape, convexFromWorld: btTransform, convexToWorld: btTransform, resultCallback: btCollisionWorld_ConvexResultCallback, allowedCcdPenetration: number): void;
    rayTest(rayFromWorld: btVector3, rayToWorld: btVector3, resultCallback: btCollisionWorld_RayResultCallback): void;
    addOverlappingObjectInternal(otherProxy: btBroadphaseProxy, thisProxy: btBroadphaseProxy): void;
    removeOverlappingObjectInternal(otherProxy: btBroadphaseProxy, dispatcher: btDispatcher, thisProxy: btBroadphaseProxy): void;
    getNumOverlappingObjects(): number;
    getOverlappingObject(index: number): btCollisionObject;
    getOverlappingObject(index: number): btCollisionObject;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
    get_const(): static;	set_const(value: static): static;
    get_btGhostObject(): static;	set_btGhostObject(value: static): static;
  }
}
