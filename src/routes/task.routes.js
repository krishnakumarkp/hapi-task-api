'use strict';

const taskHandlers = require('../handlers/task.handlers');

module.exports = [
    {
        method: 'GET',
        path: '/api/tasks',
        handler: taskHandlers.getTasks
    },
    {
        method: 'GET',
        path: '/api/tasks/{id}',
        handler: taskHandlers.getTask
    }
];