import { QueryClientProvider } from '@tanstack/react-query'
import Router from '@/router'
import { queryClient } from '@/lib/query-client'
import '@/index.css'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  )
}

export default App
