'use strict';

const taskService = require('../services/task.service');

const getTasks = async (request, h) => {

    const tasks = await taskService.getAllTasks();

    return h.response(tasks).code(200);
};

const getTask = async (request, h) => {

    const id = request.params.id;

    const task = await taskService.getTaskById(id);

    if (!task) {
        return h.response({
            error: 'Task not found'
        }).code(404);
    }

    return h.response(task).code(200);
};

module.exports = {
    getTasks,
    getTask
};