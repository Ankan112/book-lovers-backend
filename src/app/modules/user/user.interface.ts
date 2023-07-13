import { Model } from 'mongoose'

export type IUser = {
  name: string
  email: string
  password: string
  confirmPassword: string
}
export type UserModel = Model<IUser, object>
