import { useFetch } from "../../hooks/useFetch"
import useMediaQuery from "../../hooks/useMediaQuery";
import { observer } from 'mobx-react-lite';
import mobStore from "../../stores/MobXStore";
import { lazy } from "react";

const CounterComponent = lazy(() => import('../Counter/index.tsx'))

const UserOverview = observer(() => {

    const isMobile = useMediaQuery("(max-width: 600px)");

    console.log("ismobile", isMobile);

    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users/");

    console.log("render user overview");

    return <section>
        <h2>user overview</h2>

        <CounterComponent />

        <div>
            <h2>{mobStore.count}</h2>
            <button onClick={() => mobStore.increment()}>incr mobx</button>
        </div>

        {loading && <p>Loading data...</p>}
        {data && JSON.stringify(data)}
        {error && <p>{error.msg}</p>}


    </section>
})

export default UserOverview