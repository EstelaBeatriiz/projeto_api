import express, { Request, Response } from 'express';
import { timeStamp } from 'node:console';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello Word',
    timeStamp: new Date().toISOString(),
   });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
