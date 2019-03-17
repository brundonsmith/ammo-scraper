declare module Ammo {
  declare class btCompoundShape {
    constructor();
    constructor(enableDynamicAabbTree: boolean, initialChildCapacity: number);
    addChildShape(localTransform: btTransform, shape: btCollisionShape): void;
    removeChildShape(shape: btCollisionShape): void;
    removeChildShapeByIndex(childShapeindex: number): void;
    getNumChildShapes(): number;
    getChildShape(index: number): btCollisionShape;
    getChildShape(index: number): btCollisionShape;
    getChildTransform(index: number): btTransform;
    getChildTransform(index: number): btTransform;
    updateChildTransform(childIndex: number, newChildTransform: btTransform, shouldRecalculateLocalAabb: boolean): void;
    getChildList(): btCompoundShapeChild;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    recalculateLocalAabb(): void;
    setLocalScaling(scaling: btVector3): void;
    getLocalScaling(): btVector3;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    setMargin(margin: number): void;
    getMargin(): number;
    getName(): string;
    getDynamicAabbTree(): btDbvt;
    getDynamicAabbTree(): btDbvt;
    createAabbTreeFromChildren(): void;
    calculatePrincipalAxisTransform(masses: number, principal: btTransform, inertia: btVector3): void;
    getUpdateRevision(): number;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
  }
}
