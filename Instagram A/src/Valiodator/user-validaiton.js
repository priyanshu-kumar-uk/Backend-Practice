import {body,validationResult} from 'express-validator'

function validate(req,res,next){
    let errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        })
    }
    next()
}


export let userRegister = [
    body("username")
    .notEmpty().withMessage("Username is required")
    .trim()
    .isLength({min:6,max:15}).withMessage("Username must be between 6 and 15 characters"),

    body("email")
    .notEmpty().withMessage("Email is required")
    .trim()
    .isEmail().withMessage("Invalid email format"),     

    body("password")
    .notEmpty().withMessage("Password is required")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
    .withMessage("Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character"), 

    body("fullname")
    .notEmpty().withMessage("Fullname is required")
    .trim()
    .isLength({min:3}).withMessage("Fullname must be at least 3 characters long") ,


     validate

]

export let userLogin = [
    body("email")
    .notEmpty().withMessage("Email is required")
    .trim()
    .isEmail().withMessage("Invalid email format"),
    body("password")
    .notEmpty().withMessage("Password is required")
    .trim(),

    validate
]