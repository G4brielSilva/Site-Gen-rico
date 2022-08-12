import {Router} from 'express'
import { helloWorldRoutes } from './helloWorld.route';
import { formFaleEspecialistaRoutes } from './formFaleEspecialista.route';
const router = Router();

/**
 * Esse arquivo é o centro das rotas.
 * Cada rota, é criada separadamente num arquivo x.route.ts e é importado e utilizado dentro do router
 * E então o server.ts fica mais clean.
 */

router.use('/',helloWorldRoutes);
router.use('/',formFaleEspecialistaRoutes);

export{router}