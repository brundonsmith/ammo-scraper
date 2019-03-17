declare module Ammo {
  declare class btDbvtNodeEnumerator {
    Process(n: btDbvtNode): void;
    get_nodes(): tConstNodeArray;	set_nodes(value: tConstNodeArray): tConstNodeArray;
  }
}
