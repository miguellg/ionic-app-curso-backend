import { Request, Response } from 'express';
import knex from '../database/connection';
import * as firebase from 'firebase-admin'
import * as serviceAccount from '../../diversos-285721-44a640409e15.json'

const params = {
    type: serviceAccount.type,
    projectId: serviceAccount.project_id,
    privateKeyId: serviceAccount.private_key_id,
    privateKey: serviceAccount.private_key,
    clientEmail: serviceAccount.client_email,
    clientId: serviceAccount.client_id,
    authUri: serviceAccount.auth_uri,
    tokenUri: serviceAccount.token_uri,
    authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
    clientC509CertUrl: serviceAccount.client_x509_cert_url
  }
  
  firebase.initializeApp({
    credential: firebase.credential.cert(params),
  })

class CursosController {
    async index(request: Request, response: Response) {
        const cursos = await knex('cursos').select('*');    
    
        return response.json(cursos);
    }

    async list(request: Request, response: Response) {
        const alunos = await knex('alunos').select('*');    
    
        return response.json(alunos);
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
    
        this.notificar(token)

        return response.json({
            id,
            ... item
        });
    }

    async notificar(token: string){
        var message = {        
        notification: {
            title: 'Cursos Online',
            body: 'Curso encerrado! Agradecemos sua participação.'
          },
        token: token
        };

        firebase.messaging().send(message)
        .then((response) => {
            console.log('Mensagem enviada com sucesso:', response);
        })
        .catch((error) => {
            console.log('Erro ao enviar mensagem:', error);
        });

    }

    
}

export default CursosController;