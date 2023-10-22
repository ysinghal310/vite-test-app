import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "../query-client";

async function createTodo(todo) {
  const response = await axios.post("http://localhost:3000/todos", todo);

  return response.data;
}

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: createTodo,

    onMutate: (newTodo) => {
      queryClient.cancelQueries({ queryKey: ["use-get-todos"] });

      const previousTodos = queryClient.getQueryData(["use-get-todos"]);

      queryClient.setQueryData(["use-get-todos"], (oldTodos) => [
        ...oldTodos,
        newTodo,
      ]);

      return {
        previousTodos,
      };
    },

    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["use-get-todos"], context.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["use-get-todos"] });
    },
  });
};
