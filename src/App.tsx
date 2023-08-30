import { BrowserRouter} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.scss";
import { AppRoutes } from "./routes";
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./app/components/navbar/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <ChakraProvider>
        <AppRoutes />
      </ChakraProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
