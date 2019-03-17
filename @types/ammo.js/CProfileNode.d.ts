declare module Ammo {
  declare class CProfileNode {
    constructor(name: string, parent: CProfileNode);


    Call(d: voi): void;
    CleanupMemory(): void;
    Get_Sibling(d: voi): CProfileNode;
    Get_Parent(d: voi): CProfileNode;
    Get_Sub_Node(name: string): CProfileNode;
    Get_Child(d: voi): CProfileNode;
    Get_Name(d: voi): string;
    Get_Total_Calls(d: voi): number;
    Get_Total_Time(d: voi): number;
    GetUserPointer(): void;
    Return(d: voi): boolean;
    Reset(d: voi): void;
    SetUserPointer(ptr: void): void;
  }
}
