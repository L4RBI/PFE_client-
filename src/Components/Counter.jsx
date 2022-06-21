import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [username, setUsername] = useState("");
    return (
        <div>
            <p>{count}</p>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(evt) => setUsername(evt.target.value)}
            />
            <button
                onClick={() => {
                    setCount(count + 1);
                    console.log(count);
                }}
            >
                +1
            </button>
        </div>
    );
}

export default Counter;
