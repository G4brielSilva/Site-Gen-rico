import { Router, Request, Response } from 'express';

const helloWorldRoutes = Router();

// Rota inicial, equivalente a home :)
helloWorldRoutes.get('/',(request: Request, response: Response)=> {
    response.json({message: 'Hello World with Typescript'});
})

export {helloWorldRoutes}