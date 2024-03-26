const mongoose = require('mongoose')
const url_db = 'mongodb://localhost:27017/utma'

mongoose.connect(url_db)
.then(() => {
    console.log ('Conexion Exitosa')
})
.catch((err) => {
    console.log ('No jalo :(')
})

const alumnos_esquema = new mongoose.Schema(
    {
      name: {
        type:String
      },
      apepat: {
        type:String
      },
      apemat: {
        type:String
      },
      numerotel: {
        type:Number
      }
    }
)

const alumnos = new mongoose.model('Tabla de registro de Alumnos', alumnos_esquema)

alumnos. create(
    {
        name: 'Jesus',
        apepat: 'Salazar',
        numerotel: 4495874896
    }
)  