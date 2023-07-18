import express from 'express'
import { BookController } from './book.controller'
const router = express.Router()

router.post('/create-new-book', BookController.createNewBook)
router.get('/book/:id', BookController.getSingleBook)
router.delete('/book/:id', BookController.deleteBook)
router.patch('/book/:id', BookController.updateBook)
router.post('/review/:id', BookController.postReview)
router.get('/all-books', BookController.getAllBooks)

export const BookRouters = { router }
