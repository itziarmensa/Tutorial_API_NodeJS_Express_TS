/*Archivo principal de nuestra app*/

import "dotenv/config"
import express from "express"
import cors from "cors"

const PORT = process.env.PORT || 3001; //Estamos usando el puerto que está especificado en la variable de entorno PORT y si no está especificada coge el 3001

const app = express()
app.use(cors())


/*Le decimos a nuestra app que empiece a escuchar por el puerto que hemos configurado, y si funciona que imprima el mensaje*/
app.listen (PORT, () => console.log(`Listo por el puerto ${PORT}`))

/*Para probar esto vamos al package.json y en scripts creamos lo necesario (ver)*/


