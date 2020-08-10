import Knex from 'knex'

export async function up(knex: Knex){
    return knex.schema.createTable('cursos', table => {
        table.increments('id').primary();
        table.string('titulo').notNullable();
        table.string('descricao').notNullable();
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('cursos')
}