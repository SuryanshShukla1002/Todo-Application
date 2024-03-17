import { useState } from "react"

const AddToDo = () => {
    const [TODO, setTODO] = useState("")

    const handleFormSubmit = () => {
        
    }
  return (
    <form onSubmit={handleFormSubmit} >
        <input type="text" value={TODO} onChange={(e) => setTODO(e.target.value)} />
        <button type="submit">ADD</button>
    </form>
  )
}
export default AddToDo