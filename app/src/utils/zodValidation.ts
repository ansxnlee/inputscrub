import { z } from 'zod';
import { InputProps } from './constants';

export const ValidSnippet = z.object({
  sign: z.string().min(2),
  text: z.string().max(InputProps.snippetTextAreaMax)
});