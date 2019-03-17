declare module Ammo {
  declare class btContactConstraint {
    setContactManifold(contactManifold: btPersistentManifold): void;
    getContactManifold(): btPersistentManifold;
    getContactManifold(): btPersistentManifold;
    getInfo1(info: btConstraintInfo1): void;
    getInfo2(info: btConstraintInfo2): void;
    buildJacobian(): void;
  }
}
