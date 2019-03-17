declare module Ammo {
  declare class btSoftBodyRigidBodyCollisionConfiguration {
    constructor(constructionInfo: btDefaultCollisionConstructionInfo);
    getCollisionAlgorithmCreateFunc(proxyType0: number, proxyType1: number): btCollisionAlgorithmCreateFunc;
  }
}
