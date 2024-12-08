import express from 'express'
import{
    getAllPeminjaman,
    getPeminjamanById,
    addPeminjaman,
    updatePeminjaman,
    pengembalianBarang,
    getUsageAnalysis,
    analyzeItems
} from '../controllers/peminjaman_controllers.js'

// import { authenticate, authorize } from '../controllers/peminjaman_controllers.js'
// import { IsAdmin } from '../middleware/role_validation.js'

const app = express()
app.use(express.json())

app.get('/', getAllPeminjaman)
app.get('/PeminjamanId/:id',getPeminjamanById)
app.post('/addPeminjaman',addPeminjaman)
app.put('/upPeminjaman/:id',updatePeminjaman)
app.post('/return', pengembalianBarang)
app.post('/usageriport', getUsageAnalysis)
app.post('/borrowanalysis', analyzeItems)

// app.post('/login', authenticate)

export default app