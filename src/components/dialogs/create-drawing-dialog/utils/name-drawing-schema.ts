import { z } from 'zod';

const nameDrawingSchema = z.object({
  name: z
    .string()
    .min(3, 'Name has to be at least 3 characters long')
    .max(45, 'Name has to be at most 45 characters long'),
});

type NameDrawingSchemaType = z.infer<typeof nameDrawingSchema>;

export { nameDrawingSchema };
export type { NameDrawingSchemaType };
