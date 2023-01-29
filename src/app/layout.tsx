import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {process.env.NODE_ENV === 'development'}
      <head />
      <body>{children}</body>
    </html>
  )
}
