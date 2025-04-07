import { shuffleArray, users } from "../../../utils/shuffle";
import { useState, useCallback } from "react";
import Search from "./Search";

export default function MemoCallback() {

    const [allUsers, setAllUsers] = useState(users)

    const handleSearch= useCallback((text: string)=>{
        const filteredUsers = users.filter((user)=>user.toLowerCase().includes(text.toLowerCase())
    );
        setAllUsers(filteredUsers)
    }, [])

    const ListOfUser = allUsers.map((user) => {
        return <p key={user}>{user}</p>
    })

    return <div>
        <h2>Memo callback übung</h2>

        <button onClick={()=>setAllUsers(shuffleArray(users))}>shuffle</button>

        <Search onChange={handleSearch}/>
        <div>{ListOfUser}</div>
    </div>
}