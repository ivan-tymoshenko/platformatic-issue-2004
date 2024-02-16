/// <reference path="../global.d.ts" />
'use strict'
/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function (fastify, opts) {
  fastify.route({
    method: 'GET',
    url: '/service-endpoint',
    version: '1.0.0',
    handler: async (request, reply) => {
      return request.headers
    }
  })
}
