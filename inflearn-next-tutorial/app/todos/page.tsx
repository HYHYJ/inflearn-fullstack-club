"use client";

import { useMutation, useQuery } from "react-query";
import { createTodo, getTodos } from "../actions/todo-actions";
import { useState } from "react";
import { queryClient } from "../config/ReactQueryProvider";

export default function TodosPage() {
  const [todoInput, setTodoInput] = useState("");
  // TODO를 가져오는 부분
  const todosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
  });

  // TODO를 생성하는 부분
  const createTodoMutation = useMutation({
    mutationFn: async () => {
      if (todoInput === "") throw new Error("Please enter a TODO");
      return createTodo(todoInput);
    },
    onSuccess: (TODOS) => {
      console.log("SUCCESS", TODOS);
      // todosQuery.refetch();
      // 다시 가져와줘(다시 그려라)
      // 어디서나 todosQuery를 사용할 수 있다.
      queryClient.invalidateQueries(["todos"]);
      setTodoInput("");
    },
    onError: (error: any) => {
      alert(error.message);
    },
  });

  return (
    <div>
      <h1>TODOS</h1>
      {/* TODO를 생성하는 부분 */}
      <input
        type="text"
        placeholder="Enter TODO"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        onClick={() => {
          createTodoMutation.mutate();
        }}
      >
        {createTodoMutation.isLoading ? "생성중.." : "TODO 생성"}
      </button>

      {/* TODO를 보여주는 부분 */}
      {todosQuery.isLoading && <p>Loading</p>}
      {todosQuery.data &&
        todosQuery.data.map((todo, index) => <p key={index}>{todo}</p>)}
    </div>
  );
}
