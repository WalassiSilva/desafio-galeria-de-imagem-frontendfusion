import Gallery from "./components/gallery";
import Header from "./components/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-7xl mx-auto px-4">
          <Header />
          <Gallery />
        </div>
      </QueryClientProvider>
    </>
  );
}

export default App;
