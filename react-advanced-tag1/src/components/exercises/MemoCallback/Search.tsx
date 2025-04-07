import { memo } from "react"

function Search({ onChange }: { onChange: (text: string) => void }) {

    console.log("search rendered")

    return <input
        type="text"
        placeholder="Search user..."
        onChange={(e) => onChange(e.target.value)} />
}

export default memo(Search)