import { z } from "zod"

export const SignupValidation = z.object({
  name: z.string().min(2, { message: 'Name should only contain letters and spaces.' }),
  username: z.string().min(2, { message: 'Username can contain letters, numbers, and underscores only.'}),
  email: z.string().email(),
  password: z.string().min(8, { message: 'Password must be atleast 8 characters long' }),
})