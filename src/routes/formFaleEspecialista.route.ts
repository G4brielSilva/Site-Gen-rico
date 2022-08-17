import { Router, Request, Response } from 'express';
import Mail from '../service/mail';

const formFaleEspecialistaRoutes = Router();

interface IFormEspecialista{
    to: string;
    message: {    
        Nome: string;
        Empresa: string;
        Email: string;
        TelCel: string;
        Mensagem: string;
        Whatsapp: boolean;
    }
}

// Aqui é uma rota pra poder abrir e visualizar
formFaleEspecialistaRoutes.get('/contato', (request: Request, response: Response)=>{
    response.json({message: 'Aqui ficaria o forms Fale com um Especilista!'});
});

// Esta é a rota do send do forms
formFaleEspecialistaRoutes.post('/contato', (request: Request, response: Response) => {
    const message: IFormEspecialista = Object.assign({}, request.body);

    /** Formato do Request do post:
     * {
     *  to: 'email'
     *  subject: 'assunto'
     *  message: 'mensagem'
     * }
     */
    const msg = message.message;
    Mail.from = msg.Nome;
    Mail.to = message.to; // para quem vai o email
    Mail.subject = '[focusconsultoria] Contato - novo envio'; // assunto

    
    const permissao = msg.Whatsapp == true?'sim':'não';
    const mensagem: string = `
    <b>Informações da Mensagem:</b><br/>
    Nome Completo: ${msg.Nome}
    <br/>
    Nome da Empresa: Empresa: ${msg.Empresa}
    <br/>
    Telefone/Celular: ${msg.TelCel}
    <br/>
    Email: ${msg.Email}
    <br/>
    Descrição: ${msg.Mensagem}
    <br/>
    Aceito que entrem em contato via Whatsapp: ${permissao}
    `
    Mail.message = mensagem; //conteúdo ( a ser tratado )

    Mail.sendMail(); // enviando email

    return response.status(200).send();
})

export { formFaleEspecialistaRoutes };
