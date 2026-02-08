import mongoose from "mongoose";
import UserModel from "../models/UserModel.js";
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // email existence check
        const User = await UserModel.findOne({ email })
        if (User) {
            return res.json({
                messege: "email is already Exist",
                success: false
            })
        }

        // and email check whether is real or not

        const Isemail = validator.isEmail(email)
        if (!Isemail) {
            return res.json({
                messege: "email is incorrect",
                success: false
            })
        }


        // password hashing
        const hashpassword = await bcrypt.hash(password, 10)
        if (password.length < 10) {
            return res.json({
                messege: "password should be 10 character",
                success: false
            })
        }

        const Users = new UserModel({
            name,
            email,
            password: hashpassword
        })

        await Users.save()

        const token = jwt.sign(
            { UserId: Users._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )

        res.send({
            messege: "registration is successfull",
            success: true,
            token
        })

    } catch (error) {
        res.json({
            messege: res?.messege,
            success: false
        })
    }
}


// for login user 


export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const User = await UserModel.findOne({ email })

        if (!User) {
            res.json({
                messege: "email is not registered",
                success: false
            })
        }

        const Ispassword = await bcrypt.compare(password, User.password)
        if (!Ispassword) {
            res.json({
                messege: "password is incorrect",
                success: false
            })
        }


        const token = jwt.sign(
            { UserId: User._id },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        )
        res.json({
            messege: "login successfull",
            success: true,
            token
        })


    } catch (error) {
        res.json({
            messege: error.messege,
            success: false
        })
    }
}