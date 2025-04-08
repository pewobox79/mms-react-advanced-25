import mobStore from "../stores/MobXStore"
import { observer } from "mobx-react-lite"

const Footer = observer(()=>{

    console.log("footer rendered");
    
    return <footer>
        <h2>{mobStore.message}</h2>
    </footer>
})

export default Footer