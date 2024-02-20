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

export const verifySchema = z.object({
  id: z.string(),
});

export const paymentSchema = z.object({
  bank_account: z.string(),
});

export type CompanyType = z.infer<typeof companySchema>;
export type VerifyType = z.infer<typeof verifySchema>;
export type PaymentType = z.infer<typeof paymentSchema>;

export interface CompanyAddType {
  id?: number;
  full_name?: string | any;
  email?: string | any;
  company_name?: string | any;
  address?: string | any;
  phone?: string | any;
  company_size?: string | any;
  company_type?: string | any;
  website?: string | any;
  banners?: any;
  status_verification?: string | any;
  description?: string | any;
}

export interface TransactionResponse {
  id?: string;
  order_id?: string;
  amount?: string;
  bank_account?: string;
  va_number?: string;
  user_id?: string;
  status?: string;
  created_at?: string;
  updated_at?: string;
}
