import { useCounterStore } from "../../stores/useStore";

export default function Counter(){

    const { initValue, inc, dec } = useCounterStore();
        console.log("counter component rendered")
    return <div>
        <h3>Counter</h3>
        <p>{initValue}</p>
        <button onClick={() => inc()}>increment</button>
        <button onClick={() => dec()}>decrement</button>

    </div>
}