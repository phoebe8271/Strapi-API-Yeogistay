/**
 * good-price router
 */

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::good-price.good-price');

export default {
    routes: [
      {
        method: 'GET',
        path: '/good-prices/full',
        handler: 'good-price.full',
        config: {
          auth: false,
        },
      },
    ],
  };