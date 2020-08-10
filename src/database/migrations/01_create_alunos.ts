import Knex from 'knex'

export async function up(knex: Knex){
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
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('alunos')
}