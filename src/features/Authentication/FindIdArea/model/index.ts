import { z } from 'zod'

export const schema = z.object({
  email: z.string().email(),
})

export type Email = z.infer<typeof schema>
