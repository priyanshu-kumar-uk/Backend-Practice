import {body,validationResult} from 'express-validator'
 

export function validateRequest(req,res,next){
    const error = validationResult(req)

    if(!error.isEmpty()){  // agar error empty nhi hai to iska matlab validation me problem hai phir hum error ko response me bhejenge
        return res.status(403).json({
            message:"validation problem",
            success : false,
            error: error.array()
        })
    }

    next()

}

export const registerValidation = [
     body("email")
    .trim()                     //for space ko remove krne k liye
    .notEmpty().withMessage("Email is required") //for error message
    .isEmail().withMessage("Please enter a valid email"),

  body("password")
    .trim()         
    .notEmpty().withMessage("Password is required")
    .matches(/^(?=.*[A-Za-z])(?=.*\d).{5,}$/).withMessage("Password must contain at least one letter, one number, and be 5 characters long"),

  body("userType")
    .optional()
    .isIn(["user", "artist"]).withMessage("userType must be either user or artist"),

    validateRequest
]

