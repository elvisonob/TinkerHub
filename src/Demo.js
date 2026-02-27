import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';
import { useState } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function AppQuery() {
  const [showDemo, setShowDemo] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <button onClick={() => setShowDemo(!showDemo)}>Toggle Demo</button>
      {showDemo && <App />}
    </QueryClientProvider>
  );
}

export default AppQuery;
