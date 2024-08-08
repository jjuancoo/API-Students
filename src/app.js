import express from 'express'
import morgan from 'morgan'
import router from './routes/students.routes.js'

const app = express()

//Configuraciones

//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(router)

export default app