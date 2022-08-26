import { createContext } from 'react';

export const taskContext = createContext();

export const TaskProvider = ({children}) => {
  let hello = `world`;

    return(
        <taskContext.Provider value={{hello}}> {children} </taskContext.Provider>
    );
}