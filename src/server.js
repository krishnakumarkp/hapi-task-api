'use strict';

const Hapi = require('@hapi/hapi');
const taskRoutes = require('./routes/task.routes');

const init = async() => {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: 'localhost'
    });

   

    server.route({
        method: 'GET',
        path: '/',
        handler: () => {
            return 'Hello from Hapi!';
        }
    });

    server.route({
        method: 'GET',
        path: '/api/health',
        handler: () => {
            return {
                status: 'ok',
                service: 'task-api'
            };
        }
    });

    server.route(taskRoutes);

    await server.start();
    console.log(`server running at: ${server.info.uri}`);

    
};

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

init();