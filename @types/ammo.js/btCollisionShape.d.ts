declare module Ammo {
  declare class btCollisionShape {
    constructor();
    constructor();


    calculateLocalInertia(mass: number, inertia: btVector3): void;
    calculateSerializeBufferSize(): number;
    calculateTemporalAabb(curTrans: btTransform, linvel: btVector3, angvel: btVector3, timeStep: number, temporalAabbMin: btVector3, temporalAabbMax: btVector3): void;
    getAngularMotionDisc(): number;
    getContactBreakingThreshold(defaultContactThresholdFactor: number): number;
    getUserIndex(): number;
    getUserPointer(): void;
    getMargin(): number;
    getAnisotropicRollingFrictionDirection(): btVector3;
    getShapeType(): number;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getName(): string;
    getBoundingSphere(center: btVector3, radius: number): void;
    getLocalScaling(): btVector3;
    isPolyhedral(): boolean;
    isInfinite(): boolean;
    isCompound(): boolean;
    isConcave(): boolean;
    isNonMoving(): boolean;
    isConvex(): boolean;
    isConvex2d(): boolean;
    isSoftBody(): boolean;
    setMargin(margin: number): void;
    setUserIndex(index: number): void;
    serializeSingleShape(serializer: btSerializer): void;
    setUserPointer(userPtr: void): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    setLocalScaling(scaling: btVector3): void;
  }
}
