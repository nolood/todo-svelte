import { writable } from "svelte/store";

export interface ITodo {
  id: number;
  title: string;
  description: string;
}

function createTodoStore() {
  let todos: ITodo[] = [];
  const { subscribe, update } = writable(todos);

  return {
    subscribe,
    addItem: (todo: ITodo) => update(() => (todos = [...todos, todo])),
    removeItem: (id: number) =>
      update(() => (todos = todos.filter((item) => item.id !== id))),
  };
}
export const todoStore = createTodoStore();
