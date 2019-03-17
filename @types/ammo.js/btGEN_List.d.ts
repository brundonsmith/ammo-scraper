declare module Ammo {
  declare class btGEN_List {
    constructor();


    addHead(link: btGEN_Link): void;
    addTail(link: btGEN_Link): void;
    getHead(): btGEN_Link;
    getTail(): btGEN_Link;
  }
}
