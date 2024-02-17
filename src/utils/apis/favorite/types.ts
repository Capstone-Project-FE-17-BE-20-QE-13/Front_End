import { z } from "zod";

export const favoriteSchema = z.object({
  id: z.number(),
  jobseeker_id: z.number(),
  vacancy_id: z.number(),
  position: z.string(),
  company_name: z.string(),
});

export type FavoriteType = z.infer<typeof favoriteSchema>;
