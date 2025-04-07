import { useEffect, useState } from "react"

export default function EffectExercise(){

    const [counter, setCounter] =useState(0);
    
    useEffect(()=>{

        console.log("effect runs")
        const interval = setInterval(()=>{
            setCounter(prev => prev +1)
        }, 1000)

        return ()=>{
            console.log("effect clears")
            clearInterval(interval)

        }

    }, [counter])

    return <section>
        <h2>Effect exercise</h2>
        <h1>{counter}</h1>
    </section>
}