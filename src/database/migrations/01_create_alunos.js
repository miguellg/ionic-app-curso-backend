"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function up(knex) {
    return knex.schema.createTable('alunos', (table) => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.integer('idade');
        table.string('telefone');
        table.string('email');
        table.string('token');
        table.integer('curso_id')
            .references('id')
            .inTable('cursos');
    });
}
exports.up = up;
async function down(knex) {
    return knex.schema.dropTable('alunos');
}
exports.down = down;
