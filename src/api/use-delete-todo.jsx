import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "../query-client";

async function deleteTodo(todoId) {
  const response = await axios.delete(`http://localhost:3000/todos/${todoId}`);

  return response.data;
}

export const useDeleteTodo = () => {
  return useMutation({
    mutationFn: deleteTodo,

    onMutate: (todoId) => {
      queryClient.cancelQueries({ queryKey: ["use-get-todos"] });

      const previousTodos = queryClient.getQueryData(["use-get-todos"]);

      queryClient.setQueryData(["use-get-todos"], (todos) =>
        todos.filter((todo) => todo.id !== todoId)
      );
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
