import ApiError from '../../../errors/ApiError'
import { IBook } from './book.interface'
import { Book } from './book.model'

const createNewBook = async (book: IBook): Promise<IBook | null> => {
  const createdNewBook = await Book.create(book)
  if (!createdNewBook) {
    throw new ApiError(400, 'Failed to crate book!')
  }
  return createdNewBook
}

const getAllBooks = async (): Promise<IBook[] | null> => {
  const result = await Book.find({}).sort({ createdAt: 'desc' })
  return result
}

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findOne({ _id: id })
  return result
}

export const BookService = {
  createNewBook,
  getAllBooks,
  getSingleBook,
}
