import express from 'express'
import cors from 'cors';
import routes from './routes'
import * as firebase from 'firebase-admin'
import * as serviceAccount from '../diversos-285721-44a640409e15.json'

var app  = express();
app.use(cors());
app.use(express.json())
app.use(routes);

app.listen(process.env.POST || 3333)