import { z } from "zod";

export const userRegisterSchema = z.object({
  full_name: z.string().min(3, { message: "name is required" }),
  username: z.string().min(3, { message: "username is required" }),
  email: z.string().min(8, { message: "email is required" }).email("Not a valid email"),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export const companyRegisterSchema = z.object({
  full_name: z.string().min(3, { message: "name is required" }),
  email: z.string().min(8, { message: "email is required" }).email("Not a valid email"),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  company_name: z.string().min(3, { message: "company name is required" }),
  company_type: z.string().min(1, { message: "company type is required example: Acountant" }),
  website: z.string().url({ message: "Invalid url must add http" }),
  company_size: z.string().min(3, { message: "name is required" }),
});

export const loginSchema = z.object({
  email: z.string().min(8, { message: "email is required" }).email("Not a valid email"),
  password: z.string().min(8, { message: "Password must be at least 6 characters" }),
});

export type UserRegisterType = z.infer<typeof userRegisterSchema>;
export type CompanyRegisterType = z.infer<typeof companyRegisterSchema>;
export type LoginType = z.infer<typeof loginSchema>;
