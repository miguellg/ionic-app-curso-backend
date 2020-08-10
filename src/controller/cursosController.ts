import { Request, Response } from 'express';
import knex from '../database/connection';

class CursosController {
    async index(request: Request, response: Response) {
        const cursos = await knex('cursos').select('*');    
    
        return response.json(cursos);
    }

    async matricular(request: Request, response: Response) {
        const {
            nome,
            idade,
            telefone,
            email, 
            token,
            curso
        } = request.body;
    
        let item = {
            nome,
            idade,
            telefone,
            email,
            curso_id: curso,
            token
        };
        
        const insertedIds = await knex('alunos').insert(item);
        
    
        const id = insertedIds[0];           
    
        return response.json({
            id,
            ... item
        });
    }
}

export default CursosController;