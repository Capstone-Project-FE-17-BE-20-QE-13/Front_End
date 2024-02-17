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
  password: z.string().min(8).optional(),
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

export const educationSchema = z.object({
  ed_level: z.string(),
  major: z.string(),
  grad_date: z.string(),
  id: z.number(),
  jobseeker_id: z.number(),
});

export const skillSchema = z.object({
  skill: z.string(),
  description: z.string(),
  id: z.number(),
  jobseeker_id: z.number(),
});

export type JsType = z.infer<typeof jobseekerSchema>;
export type CareersType = z.infer<typeof careersSchema>;
export type EducationType = z.infer<typeof educationSchema>;
export type SkillType = z.infer<typeof skillSchema>;

export interface JobseekerType {
  full_name?: string;
  username?: string;
  email?: string;
  address?: string;
  phone?: string;
  birth_date?: string;
  gender?: string;
  resume?: string;
  password?: string;
}
