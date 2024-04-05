'use strict';

/**
 * apartman controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::apartman.apartman", ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;

        const entity = await strapi.db.query("api::apartman.apartman").findOne({
            where: { slug: id },
            populate: ["deep"],
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
        },
    })
);
