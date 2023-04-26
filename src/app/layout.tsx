import Provider from './provider.tsx'
import './globals.css'

export const metadata = {
  title: 'Trivial Pursuit',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
