import { LoaderData } from "./withLoader";
import withLoader from "./withLoader";

//componente für die einzelnen bilder
function DogImg({data}:{data:LoaderData}){
    return data.message.map((img)=>(
        <img src={img} key={img}/>
    ))
}

const DogImagesWithLoader = withLoader(DogImg, "https://dog.ceo/api/breed/labrador/images/random/6")

export default DogImagesWithLoader;