declare module Ammo {
  declare class btClockData {
    get_mClockFrequency(): LARGE_INTEGER;	set_mClockFrequency(value: LARGE_INTEGER): LARGE_INTEGER;
    get_mStartTick(): LONGLONG;	set_mStartTick(value: LONGLONG): LONGLONG;
    get_mStartTime(): LARGE_INTEGER;	set_mStartTime(value: LARGE_INTEGER): LARGE_INTEGER;
  }
}
