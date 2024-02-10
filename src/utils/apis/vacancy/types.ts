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
