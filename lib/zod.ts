import { object, string } from "zod";

export const RegisterSchema = object({
  name: string().min(1, "Name must be more than 1 character"),
  email: string().email("invalid email"),
  password: string()
    .min(8, "password must be more than 8 characters")
    .max(32, "password must be less than 32 characters"),
  confirmPassword: string()
    .min(8, "password must be more than 8 characters")
    .max(32, "password must be less than 32 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Pasword does not match",
  path: ["confirmPassword"],
});
