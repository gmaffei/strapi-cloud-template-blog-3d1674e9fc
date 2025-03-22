'use strict';

/**
 * commercialista service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::commercialista.commercialista');
