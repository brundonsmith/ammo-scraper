declare module Ammo {
  declare class btGEN_List {
    constructor();
    getHead(): btGEN_Link;
    getTail(): btGEN_Link;
    addHead(link: btGEN_Link): void;
    addTail(link: btGEN_Link): void;
  }
}
