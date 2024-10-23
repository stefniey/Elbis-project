"use strict";
// // logics behind what the app should do in response to user actions or requests.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../entity/User");
const bcrypt = __importStar(require("bcryptjs"));
const jwt = __importStar(require("jsonwebtoken"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = (0, typeorm_1.getRepository)(User_1.User);
    const { name, email, password } = req.body; // Change 'username' to 'name'
    try {
        const user = new User_1.User();
        user.name = name; // Use 'name' here
        user.email = email;
        user.password = yield bcrypt.hash(password, 10); // Hash the password before saving
        yield userRepository.save(user);
        res.status(201).send({ message: 'User created successfully' });
    }
    catch (error) {
        res.status(400).send({ message: 'Error creating user', error });
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userRepository = (0, typeorm_1.getRepository)(User_1.User);
    const { email, password } = req.body;
    try {
        const user = yield userRepository.findOne({ where: { email } });
        if (!user) {
            return res.status(400).send({ message: 'Invalid credentials' });
        }
        const isValidPassword = user.password ? yield bcrypt.compare(password, user.password) : false;
        if (!isValidPassword) {
            return res.status(400).send({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.send({ message: 'Login successful', token });
    }
    catch (error) {
        res.status(400).send({ message: 'Error logging in', error });
    }
});
exports.loginUser = loginUser;
