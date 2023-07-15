import express from 'express'
import { BookController } from './book.controller'
const router = express.Router()

router.post('/create-new-book', BookController.createNewBook)
router.get('/book/:id', BookController.getSingleBook)
router.get('/all-books', BookController.getAllBooks)

export const BookRouters = { router }
