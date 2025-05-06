import type { Schema, Struct } from '@strapi/strapi';

export interface DestListDestList extends Struct.ComponentSchema {
  collectionName: 'components_dest_list_dest_lists';
  info: {
    description: '';
    displayName: 'dest_list';
  };
  attributes: {
    homes: Schema.Attribute.Relation<'oneToMany', 'api::roominfo.roominfo'>;
    placename: Schema.Attribute.String;
  };
}

export interface DiscoverroomsList extends Struct.ComponentSchema {
  collectionName: 'components_discoverrooms_lists';
  info: {
    description: '';
    displayName: 'list';
  };
  attributes: {
    city: Schema.Attribute.String;
    cover: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    pic: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    price: Schema.Attribute.Integer;
  };
}

export interface RoominfoBottomInfo extends Struct.ComponentSchema {
  collectionName: 'components_roominfo_bottom_infos';
  info: {
    description: '';
    displayName: 'bottom_info';
  };
  attributes: {
    content: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\uAC8C\uC2A4\uD2B8\uC120\uD638, \uC288\uD37C\uD638\uC2A4\uD2B8'>;
    content_color: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#767676'>;
    font_size: Schema.Attribute.String & Schema.Attribute.DefaultTo<'10'>;
    visibility: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'LIST_VIEW'>;
  };
}

export interface RoominfoListItem extends Struct.ComponentSchema {
  collectionName: 'components_roominfo_list_items';
  info: {
    description: '';
    displayName: 'list_item';
  };
  attributes: {
    city: Schema.Attribute.String;
    image_url: Schema.Attribute.Media<'images' | 'files'>;
    picture_url: Schema.Attribute.Media<'images' | 'files'>;
    price: Schema.Attribute.String & Schema.Attribute.DefaultTo<'\u20A9'>;
  };
}

export interface RoominfoReviews extends Struct.ComponentSchema {
  collectionName: 'components_roominfo_reviews';
  info: {
    description: '';
    displayName: 'reviews';
  };
  attributes: {
    comments: Schema.Attribute.Text;
    createdat: Schema.Attribute.Date;
    is_translated: Schema.Attribute.Boolean;
    localized_date: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u110B\u1167\u1100\u1175\u1109\u1173\u1110\u1166\u110B\u1175 \uAC00\uC785 \uAE30\uAC04'>;
    review_id: Schema.Attribute.String;
    reviewer_image_url: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface RoominfoRoominfo extends Struct.ComponentSchema {
  collectionName: 'components_roominfo_roominfos';
  info: {
    description: '';
    displayName: 'roominfo';
  };
  attributes: {
    bottom_info: Schema.Attribute.Component<'roominfo.bottom-info', false>;
    image_url: Schema.Attribute.Media<'files' | 'images'>;
    lat: Schema.Attribute.Decimal;
    lng: Schema.Attribute.Decimal;
    name: Schema.Attribute.String;
    picture_url: Schema.Attribute.Media<'files' | 'images'>;
    price: Schema.Attribute.Integer;
    price_format: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\u20A9 '>;
    reviews: Schema.Attribute.Component<'roominfo.reviews', false>;
    reviews_count: Schema.Attribute.BigInteger;
    reviews_score: Schema.Attribute.Decimal;
    star_rating_color: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'#008489'>;
    title: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'\uC9D1 \uC804\uCCB4'>;
    verify_info: Schema.Attribute.Component<'roominfo.verify-info', false>;
  };
}

export interface RoominfoVerifyInfo extends Struct.ComponentSchema {
  collectionName: 'components_roominfo_verify_infos';
  info: {
    description: '';
    displayName: 'verify_info';
  };
  attributes: {
    message: Schema.Attribute.JSON;
    text_color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#767676'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'dest-list.dest-list': DestListDestList;
      'discoverrooms.list': DiscoverroomsList;
      'roominfo.bottom-info': RoominfoBottomInfo;
      'roominfo.list-item': RoominfoListItem;
      'roominfo.reviews': RoominfoReviews;
      'roominfo.roominfo': RoominfoRoominfo;
      'roominfo.verify-info': RoominfoVerifyInfo;
    }
  }
}
