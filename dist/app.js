"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_route_1 = require("./app/modules/user/user.route");
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const book_route_1 = require("./app/modules/book/book.route");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//application routes
app.use('/api/v1/users', user_route_1.UserRouters.router);
app.use('/api/v1/books', book_route_1.BookRouters.router);
// testing route
app.get('/', (req, res) => {
    res.send('Sever in running successfully');
});
//global error handler
app.use(globalErrorHandler_1.default);
exports.default = app;
