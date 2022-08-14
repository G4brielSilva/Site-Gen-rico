import { Router, Request, Response } from 'express';
import Mail from '../service/mail';

const formFaleEspecialistaRoutes = Router();

// Aqui é uma rota pra poder abrir e visualizar
formFaleEspecialistaRoutes.get('/contato', (req: Request, res: Response)=>{
    res.json({message: 'Aqui ficaria o forms Fale com um Especilista!'});
});

// Esta é a rota do send do forms
formFaleEspecialistaRoutes.post('/contato', (req: Request, res: Response) => {
    const message = Object.assign({}, req.body);

    /** Formato do Request do post:
     * {
     *  to: 'email'
     *  subject: 'assunto'
     *  message: 'mensagem'
     * }
     */

    Mail.to = message.to; // para quem vai o email
    Mail.subject = message.subject; // assunto
    Mail.message = message.message; //conteúdo ( a ser tratado )

    const result = Mail.sendMail(); // enviando email

    res.status(200).json({'result': result})
})

export { formFaleEspecialistaRoutes };