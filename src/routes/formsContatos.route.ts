import { Router, Request, Response} from 'express';
import { SendFormMailController } from '../usecases/SendFormMailController';


const formsContatosRoutes = Router();
const sendFormMailController =  new SendFormMailController();

// Aqui é uma rota pra poder abrir e visualizar
formsContatosRoutes.get('/contato', (request: Request, response: Response)=>{
    response.json({message: 'Aqui ficaria o forms Fale com um Especilista!'});
});

// Esta é a rota do send do forms
formsContatosRoutes.post('/contato', sendFormMailController.handle);

formsContatosRoutes.post('/pesquisademercado', sendFormMailController.handle);

export { formsContatosRoutes };