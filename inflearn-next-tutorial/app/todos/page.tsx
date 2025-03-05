"use client";

import { useQuery } from "react-query";
import { getTodos } from "../actions/todo-actions";

export default function TodosPage() {
  const todosQuery = useQuery({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
  });
  return (
    <div>
      <h1>TODOS</h1>
      {/* TODO를 생성하는 부분 */}
      {/* TODO를 보여주는 부분 */}
      {todosQuery.isLoading && <p>Loading</p>}
      {todosQuery.data &&
        todosQuery.data.map((todo, index) => <p key={index}>{todo}</p>)}
    </div>
  );
}
