import React, { useState } from "react"
import "./App.css"

function App() {
    const [clickCount, setClickCount] = useState<number>(0)
    return (
        <div className="App">
            <h1>{clickCount}</h1>
            <button onClick={() => setClickCount(() => clickCount + 1)}>Click</button>
            <h1>Thanks for visting my website</h1>
            <h2>Have a nice day</h2>
        </div>
    )
}

export default App
