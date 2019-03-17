declare module Ammo {
  declare class btJacobianEntry {
    constructor();
    constructor(world2A: btMatrix3x3, world2B: btMatrix3x3, rel_pos1: btVector3, rel_pos2: btVector3, jointAxis: btVector3, inertiaInvA: btVector3, massInvA: number, inertiaInvB: btVector3, massInvB: number);
    constructor(jointAxis: btVector3, world2A: btMatrix3x3, world2B: btMatrix3x3, inertiaInvA: btVector3, inertiaInvB: btVector3);
    constructor(axisInA: btVector3, axisInB: btVector3, inertiaInvA: btVector3, inertiaInvB: btVector3);
    constructor(world2A: btMatrix3x3, rel_pos1: btVector3, rel_pos2: btVector3, jointAxis: btVector3, inertiaInvA: btVector3, massInvA: number);
    getDiagonal(): number;
    getNonDiagonal(jacB: btJacobianEntry, massInvA: number): number;
    getNonDiagonal(jacB: btJacobianEntry, massInvA: number, massInvB: number): number;
    getRelativeVelocity(linvelA: btVector3, angvelA: btVector3, linvelB: btVector3, angvelB: btVector3): number;
    get_m_linearJointAxis(): btVector3;	set_m_linearJointAxis(value: btVector3): btVector3;
    get_m_aJ(): btVector3;	set_m_aJ(value: btVector3): btVector3;
    get_m_bJ(): btVector3;	set_m_bJ(value: btVector3): btVector3;
    get_m_0MinvJt(): btVector3;	set_m_0MinvJt(value: btVector3): btVector3;
    get_m_1MinvJt(): btVector3;	set_m_1MinvJt(value: btVector3): btVector3;
    get_m_Adiag(): number;	set_m_Adiag(value: number): number;
  }
}
