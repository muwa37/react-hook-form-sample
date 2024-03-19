export interface Address {
  city: string;
  street: string;
  house: string;
}

export interface ShippingFields {
  email: string;
  name: string;
  address: Address;
}

export interface Option {
  value: string;
  label: string;
}
