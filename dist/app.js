"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Product_routes_1 = require("./Product/Product.routes");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use('/api', Product_routes_1.ProductRout);
exports.app.get('/', (req, res) => {
    res.send({ message: 'hello   this is my ecomarce server ' });
});
exports.app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    });
});
