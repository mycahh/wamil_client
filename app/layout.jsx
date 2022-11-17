import '../styles/styles.scss'

import NavigationComponent from '../components/navigation'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head />
      <body>
        <NavigationComponent />
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  )
}
