import { z } from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_DOC_TYPES = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const jobseekerSchema = z.object({
  id: z.number().optional(),
  full_name: z.string().min(3, { message: "Name is required and must be at least 3 characters" }),
  banners: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "Only .jpg, .jpeg, .png formats are supported")
    .optional()
    .or(z.literal("")),
  username: z.string().min(3, { message: "Username must be at least 3 characters" }).optional(),
  email: z.string().email("Enter a valid email").min(1, { message: "Enter email" }).optional(),
  address: z.string().min(1, { message: "Enter address" }),
  phone: z.string(),
  birth_date: z.string(),
  gender: z.string(),
  resume: z.string(),
  password: z.string().optional(),
  Careers: z.string().array().optional(),
  Educations: z.string().array().optional(),
  Cvs: z
    .object({
      cv_file: z.string(),
    })
    .optional(),
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

export const licenseSchema = z.object({
  id: z.number().optional(),
  jobseeker_id: z.number().optional(),
  license_name: z.string(),
  pub_date: z.string(),
  exp_date: z.string(),
  license: z
    .any()
    .refine((files) => files?.[0].size <= MAX_FILE_SIZE, "Max doc size is 5MB")
    .refine((files) => ACCEPTED_DOC_TYPES.includes(files?.[0]?.type), "Only .pdf format are supported")
    .optional()
    .or(z.literal("")),
});

export const cvSchema = z.object({
  id: z.number().optional(),
  jobseeker_id: z.number().optional(),
  cv_file: z
    .any()
    .refine((files) => files?.[0].size <= MAX_FILE_SIZE, "Max doc size is 5MB")
    .refine((files) => ACCEPTED_DOC_TYPES.includes(files?.[0]?.type), "Only .pdf format are supported")
    .optional()
    .or(z.literal("")),
});

export type JsType = z.infer<typeof jobseekerSchema>;
export type CareersType = z.infer<typeof careersSchema>;
export type EducationType = z.infer<typeof educationSchema>;
export type SkillType = z.infer<typeof skillSchema>;
export type LicenseType = z.infer<typeof licenseSchema>;
export type CVType = z.infer<typeof cvSchema>;

export interface JobseekerType {
  full_name?: string | any;
  banners?: any;
  username?: string | any;
  email?: string | any;
  address?: string | any;
  phone?: string | any;
  birth_date?: string | any;
  gender?: string | any;
  resume?: string | any;
  password?: string | any;
}

export interface JobseekerTypeApi {
  full_name: string;
  banners: any;
  username: string;
  email: string;
  address: string;
  phone: string;
  birth_date: string;
  gender: string;
  resume: string;
  password: string;
}
