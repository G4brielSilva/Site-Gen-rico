import { Router, Request, Response } from 'express';

const helloWorldRoutes = Router();

// Rota inicial, equivalente a home :)
helloWorldRoutes.get('/',(req: Request, res: Response)=> {
    res.json({message: 'Hello World with Typescript'});
})

export {helloWorldRoutes}