import express from 'express'
import { Login, register } from '../controller/Users.js'

const Router = express.Router()

Router.post("/register",register);
Router.post("/login",Login)

export default Router;