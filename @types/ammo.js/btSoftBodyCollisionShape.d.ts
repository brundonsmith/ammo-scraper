declare module Ammo {
  declare class btSoftBodyCollisionShape {
    constructor(backptr: btSoftBody);
    processAllTriangles(k: btTriangleCallbac, 3: btVector, 3: btVector): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    setLocalScaling(3: btVector): void;
    getLocalScaling(): btVector3;
    calculateLocalInertia(r: btScala, 3: btVector): void;
    getName(): string;
    get_m_body(): btSoftBody;	set_m_body(value: btSoftBody): btSoftBody;
  }
}
