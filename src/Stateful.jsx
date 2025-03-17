import React, { useState } from "react";

// Stateful компонент
const Stateful = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Лічильник: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Збільшити
            </button>
            <button onClick={() => setCount(count - 1)}>
                Зменшити
            </button>
        </div>
    );
};

export default Stateful;
