declare module Ammo {
  declare class CProfileIterator {


    Enter_Child(index: number): void;
    Enter_Largest_Child(d: voi): void;
    Enter_Parent(d: voi): void;
    First(d: voi): void;
    Get_Current_Parent_Total_Time(d: voi): number;
    Get_Current_Parent_Total_Calls(d: voi): number;
    Get_Current_Parent_Name(d: voi): string;
    Get_Current_UserPointer(d: voi): void;
    Get_Current_Total_Calls(d: voi): number;
    Get_Current_Total_Time(d: voi): number;
    Get_Current_Name(d: voi): string;
    Is_Root(d: voi): boolean;
    Is_Done(d: voi): boolean;
    Next(d: voi): void;
    Set_Current_UserPointer(ptr: void): void;
  }
}
