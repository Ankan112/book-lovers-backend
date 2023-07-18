import { Model } from 'mongoose'

export type IBook = {
  title: string
  author: string
  genre: string
  publicationYear: string
  review?: [string]
}
export type BookModel = Model<IBook, Record<string, unknown>>
