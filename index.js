import express from 'express'
import bodyParser from 'body-parser'
import {initDBConnection} from './src/database/connection.js'
import todoRoutes from './src/routes/todoRoutes.js'
import dotenv from 'dotenv'

dotenv.config();

const app = express()
const {PORT} = process.env

initDBConnection()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

todoRoutes(app)

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(PORT, () => {
    console.log(`Your app is running on port ${PORT}`)
})