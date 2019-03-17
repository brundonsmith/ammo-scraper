declare module Ammo {
  declare class btUsageBitfield {
    constructor();

    get_usedVertexA:(): short;	set_usedVertexA:(value: short): short;
    get_usedVertexB:(): short;	set_usedVertexB:(value: short): short;
    get_usedVertexC:(): short;	set_usedVertexC:(value: short): short;
    get_usedVertexD:(): short;	set_usedVertexD:(value: short): short;
    get_unused1:(): short;	set_unused1:(value: short): short;
    get_unused2:(): short;	set_unused2:(value: short): short;
    get_unused3:(): short;	set_unused3:(value: short): short;
    get_unused4:(): short;	set_unused4:(value: short): short;

    reset(): void;
  }
}
