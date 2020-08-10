"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cursosController_1 = __importDefault(require("./controller/cursosController"));
const routes = express_1.default.Router();
const cursosController = new cursosController_1.default();
routes.get('/', (req, resp) => {
    return resp.json({ message: 'Seja bem vindo!!' });
});
routes.get('/cursos', cursosController.index);
routes.post('/matricular', cursosController.matricular);
exports.default = routes;
