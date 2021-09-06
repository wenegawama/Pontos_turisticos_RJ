import { createContext, useReducer } from 'react'
import Reducer from "./Reducer"

const estadoInicial = { 
    user:JSON.parse(localStorage.getItem("user")) || null,
    isFetching:false,
    error:false
}

export const Context = createContext(estadoInicial)

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, estadoInicial)

    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(state.user))
    },[state.user])

    return (
        <Context.Provider value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )
}