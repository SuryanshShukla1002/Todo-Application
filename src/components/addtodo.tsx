import { FormEvent, useState } from "react"
import { useTodos } from "../store/todos"

const Addtodo = () => {
    const [todo, setTodo] = useState("")
    const {handleAddTodDo} = useTodos();

    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodDo(todo)
        setTodo("")
    }

    

  return (
    <form onSubmit={handleFormSubmit} >
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit">ADD</button>
    </form>
  )
}
export default Addtodo