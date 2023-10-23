import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/constants";

const APIClient = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default APIClient;
