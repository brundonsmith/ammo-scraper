declare module Ammo {
  declare class btBulletWorldImporter {
    constructor(world: btDynamicsWorld);
    loadFile(fileName: string, preSwapFilenameOut: string): boolean;
    loadFileFromMemory(memoryBuffer: string, len: number): boolean;
    loadFileFromMemory(file: bParse_btBulletFile): boolean;
    convertAllObjects(file: bParse_btBulletFile): boolean;
  }
}
