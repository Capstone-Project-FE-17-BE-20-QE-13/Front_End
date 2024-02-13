import { z } from "zod";

export const jobseekerSchema = z.object({
  id: z.number().optional(),
  full_name: z.string().min(3, { message: "Name is required and must be at least 3 characters" }),
  username: z.string().min(3, { message: "Username must be at least 3 characters" }),
  email: z.string().email("Enter a valid email").min(1, { message: "Enter email" }),
  address: z.string().min(1, { message: "Enter address" }),
  phone: z.string(),
  birth_date: z.string(),
  gender: z.string(),
  resume: z.string(),
  password: z.string().optional(),
  Careers: z.string().array().optional(),
  Educations: z.string().array().optional(),
  Cvs: z.string().array().optional(),
  Licenses: z.string().array().optional(),
  Skills: z.string().array().optional(),
});

export const careersSchema = z.object({
  company_name: z.string(),
  date_start: z.string(),
  date_end: z.string(),
  id: z.number(),
  jobseeker_id: z.number(),
  position: z.string(),
});

export type JsType = z.infer<typeof jobseekerSchema>;
export type CareersType = z.infer<typeof careersSchema>;
