import { z } from 'zod';

export const ValidSnippet = z.object({
  sign: z.string(),
  text: z.string()
});