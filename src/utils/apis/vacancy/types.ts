import { z } from "zod";

export interface Vacancies {
  id: number;
  position: string;
  company_name: string;
  address: string;
  job_type: string;
  salary_range: string;
  website: string;
  description: string;
  requirement: string;
  saveVacancy: React.MouseEventHandler;
}

export interface VacanciesProps {
  id?: number;
  position?: string;
  company_name?: string;
  address?: string;
  job_type?: string;
  salary_range?: string;
  website?: string;
  description?: string;
  requirement?: string;
  saveVacancy?: React.MouseEventHandler;
}

export interface AllVacancies {
  id: number;
  company_id: number;
  name: string;
  job_type: string;
  salary_range: string;
  category: string;
  job_desc: string;
  job_req: string;
  status: string;
  adress: string;
  saveVacancy?: React.MouseEventHandler;
}

export const vacanciesSchema = z.object({
  id: z.number().optional(),
  company_id: z.number().optional(),
  name: z.string(),
  address: z.string(),
  job_type: z.string(),
  salary_range: z.string(),
  category: z.string(),
  job_desc: z.string(),
  job_req: z.string(),
  status: z.string(),
});

export type VacancyType = z.infer<typeof vacanciesSchema>;
