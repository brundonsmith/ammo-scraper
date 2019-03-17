declare module Ammo {
  declare class btRaycastVehicle {
    constructor(tuning: btVehicleTuning, chassis: btRigidBody, raycaster: btVehicleRaycaster);

    get_y(): btAlignedObjectArra;	set_y(value: btAlignedObjectArra): btAlignedObjectArra;

    applyEngineForce(force: number, wheel: number): void;
    addWheel(connectionPointCS0: btVector3, wheelDirectionCS0: btVector3, wheelAxleCS: btVector3, suspensionRestLength: number, wheelRadius: number, tuning: btVehicleTuning, isFrontWheel: boolean): btWheelInfo;
    debugDraw(debugDrawer: btIDebugDraw): void;
    getForwardAxis(): number;
    getSteeringValue(wheel: number): number;
    getForwardVector(): btVector3;
    getWheelTransformWS(wheelIndex: number): btTransform;
    getUserConstraintId(): number;
    getNumWheels(): number;
    getWheelInfo(index: number): btWheelInfo;
    getUpAxis(): number;
    getUserConstraintType(): number;
    getChassisWorldTransform(): btTransform;
    getCurrentSpeedKmHour(): number;
    getRigidBody(): btRigidBody;
    getRigidBody(): btRigidBody;
    getRightAxis(): number;
    getWheelInfo(index: number): btWheelInfo;
    rayCast(wheel: btWheelInfo): number;
    resetSuspension(): void;
    setSteeringValue(steering: number, wheel: number): void;
    setUserConstraintId(uid: number): void;
    setCoordinateSystem(rightIndex: number, upIndex: number, forwardIndex: number): void;
    setBrake(brake: number, wheelIndex: number): void;
    setUserConstraintType(userConstraintType: number): void;
    setPitchControl(pitch: number): void;
    updateFriction(timeStep: number): void;
    updateSuspension(deltaTime: number): void;
    updateAction(collisionWorld: btCollisionWorld, step: number): void;
    updateWheelTransformsWS(wheel: btWheelInfo, interpolatedTransform: boolean): void;
    updateWheelTransform(wheelIndex: number, interpolatedTransform: boolean): void;
    updateVehicle(step: number): void;
  }
}
