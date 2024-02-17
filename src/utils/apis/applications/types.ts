import { z } from "zod";

export const applicationSchema = z.object({
  id: z.number(),
  jobseeker_id: z.number(),
  vacancy_id: z.number(),
  position: z.string(),
  company_name: z.string(),
});

export interface Application {
  id: number;
  jobseeker_id: number;
  vacancy_id: number;
  position: string;
  company_name: string;
}

export interface HistoryApplication {
  id: number;
  jobseeker_id: number;
  vacancy_id: number;
  position: string;
  company_name: string;
  stat_app: string;
}

export interface ListApplication {
  applicant_name: string,
position: string,
status: string
}

export interface AddApplication {
  jobseekerId: number;
  jobId: number;
  status: string;
}

export type ApplicationType = z.infer<typeof applicationSchema>;
