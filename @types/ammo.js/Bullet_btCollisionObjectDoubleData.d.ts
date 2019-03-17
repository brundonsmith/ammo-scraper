declare module Ammo {
  declare class Bullet_btCollisionObjectDoubleData {

    get_m_contactStiffness(): number;	set_m_contactStiffness(value: number): number;
    get_m_broadphaseHandle(): void;	set_m_broadphaseHandle(value: void): void;
    get_m_rootCollisionShape(): btCollisionShapeData;	set_m_rootCollisionShape(value: btCollisionShapeData): btCollisionShapeData;
    get_m_name(): string;	set_m_name(value: string): string;
    get_m_worldTransform(): btTransformDoubleData;	set_m_worldTransform(value: btTransformDoubleData): btTransformDoubleData;
    get_m_interpolationWorldTransform(): btTransformDoubleData;	set_m_interpolationWorldTransform(value: btTransformDoubleData): btTransformDoubleData;
    get_m_interpolationLinearVelocity(): btVector3DoubleData;	set_m_interpolationLinearVelocity(value: btVector3DoubleData): btVector3DoubleData;
    get_m_interpolationAngularVelocity(): btVector3DoubleData;	set_m_interpolationAngularVelocity(value: btVector3DoubleData): btVector3DoubleData;
    get_m_anisotropicFriction(): btVector3DoubleData;	set_m_anisotropicFriction(value: btVector3DoubleData): btVector3DoubleData;
    get_m_contactProcessingThreshold(): number;	set_m_contactProcessingThreshold(value: number): number;
    get_m_deactivationTime(): number;	set_m_deactivationTime(value: number): number;
    get_m_friction(): number;	set_m_friction(value: number): number;
    get_m_rollingFriction(): number;	set_m_rollingFriction(value: number): number;
    get_m_contactDamping(): number;	set_m_contactDamping(value: number): number;
    get_m_collisionShape(): void;	set_m_collisionShape(value: void): void;
    get_m_restitution(): number;	set_m_restitution(value: number): number;
    get_m_hitFraction(): number;	set_m_hitFraction(value: number): number;
    get_m_ccdSweptSphereRadius(): number;	set_m_ccdSweptSphereRadius(value: number): number;
    get_m_ccdMotionThreshold(): number;	set_m_ccdMotionThreshold(value: number): number;
    get_m_hasAnisotropicFriction(): number;	set_m_hasAnisotropicFriction(value: number): number;
    get_m_collisionFlags(): number;	set_m_collisionFlags(value: number): number;
    get_m_islandTag1(): number;	set_m_islandTag1(value: number): number;
    get_m_companionId(): number;	set_m_companionId(value: number): number;
    get_m_activationState1(): number;	set_m_activationState1(value: number): number;
    get_m_internalType(): number;	set_m_internalType(value: number): number;
    get_m_checkCollideWith(): number;	set_m_checkCollideWith(value: number): number;
    get_m_collisionFilterGroup(): number;	set_m_collisionFilterGroup(value: number): number;
    get_m_collisionFilterMask(): number;	set_m_collisionFilterMask(value: number): number;
    get_m_uniqueId(): number;	set_m_uniqueId(value: number): number;

  }
}
