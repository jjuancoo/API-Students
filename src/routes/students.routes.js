import { Router } from 'express'

const router = Router()

router.get('/sqrt/:num', (req, res) => {
    const { num } = req.params
    const sqrt = Math.sqrt(num)
    res.json({"result": sqrt})
})

export default router