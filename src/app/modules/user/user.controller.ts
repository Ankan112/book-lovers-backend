import { RequestHandler } from 'express'
import { UserService } from './user.services'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { IUser } from './user.interface'

const createdUser: RequestHandler = catchAsync(async (req, res) => {
  const { user } = req.body
  const result = await UserService.createUser(user)

  sendResponse<IUser>(res, {
    statusCode: 200,
    success: true,
    message: 'User Created Successfully',
    data: result,
  })
})

export const UserController = {
  createdUser,
}
