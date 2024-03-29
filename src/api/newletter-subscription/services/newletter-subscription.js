'use strict';

/**
 * newletter-subscription service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::newletter-subscription.newletter-subscription');
