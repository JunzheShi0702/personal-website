import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { appRouter } from './router'

function App() {
  useEffect(() => {
    const url = new URL(window.location.href)
    const redirectTarget = url.searchParams.get('redirect')

    if (!redirectTarget) return

    window.history.replaceState({}, '', redirectTarget)
  }, [])

  return <RouterProvider router={appRouter} />
}

export default App
