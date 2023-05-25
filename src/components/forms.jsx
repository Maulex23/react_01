import { useState } from "react"

export default function Forms(){
    const [mail, setMAil] = useState()
    //   Lectura/Escritura
    const [alias, setAlias] = useState(["Foo", "Bar", "Qux", "Baz"])
    const [alia, setAlia] = useState("")
    const [status, setStatus] = useState(false)
    const [term, setTerm] = useState("")
    
    // Para resumir los useState y los handlers
    // const [user, setUser] = useState({})
    // const handlerUSer = (e) => setUser({
    //     ...user,
    //     status:!status
    //     [e.target.name]:e.target.value
    // })

    const handlerMail = e => setMAil(e.target.value)
    const handlerAlia = e => setAlia(e.target.value)
    const handlerStatus = () => setStatus(!status)
    const handlerTerm = (e) => setTerm(e.target.value)


    return(
        <>
            <section>
                <label>mail: {mail}</label>
                <input type="text" 
                       name="mail" 
                       value={mail} 
                       onChange={handlerMail} />
            </section>
            <section>
                <label>alias: {alia}</label>
                <select name="alia" 
                        value={alia} 
                        onChange={handlerAlia}>
                    {alias.map((el, idx) => <option key={idx}>{el}</option>)}
                </select>
            </section>
            <section>
                <label>status: {status?"enable":"disable"}</label>
                <input type="checkbox" 
                       name="status"
                       checked={status}
                       onChange={handlerStatus} />
            </section>
            <section>
                <h5>=======================</h5>
                <label>terms: {term}</label>
                <br/>
                <label htmlFor="agree">agree</label>
                <input type="radio" 
                       name="term"
                       value="yes" 
                       id="agree" 
                       onChange={handlerTerm} />
                <br/>
                <label htmlFor="noagree">not agree</label>
                <input type="radio" 
                       name="term"
                       value="no" 
                       id="noagree"
                       onChange={handlerTerm} />
            </section>
        </>
    )
}