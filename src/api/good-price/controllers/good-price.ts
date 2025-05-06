/**
 * good-price controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::good-price.good-price');


import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::good-price.good-price', ({ strapi }) => ({
  async full(ctx) {
    try {
      const data = await strapi.entityService.findMany('api::good-price.good-price', {
        populate: {
          list_item: {
            populate: {
              picture_url: true,
              image_url: true,
              verify_info: true,     // ❗ 不能指定 image_url，因為沒有
              bottom_info: true,     // ❗ 同上
              reviews: {
                populate: {
                  reviewer_image_url: true // ✅ 這個是 media，保留
                }
              }
            }
          }
        }
      } as any);

      ctx.body = data;
    } catch (err) {
      console.error('🔥 [good-prices/full] 發生錯誤：', err);
      ctx.throw(500, '伺服器內部錯誤');
    }
  },
}));