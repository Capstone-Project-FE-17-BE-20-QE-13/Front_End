import { z } from "zod";
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const companySchema = z.object({
  id: z.number().optional(),
  full_name: z.string(),
  email: z.string().optional(),
  company_name: z.string(),
  address: z.string(),
  phone: z.string(),
  company_size: z.string(),
  company_type: z.string(),
  website: z.string(),
  banners: z
    .any()
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "Max image size is 5MB")
    .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type), "Only .jpg, .jpeg, .png formats are supported")
    .optional()
    .or(z.literal("")),
  status_verification: z.string().optional(),
  description: z.string(),
});

export type CompanyType = z.infer<typeof companySchema>;
