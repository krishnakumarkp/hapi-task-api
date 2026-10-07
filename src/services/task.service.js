'use strict';

const taskRepository = require('../repositories/task.repository');

const getAllTasks = async () => {

    return await taskRepository.findAll();

};

const getTaskById = async (id) => {

    return await taskRepository.findById(id);

};

module.exports = {
    getAllTasks,
    getTaskById
};