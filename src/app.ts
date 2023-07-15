import express, { Application } from 'express'
import cors from 'cors'
import { UserRouters } from './app/modules/user/user.route'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import { BookRouters } from './app/modules/book/book.route'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes
app.use('/api/v1/users', UserRouters.router)
app.use('/api/v1/books', BookRouters.router)

// testing route
app.get('/', (req, res) => {
  res.send('Sever in running successfully')
})

//global error handler
app.use(globalErrorHandler)

export default app
