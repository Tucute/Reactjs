import { useState } from "react";
function Example() {
    const [count , setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick = { () => setCount(count+1) } > Set Count up </button>
            <button onClick = { () => setCount(count-1) } > Set Count down</button>
        </div>
    )
}
export default Example;