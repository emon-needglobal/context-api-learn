import { createContext, useState } from 'react';

const CounterContext = createContext({
    count: 0,
    setCount: () => {},
});

const CountProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    );
};

export { CounterContext, CountProvider };
