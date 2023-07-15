import { RequestHandler } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { BookService } from './bookservice'
import sendResponse from '../../../shared/sendResponse'
import { IBook } from './book.interface'

const createNewBook: RequestHandler = catchAsync(async (req, res) => {
  const { book } = req.body
  const result = await BookService.createNewBook(book)

  sendResponse<IBook>(res, {
    statusCode: 200,
    success: true,
    message: 'New Book Created Successfully',
    data: result,
  })
})

const getAllBooks: RequestHandler = catchAsync(async (req, res) => {
  const result = await BookService.getAllBooks()

  sendResponse<IBook[]>(res, {
    statusCode: 200,
    success: true,
    message: 'All books retrieved successfully',
    data: result,
  })
})

const getSingleBook: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id
  const result = await BookService.getSingleBook(id)

  sendResponse<IBook>(res, {
    statusCode: 200,
    success: true,
    message: 'Book retrieved successfully',
    data: result,
  })
})

export const BookController = {
  createNewBook,
  getAllBooks,
  getSingleBook,
}
