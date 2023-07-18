"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRouters = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post('/create-new-book', book_controller_1.BookController.createNewBook);
router.get('/book/:id', book_controller_1.BookController.getSingleBook);
router.delete('/book/:id', book_controller_1.BookController.deleteBook);
router.patch('/book/:id', book_controller_1.BookController.updateBook);
router.post('/review/:id', book_controller_1.BookController.postReview);
router.get('/all-books', book_controller_1.BookController.getAllBooks);
exports.BookRouters = { router };
