'use strict';

const pool = require('../config/database');

const findAll = async () => {

    const [rows] = await pool.query(
        `SELECT
            id,
            title,
            description,
            status,
            priority,
            created_at,
            updated_at
         FROM tasks
         ORDER BY id DESC`
    );

    return rows;
};

const findById = async (id) => {

    const [rows] = await pool.query(
        `SELECT
            id,
            title,
            description,
            status,
            priority,
            created_at,
            updated_at
         FROM tasks
         WHERE id = ?`,
        [id]
    );

    return rows[0];
};

module.exports = {
    findAll,
    findById
};