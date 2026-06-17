import express, { Request, Response } from 'express';
import { timeStamp } from 'node:console';
import { User } from './user';


const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bem-vindo a API de Usuários',
    timeStamp: new Date().toISOString(),
    status: 'API funcionando!'
   })
})

app.get('/users', (req: Request, res: Response) => {
  const user = new User('estela', 'estela@gmail.com', '123')

  console.log(user.verificarSenha('123'))
  
  res.json({
    message: `Dados usuario: ${user.nome}`,
    timeStamp: new Date().toISOString(),
    user: user,
    status: 'API funcionando!'
  })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
})