declare module Ammo {
  declare class btCollisionShape {
    constructor();
    constructor();
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getBoundingSphere(center: btVector3, radius: number): void;
    getAngularMotionDisc(): number;
    getContactBreakingThreshold(defaultContactThresholdFactor: number): number;
    calculateTemporalAabb(curTrans: btTransform, linvel: btVector3, angvel: btVector3, timeStep: number, temporalAabbMin: btVector3, temporalAabbMax: btVector3): void;
    isPolyhedral(): boolean;
    isConvex2d(): boolean;
    isConvex(): boolean;
    isNonMoving(): boolean;
    isConcave(): boolean;
    isCompound(): boolean;
    isSoftBody(): boolean;
    isInfinite(): boolean;
    setLocalScaling(scaling: btVector3): void;
    getLocalScaling(): btVector3;
    calculateLocalInertia(mass: number, inertia: btVector3): void;
    getName(): string;
    getShapeType(): number;
    getAnisotropicRollingFrictionDirection(): btVector3;
    setMargin(margin: number): void;
    getMargin(): number;
    setUserPointer(userPtr: void): void;
    getUserPointer(): void;
    setUserIndex(index: number): void;
    getUserIndex(): number;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    serializeSingleShape(serializer: btSerializer): void;
  }
}
