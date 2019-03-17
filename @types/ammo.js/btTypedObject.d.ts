declare module Ammo {
  declare class btTypedObject {
    constructor(objectType: number);

    get_m_objectType(): number;	set_m_objectType(value: number): number;

    getObjectType(): number;
  }
}
