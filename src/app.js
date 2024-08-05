import express from 'express'
import morgan from 'morgan'
import router from './routes/students.routes.js'

const app = express()

//Configuraciones

//Middlewares
app.use(morgan('dev'))
app.use(router)

export default app