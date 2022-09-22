import { Router, Request, Response } from "express";

const helloWorldRoutes = Router();

//Essa aqui é a rota base para definir o carregamento do html, coloque sua rota e comente a outra
// cons abs_path = 'C:\';
const abs_path = '/media/gabriel/Data/Projetos/Estudo/SiteGenerico'

helloWorldRoutes.get('/',(req: Request, res: Response)=> {
    // res.json({message: 'Hello World with Typescript'});
    res.sendFile(abs_path + 'src/pages/home.html');
});

export {helloWorldRoutes};
