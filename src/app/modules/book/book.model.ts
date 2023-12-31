import { Schema, model } from 'mongoose'
import { BookModel, IBook } from './book.interface'

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publicationYear: { type: String, required: true },
    review: { type: Array },
  },
  {
    timestamps: true,
  }
)

export const Book = model<IBook, BookModel>('Book', bookSchema)
