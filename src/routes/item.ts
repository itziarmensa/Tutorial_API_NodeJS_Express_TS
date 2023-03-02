/** Esta ruta nos va a devolver un array de objetos*/

import { Request, Response, Router } from "express";

const router = Router(); //es el manejador de las rutas, las interpreta, con esto podremos crear los GET, POST ....

/**
 * http://localhost:3002/items [GET]
 */
router.get('/', (req:Request, res:Response) => { //No tenemos que poner /items porque lo estamos haciendo en el index
    res.send({data: 'AQUÍ_VAN_LOS_MODELOS'});

})

export {router};