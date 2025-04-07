import { useRef, useState } from "react";
import useLocalStorage from "../../../hooks/useLocalStorage";

export default function RefExercise() {


    const { setStoredValue, removeLocalStorage } = useLocalStorage("reactUser")
    //externer Ref Speicher
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null)

    //change event
    const [formData, setFormData] = useState({ city: "", street: "" })

    function handleSubmit() {

        const userData = {
            email: emailRef?.current?.value,
            password: passwordRef?.current?.value
        }
        setStoredValue(userData)
        emailRef?.current?.focus();
        console.log("submit data ",userData )
    }

    //change event example
    function handleChangeSubmit() {

        console.log("change event data", formData)
        removeLocalStorage()
    }

    function handleChange(event:{target:{name: string, value: string}}) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    console.log("formdata", formData)

    return <div>
        <div>
            <h3>references</h3>
            <input type="text" name="email" placeholder="email" ref={emailRef} /><br />
            <input type="text" name="password" placeholder="password" ref={passwordRef} /><br />
            <button onClick={handleSubmit}>submit</button>
        </div>

        <div>
            <h3>change event</h3>
            <input type="text" name="street" placeholder="strassenname" onChange={handleChange} /><br />
            <input type="text" name="city" placeholder="Stadt" onChange={handleChange} /><br />
            <button onClick={handleChangeSubmit}>submit</button>
        </div>

    </div>


}