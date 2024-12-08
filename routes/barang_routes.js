import express from 'express'
import{
    getAllBarang,
    getBarangById,
    addBarang,
    updateBarang,
    deleteBarang
} from '../controllers/barang_controllers.js'

import { authenticate, authorize } from '../controllers/auth_controllers.js'
import { IsAdmin } from '../middleware/roleValidation.js'

const app = express()
app.use(express.json())

app.get('/', getAllBarang)
app.get('/barangId/:id',getBarangById)
app.post('/addBarang',authorize, addBarang)
app.put('/upBarang/:id',authorize,[IsAdmin], updateBarang)
app.delete('/:id',deleteBarang)

// app.post('/login', authenticate)

export default app