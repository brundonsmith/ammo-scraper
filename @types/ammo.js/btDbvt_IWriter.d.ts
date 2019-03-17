declare module Ammo {
  declare class btDbvt_IWriter {


    Prepare(root: btDbvtNode, numnodes: number): void;
    WriteNode(e: btDbvtNod, index: number, parent: number, child0: number, child1: number): void;
    WriteLeaf(e: btDbvtNod, index: number, parent: number): void;
  }
}
