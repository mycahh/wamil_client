import NavigationComponent from '../../components/navigation'

export default function RootLayout({ children }) {
  return (
    <main>
      <NavigationComponent />
      <div className="container layout">
        {children}
      </div>
    </main>
  )
}
