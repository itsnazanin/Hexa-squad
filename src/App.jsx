import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from './ErrorBoundary';
import Navbar from './components/header/Navbar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/footer/Footer';
import LanguageManager from './core/components/LanguageManager';
import AuthFlow from './components/Auth/AuthFlow';
import { AuthModalProvider } from './components/Auth/AuthModalContext';
import { AuthProvider } from './components/Auth/AuthContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AuthModalProvider>
          
          <LanguageManager />

          <ErrorBoundary>
            <AuthFlow />
            <AppRoutes />
          </ErrorBoundary>
        </AuthModalProvider>
      </AuthProvider>

        
    </QueryClientProvider>
  )
}

export default App
