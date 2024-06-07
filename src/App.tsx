import { QueryClient, QueryClientProvider } from 'react-query';
import ScrollPage from './componentes/Scroll';
import Rotas from './rotas';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        style={{
          backgroundColor: 'var(--bg900)',
          fontFamily: "'Barlow Condensed', sans-serif",
        }}
      >
        <Rotas />
        <ScrollPage />
      </div>
    </QueryClientProvider>
  );
};

export default App;
