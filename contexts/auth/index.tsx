import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { ContextType, DataType, ProviderType } from "./types";

export { useAuthContext } from './hook';

const initialState: DataType = {
    token: '',
    user: null
}

export const AuthContext = createContext<ContextType>({
    state: initialState,
    dispatch: () => {}
})

export const Provider = ({ children }: ProviderType) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = { state, dispatch };

    return (
        <AuthContext.Provider value={ value }>
            {children}
        </AuthContext.Provider>
    )
}