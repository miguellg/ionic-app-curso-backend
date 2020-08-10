"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function up(knex) {
    return knex.schema.createTable('cursos', table => {
        table.increments('id').primary();
        table.string('titulo').notNullable();
        table.string('descricao').notNullable();
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('cursos');
}
exports.down = down;
