import { Router, Request, Response } from 'express';

const formFaleEspecialistaRoutes = Router();

formFaleEspecialistaRoutes.get('/contato', (req: Request, res: Response)=>{
    res.json({message: 'Aqui ficaria o forms Fale com um Especilista!'});
});

export { formFaleEspecialistaRoutes };