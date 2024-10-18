import Gallery from "./components/gallery";
import Header from "./components/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Gallery />
      </QueryClientProvider>
    </>
  );
}

export default App;
