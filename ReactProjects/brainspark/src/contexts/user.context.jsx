import { createContext, useState, useEffect } from 'react'
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils'
//context-actual value you want to access
export const UserContext = createContext({
    currentUser: null, 
    setCurrentUser: () => null,
});

export const

const userReducer = (state, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case 'SET_CURRENT_USER':
         return {
            ...state,
            currentUser: payload
         }
        default: 
         throw new Error(`Unhandled type ${type} in userReducer `)
    }
    
}


//provider- actual component
export const UserProvider = ({ children }) => {

    const [ { currentUser }, dispatch ] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) => {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
    }

    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
            createUserDocumentFromAuth(user);
            }
            setCurrentUser(user)
        })
        return unsubscribe
    }, []);

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

//wrap provider around app
<UserProvider>
    <app />
</UserProvider>