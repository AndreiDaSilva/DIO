import React, { useState, useEffect } from "react";

const App = () => {
    const [user, setUser] = useState("")
    const [cont, setCount] = useState(0);
    const [users, setUsers] = useState(["Pablo", "Andrei", "Tana"]);


    const handleAddUser = () => {
        if (users.includes(user)) {
            setUser("já existente")
        } else {
            setUsers([...users, user])
            setUser("")
        }
    }

    useEffect(() => {
        setCount(users.length)
    }, [users])
    
    return (
        <div className="App">
            <h1> Olá React </h1>
            <h3>Total: {cont}</h3>
            <div>
                <input
                    value={user}
                    onChange={(event) => setUser(event.target.value)} />
                <button onClick={handleAddUser}>Adicionar</button>
            </div>
            {users.map((item) => (
                <p>{item}</p>
            ))}

        </div>
    )
}

export default App;