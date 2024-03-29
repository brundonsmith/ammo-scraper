declare module Ammo {
  declare class btMultiBody {
    constructor();
    constructor(n_links: number, mass: number, inertia: btVector3, fixedBase: boolean, canSleep: boolean, deprecatedMultiDof: boolean);


    applyDeltaVeeMultiDof(delta_vee: number, multiplier: number): void;
    applyDeltaVeeMultiDof2(delta_vee: number, multiplier: number): void;
    addJointTorqueMultiDof(i: number, Q: number): void;
    addJointTorqueMultiDof(i: number, dof: number, Q: number): void;
    addJointTorque(i: number, Q: number): void;
    addLinkConstraintTorque(i: number, t: btVector3): void;
    addLinkConstraintForce(i: number, f: btVector3): void;
    addBaseConstraintTorque(t: btVector3): void;
    addBaseConstraintForce(f: btVector3): void;
    addLinkTorque(i: number, t: btVector3): void;
    addLinkForce(i: number, f: btVector3): void;
    addBaseTorque(t: btVector3): void;
    addBaseForce(f: btVector3): void;
    clearForcesAndTorques(): void;
    computeAccelerationsArticulatedBodyAlgorithmMultiDof(dt: number, y: btAlignedObjectArra, y: btAlignedObjectArra, y: btAlignedObjectArra, isConstraintPass: boolean): void;
    compTreeLinkVelocities(omega: btVector3, vel: btVector3): void;
    calcAccelerationDeltasMultiDof(force: number, output: number, y: btAlignedObjectArra, y: btAlignedObjectArra): void;
    clearVelocities(): void;
    checkMotionAndSleepIfRequired(timestep: number): void;
    calculateSerializeBufferSize(): number;
    clearConstraintForces(): void;
    finalizeMultiDof(): void;
    fillConstraintJacobianMultiDof(link: number, contact_point: btVector3, normal_ang: btVector3, normal_lin: btVector3, jac: number, y: btAlignedObjectArra, y: btAlignedObjectArra, y: btAlignedObjectArra): void;
    fillContactJacobianMultiDof(link: number, contact_point: btVector3, normal: btVector3, jac: number, y: btAlignedObjectArra, y: btAlignedObjectArra, y: btAlignedObjectArra): void;
    forwardKinematics(y: btAlignedObjectArra, y: btAlignedObjectArra): void;
    getLinkTorque(i: number): btVector3;
    getBaseName(): string;
    getBaseWorldTransform(): btTransform;
    getNumDofs(): number;
    getBaseMass(): number;
    getBaseInertia(): btVector3;
    getJointPos(i: number): number;
    getJointVel(i: number): number;
    getJointVelMultiDof(i: number): number;
    getJointPosMultiDof(i: number): number;
    getJointVelMultiDof(i: number): number;
    getJointPosMultiDof(i: number): number;
    getLinkMass(i: number): number;
    getMaxAppliedImpulse(): number;
    getMaxCoordinateVelocity(): number;
    getUseGyroTerm(): boolean;
    getVelocityVector(): number;
    getRVector(i: number): btVector3;
    getParentToLocalRot(i: number): btQuaternion;
    getAngularDamping(): number;
    getLinearDamping(): number;
    getCompanionId(): number;
    getLinkInertia(i: number): btVector3;
    goToSleep(): void;
    getKineticEnergy(): number;
    getAngularMomentum(): btVector3;
    getUserIndex2(): number;
    getUserIndex(): number;
    getBasePos(): btVector3;
    getNumLinks(): number;
    getParent(link_num: number): number;
    getLinkCollider(index: number): btMultiBodyLinkCollider;
    getBaseCollider(): btMultiBodyLinkCollider;
    getBaseCollider(): btMultiBodyLinkCollider;
    getCanSleep(): boolean;
    getLink(index: number): btMultibodyLink;
    getLink(index: number): btMultibodyLink;
    getBaseVel(): btVector3;
    getWorldToBaseRot(): btQuaternion;
    getBaseOmega(): btVector3;
    getBaseForce(): btVector3;
    getBaseTorque(): btVector3;
    getLinkForce(i: number): btVector3;
    getNumPosVars(): number;
    getJointTorque(i: number): number;
    getJointTorqueMultiDof(i: number): number;
    getUserPointer(): void;
    hasFixedBase(): boolean;
    hasSelfCollision(): boolean;
    internalNeedsJointFeedback(): boolean;
    isAwake(): boolean;
    isPosUpdated(): boolean;
    isUsingRK4Integration(): boolean;
    isUsingGlobalVelocities(): boolean;
    localPosToWorld(i: number, vec: btVector3): btVector3;
    localDirToWorld(i: number, vec: btVector3): btVector3;
    localFrameToWorld(i: number, mat: btMatrix3x3): btMatrix3x3;
    processDeltaVeeMultiDof2(): void;
    setMaxCoordinateVelocity(maxVel: number): void;
    stepVelocitiesMultiDof(dt: number, y: btAlignedObjectArra, y: btAlignedObjectArra, y: btAlignedObjectArra, isConstraintPass: boolean): void;
    setUserPointer(userPointer: void): void;
    setupFixed(linkIndex: number, mass: number, inertia: btVector3, parent: number, rotParentToThis: btQuaternion, parentComToThisPivotOffset: btVector3, thisPivotToThisComOffset: btVector3, deprecatedDisableParentCollision: boolean): void;
    setBaseMass(mass: number): void;
    setCompanionId(id: number): void;
    setNumLinks(numLinks: number): void;
    stepPositionsMultiDof(dt: number, pq: number, pqd: number): void;
    setLinearDamping(damp: number): void;
    setupSpherical(linkIndex: number, mass: number, inertia: btVector3, parent: number, rotParentToThis: btQuaternion, parentComToThisPivotOffset: btVector3, thisPivotToThisComOffset: btVector3, disableParentCollision: boolean): void;
    setAngularDamping(damp: number): void;
    setJointVelMultiDof(i: number, qdot: number): void;
    setUseGyroTerm(useGyro: boolean): void;
    setJointPosMultiDof(i: number, q: number): void;
    setupRevolute(linkIndex: number, mass: number, inertia: btVector3, parentIndex: number, rotParentToThis: btQuaternion, jointAxis: btVector3, parentComToThisPivotOffset: btVector3, thisPivotToThisComOffset: btVector3, disableParentCollision: boolean): void;
    setJointVel(i: number, qdot: number): void;
    setMaxAppliedImpulse(maxImp: number): void;
    setHasSelfCollision(hasSelfCollision: boolean): void;
    setupPlanar(i: number, mass: number, inertia: btVector3, parent: number, rotParentToThis: btQuaternion, rotationAxis: btVector3, parentComToThisComOffset: btVector3, disableParentCollision: boolean): void;
    setJointPos(i: number, q: number): void;
    setBaseInertia(inertia: btVector3): void;
    setCanSleep(canSleep: boolean): void;
    setBasePos(pos: btVector3): void;
    setBaseCollider(collider: btMultiBodyLinkCollider): void;
    setupPrismatic(i: number, mass: number, inertia: btVector3, parent: number, rotParentToThis: btQuaternion, jointAxis: btVector3, parentComToThisPivotOffset: btVector3, thisPivotToThisComOffset: btVector3, disableParentCollision: boolean): void;
    setPosUpdated(updated: boolean): void;
    setUserIndex(index: number): void;
    setBaseOmega(omega: btVector3): void;
    setWorldToBaseRot(rot: btQuaternion): void;
    setBaseName(name: string): void;
    setBaseVel(vel: btVector3): void;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    setBaseWorldTransform(tr: btTransform): void;
    setUserIndex2(index: number): void;
    updateCollisionObjectWorldTransforms(y: btAlignedObjectArra, y: btAlignedObjectArra): void;
    useGlobalVelocities(use: boolean): void;
    useRK4Integration(use: boolean): void;
    worldPosToLocal(i: number, vec: btVector3): btVector3;
    worldDirToLocal(i: number, vec: btVector3): btVector3;
    wakeUp(): void;
  }
}
