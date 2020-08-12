import express from 'express'

import CursosController from './controller/cursosController'


const routes = express.Router();

const cursosController = new CursosController()

routes.get('/', (req, resp) => {    
    return resp.json({message: 'Seja bem vindo!!'})
  })
  
routes.get('/cursos', cursosController.index)
routes.post('/matricular', cursosController.matricular)

routes.get('/matriculados', cursosController.list)

export default routes;