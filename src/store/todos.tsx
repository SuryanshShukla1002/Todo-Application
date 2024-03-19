import { ReactNode, createContext } from "react";

export type TodosProviderProps = {
    children: ReactNode
}

export type Todo = {
    id: string;
    task:string;
    completed:boolean;
    createdAt:Date;

}

export type TodosContext = {
    todos:[];
}

export const todoContext = createContext(null)


export const TodosProvider = ({children}: TodosProviderProps) => {
    return <todoContext.Provider value={{}}>
        {children}
    </todoContext.Provider>
}