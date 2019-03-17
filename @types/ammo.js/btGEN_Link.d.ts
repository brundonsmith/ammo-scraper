declare module Ammo {
  declare class btGEN_Link {
    constructor();
    constructor(next: btGEN_Link, prev: btGEN_Link);
    getNext(): btGEN_Link;
    getPrev(): btGEN_Link;
    isHead(): boolean;
    isTail(): boolean;
    insertBefore(link: btGEN_Link): void;
    insertAfter(link: btGEN_Link): void;
    remove(): void;
  }
}
