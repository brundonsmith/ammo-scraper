declare module Ammo {
  declare class Bullet_btMultiBodyLinkDoubleData {

    get_m_posVarCount(): number;	set_m_posVarCount(value: number): number;
    get_m_zeroRotParentToThis(): btQuaternionDoubleData;	set_m_zeroRotParentToThis(value: btQuaternionDoubleData): btQuaternionDoubleData;
    get_m_thisPivotToThisComOffset(): btVector3DoubleData;	set_m_thisPivotToThisComOffset(value: btVector3DoubleData): btVector3DoubleData;
    get_m_jointAxisTop(): btVector3DoubleData;	set_m_jointAxisTop(value: btVector3DoubleData): btVector3DoubleData;
    get_m_jointAxisBottom(): btVector3DoubleData;	set_m_jointAxisBottom(value: btVector3DoubleData): btVector3DoubleData;
    get_m_linkInertia(): btVector3DoubleData;	set_m_linkInertia(value: btVector3DoubleData): btVector3DoubleData;
    get_m_absFrameTotVelocityTop(): btVector3DoubleData;	set_m_absFrameTotVelocityTop(value: btVector3DoubleData): btVector3DoubleData;
    get_m_absFrameTotVelocityBottom(): btVector3DoubleData;	set_m_absFrameTotVelocityBottom(value: btVector3DoubleData): btVector3DoubleData;
    get_m_absFrameLocVelocityTop(): btVector3DoubleData;	set_m_absFrameLocVelocityTop(value: btVector3DoubleData): btVector3DoubleData;
    get_m_absFrameLocVelocityBottom(): btVector3DoubleData;	set_m_absFrameLocVelocityBottom(value: btVector3DoubleData): btVector3DoubleData;
    get_m_linkMass(): number;	set_m_linkMass(value: number): number;
    get_m_parentIndex(): number;	set_m_parentIndex(value: number): number;
    get_m_jointType(): number;	set_m_jointType(value: number): number;
    get_m_dofCount(): number;	set_m_dofCount(value: number): number;
    get_m_parentComToThisPivotOffset(): btVector3DoubleData;	set_m_parentComToThisPivotOffset(value: btVector3DoubleData): btVector3DoubleData;
    get_m_jointPos(): number;	set_m_jointPos(value: number): number;
    get_m_jointVel(): number;	set_m_jointVel(value: number): number;
    get_m_jointTorque(): number;	set_m_jointTorque(value: number): number;
    get_m_jointDamping(): number;	set_m_jointDamping(value: number): number;
    get_m_jointFriction(): number;	set_m_jointFriction(value: number): number;
    get_m_jointLowerLimit(): number;	set_m_jointLowerLimit(value: number): number;
    get_m_jointUpperLimit(): number;	set_m_jointUpperLimit(value: number): number;
    get_m_jointMaxForce(): number;	set_m_jointMaxForce(value: number): number;
    get_m_jointMaxVelocity(): number;	set_m_jointMaxVelocity(value: number): number;
    get_m_linkName(): string;	set_m_linkName(value: string): string;
    get_m_jointName(): string;	set_m_jointName(value: string): string;
    get_m_linkCollider(): btCollisionObjectDoubleData;	set_m_linkCollider(value: btCollisionObjectDoubleData): btCollisionObjectDoubleData;
    get_m_paddingPtr(): string;	set_m_paddingPtr(value: string): string;

  }
}
