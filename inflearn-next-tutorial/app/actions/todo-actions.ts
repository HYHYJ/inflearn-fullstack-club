"use server";

var TODOS: string[] = [];

export const getTodos = async () => {
  return TODOS;
};

export const createTodo = async (data: string) => {
  //  로딩 상태 구현하려고 넣어본거임
  await new Promise((resolve) => setTimeout(resolve, 1000));
  TODOS.push(data);
  return TODOS;
};
