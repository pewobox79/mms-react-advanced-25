import { useState } from 'react'
import { produce } from 'immer';

export default function ImmerExercise() {

    const [user, setUser] = useState({
        name: 'Alice',
        address: {
            city: 'Wonderland',
            zip: '12345'
        }
    });

    const updateUser = () => {

        setUser( prev => ({
            ...prev,
            address:{ 
                ...prev.address,
                city: "DisneyLand"
            } 
        }))
    }

    //lösung mit IMMER JS
    const updateUserWithImmer =()=>{

        setUser(produce(draft=>{
            draft.address.city = "ImmerLand";
            draft.name ="Peter"
        }))
    }

    
    return <div>
        <h2>{user.address.city} {user.name}</h2>
        <button onClick={updateUser}> update user</button>
        <button onClick={updateUserWithImmer}> update user Immer</button>
    </div>








}