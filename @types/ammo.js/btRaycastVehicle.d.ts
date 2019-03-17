declare module Ammo {
  declare class btRaycastVehicle {
    constructor(tuning: btVehicleTuning, chassis: btRigidBody, raycaster: btVehicleRaycaster);
    updateAction(collisionWorld: btCollisionWorld, step: number): void;
    debugDraw(debugDrawer: btIDebugDraw): void;
    getChassisWorldTransform(): btTransform;
    rayCast(wheel: btWheelInfo): number;
    updateVehicle(step: number): void;
    resetSuspension(): void;
    getSteeringValue(wheel: number): number;
    setSteeringValue(steering: number, wheel: number): void;
    applyEngineForce(force: number, wheel: number): void;
    getWheelTransformWS(wheelIndex: number): btTransform;
    updateWheelTransform(wheelIndex: number, interpolatedTransform: boolean): void;
    addWheel(connectionPointCS0: btVector3, wheelDirectionCS0: btVector3, wheelAxleCS: btVector3, suspensionRestLength: number, wheelRadius: number, tuning: btVehicleTuning, isFrontWheel: boolean): btWheelInfo;
    getNumWheels(): number;
    getWheelInfo(index: number): btWheelInfo;
    getWheelInfo(index: number): btWheelInfo;
    updateWheelTransformsWS(wheel: btWheelInfo, interpolatedTransform: boolean): void;
    setBrake(brake: number, wheelIndex: number): void;
    setPitchControl(pitch: number): void;
    updateSuspension(deltaTime: number): void;
    updateFriction(timeStep: number): void;
    getRigidBody(): btRigidBody;
    getRigidBody(): btRigidBody;
    getRightAxis(): number;
    getUpAxis(): number;
    getForwardAxis(): number;
    getForwardVector(): btVector3;
    getCurrentSpeedKmHour(): number;
    setCoordinateSystem(rightIndex: number, upIndex: number, forwardIndex: number): void;
    getUserConstraintType(): number;
    setUserConstraintType(userConstraintType: number): void;
    setUserConstraintId(uid: number): void;
    getUserConstraintId(): number;
    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;
  }
}
