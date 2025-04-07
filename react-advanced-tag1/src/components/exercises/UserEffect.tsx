import { useState, useEffect } from "react"

export default function UserExercise() {

    const [user, setUser] = useState({name: "", website:""});
    const [userId, setUserId] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {


        const start = performance.now() // zeitstempel bei init
        setLoading(true);
        const controller = new AbortController();   
        const signal = controller.signal 
        
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {signal: signal})
        .then(res => res.json())
        .then(data => {

            setUser(data)
            const end = performance.now() // zeitstempel bei final data response
            console.log("fetch took ms", Math.round(end-start)) //test, wie lange der fetch gedauert hat
            setLoading(false)
        })
        .catch(()=>{

        })
        

        return ()=>{

            controller.abort()
        }

    }, [userId])


    return <>
        <h1>users Effect Exercise</h1>


        {loading ? <h3>Loading user...</h3> : <>
            <p>{user.name}</p>
            <p>{user.website}</p>
            </>}
<br/>
        <div onClick={() => setUserId(1)}
            style={{ padding: 10, margin: 5, border: "1px solid black" }}>User 1</div>
        <div onClick={() => setUserId(2)}
            style={{ padding: 10, margin: 5, border: "1px solid black" }}>User 2</div>
        <div onClick={() => setUserId(3)}
            style={{ padding: 10, margin: 5, border: "1px solid black" }}>User 3</div>
        <div onClick={() => setUserId(4)}
            style={{ padding: 10, margin: 5, border: "1px solid black" }}>User 4</div>


    </>
}