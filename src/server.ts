import express from 'express'
import cors from 'cors';
import routes from './routes'
import * as firebase from 'firebase-admin'
import * as serviceAccount from '../diversos-285721-44a640409e15.json'

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

var app  = express();
app.use(cors());
app.use(express.json())
app.use(routes);

app.listen(process.env.POST || 3333)