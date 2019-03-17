declare module Ammo {
  declare class CProfileNode {
    constructor(name: string, parent: CProfileNode);
    Get_Sub_Node(name: string): CProfileNode;
    Get_Parent(d: voi): CProfileNode;
    Get_Sibling(d: voi): CProfileNode;
    Get_Child(d: voi): CProfileNode;
    CleanupMemory(): void;
    Reset(d: voi): void;
    Call(d: voi): void;
    Return(d: voi): boolean;
    Get_Name(d: voi): string;
    Get_Total_Calls(d: voi): number;
    Get_Total_Time(d: voi): number;
    GetUserPointer(): void;
    SetUserPointer(ptr: void): void;
  }
}
