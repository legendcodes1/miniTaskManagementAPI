// src/index.ts
import express, { type Request, type Response } from 'express';
import { users } from './users.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript + Express!');
});


app.get("/users", (req: Request, res:Response) => {
  res.status(200).send({success: true}, )
})

app.get("/user/:id", (req:Request, res:Response) =>{
  const {id} = req.params;

  const foundUser = users.find((user) => user.id === id);

  if(!foundUser){
    return res.status(400).send({
      sucess: true,
      message: "No users found"
    }
    )
  }

  return res.status(200).send({message: "user created succesfully", success: true, error: null, data:foundUser})
})
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
