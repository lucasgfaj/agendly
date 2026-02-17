import { useState } from 'react'
import './App.css'
import { ModeToggle } from "@/components/mode-toggle"
function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="min-h-screen flex items-center justify-center">
      <ModeToggle />
    </div>
  )
}

export default App
