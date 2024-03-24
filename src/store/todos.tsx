import { ReactNode, createContext, useContext, useState } from "react";

export type TodosProviderProps = {
  children: ReactNode;
};

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type TodosContext = {
  todos: Todo[];
  handleAddTodDo: (task: string) => void;
};

export const todoContext = createContext<TodosContext | null>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodDo = (task: string) => {
    setTodos((prev) => {
      const newTodos: Todo[] = [
        {
          id: Math.random().toString(),
          task: task,
          completed: false,
          createdAt: new Date(),
        },
        ...prev,
      ];
      return newTodos;
    });
  };
  return (
    <todoContext.Provider value={{ todos, handleAddTodDo }}>
      {children}
    </todoContext.Provider>
  );
};

// consumer
export const useTodos = () => {
  const todosConsumer = useContext(todoContext);
  if (!todoContext) {
    throw new Error("useTodo used outside the provider");
  }
  return todosConsumer;
};
