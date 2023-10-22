import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function getTodos() {
  const response = await axios.get("http://localhost:3000/todos");

  return response.data;
}

export const useTodos = () => {
  return useQuery({
    queryKey: ["use-get-todos"],
    queryFn: getTodos,
  });
};
