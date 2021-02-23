import express from 'express';

const app = express();

app.get('/', (request, reponse) => {
  return reponse.json({ menssage: 'Hello World - NLW04' });
});

app.post('/', (request, reponse) => {
  return reponse.json({ menssage: 'Os dados foram salvos com sucesso!' });
});

app.listen(3333, () => console.log('Server is running!'));