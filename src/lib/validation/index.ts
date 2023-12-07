import * as z from "zod"

export const SignupFormValidation = z.object({
    username: z.string().min(2,{message:'too short'}),
    name: z.string().min(2,{message:'too short'}),
    email: z.string().min(5),
    password: z.string().min(8,{message:'Password must be at least 8 caracters.'}),
  })
