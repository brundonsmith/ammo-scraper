declare module Ammo {
  declare class btSoftBody_AJoint_Specs {
    constructor();

    get_axis(): btVector3;	set_axis(value: btVector3): btVector3;
    get_icontrol(): IControl;	set_icontrol(value: IControl): IControl;

  }
}
