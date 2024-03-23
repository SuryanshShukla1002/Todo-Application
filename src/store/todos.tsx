import { ReactNode, createContext } from "react";

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
  todos: [];
  handleAddTodDo: (task: string) => void;
};

export const todoContext = createContext<TodosContext>(null);

export const TodosProvider = ({ children }: TodosProviderProps) => {
  return (
    <todoContext.Provider value={{ todo, handleAddTodDo }}>
      {children}
    </todoContext.Provider>
  );
};
