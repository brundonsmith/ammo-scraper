declare module Ammo {
  declare class btDbvtNodeEnumerator {

    get_nodes(): tConstNodeArray;	set_nodes(value: tConstNodeArray): tConstNodeArray;

    Process(n: btDbvtNode): void;
  }
}
