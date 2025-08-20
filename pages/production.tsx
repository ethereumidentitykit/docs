// Component that only runs in production.
export default function Production({ children }: { children: React.ReactNode }) {
  if (process.env.NODE_ENV !== 'production') return null
  return children
}
