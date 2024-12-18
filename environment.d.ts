interface EnvironmentVariables {
  readonly NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID: string
}

declare namespace NodeJS {
  interface ProcessEnv extends EnvironmentVariables {}
}
