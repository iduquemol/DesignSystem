import { useState } from "react"
import { LoginForm } from "@/components/login-form"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">Bienvenido, ya iniciaste sesión</h1>
    </div>
  )
}

export default App