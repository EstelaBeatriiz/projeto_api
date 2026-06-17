import express, { Request, Response } from 'express';
import { User } from './user';

const app = express();
const PORT = 3000;

app.use(express.json());

const users: User[] = []
const user = new User('estela', 'estela@gmail.com', '123')
const user1 = new User('Roberto', 'roberto@gmail.com','23456')
const user2 = new User('Beatriz', 'bia@gmail.com','131106')

users.push(user,user1,user2)

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Bem-vindo a API de Usuários',
    timeStamp: new Date().toISOString(),
    status: 'API funcionando!'
   })
})

app.get('/users', (req: Request, res: Response) => {

  const dadosPublicos = users.map(user => new User(user.nome, user.email).getDadosPublicos())
  
  res.json({
    message: `lista de usuários: ${dadosPublicos.length}`,
    timeStamp: new Date().toISOString(),
    users: dadosPublicos,
    status: 'API funcionando!'
  })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})