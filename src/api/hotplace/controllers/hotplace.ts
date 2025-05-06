/**
 * hotplace controller
 */

// import { factories } from '@strapi/strapi'

// export default factories.createCoreController('api::hotplace.hotplace');

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::hotplace.hotplace', ({ strapi }) => ({
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: {
        dest_list: {
          populate: {
            homes: {
              populate: {
                image_url: true,
                picture_url: true,
                verify_info: true,
                reviews: true,
                bottom_info: true,
              }
            }
          }
        }
      }
    }

    return await super.find(ctx)
  }
}))