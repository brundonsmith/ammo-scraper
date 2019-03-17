declare module Ammo {
  declare class btSoftBodyCollisionShape {
    constructor(backptr: btSoftBody);

    get_m_body(): btSoftBody;	set_m_body(value: btSoftBody): btSoftBody;

    calculateLocalInertia(r: btScala, 3: btVector): void;
    getAabb(t: btTransform, aabbMin: btVector3, aabbMax: btVector3): void;
    getLocalScaling(): btVector3;
    getName(): string;
    processAllTriangles(k: btTriangleCallbac, 3: btVector, 3: btVector): void;
    setLocalScaling(3: btVector): void;
  }
}
