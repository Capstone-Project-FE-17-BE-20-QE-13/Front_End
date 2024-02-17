import { z } from "zod";

export const applicationSchema = z.object({
  id: z.number(),
  jobseeker_id: z.number(),
  vacancy_id: z.number(),
  position: z.string(),
  company_name: z.string(),
});

export interface AddAplication {
    jobseekerId: number,
    jobId: number,
    status: string
  }

export type ApplicationType = z.infer<typeof applicationSchema>;
