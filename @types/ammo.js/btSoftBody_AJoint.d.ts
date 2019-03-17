declare module Ammo {
  declare class btSoftBody_AJoint {
    Prepare(dt: number, iterations: number): void;
    Solve(dt: number, sor: number): void;
    Terminate(dt: number): void;
    Type(): eType__;
    get_m_axis(): btVector3;	set_m_axis(value: btVector3): btVector3;
    get_m_icontrol(): IControl;	set_m_icontrol(value: IControl): IControl;
  }
}
