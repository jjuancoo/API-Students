import { Router } from 'express'
import { getAll } from '../controllers/student.controller.js'

const router = Router()

router.get('/getAll', getAll)

router.get('/sqrt/:num', (req, res) => {
    const { num } = req.params
    const sqrt = Math.sqrt(num)
    res.json({"result": sqrt})
})

export default router