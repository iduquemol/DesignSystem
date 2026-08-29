import { useState } from "react"
import { CardDemo } from "./components/CardDemo"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // if (!isLoggedIn) {
  //   return <CardDemo  />
  // }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <CardDemo />
    </div>
  )
}

export default App