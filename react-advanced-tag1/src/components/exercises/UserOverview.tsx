import { useFetch } from "../../hooks/useFetch"
import useMediaQuery from "../../hooks/useMediaQuery";
import Counter from "../Counter";

export default function UserOverview (){

    const isMobile = useMediaQuery("(max-width: 600px)");

    console.log("ismobile", isMobile);   

    const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/users/");

    

console.log("render user overview")
    return<section>
        <h2>user overview</h2>

        <Counter/>

        {loading && <p>Loading data...</p>}
        {data && JSON.stringify(data)}
        {error && <p>{error.msg}</p>}


    </section>
}