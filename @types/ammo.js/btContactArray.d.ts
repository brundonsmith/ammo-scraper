declare module Ammo {
  declare class btContactArray {
    constructor();


    merge_contacts(contacts: btContactArray, normal_contact_average: boolean): void;
    merge_contacts_unique(contacts: btContactArray): void;
    push_contact(point: btVector3, normal: btVector3, depth: number, feature1: number, feature2: number): void;
    push_triangle_contacts(tricontact: GIM_TRIANGLE_CONTACT, feature1: number, feature2: number): void;
  }
}
