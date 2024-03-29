import type { Schema, Attribute } from '@strapi/strapi';

export interface ApartmansApartmanFeatures extends Schema.Component {
  collectionName: 'components_apartmans_apartman_features';
  info: {
    displayName: 'apartman_features';
    icon: 'bulletList';
  };
  attributes: {
    icon: Attribute.Enumeration<
      ['icon-enlarge2', 'icon-droplet', 'icon-spoon-knife']
    >;
    information: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'apartmans.apartman-features': ApartmansApartmanFeatures;
    }
  }
}
