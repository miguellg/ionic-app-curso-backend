"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function seed(knex) {
    await knex(`cursos`).insert([
        { titulo: `Matemática Básica`, descricao: `Curso completo de Matemática Básica` },
        { titulo: `Matemática Avançada`, descricao: `Curso completo de Matemática Avançada` },
        { titulo: `Matemática Aplicada`, descricao: `Curso completo de Matemática Aplicada` },
        { titulo: `Matemática Financeira`, descricao: `Curso completo de Matemática Financeira` },
    ]);
}
exports.seed = seed;
