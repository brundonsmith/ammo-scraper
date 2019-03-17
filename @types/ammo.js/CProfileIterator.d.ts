declare module Ammo {
  declare class CProfileIterator {
    First(d: voi): void;
    Next(d: voi): void;
    Is_Done(d: voi): boolean;
    Is_Root(d: voi): boolean;
    Enter_Child(index: number): void;
    Enter_Largest_Child(d: voi): void;
    Enter_Parent(d: voi): void;
    Get_Current_Name(d: voi): string;
    Get_Current_Total_Calls(d: voi): number;
    Get_Current_Total_Time(d: voi): number;
    Get_Current_UserPointer(d: voi): void;
    Set_Current_UserPointer(ptr: void): void;
    Get_Current_Parent_Name(d: voi): string;
    Get_Current_Parent_Total_Calls(d: voi): number;
    Get_Current_Parent_Total_Time(d: voi): number;
  }
}
