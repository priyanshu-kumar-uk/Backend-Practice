import {body, validationResult} from 'express-validator'

function validate(req,res,next){
    let errors = validationResult(req)
    if(!errors.isEmpty()){  
        return res.status(422).json({
            message: "Validation Error",
            success: false, 
            errors: errors.array()
     })   
    }
    next()
}

 export let uservalid = [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").isEmail().withMessage("Email is not valid"),
    body("password").isLength({min:6}).withMessage("Password must be at least 6 characters long"),
    body("fullname").notEmpty().withMessage("Fullname is required"),

    validate
]