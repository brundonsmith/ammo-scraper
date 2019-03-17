declare module Ammo {
  declare class btMultiBodyWorldImporter {
    constructor(world: btMultiBodyDynamicsWorld);


    convertAllObjects(bulletFile2: bParse_btBulletFile): boolean;
    deleteAllData(): void;
  }
}
