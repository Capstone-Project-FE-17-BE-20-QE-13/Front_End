import { z } from "zod";

export const jobseekerSchema = z.object({
  full_name: z.string().min(3, { message: "Name is required and must be at least 3 characters" }),
  username: z.string().min(3, { message: "Username must be at least 3 characters" }),
  email: z.string().email("Enter a valid email").min(1, { message: "Enter email" }),
  address: z.string().min(1, { message: "Enter address" }),
  phone: z.string(),
  birth_date: z.string(),
  gender: z.string(),
  resume: z.string(),
  Careers: z.string().array(),
  Educations: z.string().array(),
  Cvs: z.string().array(),
  Licenses: z.string().array(),
  Skills: z.string().array(),
});

export type JsType = z.infer<typeof jobseekerSchema>;
