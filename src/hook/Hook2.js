import { useState } from "react"

function Hook2() {
    const [a, setA] = useState("")
    const [b, setB] = useState("")
    const [res, setRes] = useState(0)

    // const handleAdd = () => setRes(parseFloat(a) + parseFloat(b));
    // const handleSubtract = () => setRes(parseFloat(a) - parseFloat(b));
    // const handleMultiply = () => setRes(parseFloat(a) * parseFloat(b));
    // const handleDivide = () => {
    //     if (b !== "0") {
    //         setRes(parseFloat(a) / parseFloat(b));
    //     } else {
    //         setRes("Cannot divide by zero");
    //     }
    // };
    return (
        <div style={{ textAlign: "center", marginTop: "50px", fontSize: "30px"}}>
            <input style={{margin: "10px", height: "30px"}}
                type="number"
                placeholder="Enter value for a"
                value={a}
                onChange={(e) => setA(e.target.value*1)}
            />
            <br />
            <input style={{margin: "10px", height: "30px"}}
                type="number"
                placeholder="Enter value for b"
                value={b}
                onChange={(e) => setB(e.target.value*1)}
            />
            <br />
            <button style={{padding: "5px 10px", margin: "10px"}} onClick={()=>setRes(a+b)}>+</button>
            <button style={{padding: "5px 10px", margin: "10px"}} onClick={() => setRes(a-b)}>-</button>
            <button style={{padding: "5px 10px", margin: "10px"}} onClick={()=> setRes(a*b)}>*</button>
            <button style={{padding: "5px 10px", margin: "10px"}} onClick={()=> setRes((a/b).toFixed(2))}>/</button>
            <h2>Result: {res}</h2>
        </div>
    )
}
export default Hook2