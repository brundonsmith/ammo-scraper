declare module Ammo {
  declare class btCompoundShape {
    constructor(enableDynamicAabbTree: boolean, initialChildCapacity: number);
    constructor();


    addChildShape(localTransform: btTransform, shape: btCollisionShape): void;
    createAabbTreeFromChildren(): void;
    calculateSerializeBufferSize(): number;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    calculatePrincipalAxisTransform(masses: number, principal: btTransform, inertia: btVector3): void;
    getNumChildShapes(): number;
    getChildList(): btCompoundShapeChild;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getChildShape(index: number): btCollisionShape;
    getChildShape(index: number): btCollisionShape;
    getLocalScaling(): btVector3;
    getChildTransform(index: number): btTransform;
    getChildTransform(index: number): btTransform;
    getMargin(): number;
    getName(): string;
    getDynamicAabbTree(): btDbvt;
    getDynamicAabbTree(): btDbvt;
    getUpdateRevision(): number;
    recalculateLocalAabb(): void;
    removeChildShape(shape: btCollisionShape): void;
    removeChildShapeByIndex(childShapeindex: number): void;
    setMargin(margin: number): void;
    setLocalScaling(scaling: btVector3): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    updateChildTransform(childIndex: number, newChildTransform: btTransform, shouldRecalculateLocalAabb: boolean): void;
  }
}
