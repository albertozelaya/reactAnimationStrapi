import type { Schema, Attribute } from '@strapi/strapi';

export interface HeroHeroSlide extends Schema.Component {
  collectionName: 'components_hero_hero_slides';
  info: {
    displayName: 'heroSlide';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    bgImage: Attribute.Media<'images'>;
    bgColor: Attribute.String;
    content: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'hero.hero-slide': HeroHeroSlide;
    }
  }
}
