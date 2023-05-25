import { useState } from "react"

export default function Users(){
    const [users, setUsers] = useState(["Foo", "Bar", "Qux", "Baz"])
    const [name, setName] = useState("");

    const handler = e => setName(e.target.value) 

    const fnAdd = () => setUsers([...users, name])
    const fnDelete = () => setUsers([...users.filter(u=>u!==name)])
    const fnChange = () => setUsers([...users.map(u=>u==name?prompt("new name"):u)])
    const cb = (u,idx) => <li key={idx}>{u}</li>


    return(
        <>
            <h1>Users: {name}</h1>
            <input type="text"
                   name="name"
                   value={name}
                   onChange={handler} />
            <br />
            <ol>
                {users.map(cb)}
            </ol>
            <h5>{"=".repeat(30)}</h5>
            <button onClick={fnAdd}>add</button>
            <button onClick={fnDelete}>delete</button>
            <button onClick={fnChange}>change</button>
        </>
    )
}