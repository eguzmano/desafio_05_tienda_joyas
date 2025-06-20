import { Router } from 'express'
import { getJoyasHateoas, getJoyasHateoasFiltered } from '../src/controllers/joyasController.js'

const router = Router()

router.get('/joyas', getJoyasHateoas)
router.get('/joyas/filtros', getJoyasHateoasFiltered)

export default router
