declare module Ammo {
  declare class btUniversalConstraint {
    constructor();
    constructor(rbA: btRigidBody, rbB: btRigidBody, anchor: btVector3, axis1: btVector3, axis2: btVector3);


    getAnchor(): btVector3;
    getAnchor2(): btVector3;
    getAxis1(): btVector3;
    getAxis2(): btVector3;
    getAngle1(): number;
    getAngle2(): number;
    setUpperLimit(ang1max: number, ang2max: number): void;
    setLowerLimit(ang1min: number, ang2min: number): void;
    setAxis(axis1: btVector3, axis2: btVector3): void;
  }
}
