import * as z from 'zod'

export const configSchema = z.object({
  walletConnectProjectId: z.string(),
})

export const envConfig = configSchema.parse({
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID,
})

export type Config = z.infer<typeof configSchema>
