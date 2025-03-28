import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { UserProvider } from './shared/context/UserContext.tsx'

createRoot(document.getElementById('root')!).render(
    <UserProvider>
      <App />
    </UserProvider>
)
