export default function Heading ({title = "Hallo Teilnehmer"}:{title?: string}){

    console.log("heading rendered")
    return <h1>{title}</h1>
}