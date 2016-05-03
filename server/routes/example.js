export default function (server) {

  server.route({
    path: '/api/dummy_viz/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

};
