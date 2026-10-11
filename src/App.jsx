import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ErrorBoundary from './ErrorBoundary';
import Navbar from './components/header/Navbar';
import AppRoutes from './routes/AppRoutes';
import Footer from './components/footer/Footer';
import LanguageManager from './core/components/LanguageManager';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageManager />
      <ErrorBoundary>
        <Navbar />
        <AppRoutes />
        <Footer />
      </ErrorBoundary>  
      
    </QueryClientProvider>
  )
}

export default App
