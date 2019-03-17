declare module Ammo {
  declare class gim_contact_array {
    constructor();


    merge_contacts(contacts: gim_contact_array, normal_contact_average: boolean): void;
    merge_contacts_unique(contacts: gim_contact_array): void;
    push_contact(point: btVector3, normal: btVector3, depth: GREAL, feature1: GUINT, feature2: GUINT): void;
    push_triangle_contacts(tricontact: GIM_TRIANGLE_CONTACT_DATA, feature1: GUINT, feature2: GUINT): void;
  }
}
