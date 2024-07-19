import { useState } from "react"

export function Hook1(){
    const [name, setName]= useState("")
    return(
        <div>
            <h1>
                Hook này để hiển thị dữ liệu trong input: {name}
            </h1>
            <input type="text" placeholder="Enter your text" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
    )
}