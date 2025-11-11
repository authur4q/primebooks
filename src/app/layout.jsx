import Nav from './components/nav/page'
import './globals.css'
import { AuthProvider } from '../../provider'

export const metadata = {
  title: 'primeBooks',
  description: 'Get reviews of all your favorite books from primeBooks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
        <Nav></Nav>
        {children}
        </AuthProvider>
        </body>
    </html>
  )
}
