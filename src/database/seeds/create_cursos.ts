import Knex from 'knex';

export async function seed(knex: Knex) {
    await knex(`cursos`).insert([
        { titulo: `Matemática Básica`, descricao: `Curso completo de Matemática Básica`},
        { titulo: `Matemática Avançada`, descricao: `Curso completo de Matemática Avançada`},
        { titulo: `Matemática Aplicada`, descricao: `Curso completo de Matemática Aplicada`},
        { titulo: `Matemática Financeira`, descricao: `Curso completo de Matemática Financeira`},
    ])
}