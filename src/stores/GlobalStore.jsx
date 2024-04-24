import { createSignal, createContext, useContext } from 'solid-js';

const GlobalContext = createContext();

export function GlobalContextProvider(props) {
    const [count, setCount] = createSignal(0);

    const store = {
        count,
        setCount,
    };

  return (
    <GlobalContext.Provider value={store}>
        {props.children}
    </GlobalContext.Provider>
  );
}

export function useStore() {
    return useContext(GlobalContext);
}
