import express from 'express'
import cors from 'cors' 
import userRouter from './src/app/moduels/user/user.routes.js'
import connection from './src/db/connection.js'
import categoryRouter from './src/app/moduels/category/category.routes.js'
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use('/user',userRouter)
app.use('/category',categoryRouter)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use((err,req,res,next)=>{
    res.status(err.statusCode || 500).json({message: err.message})
})


