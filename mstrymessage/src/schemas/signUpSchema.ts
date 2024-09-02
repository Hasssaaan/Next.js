import {z} from 'zod'

export const usernameValidation=z
   .string()
   .min(2,"UserName must be atleast 2 characters")
   .max(20,"UserName must be no more than 20 charcaters")
   .regex(/^[a-zA-Z0-9_]+$/,"UserName must contain special character")

export const signUpSchema=z.object({

    username:usernameValidation,
    email:z.string().email({message:'Invalid email address'}),
    password:z.string().min(6,{message:"Password must be atleast 6 characters"})
})