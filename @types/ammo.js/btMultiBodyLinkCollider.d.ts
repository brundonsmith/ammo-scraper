declare module Ammo {
  declare class btMultiBodyLinkCollider {
    constructor(multiBody: btMultiBody, link: number);
    checkCollideWithOverride(co: btCollisionObject): boolean;
    calculateSerializeBufferSize(): number;
    serialize(dataBuffer: void, serializer: btSerializer): string;
    get_btMultiBodyLinkCollider(): static;	set_btMultiBodyLinkCollider(value: static): static;
    get_const(): static;	set_const(value: static): static;
    get_m_multiBody(): btMultiBody;	set_m_multiBody(value: btMultiBody): btMultiBody;
    get_m_link(): number;	set_m_link(value: number): number;
  }
}
