declare module Ammo {
  declare class btTypedObject {
    constructor(objectType: number);
    getObjectType(): number;
    get_m_objectType(): number;	set_m_objectType(value: number): number;
  }
}
