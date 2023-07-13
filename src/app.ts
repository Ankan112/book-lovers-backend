import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { UserRouters } from './app/modules/user/user.route'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes
app.use('/api/v1/users', UserRouters.router)

//testing route
app.get('/', (req: Request, res: Response) => {
  res.send('Server is running successfully')
})

export default app
