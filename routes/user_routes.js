import express from 'express'
import{
    getAllUser,
    getUserById,
    addUser,
    updateUser,
    deleteUser
} from '../controllers/user_controllers.js'

// import { authenticate, authorize } from '../controller/auth_controller.js'
// import { IsAdmin } from '../middleware/role_validation.js'

const app = express()
app.use(express.json())

import { authenticate, authorize } from '../controllers/auth_controllers.js'
import { IsAdmin } from '../middleware/roleValidation.js'

app.get('/', getAllUser)
app.get('/userId/:id',getUserById)
app.post('/addUser',addUser)
app.put('/upUser/:id',updateUser)
app.delete('/delUser/:id',deleteUser)

// app.post('/login', authenticate)

export default app