"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../database/connection"));
const firebase = __importStar(require("firebase-admin"));
const serviceAccount = __importStar(require("../../diversos-285721-44a640409e15.json"));
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
};
firebase.initializeApp({
    credential: firebase.credential.cert(params),
});
class CursosController {
    async index(request, response) {
        const cursos = await connection_1.default('cursos').select('*');
        return response.json(cursos);
    }
    async matricular(request, response) {
        const { nome, idade, telefone, email, token, curso } = request.body;
        let item = {
            nome,
            idade,
            telefone,
            email,
            curso_id: curso,
            token
        };
        const insertedIds = await connection_1.default('alunos').insert(item);
        const id = insertedIds[0];
        // this.notificar(token)
        return response.json(Object.assign({ id }, item));
    }
}
exports.default = CursosController;
